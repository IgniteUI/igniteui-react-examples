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
import { IgrButton, IgrIcon, IgrIconModule } from "igniteui-react";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrHierarchicalGridModule.register();
IgrIconModule.register();

const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>`;

export default function App() {
  const singersData = new SingersData();
  const hierarchicalGridRef = useRef<IgrHierarchicalGrid>(null);
  const iconClear = useRef<IgrIcon>(null);

  useEffect(() => {
    if (iconClear?.current) {
      iconClear.current.registerIconFromText("clear", icon, "material");
    }
  }, []);

  function clearSort() {
    hierarchicalGridRef.current.clearSort("");
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrHierarchicalGrid
          autoGenerate="false"
          data={singersData}
          primaryKey="ID"
          ref={hierarchicalGridRef}
        >
          <IgrGridToolbar key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="singers">Singers</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" clicked={clearSort}>
              <span slot="prefix" key="clearIcon">
                <IgrIcon name="clear" ref={iconClear} collection="material"></IgrIcon>
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
            dataType="String"
            width="150px"
            sortable
          ></IgrColumn>
          <IgrColumn field="Photo" header="Photo" dataType="Image"></IgrColumn>
          <IgrColumn field="Debut" header="Debut" dataType="Number" sortable></IgrColumn>
          <IgrColumn
            field="GrammyNominations"
            header="Grammy Nominations"
            dataType="String"
            width="200px"
            sortable
          ></IgrColumn>
          <IgrColumn
            field="GrammyAwards"
            header="Grammy Awards"
            dataType="String"
            width="200px"
            sortable
          ></IgrColumn>
          <IgrRowIsland childDataKey="Albums" autoGenerate="false">
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
            <IgrRowIsland childDataKey="Songs" autoGenerate="false">
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
          <IgrRowIsland childDataKey="Tours" autoGenerate="false">
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
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
