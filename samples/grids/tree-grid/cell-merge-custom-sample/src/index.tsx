import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrSelect, IgrSelectItem } from "igniteui-react";
import {
  GridCellMergeMode,
  IgrGridToolbar,
  SortingDirection,
  IgrSortingExpression,
  IgrTreeGrid,
  IgrGridMergeStrategy,
  IgrDefaultTreeGridMergeStrategy,
  IgrByLevelTreeGridMergeStrategy,
  IgrDefaultMergeStrategy,
} from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { generateEmployeeDetailedFlatData2 } from "./EmployeesFlatDetails2";

export default function App() {
  const data = generateEmployeeDetailedFlatData2();
  const [cellMergeMode] = useState<GridCellMergeMode>("always");

  const sortExpr: IgrSortingExpression[] = [
    {
      fieldName: "Country",
      dir: SortingDirection.Asc,
    },
  ];

  const customMergeStrategy = new CustomTreeGridMergeStrategy();
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
            mergeStrategy={customMergeStrategy as IgrGridMergeStrategy}
          >
            <IgrGridToolbar />

            <IgrColumn
              field="Name"
              dataType="string"
              width="250px"
              editable={true}
            />
            <IgrColumn
              field="Title"
              dataType="string"
              width="250px"
              merge={true}
              editable={true}
              sortable={true}
            />
            <IgrColumn field="HireDate" dataType="date" width="200px" />
            <IgrColumn
              field="Country"
              dataType="string"
              width="200px"
              merge={true}
              editable={true}
              sortable={true}
            />
            <IgrColumn
              field="City"
              dataType="string"
              width="200px"
              merge={true}
              editable={true}
              sortable={true}
            />
            <IgrColumn
              field="Age"
              dataType="number"
              width="200px"
              editable={true}
            />
            <IgrColumn
              field="Address"
              dataType="string"
              width="200px"
              editable={true}
            />
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

class CustomTreeGridMergeStrategy extends IgrDefaultTreeGridMergeStrategy {
  // Merge only cells within same country and level
  public comparer(prevRecord: any, record: any, field: string): boolean {
    const a = prevRecord[field];
    const b = record[field];

    const levelA = prevRecord.level;
    const levelB = record.level;

    const countryA = prevRecord.data["Country"];
    const countryB = record.data["Country"];

    return a === b && levelA === levelB && countryA === countryB;
  }
}
