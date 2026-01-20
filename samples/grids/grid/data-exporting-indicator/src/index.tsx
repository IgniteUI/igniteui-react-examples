import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrGridModule,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
} from "igniteui-react-grids";
import { IgrGrid, IgrColumn } from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";
import { AthletesData } from "./AthletesData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

IgrGridModule.register();

export default function App() {
  const athletesData = new AthletesData();
  const gridRef = useRef<IgrGrid>(null);
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
        <IgrGrid
          autoGenerate={false}
          data={athletesData}
          primaryKey="Id"
          ref={gridRef}
        >
          <IgrGridToolbar ref={toolbarRef}>
            <IgrGridToolbarTitle>
              <span key="athletes">Athletes</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={showProgress}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions>
              <IgrGridToolbarExporter></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn
            field="Name"
            header="Athlete"
            dataType="string"
            width="200px"
          ></IgrColumn>
          <IgrColumn
            field="CountryName"
            header="Country"
            dataType="string"
            width="200px"
          ></IgrColumn>
          <IgrColumn
            field="BeatsPerMinute"
            header="Beats Per Minute"
            dataType="number"
          ></IgrColumn>
          <IgrColumn
            field="TopSpeed"
            header="Top Speed"
            dataType="number"
          ></IgrColumn>
          <IgrColumn
            field="AthleteNumber"
            header="ID"
            dataType="number"
          ></IgrColumn>
          <IgrColumn
            field="TrackProgress"
            header="Progress"
            dataType="number"
          ></IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
