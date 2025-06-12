import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrButton, IgrDialog, IgrCheckbox } from 'igniteui-react';
import { IgrSummaryOperand, IgrSummaryResult, IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import { OrdersTreeData } from './OrdersTreeData';
import { get } from 'http';


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

interface SummaryColumn {
    field: string;
    header: string;
    hasSummary: boolean;
    dataType?: string;
    summaries?: any;
    disabledSummaries: string[];
}

export default function DisabledSummariesTreeGridSample() {

    // State
    const [ordersTreeData, setOrdersTreeData] = useState<OrdersTreeData>([]);
    const [currentColumn, setCurrentColumn] = useState<SummaryColumn | null>(null);
    const [currentColumnSource, setCurrentColumnSource] = useState<"dialog" | "toggle" | null>(null);
    const [pendingUpdateType, setPendingUpdateType] = useState<null | "disableAll" | "enableAll">(null);
    const [disableAllBtnDisabled, setDisableAllBtnDisabled] = useState(false);
    const [enableAllBtnDisabled, setEnableAllBtnDisabled] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState([]);
    const [columns, setColumns] = useState([
        { field: "ID", header: "Order ID", hasSummary: true, disabledSummaries: [] },
        { field: "Name", header: "Order Product", hasSummary: true, disabledSummaries: [] },
        { field: "Units", header: "Units", hasSummary: true, dataType: "number", summaries: UnitsSummary, disabledSummaries: [] },
        { field: "UnitPrice", header: "Unit Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
        { field: "Price", header: "Price", hasSummary: true, dataType: "number", disabledSummaries: [] },
        { field: "Delivered", header: "Delivered", hasSummary: true, summaries: DeliveredSummary, disabledSummaries: [] },
        { field: "OrderDate", header: "Order Date", hasSummary: true, dataType: "date", disabledSummaries: [] },
    ]);

    // Refs
    let treeGrid: IgrTreeGrid;
    const treeGridRef = (ref: IgrTreeGrid) => {
        treeGrid = ref;
    };
    let dialog: IgrDialog;
    const dialogRef = (ref: IgrDialog) => {
        dialog = ref;
        if (dialog) {
        dialog.closeOnOutsideClick = true;
        dialog.keepOpenOnEscape = false;
        }
    };

    useEffect(() => {
        const data = new OrdersTreeData();
        setOrdersTreeData(data);
    }, []);

    useEffect(() => {
        if (!currentColumn) return;
    
        const shouldShowDialog = currentColumnSource === "dialog";
        const shouldMarkForCheck =
          currentColumnSource === "toggle" ||
          pendingUpdateType === "disableAll" ||
          pendingUpdateType === "enableAll";
    
        if (shouldShowDialog) {
          updateCheckboxes();
          dialog?.show();
          setCurrentColumnSource(null);
        }
    
        if (shouldMarkForCheck && treeGrid) {
          updateCheckboxes();
          treeGrid.markForCheck();
          setPendingUpdateType(null);
          setCurrentColumnSource(null);
        }
      }, [currentColumn, currentColumnSource, pendingUpdateType, treeGrid]);
    
      const openDialog = (column: any) => {
        const columnState = columns.find((c) => c.field === column.field);
        setCurrentColumn(columnState!);
        setCurrentColumnSource("dialog");
        setCheckboxStates([]);
      };
    
      const getSummaryResults = (
        operand: any,
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        if (typeof operand === "function") {
          operand = new operand();
        }
        if (operand instanceof IgrSummaryOperand) {
          return operand.operate([], data, field, null);
        } else if (!operand) {
          return new IgrSummaryOperand().operate([], data, field, null);
        }
        return [];
      };
    
      const getDefaultSummaries = (
        data: any[],
        field: string
      ): IgrSummaryResult[] => {
        const columnInstance = treeGrid.columns.find((c) => c.field === field);
        if (
          columnInstance &&
          columnInstance.summaries &&
          typeof columnInstance.summaries.operate === "function"
        ) {
          return columnInstance.summaries.operate([], data, field, null);
        }
        return [];
      };
    
      const updateCheckboxes = () => {
        if (!currentColumn || !treeGrid) return;
    
        const gridData: any[] = treeGrid.data;
        let allSummaries: IgrSummaryResult[] = [];
        if (currentColumn.summaries) {
          allSummaries = getSummaryResults(
            currentColumn.summaries,
            gridData,
            currentColumn.field
          );
        } else {
          allSummaries = getDefaultSummaries(gridData, currentColumn.field);
        }
    
        let allDisabled: boolean = true;
        let allEnabled: boolean = true;
    
        const newCheckboxStates: any[] = allSummaries.map((summary) => {
          const isDisabled = currentColumn.disabledSummaries.includes(summary.key);
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
    
        setCheckboxStates(newCheckboxStates);
        setDisableAllBtnDisabled(allDisabled);
        setEnableAllBtnDisabled(allEnabled);
      };
    
      const toggleSummary = (summaryKey: string) => {
        if (!currentColumn || !treeGrid) return;
    
        const updatedDisabledSummaries = currentColumn.disabledSummaries.includes(
          summaryKey
        )
          ? currentColumn.disabledSummaries.filter((key: any) => key !== summaryKey)
          : [...currentColumn.disabledSummaries, summaryKey];
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: updatedDisabledSummaries }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: updatedDisabledSummaries,
        }));
        setColumns(updatedColumns);
        setCurrentColumnSource("toggle");
      };
    
      const disableAllSummaries = () => {
        if (!currentColumn || !treeGrid) return;
    
        const gridData: any[] = treeGrid.data;
        let allSummaries: IgrSummaryResult[] = currentColumn.summaries
          ? getSummaryResults(
              currentColumn.summaries,
              gridData,
              currentColumn.field
            )
          : getDefaultSummaries(gridData, currentColumn.field);
    
        const allSummaryKeys: string[] = allSummaries.map((s) => s.key);
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: allSummaryKeys }
            : col
        );
    
        setCurrentColumn((prev) => ({
          ...prev,
          disabledSummaries: allSummaryKeys,
        }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(true);
        setEnableAllBtnDisabled(false);
    
        setPendingUpdateType("disableAll");
      };
    
      const enableAllSummaries = () => {
        if (!currentColumn || !treeGrid) return;
    
        const updatedColumns = columns.map((col: any) =>
          col.field === currentColumn.field
            ? { ...col, disabledSummaries: [] }
            : col
        );
    
        setCurrentColumn((prev) => ({ ...prev, disabledSummaries: [] }));
        setColumns(updatedColumns);
        setDisableAllBtnDisabled(false);
        setEnableAllBtnDisabled(true);
    
        setPendingUpdateType("enableAll");
      };
    


    return (
        <div className="grid-wrapper container sample ig-typography">
                <div className="summaries">
                    <p className="summaries-title">Disable Summaries for Column:</p>
                    {columns.map((col: any) => (
                        <IgrButton
                            key={col.field}
                            className="summary-button"
                            variant="contained"
                            onClick={() => openDialog({ field: col.field, header: col.header })}
                        >
                            <span>{col.header}</span>
                        </IgrButton>
                    ))}
                </div>
                <IgrDialog ref={dialogRef} title={currentColumn ? `Disable Summaries for ${currentColumn.header}` : ""}>
                    <div className="summaries-dialog-items">
                         {currentColumn && checkboxStates.map((checkbox: any) => (
                            <IgrCheckbox
                                key={checkbox.key}
                                className="summaries-dialog-item"
                                checked={checkbox.checked}
                                onClick={() => toggleSummary(checkbox.key)}
                            >
                                <span>{checkbox.label}</span>
                            </IgrCheckbox>
                        ))}
                    </div>
                    <IgrButton key="disableAll" slot="footer" variant="flat" onClick={disableAllSummaries} disabled={disableAllBtnDisabled}><span>Disable All</span></IgrButton>
                    <IgrButton key="enableAll" slot="footer" variant="flat" onClick={enableAllSummaries} disabled={enableAllBtnDisabled}><span>Enable All</span></IgrButton>
                </IgrDialog>

                <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={ordersTreeData}
                    ref={treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "ID")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Name")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="number"
                        hasSummary={true}
                        summaries={UnitsSummary}
                        disabledSummaries={columns.find((col: any) => col.field === "Units")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "UnitPrice")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "Price")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="boolean"
                        hasSummary={true}
                        summaries={DeliveredSummary}
                        disabledSummaries={columns.find((col: any) => col.field === "Delivered")?.disabledSummaries}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        hasSummary={true}
                        disabledSummaries={columns.find((col: any) => col.field === "OrderDate")?.disabledSummaries}>
                    </IgrColumn>
                </IgrTreeGrid>
                </div>
        </div>
    );

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DisabledSummariesTreeGridSample/>);