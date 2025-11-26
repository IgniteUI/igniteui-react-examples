import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrSelect, IgrSelectItem } from "igniteui-react";
import {
  GridCellMergeMode,
  IgrGridToolbar,
  IgrHierarchicalGrid,
  IgrRowIsland,
  SortingDirection,
  IgrSortingExpression,
  IgrColumn,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import MultiColumnsExportData from "./MultiColumnsExportData.json";

export default function App() {
  const localData = MultiColumnsExportData;
  const [cellMergeMode, setCellMergeMode] =
    useState<GridCellMergeMode>("always");
  const [cellMergeModeRowIsland, setCellMergeModeRowIsland] =
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
      fieldName: "ContactTitle",
      dir: SortingDirection.Asc,
    },
  ];

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrHierarchicalGrid
            primaryKey="ID"
            autoGenerate={false}
            data={localData}
            moving={true}
            sortingExpressions={sortExpr}
            cellMergeMode={cellMergeMode}
            allowFiltering={true}
            width="100%"
            height="450px"
          >
            <IgrGridToolbar>
              <IgrSelect
                value={cellMergeMode}
                onChange={(e: any) =>
                  setCellMergeMode(e.detail.value as GridCellMergeMode)
                }
              >
                <label>Select Merge Type Root</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem key={type.value} value={type.value}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>

              <IgrSelect
                value={cellMergeModeRowIsland}
                onChange={(e: any) =>
                  setCellMergeModeRowIsland(e.detail.value as GridCellMergeMode)
                }
              >
                <label>Select Merge Type Child</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem
                    key={type.value}
                    value={type.value}
                    selected={type.value === cellMergeModeRowIsland}
                  >
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>
            </IgrGridToolbar>

            <IgrColumn field="CompanyName" sortable={true} resizable={true} />
            <IgrColumn field="ContactName" sortable={true} resizable={true} />
            <IgrColumn
              field="ContactTitle"
              sortable={true}
              resizable={true}
              merge={true}
            />
            <IgrColumn field="Address" sortable={true} resizable={true} />
            <IgrColumn
              field="City"
              sortable={true}
              resizable={true}
              merge={true}
            />
            <IgrColumn field="PostalCode" sortable={true} resizable={true} />
            <IgrColumn
              field="Country"
              sortable={true}
              resizable={true}
              merge={true}
            />
            <IgrColumn field="Phone" sortable={true} resizable={true} />
            <IgrColumn field="Fax" sortable={true} resizable={true} />

            <IgrRowIsland
              childDataKey="ChildCompanies"
              height="100%"
              moving={true}
              autoGenerate={false}
              sortingExpressions={sortExpr}
              cellMergeMode={cellMergeModeRowIsland}
            >
              <IgrColumn field="CompanyName" sortable={true} resizable={true} />
              <IgrColumn field="ContactName" sortable={true} resizable={true} />
              <IgrColumn
                field="ContactTitle"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="Address" sortable={true} resizable={true} />
              <IgrColumn
                field="City"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="PostalCode" sortable={true} resizable={true} />
              <IgrColumn
                field="Country"
                sortable={true}
                resizable={true}
                merge={true}
              />
              <IgrColumn field="Phone" sortable={true} resizable={true} />
              <IgrColumn field="Fax" sortable={true} resizable={true} />
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        </div>
      </div>
    </>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
