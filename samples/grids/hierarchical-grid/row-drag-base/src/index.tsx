import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
  IgrRowDragEndEventArgs,
} from "igniteui-react-grids";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const singersData = new SingersData();
  const leftHGridRef = useRef<IgrHierarchicalGrid>(null);
  const rightHGridRef = useRef<IgrHierarchicalGrid>(null);

  const RowDragEnd = (evt: IgrRowDragEndEventArgs) => {
    const ghostElement = evt.detail.dragDirective.ghostElement;
    if (ghostElement != null) {
      const dragElementPos = ghostElement.getBoundingClientRect();
      const gridPosition = document.getElementById("hierarchicalGrid2").getBoundingClientRect();

      const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
      const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
      if (withinXBounds && withinYBounds) {
        leftHGridRef.current.deleteRow(evt.detail.dragData.key);
        rightHGridRef.current.addRow(evt.detail.dragData.data);
      }
    }
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="container horizontal wrapper">
          <IgrHierarchicalGrid
            autoGenerate={false}
            data={singersData}
            primaryKey="ID"
            id="hierarchicalGrid1"
            width="40%"
            ref={leftHGridRef}
            rowDraggable={true}
            onRowDragEnd={RowDragEnd}
          >
            <IgrColumn
              field="Artist"
              header="Artist"
              dataType="string"
              width="150px"
            ></IgrColumn>
            <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
            <IgrColumn field="Debut" header="Debut" dataType="number"></IgrColumn>
            <IgrColumn
              field="GrammyNominations"
              header="Grammy Nominations"
              dataType="string"
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="GrammyAwards"
              header="Grammy Awards"
              dataType="string"
              width="200px"
            ></IgrColumn>
            <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
              <IgrColumn
                field="Album"
                header="Album"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="LaunchDate"
                header="Launch Date"
                dataType="date"
              ></IgrColumn>
              <IgrColumn
                field="BillboardReview"
                header="Billboard Review"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="USBillboard200"
                header="US Billboard 200"
                dataType="string"
              ></IgrColumn>
              <IgrRowIsland childDataKey="Songs" autoGenerate={false}>
                <IgrColumn
                  field="Number"
                  header="No."
                  dataType="string"
                ></IgrColumn>
                <IgrColumn
                  field="Title"
                  header="Title"
                  dataType="string"
                ></IgrColumn>
                <IgrColumn
                  field="Released"
                  header="Released"
                  dataType="date"
                ></IgrColumn>
                <IgrColumn
                  field="Genre"
                  header="Genre"
                  dataType="string"
                ></IgrColumn>
              </IgrRowIsland>
            </IgrRowIsland>
            <IgrRowIsland childDataKey="Tours" autoGenerate={false}>
              <IgrColumn field="Tour" header="Tour" dataType="string"></IgrColumn>
              <IgrColumn
                field="StartedOn"
                header="Started on"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="Location"
                header="Location"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="Headliner"
                header="Headliner"
                dataType="string"
              ></IgrColumn>
            </IgrRowIsland>
          </IgrHierarchicalGrid>

          <IgrHierarchicalGrid
            autoGenerate={false}
            data={[]}
            primaryKey="ID"
            ref={rightHGridRef}
            id="hierarchicalGrid2"
            width="40%"
            emptyGridMessage="Drag and Drop a row from the left grid to this grid"
          >
            <IgrColumn
              field="Artist"
              header="Artist"
              dataType="string"
              width="150px"
            ></IgrColumn>
            <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
            <IgrColumn field="Debut" header="Debut" dataType="number"></IgrColumn>
            <IgrColumn
              field="GrammyNominations"
              header="Grammy Nominations"
              dataType="string"
              width="200px"
            ></IgrColumn>
            <IgrColumn
              field="GrammyAwards"
              header="Grammy Awards"
              dataType="string"
              width="200px"
            ></IgrColumn>
            <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
              <IgrColumn
                field="Album"
                header="Album"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="LaunchDate"
                header="Launch Date"
                dataType="date"
              ></IgrColumn>
              <IgrColumn
                field="BillboardReview"
                header="Billboard Review"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="USBillboard200"
                header="US Billboard 200"
                dataType="string"
              ></IgrColumn>
              <IgrRowIsland childDataKey="Songs" autoGenerate={false}>
                <IgrColumn
                  field="Number"
                  header="No."
                  dataType="string"
                ></IgrColumn>
                <IgrColumn
                  field="Title"
                  header="Title"
                  dataType="string"
                ></IgrColumn>
                <IgrColumn
                  field="Released"
                  header="Released"
                  dataType="date"
                ></IgrColumn>
                <IgrColumn
                  field="Genre"
                  header="Genre"
                  dataType="string"
                ></IgrColumn>
              </IgrRowIsland>
            </IgrRowIsland>
            <IgrRowIsland childDataKey="Tours" autoGenerate={false}>
              <IgrColumn field="Tour" header="Tour" dataType="string"></IgrColumn>
              <IgrColumn
                field="StartedOn"
                header="Started on"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="Location"
                header="Location"
                dataType="string"
              ></IgrColumn>
              <IgrColumn
                field="Headliner"
                header="Headliner"
                dataType="string"
              ></IgrColumn>
            </IgrRowIsland>
          </IgrHierarchicalGrid>
        </div>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
