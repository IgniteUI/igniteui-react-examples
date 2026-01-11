import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
  IgrGridModule,
} from "igniteui-react-grids";
import {
  IgrGrid,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { AthletesData } from "./AthletesData";

IgrGridModule.register();

export default function App() {
  const athletesData = new AthletesData();
  const gridRef = useRef<IgrGrid>(null);
  const toolbarRef = useRef<IgrGridToolbar>(null);

  const localData: any[] = [];
  for (let i = 0; i < 10000; i += 3) {
    for (let c = 0; c < athletesData.length; c++) {
      localData.push(athletesData[c]);
    }
  }

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
          ref={gridRef}
          data={localData}
          autoGenerate={false}
          primaryKey="Id"
          height="350px"
        >
          <IgrGridToolbar ref={toolbarRef}  key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={showProgress}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarExporter key="toolbarExporter"></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          <IgrColumn field="Id" header="ID" dataType="number"></IgrColumn>
          <IgrColumn field="Name" header="Name"></IgrColumn>
          <IgrColumn field="Position" header="Position"></IgrColumn>
          <IgrColumn field="AthleteNumber" header="Athlete Number" dataType="number"></IgrColumn>
          <IgrColumn field="BeatsPerMinute" header="Beats Per Minute" dataType="number"></IgrColumn>
          <IgrColumn field="TopSpeed" header="Top Speed" dataType="number"></IgrColumn>
          <IgrColumn field="CountryName" header="Country"></IgrColumn>
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
