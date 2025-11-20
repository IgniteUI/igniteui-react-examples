import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
  IgrRowDragEndEventArgs,
} from "igniteui-react-grids";
import { IgrIcon } from "igniteui-react";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const singersData = new SingersData();
  const treeGridRef = useRef<IgrHierarchicalGrid>(null);

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

          <IgrHierarchicalGrid
            ref={treeGridRef}
            autoGenerate={false}
            data={singersData}
            primaryKey="ID"
            height="480px"
            width="70%"
            rowDraggable={true}
            onRowDragEnd={onRowDragEnd}
          >
            <IgrColumn
              field="Artist"
              header="Artist"
              dataType="string"
              width="150px"
            ></IgrColumn>
            <IgrColumn
              field="Photo"
              header="Photo"
              dataType="image"
            ></IgrColumn>
            <IgrColumn
              field="Debut"
              header="Debut"
              dataType="number"
            ></IgrColumn>
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
              <IgrColumn
                field="Tour"
                header="Tour"
                dataType="string"
              ></IgrColumn>
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
