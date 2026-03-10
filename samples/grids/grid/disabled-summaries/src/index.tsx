import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrButton, IgrCheckbox } from "igniteui-react";
import {
  IgrGrid,
  IgrColumn,
  IgrSummaryOperand,
  IgrSummaryResult,
  IgrNumberSummaryOperand,
  IgrDateSummaryOperand,
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

interface SummaryCheckbox {
  summaryKey: string;
  summaryLabel: string;
  checked: boolean;
}

interface ColumnConfig {
  label: string;
  field: string;
  dataType?: "string" | "number" | "boolean" | "date";
  summaryClass?: any;
  summaries: SummaryCheckbox[];
}

export default function DisabledSummariesSample() {
  const [nwindData, setNwindData] = useState<any[]>([]);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [columns, setColumns] = useState<ColumnConfig[]>([
    { label: "Product ID", field: "ProductID", summaries: [] },
    { label: "Product Name", field: "ProductName", summaries: [] },
    { label: "Unit Price", field: "UnitPrice", dataType: "number", summaries: [] },
    { label: "Units In Stock", field: "UnitsInStock", dataType: "number", summaryClass: UnitsInStockSummary, summaries: [] },
    { label: "Discontinued", field: "Discontinued", summaryClass: DiscontinuedSummary, summaries: [] },
    { label: "Order Date", field: "OrderDate", dataType: "date", summaries: [] },
  ]);

  useEffect(() => {
    setNwindData(NwindData);
  }, []);

  useEffect(() => {
    if (nwindData.length > 0 && columns[0].summaries.length === 0) {
      initializeSummaries();
    }
  }, [nwindData]);

  const defaultSummaryOperands: Record<string, new () => IgrSummaryOperand> = {
    number: IgrNumberSummaryOperand,
    date: IgrDateSummaryOperand,
  };

  const getSummaries = (column: ColumnConfig): SummaryCheckbox[] => {
    const OperandClass = column.summaryClass ?? defaultSummaryOperands[column.dataType!] ?? IgrSummaryOperand;
    const summaryResults = new OperandClass().operate([], nwindData, column.field, null);
    return summaryResults.map((summary: IgrSummaryResult) => ({
      summaryKey: summary.key,
      summaryLabel: summary.label,
      checked: true,
    }));
  };

  const initializeSummaries = () => {
    if (nwindData.length === 0) return;

    const updatedColumns = columns.map((column) => ({
      ...column,
      summaries: getSummaries(column),
    }));

    setColumns(updatedColumns);
  };

  const getCheckedSummariesCount = (summaries: SummaryCheckbox[]): number => {
    return summaries.filter((item) => item.checked).length;
  };

  const getDisabledSummaries = (summaries: SummaryCheckbox[]): string[] => {
    return summaries.filter((item) => !item.checked).map((item) => item.summaryKey);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const toggleCheckbox = (columnIndex: number, summaryIndex: number) => {
    const updatedColumns = [...columns];
    const column = updatedColumns[columnIndex];
    column.summaries[summaryIndex].checked = !column.summaries[summaryIndex].checked;
    setColumns(updatedColumns);
  };

  const uncheckAllColumns = (columnIndex: number) => {
    const updatedColumns = [...columns];
    const column = updatedColumns[columnIndex];
    column.summaries.forEach((item) => (item.checked = false));
    setColumns(updatedColumns);
  };

  const checkAllColumns = (columnIndex: number) => {
    const updatedColumns = [...columns];
    const column = updatedColumns[columnIndex];
    column.summaries.forEach((item) => (item.checked = true));
    setColumns(updatedColumns);
  };

  return (
    <div className="grid-wrapper container sample ig-typography">
      <div className="summaries">
        <h5 className="summaries-title">Toggle Summaries for Column:</h5>
        {columns.map((column, columnIndex) => (
          <div key={column.field} className="summary-column-button">
            <IgrButton
              variant="outlined"
              onClick={() => toggleDropdown(columnIndex)}
            >
              <span>
                {column.label} ({getCheckedSummariesCount(column.summaries)})
              </span>
            </IgrButton>
            {openDropdownIndex === columnIndex && (
              <div className="summaries-dropdown">
                <p className="summaries-dropdown-title">Disabled Summaries</p>
                <div className="summaries-dropdown-items">
                  {column.summaries.map((summary, summaryIndex) => (
                    <IgrCheckbox
                      key={summary.summaryKey}
                      className="summaries-dropdown-item"
                      checked={summary.checked}
                      onChange={() => toggleCheckbox(columnIndex, summaryIndex)}
                    >
                      <span>{summary.summaryLabel}</span>
                    </IgrCheckbox>
                  ))}
                </div>
                <div className="summaries-dropdown-buttons">
                  <IgrButton
                    variant="flat"
                    disabled={getCheckedSummariesCount(column.summaries) === 0}
                    onClick={() => uncheckAllColumns(columnIndex)}
                  >
                    <span>Disable All</span>
                  </IgrButton>
                  <IgrButton
                    variant="flat"
                    disabled={
                      getCheckedSummariesCount(column.summaries) ===
                      column.summaries.length
                    }
                    onClick={() => checkAllColumns(columnIndex)}
                  >
                    <span>Enable All</span>
                  </IgrButton>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <IgrGrid
        autoGenerate={false}
        data={nwindData}
        primaryKey="ProductID"
        height="700px"
        width="100%"
      >
        {columns.map((column) => (
          <IgrColumn
            key={column.field}
            field={column.field}
            header={column.label}
            dataType={column.dataType}
            hasSummary={true}
            summaries={column.summaryClass}
            disabledSummaries={getDisabledSummaries(column.summaries)}
          />
        ))}
      </IgrGrid>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisabledSummariesSample />);
