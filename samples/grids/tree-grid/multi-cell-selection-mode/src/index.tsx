import React, { useRef } from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";

import {
  IgrGridModule,
  IgrTreeGridModule,
  IgrGridBaseDirective,
} from "igniteui-react-grids";
import { IgrGrid, IgrTreeGrid, IgrColumn, IgrGridSelectionRangeEventArgs } from "igniteui-react-grids";
import { EmployeesFlatData } from "./EmployeesFlatData";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

const mods: any[] = [
    IgrGridModule,
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default function App() {
  const employeesFlatData = new EmployeesFlatData();
  const leftTreeGridRef = useRef<IgrTreeGrid>(null);
  const rightGridRef = useRef<IgrGrid>(null);

  function handleTreeGridRangeSelectionChanged(args: IgrGridSelectionRangeEventArgs) {
    rightGridRef.current!.data = (args.target as any).getSelectedData(
      false,
      false
    ) as unknown as any[];
  }

  return (
    <div className="container sample">
      <div className="container horizontal wrapper">
        <IgrTreeGrid
          autoGenerate={false}
          ref={leftTreeGridRef}
          id="leftTreeGrid"
          width="50%"
          height="100%"
          data={employeesFlatData}
          primaryKey="ID"
          foreignKey="ParentID"
          cellSelection="multiple"
          onRangeSelected={handleTreeGridRangeSelectionChanged}
        >
          <IgrColumn field="ID" dataType="number" />
          <IgrColumn field="Name" dataType="string" />
          <IgrColumn field="Age" dataType="number" />
          <IgrColumn field="Title" dataType="string" />
          <IgrColumn field="HireDate" dataType="date" />
        </IgrTreeGrid>
        <IgrGrid ref={rightGridRef} id="rightGrid" autoGenerate={false} width="50%" height="100%">
          <IgrColumn field="ID" dataType="number" />
          <IgrColumn field="Name" dataType="string" />
          <IgrColumn field="Age" dataType="number" />
          <IgrColumn field="Title" dataType="string" />
          <IgrColumn field="HireDate" dataType="date" />
        </IgrGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
