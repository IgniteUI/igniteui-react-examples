import React, { useEffect, useRef, useState } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGrid, IgrPaginator, IgrGridModule } from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemotePagingService";

IgrGridModule.register();

export default function App() {
  let data = [];
const grid = useRef<IgrGrid>(null);
const paginator = useRef<IgrPaginator>(null);
const remoteServiceInstance = new RemoteService();
let [page] = useState(0);
let [perPage, setPerPage] = useState(15);

useEffect(() => {
  if (paginator.current) {
    setPerPage(15);
    grid.current.isLoading = true;
  }

  grid.current.isLoading = true;
  loadData('Customers');
}, [page, 15]);

function loadData(dataKey: string) {
    const dataState = { key: dataKey };

    // Set loading state
    grid.current.isLoading = true;

    // Fetch data length
    remoteServiceInstance.getDataLength(dataState).then((length: number) => {
        paginator.current.totalRecords = length;
    });
  
    // Fetch data
    remoteServiceInstance.getData(dataState).then((data: any[]) => {
      grid.current.isLoading = false;
      grid.current.data = data;
      grid.current.markForCheck();
    });
  }

  function paginate(pageArgs: number) {
    page = pageArgs;
    const skip = page * perPage;
    const top = perPage;

    remoteServiceInstance.getData({ key: 'Customers' }, skip, top).then((incData:any)=> {
      data = incData; 
      grid.current.isLoading = false;
      grid.current.markForCheck();// Update the UI after receiving data
    });
}

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          ref={grid}
          primaryKey="customerId"
          height="600px"
        >
        <IgrPaginator 
          perPage="15"
          ref={paginator}
          pageChange={(evt: { page: number }) => paginate(evt.page)}
          perPageChange={() => paginate(0)}></IgrPaginator>
          <IgrColumn field="customerId" hidden={true}></IgrColumn>
          <IgrColumn field="companyName" header="Company Name"></IgrColumn>
          <IgrColumn field="contactName" header="Contact Name"></IgrColumn>
          <IgrColumn field="contactTitle" header="Contact Title"></IgrColumn>
          <IgrColumn field="address.country" header="Country"></IgrColumn>
          <IgrColumn field="address.phone" header="Phone"></IgrColumn>
        </IgrGrid>

      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
