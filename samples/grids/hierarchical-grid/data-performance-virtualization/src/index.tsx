import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridCreatedEventArgs, IgrHierarchicalGridModule } from "igniteui-react-grids";
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from "igniteui-react-grids";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { getData } from "./RemoteService";

IgrHierarchicalGridModule.register();

export default function App() {
  const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);

  useEffect(() => {
    hierarchicalGrid.current.isLoading = true;

    getData({ parentID: null, rootLevel: true, key: "Customers" }).then(
      (data: any) => {
        hierarchicalGrid.current.isLoading = false;
        hierarchicalGrid.current.data = data;
        hierarchicalGrid.current.markForCheck();
      }
    );
  }, []);

  function gridCreated(
    rowIsland: IgrRowIsland,
    event: IgrGridCreatedEventArgs,
    _parentKey: string
  ) {
    const context = event.detail;
    const dataState = {
      key: rowIsland.childDataKey,
      parentID: context.parentID,
      parentKey: _parentKey,
      rootLevel: false,
    };

    context.grid.isLoading = true;

    getData(dataState).then((data: any[]) => {
      context.grid.isLoading = false;
      context.grid.data = data;
      context.grid.markForCheck();
    });
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">

        <IgrHierarchicalGrid
          ref={hierarchicalGrid}
          primaryKey="CustomerID"
          height="600px"
        >
          <IgrColumn field="CustomerID" hidden={true}></IgrColumn>
          <IgrColumn field="CompanyName" header="Company Name"></IgrColumn>
          <IgrColumn field="ContactName" header="Contact Name"></IgrColumn>
          <IgrColumn field="ContactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="Country"></IgrColumn>
          <IgrColumn field="Phone"></IgrColumn>

          <IgrRowIsland
            childDataKey="Orders"
            primaryKey="OrderID"
            gridCreated={(
              rowIsland: IgrRowIsland,
              e: IgrGridCreatedEventArgs
            ) => gridCreated(rowIsland, e, "CustomerID")}
          >
            <IgrColumn field="OrderID" hidden={true}></IgrColumn>
            <IgrColumn field="ShipCountry" header="Ship Country"></IgrColumn>
            <IgrColumn field="ShipCity" header="Ship City"></IgrColumn>
            <IgrColumn field="ShipAddress" header="Ship Address"></IgrColumn>
            <IgrColumn field="OrderDate" header="Order Date" dataType="date"></IgrColumn>

            <IgrRowIsland
              childDataKey="Order_Details"
              primaryKey="ProductID"
              gridCreated={(
                rowIsland: IgrRowIsland,
                e: IgrGridCreatedEventArgs
              ) => gridCreated(rowIsland, e, "OrderID")}
            >
              <IgrColumn field="ProductID" hidden={true}></IgrColumn>
              <IgrColumn field="Quantity"></IgrColumn>
              <IgrColumn field="UnitPrice" header="Unit Price"></IgrColumn>
              <IgrColumn field="Discount"></IgrColumn>
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
