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
} from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { EmployeesFlatDetails } from "./EmployeesFlatDetails";

export default function App() {
  const [data, setData] = useState<EmployeesFlatDetails>([]);
  const [cellMergeMode, setCellMergeMode] =
    useState<GridCellMergeMode>("always");
  const [mergeStrategyName, setMergeStrategyName] =
    useState("Default Strategy");

  useEffect(() => {
    const employeesFlatDetails = new EmployeesFlatDetails();

    setData(employeesFlatDetails);
  }, []);

  const mergeTypes = [
    { name: "Always", value: "always" },
    { name: "On Sort", value: "onSort" },
  ];

  const sortExpr: IgrSortingExpression[] = [
    {
      fieldName: "Country",
      dir: SortingDirection.Asc,
    },
  ];

  const mergeStrategies = [
    {
      name: "Default Strategy",
      value: new IgrDefaultTreeGridMergeStrategy(),
    },
    {
      name: "By Level Strategy",
      value: new IgrByLevelTreeGridMergeStrategy(),
    },
  ];

  const mergeStrategy =
    mergeStrategies.find((m) => m.name === mergeStrategyName)?.value ??
    mergeStrategies[0].value;

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
            mergeStrategy={mergeStrategy as IgrGridMergeStrategy}
          >
            <IgrGridToolbar>
              <IgrSelect
                onChange={(e: any) => setCellMergeMode(e.detail.value)}
                value={cellMergeMode}
              >
                <label>Select Merge Mode</label>
                {mergeTypes.map((type) => (
                  <IgrSelectItem key={type.name} value={type.value}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>

              <IgrSelect
                onChange={(e: any) => {
                  setMergeStrategyName(e.detail.value);
                }}
                value={mergeStrategyName}
              >
                <label>Select Merge Strategy</label>
                {mergeStrategies.map((type) => (
                  <IgrSelectItem key={type.name} value={type.name}>
                    {type.name}
                  </IgrSelectItem>
                ))}
              </IgrSelect>
            </IgrGridToolbar>

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
