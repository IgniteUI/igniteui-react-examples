import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, ProductInfo } from "./GridLiteDataService";

import { IgrRating } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const formatter = new Intl.NumberFormat("en-150", {
  style: "currency",
  currency: "EUR",
});

const formatCurrency = (value: number) => formatter.format(value);

// Define cellTemplate functions outside component
const currencyCellTemplate = (ctx: IgrCellContext) => (
  <span>{formatCurrency(ctx.value)}</span>
);

const ratingCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly max={5} value={ctx.value}></IgrRating>
);

export default function Sample() {
  const [data, setData] = React.useState<ProductInfo[]>([]);

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const items: ProductInfo[] = dataService.generateProducts(50);
    setData(items);
  }, []);

  return (
    <div className="container sample ig-typography">
      <div className="grid-lite-wrapper">
        <IgrGridLite data={data} id="grid-lite">
          <IgrGridLiteColumn
            field="name"
            header="Product Name"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="price"
            header="Price"
            dataType="number"
            cellTemplate={currencyCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="sold"
            dataType="number"
            header="Units Sold"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="total"
            header="Total sold"
            cellTemplate={currencyCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="rating"
            dataType="number"
            header="Customer Rating"
            cellTemplate={ratingCellTemplate}
          ></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
