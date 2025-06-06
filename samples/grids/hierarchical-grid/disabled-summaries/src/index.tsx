import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrButtonModule, IgrDialogModule, IgrCheckboxModule } from 'igniteui-react';
import { IgrHierarchicalGridModule, IgrSummaryOperand, IgrSummaryResult, IgrNumberSummaryOperand } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrRowIsland, IgrColumn } from "igniteui-react-grids";
import  SingersData from './SingersData.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

IgrHierarchicalGridModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrCheckboxModule.register();

export class GrammySummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.filter((rec) => rec["Artist"] !== undefined && rec["Artist"] !== null && rec["Artist"] !== "").length
        });

        result.push({
            key: "nominatedSingers",
            label: "Nominated Singers",
            summaryResult: allData.filter((rec) => rec["GrammyNominations"] > 0).length
        });

        result.push({
            key: "singersWithAwards",
            label: "Singers with Awards",
            summaryResult: allData.filter((rec) => rec["GrammyAwards"] > 0).length
        });

        result.push({
            key: "nominations",
            label: "Total Nominations",
            summaryResult: allData.reduce((sum, rec) => sum + (rec["GrammyNominations"] || 0), 0)
        });

        result.push({
            key: "awards",
            label: "Total Awards",
            summaryResult: allData.reduce((sum, rec) => sum + (rec["GrammyAwards"] || 0), 0)
        });

        return result;
    }
}

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid;
    private dialog: IgrDialog;

    constructor(props: any) {
        super(props);

        this.state = {
            currentColumn: null,
            disableAllBtnDisabled: false,
            enableAllBtnDisabled: false,
            checkboxStates: [],
            columns: [
                { field: "Artist", header: "Artist", hasSummary: true, disabledSummaries: [] },
                { field: "Photo", header: "Photo", dataType: "image", hasSummary: true, summaries: GrammySummary, disabledSummaries: [] },
                { field: "Debut", header: "Debut", hasSummary: true, disabledSummaries: [] },
                { field: "GrammyNominations", header: "Grammy Nominations", dataType: "number", hasSummary: true, disabledSummaries: [] },
                { field: "GrammyAwards", header: "Grammy Awards", dataType: "number", hasSummary: true, disabledSummaries: [] }
            ]
        };

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
        this.dialogRef = this.dialogRef.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.updateCheckboxes = this.updateCheckboxes.bind(this);
        this.toggleSummary = this.toggleSummary.bind(this);
        this.disableAllSummaries = this.disableAllSummaries.bind(this);
        this.enableAllSummaries = this.enableAllSummaries.bind(this);
    }

    hierarchicalGridRef = (ref: IgrHierarchicalGrid) => {
        this.hierarchicalGrid = ref;
    };

    dialogRef = (ref: IgrDialog) => {
        this.dialog = ref;
        if (this.dialog) {
            this.dialog.closeOnOutsideClick = true;
            this.dialog.keepOpenOnEscape = false;
        }
    };

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
    }

    openDialog = (column: any) => {
        const columnState: any | undefined = this.state.columns.find((c: any) => c.field === column.field);

        this.setState({
            currentColumn: columnState!,
            checkboxStates: [],
        }, () => {
            this.updateCheckboxes();
            this.dialog?.show();
        });
    };

    getSummaryResults(operand: any, data: any[], field: string): IgrSummaryResult[] {
        if (typeof operand === "function") {
            operand = new operand();
        }
        if (operand instanceof IgrSummaryOperand) {
            return operand.operate([], data, field, null);
        } else if (!operand) { 
            return new IgrSummaryOperand().operate([], data, field, null);
        }
        return [];
    }

    getDefaultSummaries(data: any[], field: string): IgrSummaryResult[] {
        const columnInstance = this.hierarchicalGrid.columns.find((c: any) => c.field === field);
        if (columnInstance && columnInstance.summaries && typeof columnInstance.summaries.operate === 'function') {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
    }

    updateCheckboxes() {
        if (!this.state.currentColumn || !this.hierarchicalGrid) return;

        const gridData: any[] = this.hierarchicalGrid.data;
        let allSummaries: IgrSummaryResult[] = [];
        if (this.state.currentColumn.summaries) {
            allSummaries = this.getSummaryResults(this.state.currentColumn.summaries, gridData, this.state.currentColumn.field);
        } else { 
            allSummaries = this.getDefaultSummaries(gridData, this.state.currentColumn.field);
        }

        let allDisabled: boolean = true;
        let allEnabled: boolean = true;

        const checkboxStates: any[] = allSummaries.map(summary => {
            const isDisabled = this.state.currentColumn.disabledSummaries.includes(summary.key);
            if (isDisabled) {
                allEnabled = false;
            } else {
                allDisabled = false;
            }
            return {
                label: summary.label,
                key: summary.key,
                checked: isDisabled, 
            };
        });

        this.setState({
            checkboxStates, 
            disableAllBtnDisabled: allDisabled,
            enableAllBtnDisabled: allEnabled,
        });
    }

    toggleSummary = (summaryKey: string) => {
        if (!this.state.currentColumn || !this.hierarchicalGrid) return;
        const { currentColumn, columns } = this.state;

        const updatedDisabledSummaries: string[] = currentColumn.disabledSummaries.includes(summaryKey)
            ? currentColumn.disabledSummaries.filter((key: any) => key !== summaryKey)
            : [...currentColumn.disabledSummaries, summaryKey];

        const updatedColumns: any[] = columns.map((col: any) =>
            col.field === currentColumn.field
                ? { ...col, disabledSummaries: updatedDisabledSummaries }
                : col
        );

        this.setState({
            currentColumn: { ...currentColumn, disabledSummaries: updatedDisabledSummaries },
            columns: updatedColumns,
        }, () => {
          this.hierarchicalGrid.markForCheck();
        });
    };

    disableAllSummaries = () => {
        if (!this.state.currentColumn || !this.hierarchicalGrid) return;

        const gridData: any[] = this.hierarchicalGrid.data;
        let allSummaries: IgrSummaryResult[] = [];
        if (this.state.currentColumn.summaries) {
            allSummaries = this.getSummaryResults(this.state.currentColumn.summaries, gridData, this.state.currentColumn.field);
        } else { 
            allSummaries = this.getDefaultSummaries(gridData, this.state.currentColumn.field);
        }

        const allSummaryKeys: string[] = allSummaries.map(s => s.key);

        const updatedColumns: any[] = this.state.columns.map((col: any) =>
            col.field === this.state.currentColumn!.field
                ? { ...col, disabledSummaries: allSummaryKeys }
                : col
        );

        this.setState((prevState: any) => ({
            currentColumn: { ...prevState.currentColumn!, disabledSummaries: allSummaryKeys },
            columns: updatedColumns,
            disableAllBtnDisabled: true,
            enableAllBtnDisabled: false,
        }), () => {
            this.updateCheckboxes();
            this.hierarchicalGrid.markForCheck();
        });
    };

    enableAllSummaries = () => {
        if (!this.state.currentColumn || !this.hierarchicalGrid) return;

        const updatedColumns: any[] = this.state.columns.map((col: any) =>
            col.field === this.state.currentColumn!.field
                ? { ...col, disabledSummaries: [] }
                : col
        );

        this.setState((prevState: any) => ({
            currentColumn: { ...prevState.currentColumn!, disabledSummaries: [] },
            columns: updatedColumns,
            disableAllBtnDisabled: false,
            enableAllBtnDisabled: true,
        }), () => {
            this.updateCheckboxes();
            this.hierarchicalGrid.markForCheck();
        });
    };

    public render(): JSX.Element {
        return (
            <div className="grid-wrapper container sample ig-typography">
                <div className="summaries">
                    <p className="summaries-title">Disable Summaries for Column:</p>
                    {this.state.columns.map((col: any) => (
                        <IgrButton
                            key={col.field}
                            className="summary-button"
                            variant="contained"
                            onClick={() => this.openDialog({ field: col.field, header: col.header })}
                        >
                            <span>{col.header}</span>
                        </IgrButton>
                    ))}
                </div>
                <IgrDialog ref={this.dialogRef} title={this.state.currentColumn ? `Disable Summaries for ${this.state.currentColumn.header}` : ""}>
                    <div className="summaries-dialog-items">
                         {this.state.currentColumn && this.state.checkboxStates.map((checkbox: any) => (
                            <IgrCheckbox
                                key={checkbox.key}
                                className="summaries-dialog-item"
                                checked={checkbox.checked}
                                onClick={() => this.toggleSummary(checkbox.key)}
                            >
                                <span>{checkbox.label}</span>
                            </IgrCheckbox>
                        ))}
                    </div>
                    <IgrButton key="disableAll" slot="footer" variant="flat" onClick={this.disableAllSummaries} disabled={this.state.disableAllBtnDisabled}><span>Disable All</span></IgrButton>
                    <IgrButton key="enableAll" slot="footer" variant="flat" onClick={this.enableAllSummaries} disabled={this.state.enableAllBtnDisabled}><span>Enable All</span></IgrButton>
                </IgrDialog>

                <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Artist")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        hasSummary={true}
                        summaries={GrammySummary}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Photo")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut"
                        hasSummary={true}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Debut")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "GrammyNominations")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "GrammyAwards")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                    <IgrRowIsland
                        childDataKey="Tours"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Tour"
                            header="Tour"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="StartedOn"
                            header="Started on"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Location"
                            header="Location"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Headliner"
                            header="Headliner"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
                </div>
            </div>
        );
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);