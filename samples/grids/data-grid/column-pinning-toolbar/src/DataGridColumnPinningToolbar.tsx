import React from "react";
import { DataGridSharedData } from './DataGridSharedData';
import { IgrImageColumn } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrDateTimeColumn } from "igniteui-react-grids";
import { IgrDataGridModule } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrToolbarModule } from "igniteui-react-grids";
import { IgrToolbar } from "igniteui-react-grids";

IgrDataGridModule.register();
IgrToolbarModule.register();

export default class DataGridColumnChooserToolbar extends React.Component<any, any> {
  public data: any[];
  public grid: IgrDataGrid;
  public toolbar: IgrToolbar;

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

  public onToolbarRef(toolbar: IgrToolbar) {
    this.toolbar = toolbar;
    if (this.toolbar != null) {
      this.toolbar.targetGrid = this.grid;
    }
  }

  public render() {
    return (
      <div className="igContainer">
          <IgrToolbar
            ref={this.onToolbarRef}
            toolbarTitle="Global Sales"
            columnPinning="true"
          />
          <IgrDataGrid
            ref={this.onGridRef}
            height="calc(100% - 2rem)"
            width="100%"
            autoGenerateColumns="false"
            dataSource={this.data}
          >
              <IgrTextColumn pinned="left" propertyPath="ID" headerText="ID" width="*>70"  horizontalAlignment="center"/>
              <IgrTextColumn pinned="left" propertyPath="FirstName" headerText="First Name" width="*>170"/>
              <IgrTextColumn pinned="left" propertyPath="LastName" headerText="Last Name" width="*>170"/>

              <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" width="*>150" horizontalAlignment="center"/>
              <IgrNumericColumn propertyPath="Age" width="*>100" horizontalAlignment="center"/>
              <IgrImageColumn propertyPath="CountryFlag" headerText="Country" paddingTop="5" paddingBottom="5"
              width="*>140" contentOpacity="1" horizontalAlignment="center"/>

              <IgrTextColumn propertyPath="Street" headerText="Address" width="*>240"/>
              <IgrTextColumn propertyPath="City"  width="*>150" />
              <IgrTextColumn propertyPath="Country"  width="*>150" />

              <IgrNumericColumn propertyPath="Salary" width="*>100" headerText="Salary" positivePrefix="$" showGroupingSeparator="true"/>
              <IgrNumericColumn propertyPath="Sales" width="*>100" headerText="Sales" positivePrefix="$" showGroupingSeparator="true"/>
          </IgrDataGrid>
      </div>
    );
  }
}
