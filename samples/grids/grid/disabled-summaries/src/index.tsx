import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrButtonModule, IgrDialogModule, IgrCheckboxModule } from 'igniteui-react';
import { IgrGridModule, IgrSummaryOperand, IgrSummaryResult } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import NwindData from './NwindData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

IgrGridModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrCheckboxModule.register();

class UnitsInStockSummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = "", summaryResult: any = null): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];
        const values = allData.map((item) => item[fieldName] ?? 0).filter((value) => value !== null);

        const discontinuedItems = allData.filter((item) => item["Discontinued"] === true);
        const discontinuedValues = discontinuedItems.map((item) => item[fieldName] ?? 0).filter((value) => !isNaN(value));

        result.push({ key: "count", label: "Count", summaryResult: values.length });
        result.push({ key: "min", label: "Min", summaryResult: values.length > 0 ? Math.min(...values) : "N/A" });
        result.push({ key: "max", label: "Max", summaryResult: values.length > 0 ? Math.max(...values) : "N/A" });
        result.push({ key: "sum", label: "Sum", summaryResult: values.reduce((a, b) => a + b, 0) });
        result.push({
            key: "average",
            label: "Average",
            summaryResult: values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : "N/A"
        });
        result.push({
            key: "median",
            label: "Median",
            summaryResult:
                values.length > 0
                    ? (() => {
                        const sortedValues = values.slice().sort((a, b) => a - b);
                        return sortedValues.length % 2 === 0 ? (sortedValues[sortedValues.length / 2 - 1] + sortedValues[sortedValues.length / 2]) / 2 : sortedValues[Math.floor(sortedValues.length / 2)];
                    })()
                    : "N/A"
        });
        result.push({ key: "range", label: "Range", summaryResult: values.length > 0 ? Math.max(...values) - Math.min(...values) : "N/A" });
        result.push({ key: "discontinued", label: "Discontinued Products", summaryResult: discontinuedItems.length });
        result.push({ key: "totalDiscontinued", label: "Total Discontinued Items", summaryResult: discontinuedValues.length > 0 ? discontinuedValues.reduce((a, b) => a + b, 0) : 0 });

        return result;
    }
}

class DiscontinuedSummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];
        result.push({ key: "count", label: "Count", summaryResult: allData.length });
        result.push({ key: "true", label: "True", summaryResult: allData.filter((item) => item[fieldName] === true).length });
        result.push({ key: "false", label: "False", summaryResult: allData.filter((item) => item[fieldName] === false).length });
        return result;
    }
}

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid;
    private dialog: IgrDialog;

    constructor(props: any) {
        super(props);

        this.state = {
            currentColumn: null,
            disableAllBtnDisabled: false,
            enableAllBtnDisabled: false,
            checkboxStates: [],
            columns: [ 
                { field: "ProductID", header: "ProductID", hasSummary: true, disabledSummaries: [] },
                { field: "ProductName", header: "Product Name", hasSummary: true, disabledSummaries: [] },
                { field: "UnitPrice", header: "Unit Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
                { field: "UnitsInStock", header: "Units In Stock", hasSummary: true, dataType: "number", summaries: UnitsInStockSummary, disabledSummaries: [] },
                { field: "Discontinued", header: "Discontinued", hasSummary: true, summaries: DiscontinuedSummary, disabledSummaries: [] },
                { field: "OrderDate", header: "Order Date", hasSummary: true, dataType: "date", disabledSummaries: [] },
            ],
        };

        this.gridRef = this.gridRef.bind(this);
        this.dialogRef = this.dialogRef.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.updateCheckboxes = this.updateCheckboxes.bind(this);
        this.toggleSummary = this.toggleSummary.bind(this);
        this.disableAllSummaries = this.disableAllSummaries.bind(this);
        this.enableAllSummaries = this.enableAllSummaries.bind(this);
    }

    gridRef = (ref: IgrGrid) => {
        this.grid = ref;
    };

    dialogRef = (ref: IgrDialog) => {
        this.dialog = ref;
        if (this.dialog) {
            this.dialog.closeOnOutsideClick = true;
            this.dialog.keepOpenOnEscape = false;
        }
    };

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
    }

    openDialog = (column: any) => {
        const columnState: any | undefined = this.state.columns.find((c: any) => c.field === column.field);

        this.setState({
            currentColumn: columnState!
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
        const columnInstance = this.grid.columns.find(c => c.field === field);
        if (columnInstance && columnInstance.summaries && typeof columnInstance.summaries.operate === 'function') {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
    }

    updateCheckboxes() {
        if (!this.state.currentColumn || !this.grid) return;

        const gridData: any[] = this.grid.data;
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
        if (!this.state.currentColumn || !this.grid) return;
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
          this.updateCheckboxes();
          this.grid.markForCheck();
        });

    };

    disableAllSummaries = () => {
        if (!this.state.currentColumn || !this.grid) return;

        const gridData: any[] = this.grid.data;
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
            this.grid.markForCheck();
        });
    };

    enableAllSummaries = () => {
        if (!this.state.currentColumn || !this.grid) return;

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
            this.grid.markForCheck();
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
                                onChange={() => this.toggleSummary(checkbox.key)}
                            >
                                <span>{checkbox.label}</span>
                            </IgrCheckbox>
                        ))}
                    </div>
                    <IgrButton key="disableAll" slot="footer" variant="flat" onClick={this.disableAllSummaries} disabled={this.state.disableAllBtnDisabled}><span>Disable All</span></IgrButton>
                    <IgrButton key="enableAll" slot="footer" variant="flat" onClick={this.enableAllSummaries} disabled={this.state.enableAllBtnDisabled}><span>Enable All</span></IgrButton>
                </IgrDialog>

                <div className="container fill">
                    <IgrGrid
                        autoGenerate={false}
                        ref={this.gridRef}
                        data={this.nwindData}
                        primaryKey="ProductID"
                        height="700px"
                        width="100%"
                    >
                        <IgrColumn field="ProductID" header="ProductID" hasSummary={true} disabledSummaries={col.disabledSummaries}></IgrColumn>
                        <IgrColumn field="ProductName" header="Product Name" hasSummary={true} disabledSummaries={col.disabledSummaries}></IgrColumn>
                        <IgrColumn field="UnitPrice" header="Unit Price" hasSummary={true} dataType="number" disabledSummaries={col.disabledSummaries}></IgrColumn>
                        <IgrColumn field="UnitsInStock" header="Units In Stock" hasSummary={true} dataType="number" summaries={UnitsInStockSummary} disabledSummaries={col.disabledSummaries}></IgrColumn>
                        <IgrColumn field="Discontinued" header="Discontinued" hasSummary={true} summaries={DiscontinuedSummary} disabledSummaries={col.disabledSummaries}></IgrColumn>
                        <IgrColumn field="OrderDate" header="Order Date" hasSummary={true} dataType="date" disabledSummaries={col.disabledSummaries}></IgrColumn>
                    </IgrGrid>
                </div>
            </div>
        );
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);