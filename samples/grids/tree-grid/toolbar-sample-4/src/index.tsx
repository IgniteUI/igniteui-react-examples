import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrCellTemplateContext,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarExporter,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrGridToolbarTitle,
  IgrTreeGrid,
  IgrTreeGridModule,
} from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";
import { IgrAvatar, IgrAvatarModule, IgrButton, IgrIcon, IgrIconModule } from "igniteui-react";

import "igniteui-react-grids/grids/combined";
import "igniteui-react-grids/grids/themes/light/bootstrap.css";

import { EmployeesFlatAvatars } from "./EmployeesFlatAvatars";

IgrTreeGridModule.register();
IgrAvatarModule.register();
IgrIconModule.register();

const icon = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>`;

export default function App() {
  const employeesData = new EmployeesFlatAvatars();
  const treeGridRef = useRef<IgrTreeGrid>(null);
  const iconClear = useRef<IgrIcon>(null);

  useEffect(() => {
    if (iconClear?.current) {
      iconClear.current.registerIconFromText("clear", icon, "material");
    }
  }, []);

  function webTreeGridAvatarCellTemplate(props: {
    dataContext: IgrCellTemplateContext;
  }) {
    return (
      <div className="cell__inner">
        <IgrAvatar
          shape="circle"
          src={props.dataContext.cell.row.data.Avatar}
        ></IgrAvatar>
        <span className="name">{props.dataContext.cell.value}</span>
      </div>
    );
  }

  function clearSort() {
    treeGridRef.current.clearSort("");
  }

  return (
    <div className="container sample ig-typography">
      <div className="container fill">

        <IgrTreeGrid
          autoGenerate="false"
          ref={treeGridRef}
          data={employeesData}
          primaryKey="ID"
          foreignKey="ParentID"
        >
          <IgrGridToolbar key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText">Tree Grid Toolbar</span>
            </IgrGridToolbarTitle>
            <IgrButton key="btn" clicked={clearSort}>
              <span slot="prefix" key="clearIcon">
                <IgrIcon name="clear" ref={iconClear} collection="material"></IgrIcon>
              </span>
              <span key="clearSort">Clear Sort</span>
            </IgrButton>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarHiding key="toolbarHiding"></IgrGridToolbarHiding>
              <IgrGridToolbarPinning key="toolbarPinning"></IgrGridToolbarPinning>
              <IgrGridToolbarExporter key="toolbarExporter"></IgrGridToolbarExporter>
            </IgrGridToolbarActions>
          </IgrGridToolbar>
          <IgrColumn
            field="Name"
            dataType="string"
            bodyTemplate={webTreeGridAvatarCellTemplate}
          ></IgrColumn>
          <IgrColumn field="Title" dataType="string" sortable="true"></IgrColumn>
          <IgrColumn field="ID" dataType="number" sortable="true"></IgrColumn>
          <IgrColumn field="Age" dataType="number" sortable="true"></IgrColumn>
          <IgrColumn field="HireDate" dataType="date" sortable="true"></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
