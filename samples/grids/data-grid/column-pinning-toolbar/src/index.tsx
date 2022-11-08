import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { DataGridSharedData } from './DataGridSharedData';
import { IgrImageColumn } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrDateTimeColumn } from "igniteui-react-grids";
import { IgrDataGridModule } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridToolbarModule } from "igniteui-react-grids";
import { IgrDataGridToolbar } from "igniteui-react-grids";
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnPinningToolbar extends React.Component<any, any> {
  public data: any[];
  public grid: IgrDataGrid;
  public toolbar: IgrDataGridToolbar;

  constructor(props: any) {
    super(props);

    this.state = { componentVisible: true };
    this.data = DataGridSharedData.getEmployees();
  }

  public onGridRef = (grid: IgrDataGrid) => {
    this.grid = grid;
    if (this.toolbar) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public onToolbarRef = (toolbar: IgrDataGridToolbar) => {
    this.toolbar = toolbar;
    if (this.toolbar) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="container sample">
          <IgrDataGridToolbar
            ref={this.onToolbarRef}
            toolbarTitle="Global Sales"
            columnPinning="true"
          />
          <IgrDataGrid
            ref={this.onGridRef}
            height="calc(100% - 2rem)"
            width="100%"
            autoGenerateColumns="false"
            cornerRadiusTopLeft="0"
            cornerRadiusTopRight="0"
            dataSource={this.data}
            isColumnOptionsEnabled="true"
          >
              <IgrTextColumn pinned="left" field="ID" headerText="ID" width="*>110"  horizontalAlignment="center"/>
              <IgrTextColumn pinned="left" field="FirstName" headerText="First Name" width="*>190"/>
              <IgrTextColumn pinned="left" field="LastName" headerText="Last Name" width="*>190"/>

              <IgrDateTimeColumn field="Birthday" headerText="Date of Birth" width="*>170" horizontalAlignment="center"/>
              <IgrNumericColumn field="Age" width="*>120" horizontalAlignment="center"/>
              <IgrImageColumn field="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
              width="*>160" contentOpacity="1" horizontalAlignment="center"/>

              <IgrTextColumn field="Street" headerText="Address" width="*>260"/>
              <IgrTextColumn field="City"  width="*>170" />
              <IgrTextColumn field="Country"  width="*>170" />

              <IgrNumericColumn field="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
              <IgrNumericColumn field="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
          </IgrDataGrid>
      </div>
    );
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridColumnPinningToolbar/>);
