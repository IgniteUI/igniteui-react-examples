import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  ColumnPinningPosition,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrPinningConfig,
  IgrTreeGrid,
  IgrColumn,
} from "igniteui-react-grids";
import { IgrButton } from "igniteui-react";
import { EmployeesFlatDetails } from "./EmployeesFlatDetails";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

export default function App() {
  const gridRef = useRef<IgrTreeGrid>(null);
  const [data, setData] = useState<any[]>([]);
  const [pinningConfig] = useState<IgrPinningConfig>({
    columns: ColumnPinningPosition.End,
  });

  useEffect(() => {
    const employeesData = new EmployeesFlatDetails();

    setData(employeesData);
  }, []);

  const pinLeft = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      col.pinned = false;
      col.pinningPosition = ColumnPinningPosition.Start;
      col.pinned = true;
    });
  };

  const pinRight = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      col.pinned = false;
      col.pinningPosition = ColumnPinningPosition.End;
      col.pinned = true;
    });
  };

  const unpinColumn = () => {
    const grid = gridRef.current;
    if (!grid) return;
    grid.selectedColumns().forEach((col) => {
      col.pinned = false;
    });
  };

  return (
    <div className="container sample">
      <div className="container horizontal wrapper">
        <IgrTreeGrid
          ref={gridRef}
          data={data}
          primaryKey="ID"
          foreignKey="ParentID"
          autoGenerate={false}
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

          <IgrColumn
            field="Name"
            dataType="string"
            width="250px"
            pinned={true}
            pinningPosition={ColumnPinningPosition.Start}
          />
          <IgrColumn
            field="Title"
            dataType="string"
            width="250px"
            pinned={true}
          />
          <IgrColumn field="ID" dataType="number" width="100px" />
          <IgrColumn
            field="HireDate"
            header="Hire Date"
            dataType="date"
            width="200px"
          />
          <IgrColumn field="Age" dataType="number" width="200px" />
          <IgrColumn
            field="Address"
            dataType="string"
            width="200px"
            disablePinning={true}
          />
          <IgrColumn field="City" dataType="string" width="200px" />
          <IgrColumn field="Country" dataType="string" width="200px" />
          <IgrColumn field="Fax" dataType="string" width="200px" />
          <IgrColumn
            field="PostalCode"
            header="Postal Code"
            dataType="string"
            width="200px"
          />
          <IgrColumn field="Phone" dataType="string" width="200px" />
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
