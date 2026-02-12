import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { AthletesData, AthletesDataItem } from "./AthletesData";

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
  const athletesData = useMemo(() => new AthletesData(), []);
  const [localData, setLocalData] = useState([]);
  const [showProgress, setShowProgress] = useState(false);
  
  useEffect(() => {
    const data: AthletesDataItem[] = [];
    let uniqueId = 0;
    for (let i = 0; i < 2000; i ++) {
      for (let c = 0; c < athletesData.length; c++) {
        data.push({ ...athletesData[c], Id: uniqueId++ });
      }
    }
    setLocalData(data);
  }, [athletesData]);
  

  const setupProgressVisibility = () => {
    setShowProgress(true);

    setTimeout(() => {
      setShowProgress(false);
    }, 5000);
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          data={localData}
          autoGenerate={false}
          primaryKey="Id"
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

          <IgrColumn field="Id" header="ID" dataType="number" />
          <IgrColumn field="Name" header="Name" />
          <IgrColumn field="Position" header="Position" />
          <IgrColumn field="AthleteNumber" header="Athlete Number" dataType="number" />
          <IgrColumn field="BeatsPerMinute" header="Beats Per Minute" dataType="number" />
          <IgrColumn field="TopSpeed" header="Top Speed" dataType="number" />
          <IgrColumn field="CountryName" header="Country" />
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GridDataExportingIndicatorSample />);
