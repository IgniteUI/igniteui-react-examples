import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarHiding,
  IgrGridToolbarTitle,
  IgrHierarchicalGridModule,
} from "igniteui-react-grids";
import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
} from "igniteui-react-grids";
import { IgrButton, IgrIcon, IgrIconModule, registerIconFromText } from "igniteui-react";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrHierarchicalGridModule.register();
IgrIconModule.register();

const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>`;

export default function App() {
  const singersData = new SingersData();
  const hierarchicalGridRef = useRef<IgrHierarchicalGrid>(null);

  useEffect(() => {
    registerIconFromText("clear", icon, "material");
  }, []);

  function clearSort() {
    hierarchicalGridRef.current.clearSort("");
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrHierarchicalGrid
          autoGenerate={false}
          data={singersData}
          primaryKey="ID"
          ref={hierarchicalGridRef}
        >
          <IgrGridToolbar key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="singers">Singers</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={clearSort}>
              <span slot="prefix" key="clearIcon">
                <IgrIcon name="clear" collection="material"></IgrIcon>
              </span>
              <span key="clearSort">Clear Sort</span>
            </IgrButton>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarHiding key="toolbarHiding"></IgrGridToolbarHiding>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn
            field="Artist"
            header="Artist"
            dataType="string"
            width="150px"
            sortable
          ></IgrColumn>
          <IgrColumn field="Photo" header="Photo" dataType="image"></IgrColumn>
          <IgrColumn field="Debut" header="Debut" dataType="number" sortable></IgrColumn>
          <IgrColumn
            field="GrammyNominations"
            header="Grammy Nominations"
            dataType="string"
            width="200px"
            sortable
          ></IgrColumn>
          <IgrColumn
            field="GrammyAwards"
            header="Grammy Awards"
            dataType="string"
            width="200px"
            sortable
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
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
