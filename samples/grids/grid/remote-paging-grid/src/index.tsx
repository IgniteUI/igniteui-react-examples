import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrGrid, IgrPaginator, GridPagingMode } from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";
import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemotePagingService";
import { CustomersWithPageResponseModel } from "./CustomersWithPageResponseModel";
import { IgrNumberEventArgs } from "igniteui-react";

export default function App() {
  const grid = useRef<IgrGrid>(null);
  const paginator = useRef<IgrPaginator>(null);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);

  function loadGridData(pageIndex?: number, pageSize?: number) {
    grid.current.isLoading = true;

    RemoteService.getDataWithPaging(pageIndex, pageSize)
      .then((response: CustomersWithPageResponseModel) => {
        setData(response.items);
        grid.current.isLoading = false;
        paginator.current.totalRecords = response.totalRecordsCount;
      })
      .catch((error) => {
        console.error(error.message);
        setData([]);
        grid.current.isLoading = false;
      });
  }

  function onPageNumberChange(args: IgrNumberEventArgs) {
    setPage(args.detail);
  }

  function onPageSizeChange(args: IgrNumberEventArgs) {
    setPerPage(args.detail);
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <IgrGrid
          ref={grid}
          data={data}
          pagingMode={"remote"}
          primaryKey="customerId"
          height="600px"
        >
          <IgrPaginator
            perPage={perPage}
            ref={paginator}
            onPageChange={onPageNumberChange}
            onPerPageChange={onPageSizeChange}
          ></IgrPaginator>
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

// Render the component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
