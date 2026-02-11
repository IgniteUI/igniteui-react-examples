import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { AthletesData } from "./AthletesData";

import { IgrButton } from "igniteui-react";
import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
  IgrGrid,
  IgrColumn,
} from "igniteui-react-grids";


export default function GridDataExportingIndicatorSample() {
  const athletesData = new AthletesData();
  const [localData, setLocalData] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const data: any[] = [];
    for (let i = 0; i < 2000; i += 3) {
      for (let c = 0; c < athletesData.length; c++) {
        data.push(athletesData[c]);
      }
    }
    setLocalData(data);
  }, []);
  

  const setupProgressVisibility = () => {
    setShowProgress(true);

    setTimeout(() => {
      setShowProgress(false);
    }, 5000);
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          data={localData}
          autoGenerate={false}
          primaryKey="Id"
          height="350px"
        >
          <IgrGridToolbar key="toolbar" showProgress={showProgress}>
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={setupProgressVisibility}>
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
root.render(<GridDataExportingIndicatorSample />);
