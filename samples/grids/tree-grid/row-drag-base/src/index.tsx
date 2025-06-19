import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  IgrTreeGrid,
  IgrColumn,
  IgrRowDragEndEventArgs,
} from "igniteui-react-grids";
import { EmployeesNestedTreeData, EmployeesNestedTreeDataItem } from "./EmployeesNestedTreeData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const employeesData = new EmployeesNestedTreeData();
  const rightTGridRef = useRef<IgrTreeGrid>(null);

  // Recursive function to add the row and its children
  const addRowAndChildren = (row: EmployeesNestedTreeDataItem, newData: EmployeesNestedTreeDataItem[]) => {
    if (newData.includes(row)) {
      return;
    }
    newData.push(row);
    const children = employeesData.filter(emp => emp.ParentID === row.ID);
    children.forEach(child => addRowAndChildren(child, newData));
  }

  const RowDragEnd = (evt: IgrRowDragEndEventArgs) => {
    const leftGrid = evt.target as IgrTreeGrid;
    const ghostElement = evt.detail.dragDirective.ghostElement;
    if (ghostElement != null) {
      const dragElementPos = ghostElement.getBoundingClientRect();
      const gridPosition = document.getElementById("treeGrid2").getBoundingClientRect();

      const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
      const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;

      if (withinXBounds && withinYBounds) {
        const newData = [...rightTGridRef.current.data];
        const draggedRowData = evt.detail.dragData.data;

        addRowAndChildren(draggedRowData, newData);
        rightTGridRef.current.data = newData;
        leftGrid.deleteRow(evt.detail.dragData.key);
      }
    }
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="container horizontal wrapper">
          <IgrTreeGrid
            autoGenerate={false}
            data={employeesData}
            primaryKey="ID"
            foreignKey="ParentID"
            id="treeGrid"
            width="40%"
            rowDraggable={true}
            onRowDragEnd={RowDragEnd}
          >
            <IgrColumn
              field="Name"
              header="Full Name"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}>
            </IgrColumn>
            <IgrColumn
              field="Age"
              dataType="number"
              resizable={false}
              sortable={false}
              filterable={false}
              editable={true}>
            </IgrColumn>
            <IgrColumn
              field="Title"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}>
            </IgrColumn>
            <IgrColumn
              field="HireDate"
              header="Hire Date"
              dataType="date"
              resizable={true}
              sortable={true}
              editable={true}>
            </IgrColumn>
          </IgrTreeGrid>

          <IgrTreeGrid
            autoGenerate={false}
            data={[]}
            primaryKey="ID"
            foreignKey="ParentID"
            ref={rightTGridRef}
            id="treeGrid2"
            width="40%"
            emptyGridMessage="Drag and Drop a row from the left grid to this grid"
          >
            <IgrColumn
              field="Name"
              header="Full Name"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}>
            </IgrColumn>
            <IgrColumn
              field="Age"
              dataType="number"
              resizable={false}
              sortable={false}
              filterable={false}
              editable={true}>
            </IgrColumn>
            <IgrColumn
              field="Title"
              dataType="string"
              resizable={true}
              sortable={true}
              editable={true}>
            </IgrColumn>
            <IgrColumn
              field="HireDate"
              header="Hire Date"
              dataType="date"
              resizable={true}
              sortable={true}
              editable={true}>
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
