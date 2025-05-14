import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrColumn,
  IgrGridCreatedEventArgs,
  IgrHierarchicalGrid,
  IgrPaginator,
  IgrRowIsland,
} from "igniteui-react-grids";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";
import { RemoteService } from "./RemoteService";
import { IgrNumberEventArgs } from "igniteui-react";
import { CustomersWithPageResponseModel } from "./CustomersWithPageResponseModel";

export default function App() {
  const hierarchicalGrid = useRef<IgrHierarchicalGrid>(null);
  const paginator = useRef<IgrPaginator>(null);

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(15);

  useEffect(() => {
    loadGridData(page, perPage);
  }, [page, perPage]);

  function loadGridData(pageIndex?: number, pageSize?: number) {
    // Set loading state
    hierarchicalGrid.current.isLoading = true;

    // Fetch data
    RemoteService.getCustomersDataWithPaging(pageIndex, pageSize)
      .then((response: CustomersWithPageResponseModel) => {
        setData(response.items);
        // Stop loading when data is retrieved
        hierarchicalGrid.current.isLoading = false;

        paginator.current.totalRecords = response.totalRecordsCount;
      })
      .catch((error) => {
        console.error(error.message);
        setData([]);
        // Stop loading even if error occurs. Prevents endless loading
        hierarchicalGrid.current.isLoading = false;
      });
  }

  function gridCreated(event: IgrGridCreatedEventArgs, parentKey: string) {
    const context = event.detail;
    context.grid.isLoading = true;

    const parentId: string = context.parentID;
    const childDataKey: string = context.owner.childDataKey;

    RemoteService.getHierarchyDataById(parentKey, parentId, childDataKey)
      .then((data: any) => {
        context.grid.data = data;
        context.grid.isLoading = false;
        context.grid.markForCheck();
      })
      .catch((error) => {
        console.error(error.message);
        context.grid.data = [];
        context.grid.isLoading = false;
        context.grid.markForCheck();
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
        <IgrHierarchicalGrid
          ref={hierarchicalGrid}
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

          <IgrRowIsland
            childDataKey="Orders"
            primaryKey="orderId"
            onGridCreated={(e: IgrGridCreatedEventArgs) =>
              gridCreated(e, "Customers")
            }
          >
            <IgrColumn field="orderId" hidden={true}></IgrColumn>
            <IgrColumn
              field="shipAddress.country"
              header="Ship Country"
            ></IgrColumn>
            <IgrColumn field="shipAddress.city" header="Ship City"></IgrColumn>
            <IgrColumn
              field="shipAddress.street"
              header="Ship Address"
            ></IgrColumn>
            <IgrColumn
              field="orderDate"
              header="Order Date"
              dataType="date"
            ></IgrColumn>

            <IgrRowIsland
              childDataKey="Details"
              primaryKey="productId"
              onGridCreated={(e: IgrGridCreatedEventArgs) =>
                gridCreated(e, "Orders")
              }
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
