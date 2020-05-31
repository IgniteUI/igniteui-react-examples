import React from "react";
import { DataGridSharedData } from "./DataGridSharedData";
import { IgrImageColumn } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrDateTimeColumn } from "igniteui-react-grids";
import { IgrDataGridModule } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrDataGridToolbarModule } from "igniteui-react-grids";
import { IgrDataGridToolbar } from "igniteui-react-grids";

IgrDataGridModule.register();
IgrDataGridToolbarModule.register();

export default class DataGridColumnChooserToolbar extends React.Component<any, any> {

  public data: any[];
  public grid: IgrDataGrid;
  public toolbar: IgrDataGridToolbar;

  constructor(props: any) {
    super(props);

    this.onGridRef = this.onGridRef.bind(this);
    this.onToolbarRef = this.onToolbarRef.bind(this);

    this.state = { componentVisible: true };
    this.data = DataGridSharedData.getSales();
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

  public render() {
    return (
      <div className="igContainer">
          <IgrDataGridToolbar
            ref={this.onToolbarRef}
            toolbarTitle="Global Sales"
            columnChooser="true"
          />
          <IgrDataGrid
            ref={this.onGridRef}
            height="calc(100% - 2rem)"
            width="100%"
            autoGenerateColumns="false"
            cornerRadiusTopLeft="0"
            cornerRadiusTopRight="0"
            dataSource={this.data}
          >
            <IgrTextColumn
              propertyPath="ProductID"
              headerText="Order ID"
              width="*>70"
              horizontalAlignment="center"
              isHidden="true"
            />
            <IgrTextColumn
              propertyPath="ProductName"
              headerText="Product"
              isHidden="true"
              width="*>140"
            />
            <IgrImageColumn
              propertyPath="CountryFlag"
              headerText="Country"
              width="*>140"
              contentOpacity="1"
              horizontalAlignment="center"
              paddingTop="5" paddingBottom="5"
            />
            <IgrNumericColumn
              propertyPath="ProductPrice"
              headerText="Price"
              width="*>100"
              positivePrefix="$"
              showGroupingSeparator="true"
              minFractionDigits={2}
              isHidden="true"
            />
            <IgrNumericColumn
              propertyPath="OrderItems"
              headerText="Orders"
              width="*>60"
            />
            <IgrNumericColumn
              propertyPath="OrderValue"
              headerText="Order Value"
              width="*>140"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrDateTimeColumn
              propertyPath="OrderDate"
              headerText="Order Date"
              width="*>140"
              horizontalAlignment="right"
              dateTimeFormat="DateShort"
            />
            <IgrNumericColumn
              propertyPath="Margin"
              headerText="Margin"
              width="*>120"
              positiveSuffix="%"
              horizontalAlignment="center"
            />
            <IgrNumericColumn
              propertyPath="Profit"
              headerText="Profit"
              width="*>120"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrTextColumn
              propertyPath="Status"
              headerText="Status"
              width="*>120"
              horizontalAlignment="center"
            />
          </IgrDataGrid>
      </div>
    );
  }
}
