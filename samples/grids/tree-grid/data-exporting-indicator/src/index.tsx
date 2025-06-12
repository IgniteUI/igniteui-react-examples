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
  IgrTreeGrid,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { OrdersTreeData } from "./OrdersData";

IgrHierarchicalGridModule.register();

export default function App() {
  const ordersData = new OrdersTreeData();
  const treeGridRef = useRef<IgrTreeGrid>(null);
  const toolbarRef = useRef<IgrGridToolbar>(null);

  const localData: any[] = [];
  for (let i = 0; i < 10000; i += 3) {
    for (let c = 0; c < ordersData.length; c++) {
      localData.push(ordersData[c]);
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
        <IgrTreeGrid
          ref={treeGridRef}
          data={localData}
          autoGenerate={false}
          primaryKey="ID"
          foreignKey="ParentID"
          height="350px"
        >
          <IgrGridToolbar ref={toolbarRef}  key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Tree Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" onClick={showProgress}>
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
root.render(<App />);
