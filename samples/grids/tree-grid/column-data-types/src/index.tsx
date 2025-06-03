import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrTreeGridModule } from "igniteui-react-grids";
import {
  IgrTreeGrid,
  IgrColumn,
  IgrColumnPipeArgs,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { EMPLOYEES_DATA } from "./EmployeesData";

IgrTreeGridModule.register();

export default function Sample() {
  const columnPipeArgs1: IgrColumnPipeArgs = {
    format: "long",
    timezone: "UTC+0",
  };

  const columnPipeArgs2: IgrColumnPipeArgs = {
    format: "mediumDate",
  };

  const columnPipeArgs3: IgrColumnPipeArgs = {
    format: "shortTime",
    timezone: "UTC+0",
  };

  const columnPipeArgs4: IgrColumnPipeArgs = {
    currencyCode: "",
    digitsInfo: "1.3-3",
  };

  const columnPipeArgs5: IgrColumnPipeArgs = {
    digitsInfo: "2.2-3",
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrTreeGrid
          autoGenerate={false}
          data={EMPLOYEES_DATA}
          id="grid"
          primaryKey="ID"
          foreignKey="ParentID"
          allowFiltering={true}
          filterMode="excelStyleFilter"
          locale="EN"
          summaryCalculationMode="rootLevelOnly"
        >
          <IgrColumn
            field="Name"
            header="Full Name"
            dataType="string"
            width="220px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Avatar"
            header="Photo"
            dataType="image"
            width="120px"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Title"
            header="Title"
            dataType="string"
            width="250px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Age"
            header="Age"
            dataType="number"
            width="120px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="HireFullDate"
            header="Hire Full Date"
            dataType="dateTime"
            width="300px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
            pipeArgs={columnPipeArgs1}
          ></IgrColumn>
          <IgrColumn
            field="HireDate"
            header="Hire Date"
            dataType="date"
            width="160px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
            pipeArgs={columnPipeArgs2}
          ></IgrColumn>
          <IgrColumn
            field="HireTime"
            header="Hire Time"
            dataType="time"
            width="160px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
            pipeArgs={columnPipeArgs3}
          ></IgrColumn>
          <IgrColumn
            field="Salary"
            header="Salary"
            dataType="currency"
            width="120px"
            sortable={true}
            hasSummary={true}
            editable={true}
            resizable={true}
            pipeArgs={columnPipeArgs4}
          ></IgrColumn>
          <IgrColumn
            field="CompletedTasks"
            header="Completed Tasks"
            dataType="percent"
            width="200px"
            sortable={true}
            editable={true}
            resizable={true}
            pipeArgs={columnPipeArgs5}
          ></IgrColumn>
          <IgrColumn
            field="OnPTO"
            header="On PTO"
            dataType="boolean"
            width="120px"
            sortable={true}
            editable={true}
            resizable={true}
          ></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
