import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrTreeGridModule,
} from "igniteui-react-grids";
import {
  IgrTreeGrid,
  IgrColumn,
} from "igniteui-react-grids";
import { EmployeesNestedTreeData } from "./EmployeesNestedTreeData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrTreeGridModule.register();

export default function App() {
  const employeesData = new EmployeesNestedTreeData();
  const treeGridRef = useRef<IgrTreeGrid>(null);
  const treeGridRef2 = useRef<IgrTreeGrid>(null);

  function RowDragEnd(grid: IgrTreeGrid, evt: any) {
    const grid2 = treeGridRef2.current;
    const ghostElement = evt.detail.dragDirective.ghostElement;
    if (ghostElement != null) {
      const dragElementPos = ghostElement.getBoundingClientRect();
      const gridPosition = document.getElementById("treeGrid2").getBoundingClientRect();

      const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
      const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
      if (withinXBounds && withinYBounds) {
        console.log(evt.detail.dragData.data.ParentID);
        treeGridRef2.current.addRow(evt.detail.dragData.data, null);        
      }
    }
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="container horizontal wrapper">
          <IgrTreeGrid
            autoGenerate="false"
            data={employeesData}
            primaryKey="ID"
            foreignKey="ParentID"
            id="treeGrid"
            width="40%"
            ref={treeGridRef}
            rowDraggable="true"
            rowDragEnd={RowDragEnd}
          >
            <IgrColumn
              field="Name"
              header="Full Name"
              dataType="String"
              resizable="true"
              sortable="true"
              editable="true">
            </IgrColumn>
            <IgrColumn
              field="Age"
              dataType="Number"
              resizable="false"
              sortable="false"
              filterable="false"
              editable="true">
            </IgrColumn>
            <IgrColumn
              field="Title"
              dataType="String"
              resizable="true"
              sortable="true"
              editable="true">
            </IgrColumn>
            <IgrColumn
              field="HireDate"
              header="Hire Date"
              dataType="Date"
              resizable="true"
              sortable="true"
              editable="true">
            </IgrColumn>
          </IgrTreeGrid>

          <IgrTreeGrid
            autoGenerate="false"
            data={[]}
            primaryKey="ID"
            foreignKey="ParentID"
            ref={treeGridRef2}
            id="treeGrid2"
            width="40%"
            emptyGridMessage="Drag and Drop a row from the left grid to this grid"
          >
            <IgrColumn
              field="Name"
              header="Full Name"
              dataType="String"
              resizable="true"
              sortable="true"
              editable="true">
            </IgrColumn>
            <IgrColumn
              field="Age"
              dataType="Number"
              resizable="false"
              sortable="false"
              filterable="false"
              editable="true">
            </IgrColumn>
            <IgrColumn
              field="Title"
              dataType="String"
              resizable="true"
              sortable="true"
              editable="true">
            </IgrColumn>
            <IgrColumn
              field="HireDate"
              header="Hire Date"
              dataType="Date"
              resizable="true"
              sortable="true"
              editable="true">
            </IgrColumn>
          </IgrTreeGrid>
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
