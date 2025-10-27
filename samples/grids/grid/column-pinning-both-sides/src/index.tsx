import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  ColumnPinningPosition,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrPinningConfig,
  IgrGrid,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";
import { CustomersData } from "./CustomersData";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const gridRef = useRef<IgrGrid>(null);
  const [data, setData] = useState<any[]>([]);
  const [columns, setColumns] = useState<any[]>([]);

  const pinningConfig: IgrPinningConfig = {
    columns: ColumnPinningPosition.End,
  };

  useEffect(() => {
    const customers = new CustomersData();

    setData(customers);
    setColumns([
      { field: "CompanyName", header: "Company Name", width: 300 },
      {
        field: "ContactName",
        header: "Contact Name",
        width: 200,
        pinned: true,
        pinningPosition: ColumnPinningPosition.Start,
      },
      {
        field: "ContactTitle",
        header: "Contact Title",
        width: 200,
        pinned: true,
        pinningPosition: ColumnPinningPosition.End,
      },
      { field: "Address", header: "Address", width: 300 },
      { field: "City", header: "City", width: 120 },
      { field: "Region", header: "Region", width: 120 },
      { field: "PostalCode", header: "Postal Code", width: 150 },
      { field: "Phone", header: "Phone", width: 150 },
      { field: "Fax", header: "Fax", width: 150 },
    ]);
  }, []);

  const pinLeft = () => {
    gridRef.current?.selectedColumns().forEach((col: IgrColumn) => {
      col.pinned = false; 
      col.pinningPosition = ColumnPinningPosition.Start;
      col.pinned = true; 
    });
  };
  const pinRight = () => {
    gridRef.current?.selectedColumns().forEach((col: IgrColumn) => {
      col.pinned = false; 
      col.pinningPosition = ColumnPinningPosition.End;
      col.pinned = true; 
  };
  const unpinColumn = () => {
    gridRef.current?.selectedColumns().forEach((col: IgrColumn) => {
      col.pinned = false;
    });
  };

  return (
    <div className="container sample">
      <div className="container horizontal wrapper">
        <IgrGrid
          ref={gridRef}
          data={data}
          width="100%"
          height="480px"
          columnSelection="multiple"
          pinning={pinningConfig}
          moving={true}
        >
          <IgrGridToolbar>
            <IgrGridToolbarActions>
              <IgrButton variant="contained" onClick={unpinColumn}>
                Unpin Column
              </IgrButton>
              <IgrButton variant="contained" onClick={pinLeft}>
                Pin Left
              </IgrButton>
              <IgrButton variant="contained" onClick={pinRight}>
                Pin Right
              </IgrButton>
            </IgrGridToolbarActions>
          </IgrGridToolbar>

          {columns.map((c) => (
            <IgrColumn
              key={c.field}
              field={c.field}
              header={c.header}
              width={c.width}
              pinned={c.pinned}
              hidden={c.hidden}
              pinningPosition={c?.pinningPosition}
            />
          ))}
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);