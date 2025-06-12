import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  IgrCellTemplateContext,
  IgrGridToolbar,
  IgrGridToolbarActions,
  IgrGridToolbarAdvancedFiltering,
  IgrGridToolbarExporter,
  IgrGridToolbarHiding,
  IgrGridToolbarPinning,
  IgrGridToolbarTitle,
  IgrTreeGrid,
  IgrTreeGridModule,
} from "igniteui-react-grids";
import { IgrColumn } from "igniteui-react-grids";
import { IgrAvatar, IgrAvatarModule, IgrCheckboxChangeEventArgs, IgrComponentValueChangedEventArgs, IgrInput, IgrInputModule, IgrSwitch, IgrSwitchModule } from "igniteui-react";

import "igniteui-react-grids/grids/themes/light/bootstrap.css";

import { EmployeesFlatAvatars } from "./EmployeesFlatAvatars";

IgrTreeGridModule.register();
IgrAvatarModule.register();
IgrSwitchModule.register();
IgrInputModule.register();

export default function App() {
  const employeesData = new EmployeesFlatAvatars();
  const treeGridRef = useRef<IgrTreeGrid>(null);

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

  const spanRef = useRef(null);

  const changeTitle = (event: IgrComponentValueChangedEventArgs) => {
    spanRef.current.innerText = event.detail;
  }

  const enableFiltering = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarFiltering = document.getElementsByTagName('igc-grid-toolbar-advanced-filtering')[0] as any;
    toolbarFiltering.hidden = !e.detail.checked;
  };

  const enableHiding = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarHiding = document.getElementsByTagName('igc-grid-toolbar-hiding')[0] as any;
    toolbarHiding.hidden = !e.detail.checked;
  };

  const enablePinning = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarPinning = document.getElementsByTagName('igc-grid-toolbar-pinning')[0] as any;
    toolbarPinning.hidden = !e.detail.checked;
  };

  const enableExport = (e: IgrCheckboxChangeEventArgs) => {
    const toolbarExporter = document.getElementsByTagName('igc-grid-toolbar-exporter')[0] as any;
    toolbarExporter.hidden = !e.detail.checked;
  };

  return (
    <div className="container sample ig-typography">
      <div className="container fill">
        <div className="control_panel">
          <IgrInput onInput={changeTitle} type="text" label="Toolbar title" value="Tree grid toolbar" />
          <IgrSwitch onChange={enableFiltering} checked>
            <span key="filtering">Advanced Filtering</span>
          </IgrSwitch>
          <IgrSwitch onChange={enableHiding} checked>
            <span key="hiding">Column hiding</span>
          </IgrSwitch>
          <IgrSwitch onChange={enablePinning} checked>
            <span key="pinning">Column pinning</span>
          </IgrSwitch>
          <IgrSwitch onChange={enableExport} checked>
            <span key="exporting">Exporting</span>
          </IgrSwitch>
        </div>

        <IgrTreeGrid
          autoGenerate={false}
          ref={treeGridRef}
          data={employeesData}
          primaryKey="ID"
          foreignKey="ParentID"
        >
          <IgrGridToolbar key="toolbar">
            <IgrGridToolbarTitle key="toolbarTitle">
              <span key="toolbarTitleText" ref={spanRef}>Tree grid toolbar</span>
            </IgrGridToolbarTitle>
            <IgrGridToolbarActions key="toolbarActions">
              <IgrGridToolbarAdvancedFiltering key="toolbarFiltering"></IgrGridToolbarAdvancedFiltering>
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
          <IgrColumn field="Title" dataType="string"></IgrColumn>
          <IgrColumn field="ID" dataType="number"></IgrColumn>
          <IgrColumn field="Age" dataType="number"></IgrColumn>
          <IgrColumn field="HireDate" dataType="date"></IgrColumn>
        </IgrTreeGrid>
      </div>
    </div>
  );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
