import React from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, ProductInfo } from "./GridLiteDataService";
import { IgrRating } from "igniteui-react";
import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
  type IgrHeaderContext,
} from "igniteui-react/grid-lite";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

const ratingHeaderTemplate = (_ctx: IgrHeaderContext) => (
  <h3>{"\u2B50 Rating \u2B50"}</h3>
);

const ratingCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly step={0.01} max={5} value={ctx.value}></IgrRating>
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
        <IgrGridLite id="grid-lite" data={data}>
          <IgrGridLiteColumn
            field="name"
            header="Product Name"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="price"
            header="Price (€)"
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="sold"
            header="Units Sold"
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="total"
            header="Total Revenue"
            dataType="number"
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="rating"
            dataType="number"
            headerTemplate={ratingHeaderTemplate}
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
