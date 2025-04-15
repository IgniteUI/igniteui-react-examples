import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
  IgrHierarchicalGridModule,
} from "igniteui-react-grids";
import {
  IgrHierarchicalGrid,
  IgrColumn,
  IgrRowIsland,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";
import { SingersData } from "./SingersData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrHierarchicalGridModule.register();

export default function App() {
  const singersData = new SingersData();
  const hierarchicalGridRef = useRef<IgrHierarchicalGrid>(null);
  const toolbarRef = useRef<IgrGridToolbar>(null);

  function showProgress() {
    toolbarRef.current.showProgress = true;

    setTimeout(() => {
      toolbarRef.current.showProgress = false;
    }, 5000);
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
          <IgrGridToolbar ref={toolbarRef}>
            <IgrGridToolbarTitle>
              <span key="singers">Singers</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" clicked={showProgress}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions>
              <IgrGridToolbarExporter></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
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
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
