import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  ColumnPinningPosition,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarTitle,
  IgrHierarchicalGrid,
  IgrPinningConfig,
  IgrRowIsland,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";

import HierarchicalCustomersData from "./HierarchicalCustomersData.json";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const gridRef = useRef<IgrHierarchicalGrid>(null);
  const [data, setData] = useState<any[]>([]);
  const [pinningConfig] = useState<IgrPinningConfig>({
    columns: ColumnPinningPosition.End,
  });

  useEffect(() => {
    setData(HierarchicalCustomersData);
  }, []);

  const pinLeft = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      if (col.pinned) {
          col.unpin();
      }
      col.pin(undefined, ColumnPinningPosition.Start);
    });
  };

  const pinRight = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      if (col.pinned) {
          col.unpin();
      }
      col.pin(undefined, ColumnPinningPosition.End);
    });
  };

  const unpinColumn = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      col.unpin();
    });
  };

  return (
    <div className="container sample">
      <div className="container horizontal wrapper">
        <IgrHierarchicalGrid
          ref={gridRef}
          data={data}
          width="100%"
          height="480px"
          pinning={pinningConfig}
          autoGenerate={false}
          columnSelection="multiple"
          moving={true}
        >
          <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrButton variant="contained" onClick={unpinColumn}>
                Unpin Selected Columns
              </IgrButton>
              <IgrButton variant="contained" onClick={pinLeft}>
                Pin Selected Left
              </IgrButton>
              <IgrButton variant="contained" onClick={pinRight}>
                Pin Selected Right
              </IgrButton>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          <IgrColumn field="CustomerID" hidden={true}></IgrColumn>
          <IgrColumn
            field="Company"
            header="Company Name"
            pinned={true}
            pinningPosition={ColumnPinningPosition.Start}
          ></IgrColumn>
          <IgrColumn
            field="ContactName"
            header="Contact Name"
            pinned={true}
          ></IgrColumn>
          <IgrColumn field="ContactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="Address" header="Address"></IgrColumn>
          <IgrColumn field="City" header="City"></IgrColumn>
          <IgrColumn field="PostalCode" header="Postal Code"></IgrColumn>
          <IgrColumn field="Country" header="Country"></IgrColumn>
          <IgrColumn field="Phone"></IgrColumn>
          <IgrColumn field="Fax"></IgrColumn>
          <IgrRowIsland
            childDataKey="Orders"
            autoGenerate={false}
            pinning={pinningConfig}
          >
            <IgrColumn
              field="OrderDate"
              header="Order Date"
              dataType="date"
              resizable={true}
              pinned={true}
              pinningPosition={ColumnPinningPosition.Start}
            ></IgrColumn>
            <IgrColumn
              field="RequiredDate"
              header="Required Date"
              dataType="date"
              resizable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShippedDate"
              header="Shipped Date"
              dataType="date"
              resizable={true}
            ></IgrColumn>
            <IgrColumn
              field="ShipName"
              header="Ship Name"
              dataType="string"
              resizable={true}
              pinned={true}
            ></IgrColumn>
            <IgrColumn
              field="ShippedVia"
              header="Shipped Via"
              dataType="string"
              resizable={true}
              pinned={true}
            ></IgrColumn>
            <IgrColumn
              field="Freight"
              header="Freight"
              dataType="string"
              resizable={true}
            ></IgrColumn>
            <IgrRowIsland childDataKey="OrderDetails" autoGenerate={false}>
              <IgrColumn
                field="UnitPrice"
                header="Unit Price"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Quantity"
                header="Quantity"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Discount"
                header="Discount"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Weight"
                header="Weight"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="Length"
                header="Length"
                dataType="string"
                resizable={true}
              ></IgrColumn>
              <IgrColumn
                field="TotalPrice"
                header="Total Price"
                dataType="string"
                resizable={true}
              ></IgrColumn>
            </IgrRowIsland>
          </IgrRowIsland>
        </IgrHierarchicalGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
