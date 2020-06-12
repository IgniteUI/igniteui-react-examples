import React from "react";
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

export default class DataGridColumnChooserToolbar extends React.Component<any, any> {
  public data: any[];
  public grid: IgrDataGrid;
  public toolbar: IgrDataGridToolbar;

  constructor(props: any) {
    super(props);

    this.onGridRef = this.onGridRef.bind(this);
    this.onToolbarRef = this.onToolbarRef.bind(this);

    this.state = { componentVisible: true };
    this.data = DataGridSharedData.getEmployees();
  }

  public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    if (this.toolbar != null) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public onToolbarRef(toolbar: IgrDataGridToolbar) {
    this.toolbar = toolbar;
    if (this.toolbar != null) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public render(): JSX.Element {
    return (
      <div className="igContainer">
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
              <IgrTextColumn pinned="left" propertyPath="ID" headerText="ID" width="*>110"  horizontalAlignment="center"/>
              <IgrTextColumn pinned="left" propertyPath="FirstName" headerText="First Name" width="*>190"/>
              <IgrTextColumn pinned="left" propertyPath="LastName" headerText="Last Name" width="*>190"/>

              <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" width="*>170" horizontalAlignment="center"/>
              <IgrNumericColumn propertyPath="Age" width="*>120" horizontalAlignment="center"/>
              <IgrImageColumn propertyPath="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
              width="*>160" contentOpacity="1" horizontalAlignment="center"/>

              <IgrTextColumn propertyPath="Street" headerText="Address" width="*>260"/>
              <IgrTextColumn propertyPath="City"  width="*>170" />
              <IgrTextColumn propertyPath="Country"  width="*>170" />

              <IgrNumericColumn propertyPath="Salary" width="*>120" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
              <IgrNumericColumn propertyPath="Sales" width="*>120" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
          </IgrDataGrid>
      </div>
    );
  }
}
