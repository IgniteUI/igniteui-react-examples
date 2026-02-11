import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { OrdersTreeData } from "./OrdersData";

import { IgrButton } from "igniteui-react";
import {
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarTitle,
  IgrTreeGrid,
  IgrColumn
} from "igniteui-react-grids";


export default function TreeGridDataExportingIndicatorSample() {
  const ordersData = new OrdersTreeData();
  const [localData, setLocalData] = useState([]);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const data: any[] = [];
    for (let i = 0; i < 1000; i++) {
      for (let c = 0; c < ordersData.length; c++) {
        const original = ordersData[c];
        data.push({
          ...original,
          ID: original.ID + (i * ordersData.length),
          ParentID: original.ParentID === -1 ? -1 : original.ParentID + (i * ordersData.length)
        });
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
        <IgrTreeGrid
          data={localData}
          autoGenerate={false}
          primaryKey="ID"
          foreignKey="ParentID"
          height="350px"
        >
          <IgrGridToolbar key="toolbar" showProgress={showProgress}>
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Tree Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={setupProgressVisibility}>
              <span key="simulate">Simulate long running operation</span>
            </IgrButton>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarExporter key="toolbarExporter"></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          <IgrColumn field="ID" header="Order ID"></IgrColumn>
          <IgrColumn field="Name" header="Order Product"></IgrColumn>
          <IgrColumn field="Category" header="Category"></IgrColumn>
          <IgrColumn field="Units" header="Units" dataType="number"></IgrColumn>
          <IgrColumn field="UnitPrice" header="Unit Price" dataType="currency"></IgrColumn>
          <IgrColumn field="Price" header="Price" dataType="currency"></IgrColumn>
          <IgrColumn field="OrderDate" header="Order Date" dataType="date"></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TreeGridDataExportingIndicatorSample />);
