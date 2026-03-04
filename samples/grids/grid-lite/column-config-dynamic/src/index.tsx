import React, { useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { GridLiteDataService, ProductInfo } from "./GridLiteDataService";

import {
  IgrButton,
  IgrCheckbox,
  IgrDropdown,
  IgrDropdownItem,
  IgrDropdownItemComponentEventArgs,
  IgrRating,
  IgrSwitch,
} from "igniteui-react";
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

// Define cellTemplate functions outside component
const currencyCellTemplate = (ctx: IgrCellContext) => (
  <span>{formatter.format(ctx.value)}</span>
);

const ratingCellTemplate = (ctx: IgrCellContext) => (
  <IgrRating readOnly step={0.01} max={5} value={ctx.value}></IgrRating>
);

type GridColumnConfig = {
  field: string;
  header: string;
  dataType?: "number" | "string" | "boolean";
  hidden?: boolean;
  resizable: boolean;
  sortable: boolean;
  filterable: boolean;
  cellTemplate?: (ctx: IgrCellContext<ProductInfo>) => React.ReactNode;
};

const initialColumns: GridColumnConfig[] = [
  {
    field: "id",
    hidden: true,
    header: "ID",
    dataType: "string",
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "name",
    header: "Product Name",
    dataType: "string",
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "price",
    header: "Price",
    dataType: "number",
    cellTemplate: currencyCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "sold",
    dataType: "number",
    header: "Units Sold",
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "total",
    header: "Total Sold",
    dataType: "number",
    cellTemplate: currencyCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false,
  },
  {
    field: "rating",
    dataType: "number",
    header: "Customer Rating",
    cellTemplate: ratingCellTemplate,
    resizable: true,
    sortable: false,
    filterable: false,
  },
];

export default function Sample() {
  const dropdownRef = React.useRef<any>(null);
  const [columns, setColumns] = useState<GridColumnConfig[]>(initialColumns);
  const [data, setData] = useState<ProductInfo[]>([]);
  const [hasFormatters, setHasFormatters] = useState(true);

  useEffect(() => {
    const dataService = new GridLiteDataService();
    const data: ProductInfo[] = dataService.generateProducts(50);
    setData(data);
  }, []);

  const toggleFormatters = useCallback((checked: boolean) => {
    setColumns((prevColumns) =>
      prevColumns.map((col) =>
        col.field === "price" || col.field === "total"
          ? { ...col, cellTemplate: checked ? currencyCellTemplate : undefined }
          : col,
      ),
    );
  }, []);

  const toggleColumnProperty = React.useCallback(
    (columnField: string, property: string, value: boolean) => {
      setColumns((prevColumns) =>
        prevColumns.map((col) =>
          col.field === columnField ? { ...col, [property]: value } : col,
        ),
      );
    },
    [],
  );

  return (
    <div className="container sample ig-typography">
      <section className="panel">
        <IgrDropdown
          ref={dropdownRef}
          keepOpenOnSelect={true}
          flip={true}
          onChange={(e: IgrDropdownItemComponentEventArgs) => {
            dropdownRef.current?.clearSelection();
          }}
          id="column-select"
        >
          <div slot="target">
            <IgrButton variant="outlined">
              <span>Column Properties</span>
            </IgrButton>
          </div>
          {columns.map((column) => (
            <IgrDropdownItem key={column.field}>
              <div className="config">
                <span className="config-key">{column.header}</span>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.hidden}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "hidden",
                      e.target.checked,
                    )
                  }
                >
                  Hidden
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.resizable}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "resizable",
                      e.target.checked,
                    )
                  }
                >
                  Resizable
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.filterable}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "filterable",
                      e.target.checked,
                    )
                  }
                >
                  Filter
                </IgrCheckbox>
                <IgrCheckbox
                  labelPosition="before"
                  checked={column.sortable}
                  onChange={(e: any) =>
                    toggleColumnProperty(
                      column.field,
                      "sortable",
                      e.target.checked,
                    )
                  }
                >
                  Sort
                </IgrCheckbox>
              </div>
            </IgrDropdownItem>
          ))}
        </IgrDropdown>
        <IgrSwitch
          id="formatters"
          labelPosition="before"
          checked={hasFormatters}
          onChange={(e: any) => {
            setHasFormatters(e.target.checked);
            toggleFormatters(e.target.checked);
          }}
        >
          Value formatters:
        </IgrSwitch>
      </section>
      <div className="grid-lite-wrapper">
        <IgrGridLite id="grid-lite" data={data}>
          {columns.map((column) => (
            <IgrGridLiteColumn
              key={column.field}
              field={column.field}
              header={column.header}
              dataType={column.dataType}
              hidden={column.hidden}
              filterable={column.filterable}
              sortable={column.sortable}
              resizable={column.resizable}
              {...(column.cellTemplate
                ? { cellTemplate: column.cellTemplate }
                : {})}
            ></IgrGridLiteColumn>
          ))}
        </IgrGridLite>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sample />);
