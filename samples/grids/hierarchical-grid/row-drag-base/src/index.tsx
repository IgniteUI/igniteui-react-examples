import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrHierarchicalGridModule,
} from "igniteui-react-grids";
import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
} from "igniteui-react-grids";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrHierarchicalGridModule.register();

export default function App() {
  const singersData = new SingersData();
  const hierarchicalGridRef = useRef<IgrHierarchicalGrid>(null); 
  const hierarchicalGridRef2 = useRef<IgrHierarchicalGrid>(null);  

  function RowDragEnd(grid: IgrHierarchicalGrid, evt: any){    
    const grid2 = hierarchicalGridRef2.current;
    const ghostElement = evt.detail.dragDirective.ghostElement;
        if (ghostElement != null) {
            const dragElementPos = ghostElement.getBoundingClientRect();
            const gridPosition = document.getElementById("hierarchicalGrid2").getElementsByTagName("igc-hierarchical-grid")[0].getBoundingClientRect();
            
            const withinXBounds = dragElementPos.x >= gridPosition.x && dragElementPos.x <= gridPosition.x + gridPosition.width;
            const withinYBounds = dragElementPos.y >= gridPosition.y && dragElementPos.y <= gridPosition.y + gridPosition.height;
            if (withinXBounds && withinYBounds) {                
                const newData = [...grid2.data];
                newData.push(evt.detail.dragData.data);
                grid2.data = newData;               
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
          ref={hierarchicalGridRef}
          rowDraggable={true}
          rowDragEnd={RowDragEnd}
        >          
          <IgrColumn
            field="Artist"
            header="Artist"
            dataType="String"
            width="150px"
          ></IgrColumn>
          <IgrColumn field="Photo" header="Photo" dataType="Image"></IgrColumn>
          <IgrColumn field="Debut" header="Debut" dataType="Number"></IgrColumn>
          <IgrColumn
            field="GrammyNominations"
            header="Grammy Nominations"
            dataType="String"
            width="200px"
          ></IgrColumn>
          <IgrColumn
            field="GrammyAwards"
            header="Grammy Awards"
            dataType="String"
            width="200px"
          ></IgrColumn>
          <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
            <IgrColumn
              field="Album"
              header="Album"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="LaunchDate"
              header="Launch Date"
              dataType="Date"
            ></IgrColumn>
            <IgrColumn
              field="BillboardReview"
              header="Billboard Review"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="USBillboard200"
              header="US Billboard 200"
              dataType="String"
            ></IgrColumn>
            <IgrRowIsland childDataKey="Songs" autoGenerate={false}>
              <IgrColumn
                field="Number"
                header="No."
                dataType="String"
              ></IgrColumn>
              <IgrColumn
                field="Title"
                header="Title"
                dataType="String"
              ></IgrColumn>
              <IgrColumn
                field="Released"
                header="Released"
                dataType="Date"
              ></IgrColumn>
              <IgrColumn
                field="Genre"
                header="Genre"
                dataType="String"
              ></IgrColumn>
            </IgrRowIsland>
          </IgrRowIsland>
          <IgrRowIsland childDataKey="Tours" autoGenerate={false}>
            <IgrColumn field="Tour" header="Tour" dataType="String"></IgrColumn>
            <IgrColumn
              field="StartedOn"
              header="Started on"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="Location"
              header="Location"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="Headliner"
              header="Headliner"
              dataType="String"
            ></IgrColumn>
          </IgrRowIsland>
        </IgrHierarchicalGrid>

        <IgrHierarchicalGrid
          autoGenerate={false}
          data={[]}
          primaryKey="ID"
          ref={hierarchicalGridRef2}
          id="hierarchicalGrid2"
          width="40%"
          emptyGridMessage="Drag and Drop a row from the left grid to this grid"
        >          
          <IgrColumn
            field="Artist"
            header="Artist"
            dataType="String"
            width="150px"
          ></IgrColumn>
          <IgrColumn field="Photo" header="Photo" dataType="Image"></IgrColumn>
          <IgrColumn field="Debut" header="Debut" dataType="Number"></IgrColumn>
          <IgrColumn
            field="GrammyNominations"
            header="Grammy Nominations"
            dataType="String"
            width="200px"
          ></IgrColumn>
          <IgrColumn
            field="GrammyAwards"
            header="Grammy Awards"
            dataType="String"
            width="200px"
          ></IgrColumn>
          <IgrRowIsland childDataKey="Albums" autoGenerate={false}>
            <IgrColumn
              field="Album"
              header="Album"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="LaunchDate"
              header="Launch Date"
              dataType="Date"
            ></IgrColumn>
            <IgrColumn
              field="BillboardReview"
              header="Billboard Review"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="USBillboard200"
              header="US Billboard 200"
              dataType="String"
            ></IgrColumn>
            <IgrRowIsland childDataKey="Songs" autoGenerate={false}>
              <IgrColumn
                field="Number"
                header="No."
                dataType="String"
              ></IgrColumn>
              <IgrColumn
                field="Title"
                header="Title"
                dataType="String"
              ></IgrColumn>
              <IgrColumn
                field="Released"
                header="Released"
                dataType="Date"
              ></IgrColumn>
              <IgrColumn
                field="Genre"
                header="Genre"
                dataType="String"
              ></IgrColumn>
            </IgrRowIsland>
          </IgrRowIsland>
          <IgrRowIsland childDataKey="Tours" autoGenerate={false}>
            <IgrColumn field="Tour" header="Tour" dataType="String"></IgrColumn>
            <IgrColumn
              field="StartedOn"
              header="Started on"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="Location"
              header="Location"
              dataType="String"
            ></IgrColumn>
            <IgrColumn
              field="Headliner"
              header="Headliner"
              dataType="String"
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
root.render(<App/>);
