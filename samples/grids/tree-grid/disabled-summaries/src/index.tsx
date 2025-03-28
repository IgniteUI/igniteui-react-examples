import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrButtonModule, IgrDialogModule, IgrCheckboxModule } from 'igniteui-react';
import { IgrTreeGridModule, IgrSummaryOperand, IgrSummaryResult } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from "igniteui-react-grids";

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { OrdersTreeData } from './OrdersTreeData';

IgrTreeGridModule.register();
IgrButtonModule.register();
IgrDialogModule.register();
IgrCheckboxModule.register();

export class UnitsSummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        const values = allData.map((rec) => rec[fieldName]).filter((value) => value !== undefined && value !== null);
        const totalSum = values.reduce((sum, value) => sum + value, 0);
        const sortedValues = [...values].sort((a, b) => a - b); 
        const deliveredValues = allData
            .filter((rec) => rec["Delivered"])
            .map((rec) => rec[fieldName])
            .filter((value) => value !== undefined && value !== null);

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "min",
            label: "Min",
            summaryResult: values.length > 0 ? Math.min(...values) : "N/A"
        });

        result.push({
            key: "max",
            label: "Max",
            summaryResult: values.length > 0 ? Math.max(...values) : "N/A"
        });

        result.push({
            key: "sum",
            label: "Sum",
            summaryResult: totalSum
        });

        result.push({
            key: "average",
            label: "Average",
            summaryResult: values.length > 0 ? totalSum / values.length : "N/A"
        });

        result.push({
            key: "totalDelivered",
            label: "Total Units Delivered",
            summaryResult: deliveredValues.length > 0 ? deliveredValues.reduce((sum, value) => sum + value, 0) : "N/A"
        });

        result.push({
            key: "medianUnits",
            label: "Median Units",
            summaryResult:
                values.length > 0
                    ? (() => {
                        const mid = Math.floor(sortedValues.length / 2);
                        return sortedValues.length % 2 !== 0 ? sortedValues[mid] : (sortedValues[mid - 1] + sortedValues[mid]) / 2;
                    })()
                    : "N/A"
        });

        result.push({
            key: "uniqueCount",
            label: "Count of Unique Unit Values",
            summaryResult: values.length > 0 ? new Set(values).size : "N/A"
        });

        result.push({
            key: "maxDifference",
            label: "Max Difference Between Units",
            summaryResult:
                values.length > 1
                    ? values.reduce((maxDiff, value, idx, arr) => {
                        if (idx === 0) return maxDiff;
                        const diff = Math.abs(value - arr[idx - 1]);
                        return Math.max(maxDiff, diff);
                    }, 0)
                    : "N/A"
        });

        return result;
    }
}

export class DeliveredSummary extends IgrSummaryOperand {
    operate(data: any[] = [], allData: any[] = [], fieldName: string = ""): IgrSummaryResult[] {
        const result: IgrSummaryResult[] = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.length
        });

        result.push({
            key: "true",
            label: "True",
            summaryResult: allData.filter((item) => item[fieldName] === true).length
        });

        result.push({
            key: "false",
            label: "False",
            summaryResult: allData.filter((item) => item[fieldName] === false).length
        });

        return result;
    }
}

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid;
    private dialog: IgrDialog;

    constructor(props: any) {
        super(props);

        this.state = {
            currentColumn: null,
            disableAllBtnDisabled: false,
            enableAllBtnDisabled: false,
            checkboxStates: [],
            columns: [
                { field: "ID", header: "Order ID", hasSummary: true, disabledSummaries: [] },
                { field: "Name", header: "Order Product", hasSummary: true, disabledSummaries: [] },
                { field: "Units", header: "Units", hasSummary: true, dataType: "number", summaries: UnitsSummary, disabledSummaries: [] },
                { field: "UnitPrice", header: "Unit Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
                { field: "Price", header: "Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
                { field: "Delivered", header: "Delivered", hasSummary: true, summaries: DeliveredSummary, disabledSummaries: [] },
                { field: "OrderDate", header: "Order Date", hasSummary: true, dataType: "date", disabledSummaries: [] },
            ],
        };

        this.treeGridRef = this.treeGridRef.bind(this);
        this.dialogRef = this.dialogRef.bind(this);
        this.openDialog = this.openDialog.bind(this);
        this.updateCheckboxes = this.updateCheckboxes.bind(this);
        this.toggleSummary = this.toggleSummary.bind(this);
        this.disableAllSummaries = this.disableAllSummaries.bind(this);
        this.enableAllSummaries = this.enableAllSummaries.bind(this);
    }

    treeGridRef = (ref: IgrTreeGrid) => {
        this.treeGrid = ref;
    };

    dialogRef = (ref: IgrDialog) => {
        this.dialog = ref;
        if (this.dialog) {
            this.dialog.closeOnOutsideClick = true;
            this.dialog.keepOpenOnEscape = false;
        }
    };

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
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
        const columnInstance = this.treeGrid.columns.find(c => c.field === field);
        if (columnInstance && columnInstance.summaries && typeof columnInstance.summaries.operate === 'function') {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
    }

    updateCheckboxes() {
        if (!this.state.currentColumn || !this.treeGrid) return;

        const gridData: any[] = this.treeGrid.data;
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
        if (!this.state.currentColumn || !this.treeGrid) return;
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
          this.treeGrid.markForCheck();
        });
    };

    disableAllSummaries = () => {
        if (!this.state.currentColumn || !this.treeGrid) return;

        const gridData: any[] = this.treeGrid.data;
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
            this.treeGrid.markForCheck();
        });
    };

    enableAllSummaries = () => {
        if (!this.state.currentColumn || !this.treeGrid) return;

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
            this.treeGrid.markForCheck();
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
                <IgrTreeGrid
                    autoGenerate="false"
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        hasSummary="true"
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "ID")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary="true"
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Name")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="Number"
                        hasSummary="true"
                        summaries={UnitsSummary}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Units")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Number"
                        hasSummary="true"
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "UnitPrice")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="Number"
                        hasSummary="true"
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Price")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="Boolean"
                        hasSummary="true"
                        summaries={DeliveredSummary}
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "Delivered")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        hasSummary="true"
                        disabledSummaries={this.state.columns.find((col: any) => col.field === "OrderDate")?.disabledSummaries}>
                    </IgrColumn>
                </IgrTreeGrid>
                </div>
            </div>
        );
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);