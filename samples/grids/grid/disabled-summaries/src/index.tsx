import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrButton, IgrDialog, IgrCheckbox } from "igniteui-react";
import {
  IgrGrid,
  IgrColumn,
  IgrSummaryOperand,
  IgrSummaryResult,
} from "igniteui-react-grids";
import NwindData from "./NwindData.json";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

class UnitsInStockSummary extends IgrSummaryOperand {
  operate(
    data: any[] = [],
    allData: any[] = [],
    fieldName: string = "",
    summaryResult: any = null
  ): IgrSummaryResult[] {
    const result: IgrSummaryResult[] = [];
    const values = allData
      .map((item) => item[fieldName] ?? 0)
      .filter((value) => value !== null);

    const discontinuedItems = allData.filter(
      (item) => item["Discontinued"] === true
    );
    const discontinuedValues = discontinuedItems
      .map((item) => item[fieldName] ?? 0)
      .filter((value) => !isNaN(value));

    result.push({ key: "count", label: "Count", summaryResult: values.length });
    result.push({
      key: "min",
      label: "Min",
      summaryResult: values.length > 0 ? Math.min(...values) : "N/A",
    });
    result.push({
      key: "max",
      label: "Max",
      summaryResult: values.length > 0 ? Math.max(...values) : "N/A",
    });
    result.push({
      key: "sum",
      label: "Sum",
      summaryResult: values.reduce((a, b) => a + b, 0),
    });
    result.push({
      key: "average",
      label: "Average",
      summaryResult:
        values.length > 0
          ? values.reduce((a, b) => a + b, 0) / values.length
          : "N/A",
    });
    result.push({
      key: "median",
      label: "Median",
      summaryResult:
        values.length > 0
          ? (() => {
              const sortedValues = values.slice().sort((a, b) => a - b);
              return sortedValues.length % 2 === 0
                ? (sortedValues[sortedValues.length / 2 - 1] +
                    sortedValues[sortedValues.length / 2]) /
                    2
                : sortedValues[Math.floor(sortedValues.length / 2)];
            })()
          : "N/A",
    });
    result.push({
      key: "range",
      label: "Range",
      summaryResult:
        values.length > 0 ? Math.max(...values) - Math.min(...values) : "N/A",
    });
    result.push({
      key: "discontinued",
      label: "Discontinued Products",
      summaryResult: discontinuedItems.length,
    });
    result.push({
      key: "totalDiscontinued",
      label: "Total Discontinued Items",
      summaryResult:
        discontinuedValues.length > 0
          ? discontinuedValues.reduce((a, b) => a + b, 0)
          : 0,
    });

    return result;
  }
}

class DiscontinuedSummary extends IgrSummaryOperand {
  operate(
    data: any[] = [],
    allData: any[] = [],
    fieldName: string = ""
  ): IgrSummaryResult[] {
    const result: IgrSummaryResult[] = [];
    result.push({
      key: "count",
      label: "Count",
      summaryResult: allData.length,
    });
    result.push({
      key: "true",
      label: "True",
      summaryResult: allData.filter((item) => item[fieldName] === true).length,
    });
    result.push({
      key: "false",
      label: "False",
      summaryResult: allData.filter((item) => item[fieldName] === false).length,
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

export default function DisabledSummariesSample() {
  // State
  const [nwindData, setNwindData] = useState<any[]>([]);
  const [currentColumn, setCurrentColumn] = useState<SummaryColumn | null>(
    null
  );
  const [currentColumnSource, setCurrentColumnSource] = useState<
    "dialog" | "toggle" | null
  >(null);
  const [pendingUpdateType, setPendingUpdateType] = useState<
    null | "disableAll" | "enableAll"
  >(null);
  const [disableAllBtnDisabled, setDisableAllBtnDisabled] = useState(false);
  const [enableAllBtnDisabled, setEnableAllBtnDisabled] = useState(false);
  const [checkboxStates, setCheckboxStates] = useState([]);
  const [columns, setColumns] = useState([
    {
      field: "ProductID",
      header: "ProductID",
      hasSummary: true,
      disabledSummaries: [],
    },
    {
      field: "ProductName",
      header: "Product Name",
      hasSummary: true,
      disabledSummaries: [],
    },
    {
      field: "UnitPrice",
      header: "Unit Price",
      hasSummary: true,
      dataType: "number",
      disabledSummaries: [],
    },
    {
      field: "UnitsInStock",
      header: "Units In Stock",
      hasSummary: true,
      dataType: "number",
      summaries: UnitsInStockSummary,
      disabledSummaries: [],
    },
    {
      field: "Discontinued",
      header: "Discontinued",
      hasSummary: true,
      summaries: DiscontinuedSummary,
      disabledSummaries: [],
    },
    {
      field: "OrderDate",
      header: "Order Date",
      hasSummary: true,
      dataType: "date",
      disabledSummaries: [],
    },
  ]);

  // Refs
  let grid: IgrGrid;
  const gridRef = (ref: IgrGrid) => {
    grid = ref;
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
    setNwindData(NwindData);
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

    if (shouldMarkForCheck && grid) {
      updateCheckboxes();
      grid.markForCheck();
      setPendingUpdateType(null);
      setCurrentColumnSource(null);
    }
  }, [currentColumn, currentColumnSource, pendingUpdateType, grid]);

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
    const columnInstance = grid.columns.find((c) => c.field === field);
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
    if (!currentColumn || !grid) return;

    const gridData: any[] = grid.data;
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
    if (!currentColumn || !grid) return;

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
    if (!currentColumn || !grid) return;

    const gridData: any[] = grid.data;
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
    if (!currentColumn || !grid) return;

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
      <IgrDialog
        ref={dialogRef}
        title={
          currentColumn ? `Disable Summaries for ${currentColumn.header}` : ""
        }
      >
        <div className="summaries-dialog-items">
          {currentColumn &&
            checkboxStates.map((checkbox: any) => (
              <IgrCheckbox
                key={checkbox.key}
                className="summaries-dialog-item"
                checked={checkbox.checked}
                onChange={() => toggleSummary(checkbox.key)}
              >
                <span>{checkbox.label}</span>
              </IgrCheckbox>
            ))}
        </div>
        <IgrButton
          key="disableAll"
          slot="footer"
          variant="flat"
          onClick={disableAllSummaries}
          disabled={disableAllBtnDisabled}
        >
          <span>Disable All</span>
        </IgrButton>
        <IgrButton
          key="enableAll"
          slot="footer"
          variant="flat"
          onClick={enableAllSummaries}
          disabled={enableAllBtnDisabled}
        >
          <span>Enable All</span>
        </IgrButton>
      </IgrDialog>

      <div className="container fill">
        <IgrGrid
          autoGenerate={false}
          ref={gridRef}
          data={nwindData}
          primaryKey="ProductID"
          height="700px"
          width="100%"
        >
          <IgrColumn
            field="ProductID"
            header="ProductID"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "ProductID")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="ProductName"
            header="Product Name"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "ProductName")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="UnitPrice"
            header="Unit Price"
            dataType="number"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "UnitPrice")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="UnitsInStock"
            header="Units In Stock"
            dataType="number"
            hasSummary={true}
            summaries={UnitsInStockSummary}
            disabledSummaries={
              columns.find((col: any) => col.field === "UnitsInStock")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="Discontinued"
            header="Discontinued"
            hasSummary={true}
            summaries={DiscontinuedSummary}
            disabledSummaries={
              columns.find((col: any) => col.field === "Discontinued")
                ?.disabledSummaries
            }
          ></IgrColumn>
          <IgrColumn
            field="OrderDate"
            header="Order Date"
            dataType="date"
            hasSummary={true}
            disabledSummaries={
              columns.find((col: any) => col.field === "OrderDate")
                ?.disabledSummaries
            }
          ></IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisabledSummariesSample />);
