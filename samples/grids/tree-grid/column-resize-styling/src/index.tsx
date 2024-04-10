import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrColumn,
  IgrTreeGrid,
  IgrTreeGridModule,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

import { EMPLOYEES_DATA } from "./data";

IgrTreeGridModule.register();

export default function App() {
  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrTreeGrid
          data={EMPLOYEES_DATA}
          primaryKey="ID"
          foreignKey="ParentID"
          height="500px"
          className="grid"
        >
          <IgrColumn
            field="Name"
            header="Name"
            dataType="string"
            width="220px"
            minWidth="200px"
            maxWidth="250px"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Title"
            header="Title"
            dataType="string"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="HireDate"
            header="Hire Date"
            dataType="date"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Age"
            header="Age"
            dataType="number"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Address"
            header="Address"
            dataType="string"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="City"
            header="City"
            dataType="string"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Country"
            header="Country"
            dataType="string"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Fax"
            header="Fax"
            dataType="string"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="PostalCode"
            header="Postal Code"
            dataType="string"
            resizable={true}
          ></IgrColumn>
          <IgrColumn
            field="Phone"
            header="Phone"
            dataType="string"
            resizable={true}
          ></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
