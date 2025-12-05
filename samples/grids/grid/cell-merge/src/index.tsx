import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrSelect, IgrSelectItem } from "igniteui-react";
import {
  GridSelectionMode,
  GridCellMergeMode,
  IgrGridToolbar,
  IgrCellTemplateContext,
} from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { InvoicesData } from "./InvoicesData";

export default function App() {
  const data = new InvoicesData();
  const gridRef = useRef<IgrGrid>(null);
  const selectionMode: GridSelectionMode = "single";
  const [cellMergeMode, setCellMergeMode] =
    useState<GridCellMergeMode>("always");
  const mergeTypes: { name: string; value: GridCellMergeMode }[] = [
    {
      name: "Merge always",
      value: "always",
    },
    {
      name: "Merge on sort",
      value: "onSort",
    },
  ];

  const formatCurrency = (val: number) => {
    return "$" + val.toFixed(2);
  };

  const webGridDiscontinuedCellTemplate = (ctx: IgrCellTemplateContext) => {
    if (ctx.cell.value) {
      return (
        <img
          src="https://dl.infragistics.com/x/img/gridactive.png"
          title="Continued"
          alt="Continued"
        />
      );
    } else {
      return (
        <img
          src="https://dl.infragistics.com/x/img/gridexpired.png"
          title="Discontinued"
          alt="Discontinued"
        />
      );
    }
  };

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrGrid
            autoGenerate={false}
            data={data}
            ref={gridRef}
            rowSelection={selectionMode}
            cellMergeMode={cellMergeMode}
            width="100%"
            height="570px"
          >
            <IgrGridToolbar>
              <IgrSelect
                value={cellMergeMode}
                onChange={(e: any) =>
                  setCellMergeMode(e.detail.value as GridCellMergeMode)
                }
              >
                <label>Select Merge Type</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem key={type.value} value={type.value}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>
            </IgrGridToolbar>

            <IgrColumn
              field="OrderID"
              header="Order ID"
              hidden={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipperName"
              header="Shipper Name"
              merge={true}
              sortable={true}
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="Salesperson"
              header="Salesperson"
              merge={true}
              sortable={true}
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="Discontinued"
              header="Discontinued"
              merge={true}
              sortable={true}
              bodyTemplate={webGridDiscontinuedCellTemplate}
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="UnitPrice"
              header="Unit Price"
              formatter={formatCurrency}
              dataType="number"
              width="150px"
            ></IgrColumn>
            <IgrColumn
              field="Quantity"
              header="Quantity"
              dataType="number"
              width="150px"
            ></IgrColumn>
            <IgrColumn
              field="ShipCountry"
              header="Ship Country"
              merge={true}
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="ShipCity"
              header="Ship City"
              merge={true}
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="ShipName"
              header="Ship Name"
              width="250px"
            ></IgrColumn>
            <IgrColumn
              field="PostalCode"
              header="Postal Code"
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
              width="200px"
            ></IgrColumn>
          </IgrGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
