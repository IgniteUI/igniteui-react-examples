import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  GridCellMergeMode,
  IgrHierarchicalGrid,
  IgrRowIsland,
  SortingDirection,
  IgrSortingExpression,
  IgrColumn,
  IgrDefaultMergeStrategy,
  IgrGridMergeStrategy,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import MultiColumnsExportData from "./MultiColumnsExportData.json";

export default function App() {
  const [cellMergeMode] = useState<GridCellMergeMode>("always");
  const sortExpr: IgrSortingExpression[] = [
    {
      fieldName: "ContactTitle",
      dir: SortingDirection.Asc,
    },
  ];

  const perCountryMergeStrategy =
    new PerCountryMergeStrategy() as IgrGridMergeStrategy;

  return (
    <>
      <div className="container sample ig-typography">
        <div className="container fill">
          <IgrHierarchicalGrid
            primaryKey="ID"
            data={MultiColumnsExportData}
            sortingExpressions={sortExpr}
            moving={true}
            cellMergeMode={cellMergeMode}
            mergeStrategy={perCountryMergeStrategy}
            height="740px"
            width="100%"
            allowFiltering={true}
          >
            <IgrColumn
              field="CompanyName"
              sortable={true}
              resizable={true}
              editable={true}
            />
            <IgrColumn
              field="ContactName"
              sortable={true}
              resizable={true}
              editable={true}
            />
            <IgrColumn
              field="ContactTitle"
              sortable={true}
              resizable={true}
              merge={true}
              editable={true}
            />
            <IgrColumn
              field="Address"
              sortable={true}
              resizable={true}
              editable={true}
            />
            <IgrColumn
              field="City"
              sortable={true}
              resizable={true}
              merge={true}
              editable={true}
            />
            <IgrColumn field="PostalCode" sortable={true} resizable={true} />
            <IgrColumn
              field="Country"
              sortable={true}
              resizable={true}
              merge={true}
              editable={true}
            />
            <IgrColumn field="Phone" sortable={true} resizable={true} />
            <IgrColumn field="Fax" sortable={true} resizable={true} />

            <IgrRowIsland
              childDataKey="ChildCompanies"
              moving={true}
              autoGenerate={false}
              sortingExpressions={sortExpr}
              cellMergeMode={cellMergeMode}
              mergeStrategy={perCountryMergeStrategy}
              height={null}
            >
              <IgrColumn
                field="CompanyName"
                sortable={true}
                resizable={true}
                editable={true}
              />
              <IgrColumn
                field="ContactName"
                sortable={true}
                resizable={true}
                editable={true}
              />
              <IgrColumn
                field="ContactTitle"
                sortable={true}
                resizable={true}
                merge={true}
                editable={true}
              />
              <IgrColumn field="Address" sortable={true} resizable={true} />
              <IgrColumn
                field="City"
                sortable={true}
                resizable={true}
                merge={true}
                editable={true}
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

class PerCountryMergeStrategy extends IgrDefaultMergeStrategy {
  // Custom comparer logic: merge only within same country
  public comparer(prevRecord: any, record: any, field: string): boolean {
    const a = prevRecord[field];
    const b = record[field];
    const countryA = prevRecord["Country"];
    const countryB = record["Country"];
    return a === b && countryA === countryB;
  }
}
