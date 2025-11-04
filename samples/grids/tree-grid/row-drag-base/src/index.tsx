import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrTreeGrid,
  IgrColumn,
  IgrRowDragEndEventArgs,
} from "igniteui-react-grids";
import { IgrIcon } from "igniteui-react";
import { EmployeesNestedTreeData } from "./EmployeesNestedTreeData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const treeGridRef = useRef<IgrTreeGrid>(null);
  const employeesData = new EmployeesNestedTreeData();

  const onRowDragEnd = (evt: IgrRowDragEndEventArgs) => {
    const ghostElement = evt.detail.dragDirective.ghostElement;

    if (ghostElement != null) {
      const dragElementPos = ghostElement.getBoundingClientRect();
      const dropAreaPosition = document
        .getElementById("dropArea")
        .getBoundingClientRect();

      const withinXBounds =
        dragElementPos.x >= dropAreaPosition.x &&
        dragElementPos.x <= dropAreaPosition.x + dropAreaPosition.width;
      const withinYBounds =
        dragElementPos.y >= dropAreaPosition.y &&
        dragElementPos.y <= dropAreaPosition.y + dropAreaPosition.height;

      if (withinXBounds && withinYBounds) {
        treeGridRef.current.deleteRow(evt.detail.dragData.key);
      }
    }
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="container horizontal wrapper">
          <div className="drop-area" id="dropArea">
            <IgrIcon>delete</IgrIcon>
            <div>Drag a row here to delete it</div>
          </div>

          <IgrTreeGrid
            ref={treeGridRef}
            data={employeesData}
            primaryKey="ID"
            foreignKey="ParentID"
            width="40%"
            autoGenerate={false}
            moving={true}
            rowDraggable={true}
            allowFiltering={true}
            onRowDragEnd={onRowDragEnd}
          >
            <IgrColumn
              field="Name"
              header="Full Name"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}
            ></IgrColumn>
            <IgrColumn
              field="Age"
              dataType="number"
              resizable={false}
              sortable={false}
              filterable={false}
              editable={true}
            ></IgrColumn>
            <IgrColumn
              field="Title"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}
            ></IgrColumn>
            <IgrColumn
              field="HireDate"
              header="Hire Date"
              dataType="date"
              resizable={true}
              sortable={true}
              editable={true}
            ></IgrColumn>
          </IgrTreeGrid>
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
