import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGridCreatedEventArgs, IgrHierarchicalGridModule, IgrPaginator } from "igniteui-react-grids";
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from "igniteui-react-grids";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemoteService";

IgrHierarchicalGridModule.register();

export default function App() {
const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);
const paginator = useRef<IgrPaginator>(null);
const remoteServiceInstance = new RemoteService();
let [page, setPage] = useState(0);
let [perPage, setPerPage] = useState(15);
const [data, setData] = useState([]);

useEffect(() => {
  if (paginator.current) {
    setPerPage(15);
    hierarchicalGrid.current.isLoading = true;
  }

  hierarchicalGrid.current.isLoading = true;

  remoteServiceInstance.getData({ parentID: null, rootLevel: true, key: "Customers", page, perPage }).then(
    (data: any) => {
        hierarchicalGrid.current.isLoading = false;
        hierarchicalGrid.current.data = data;
        hierarchicalGrid.current.markForCheck();
    }
  );
}, [page, 15]);

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

    remoteServiceInstance.getDataLength(dataState).then((length: number) => {
        paginator.current.totalRecords = length;
    });
    remoteServiceInstance.getData(dataState).then((data: any[]) => {
        context.grid.isLoading = false;
        context.grid.data = data;
        context.grid.markForCheck();
    });
  }

  function paginate(pageArgs: number) {
    setPage(pageArgs);
    const skip = pageArgs * perPage;
    const top = perPage;

    remoteServiceInstance.getData({ parentID: null, rootLevel: true, key: 'Customers' }, skip, top).then((incData:any)=> {
      setData(incData);
      hierarchicalGrid.current.isLoading = false;
      hierarchicalGrid.current.markForCheck();// Update the UI after receiving data
    });
}

  return (
    <div className="container sample ig-typography">
      <div className="container fill">

        <IgrHierarchicalGrid
          ref={hierarchicalGrid}
          primaryKey="customerId"
          height="600px"
          data={data}
        >
          <IgrPaginator 
            perPage={perPage}
            ref={paginator}
            pageChange={(evt: { page: number }) => paginate(evt.page)}
            perPageChange={() => paginate(page)}>
          </IgrPaginator>
          <IgrColumn field="customerId" hidden={true}></IgrColumn>
          <IgrColumn field="companyName" header="Company Name"></IgrColumn>
          <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
          <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="address.country" header="Country"></IgrColumn>
          <IgrColumn field="address.phone" header="Phone"></IgrColumn>

          <IgrRowIsland
            childDataKey="Orders"
            primaryKey="orderId"
            gridCreated={(
              rowIsland: IgrRowIsland,
              e: IgrGridCreatedEventArgs
            ) => gridCreated(rowIsland, e, "Customers")}
          >
            <IgrColumn field="orderId" hidden={true}></IgrColumn>
            <IgrColumn field="shipAddress.country" header="Ship Country"></IgrColumn>
            <IgrColumn field="shipAddress.city" header="Ship City"></IgrColumn>
            <IgrColumn field="shipAddress.street" header="Ship Address"></IgrColumn>
            <IgrColumn field="orderDate" header="Order Date" dataType="date"></IgrColumn>

            <IgrRowIsland
              childDataKey="Details"
              primaryKey="productId"
              gridCreated={(
                rowIsland: IgrRowIsland,
                e: IgrGridCreatedEventArgs
              ) => gridCreated(rowIsland, e, "Orders")}
            >
              <IgrColumn field="productId" hidden={true}></IgrColumn>
              <IgrColumn field="quantity" header="Quantity"></IgrColumn>
              <IgrColumn field="unitPrice" header="Unit Price"></IgrColumn>
              <IgrColumn field="discount" header="Discount"></IgrColumn>
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
