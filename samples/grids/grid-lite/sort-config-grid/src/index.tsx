import React, { useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import { IgrRating, IgrSwitch } from "igniteui-react";
import { GridLiteDataService, ProductInfo } from "./GridLiteDataService";

import {
  IgrGridLite,
  IgrGridLiteColumn,
  type IgrCellContext,
} from "igniteui-react/grid-lite";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import "./index.css";

// Define cellTemplate function outside component
const ratingCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly step={0.01} max={5} value={ctx.value}></IgrRating>
);

export default function Sample() {
  const gridRef = useRef<any>(null);
  const [data, setData] = useState<ProductInfo[]>([]);
  const [sortingOptions, setSortingOptions] = useState<any>({
    mode: "multiple",
  });

  React.useEffect(() => {
    const dataService = new GridLiteDataService();
    const items: ProductInfo[] = dataService.generateProducts(100);
    setData(items);
  }, []);

  const updateConfig = React.useCallback((checked: boolean) => {
    const mode = checked ? "multiple" : "single";
    setSortingOptions((prev: any) => ({ ...prev, mode }));
    gridRef.current?.clearSort();
  }, []);

  return (
    <div className="container sample ig-typography">
      <section className="config-panel">
        <IgrSwitch
          id="multisort"
          checked={sortingOptions.mode === "multiple"}
          onChange={(e: any) => updateConfig(e.target.checked)}
        >
          Enable multi-sort
        </IgrSwitch>
      </section>
      <div className="grid-lite-wrapper">
        <IgrGridLite
          ref={gridRef}
          id="grid-lite"
          data={data}
          sortingOptions={sortingOptions}
        >
          <IgrGridLiteColumn
            field="name"
            header="Name"
            sortable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="price"
            dataType="number"
            header="Price"
            sortable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="rating"
            dataType="number"
            header="Rating"
            sortable
            cellTemplate={ratingCellTemplate}
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="sold"
            dataType="number"
            header="Sold"
            sortable
          ></IgrGridLiteColumn>
          <IgrGridLiteColumn
            field="total"
            dataType="number"
            header="Total"
            sortable
          ></IgrGridLiteColumn>
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
