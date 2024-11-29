import React, { useEffect, useRef, useState } from "react";

import ReactDOM from "react-dom/client";
import "./index.css";

import { IgrGrid, IgrPaginator, IgrGridModule, GridPagingMode } from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemotePagingService";
import { CustomersWithPageResponseModel } from "./CustomersWithPageResponseModel";
import { IgrNumberEventArgs } from "igniteui-react";

IgrGridModule.register();

export default function App() {
  const grid = useRef<IgrGrid>(null);
  const paginator = useRef<IgrPaginator>(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);

  function loadGridData(pageIndex?: number, pageSize?: number) {
    // Set loading state
    setIsLoading(true);

    // Fetch data
    RemoteService.getDataWithPaging(pageIndex, pageSize)
      .then((response: CustomersWithPageResponseModel) => {
        setData(response.items);
        // Stop loading when data is retrieved
        setIsLoading(false);
        paginator.current.totalRecords = response.totalRecordsCount;
      })
      .catch((error) => {
        console.error(error.message);
        setData([]);
        // Stop loading even if error occurs. Prevents endless loading
        setIsLoading(false);
      })
  }

  function onPageNumberChange(paginator: IgrPaginator, args: IgrNumberEventArgs) {
    setPage(args.detail);
  }

  function onPageSizeChange(paginator: IgrPaginator, args: IgrNumberEventArgs) {
    setPerPage(args.detail);
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          ref={grid}
          data={data}
          pagingMode={GridPagingMode.Remote}
          primaryKey="customerId"
          height="600px"
          isLoading={isLoading}
        >
        <IgrPaginator 
          perPage={perPage}
          ref={paginator}
          pageChange={onPageNumberChange}
          perPageChange={onPageSizeChange}>
        </IgrPaginator>
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
