import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrSelect, IgrSelectItem } from "igniteui-react";
import {
  GridCellMergeMode,
  IgrGridToolbar,
  SortingDirection,
  IgrSortingExpression,
  IgrTreeGrid,
  IgrGridMergeStrategy
} from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import MultiColumnsExportData from "./MultiColumnsExportData.json";

export default function App() {
  const data = MultiColumnsExportData;
  const childDataKey = "Categories";
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
  const sortExpr: IgrSortingExpression[] = [
    {
      fieldName: "Country",
      dir: SortingDirection.Asc,
    },
  ];
  const mergeStrategies = [
    {
      name: "Default Strategy"
      value: new IgrDefaultTreeGridMergeStrategy();
    }
  ]

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrTreeGrid
            data={data}
            width="100%"
            height="800px"
            sortingExpressions={sortExpr}
            autoGenerate={false}
            primaryKey="ID"
            foreignKey="ParentID"
            cellMergeMode={cellMergeMode}
            mergeStrategy={mergeStrategy}
          >
            <IgrGridToolbar>
              <IgrSelect
                value={cellMergeMode}
                onChange={(e) => setCellMergeMode(e.detail.value)}
              >
                <label>Select Merge Mode</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem key={type.value} value={type.value}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>

              <IgrSelect
                value={mergeStrategy}
                onChange={(e) => setMergeStrategy(e.detail.value)}
                onSelectionChanging={strategySelection}
              >
                <label>Select Merge Strategy</label>
                {mergeStrategies.map((type) => (
                  <IgrSelectItem
                    key={type.value}
                    value={type.value}
                    selected={type.value === mergeStrategy}
                  >
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>
            </IgrGridToolbar>
            <IgrColumn field="Name" dataType="string" width="250px" />
            <IgrColumn
              field="Title"
              dataType="string"
              width="250px"
              merge={true}
              sortable={true}
            />
            <IgrColumn field="HireDate" dataType="date" width="200px" />
            <IgrColumn
              field="Country"
              dataType="string"
              width="200px"
              merge={true}
              sortable={true}
            />
            <IgrColumn
              field="City"
              dataType="string"
              width="200px"
              merge={true}
              sortable={true}
            />
            <IgrColumn field="Age" dataType="number" width="200px" />
            <IgrColumn field="Address" dataType="string" width="200px" />
            <IgrColumn field="Fax" dataType="string" width="200px" />
            <IgrColumn field="PostalCode" dataType="string" width="200px" />
            <IgrColumn field="Phone" dataType="string" width="200px" />
          </IgrTreeGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
