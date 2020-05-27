import React from "react";
import { DataGridSharedData } from "./DataGridSharedData";
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
    this.data = DataGridSharedData.getSales();
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
            columnChooser="true"
            columnChooserText="Hiding"
            columnChooserTitle="Column Hiding"
          />
          <IgrDataGrid
            ref={this.onGridRef}
            height="calc(100% - 2rem)"
            width="100%"
            autoGenerateColumns="false"
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
              headerText="Product Name"
              isHidden="true"
            />
            <IgrNumericColumn
              propertyPath="ProductPrice"
              headerText="Price"
              width="*>90"
              positivePrefix="$"
              showGroupingSeparator="true"
              minFractionDigits={2}
              isHidden="true"
            />
            <IgrNumericColumn
              propertyPath="OrderItems"
              headerText="Orders"
              width="*>70"
            />
            <IgrNumericColumn
              propertyPath="OrderValue"
              headerText="Order Value"
              width="*>100"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrDateTimeColumn
              propertyPath="OrderDate"
              headerText="Order Date"
              width="*>100"
              horizontalAlignment="right"
              dateTimeFormat="DateShort"
            />
            <IgrImageColumn
              propertyPath="CountryFlag"
              headerText="Country"
              width="*>100"
              contentOpacity="1"
              horizontalAlignment="center"
            />
            <IgrNumericColumn
              propertyPath="Margin"
              headerText="Margin"
              width="90"
              positiveSuffix="%"
              horizontalAlignment="center"
            />
            <IgrNumericColumn
              propertyPath="Profit"
              headerText="Profit"
              width="70"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrTextColumn
              propertyPath="Status"
              headerText="Status"
              width="110"
              horizontalAlignment="center"
            />
          </IgrDataGrid>
      </div>
    );
  }
}
