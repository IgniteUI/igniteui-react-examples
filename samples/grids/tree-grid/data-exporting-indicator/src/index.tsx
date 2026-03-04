import React, { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { OrdersTreeData, OrdersTreeDataItem } from "./OrdersData";

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
  const ordersData = useMemo(() => new OrdersTreeData(), []);
  const [localData, setLocalData] = useState([]);
  const [showProgress, setShowProgress] = useState(false);

  useEffect(() => {
    const data: OrdersTreeDataItem[] = [];
    for (let i = 0; i < 2000; i++) {
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
  }, [ordersData]);

  const setupProgressVisibility = () => {
    setShowProgress(true);
  
    setTimeout(() => {
      setShowProgress(false);
    }, 5000);
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrTreeGrid
          data={localData}
          autoGenerate={false}
          primaryKey="ID"
          foreignKey="ParentID"
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

          <IgrColumn field="ID" header="Order ID" />
          <IgrColumn field="Name" header="Order Product" />
          <IgrColumn field="Category" header="Category" />
          <IgrColumn field="Units" header="Units" dataType="number" />
          <IgrColumn field="UnitPrice" header="Unit Price" dataType="currency" />
          <IgrColumn field="Price" header="Price" dataType="currency" />
          <IgrColumn field="OrderDate" header="Order Date" dataType="date" />
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<TreeGridDataExportingIndicatorSample />);
