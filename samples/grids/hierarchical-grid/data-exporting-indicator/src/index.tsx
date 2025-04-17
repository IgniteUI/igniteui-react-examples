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
            <IgrButton key="btn" onClick={showProgress}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions>
              <IgrGridToolbarExporter></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
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
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
