import React from "react";
import { DataGridSharedData } from "./DataGridSharedData";
import { IgrImageColumn } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrDateTimeColumn } from "igniteui-react-grids";
import { IgrDataGridModule } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";

import { IgrColumnChooserModule } from 'igniteui-react-grids';
import { IgrColumnChooser } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrColumnChooserModule.register();

export default class DataGridColumnChooserPicker extends React.Component<any, any> {
  public data: any[];
  public grid: IgrDataGrid;
  public columnChooser: IgrColumnChooser;

  constructor(props: any) {
    super(props);

    this.onGridRef = this.onGridRef.bind(this);
    this.onColumnChoosingRef = this.onColumnChoosingRef.bind(this);

    this.state = { componentVisible: true };
    this.data = DataGridSharedData.getSales();
  }

  public onGridRef(grid: IgrDataGrid) {
    this.grid = grid;
    if (this.columnChooser) {
      this.columnChooser.targetGrid = this.grid;
    }
  }

  public onColumnChoosingRef(columnChooser: IgrColumnChooser) {
    this.columnChooser = columnChooser;
    if (this.columnChooser) {
      this.columnChooser.targetGrid = this.grid;
    }
  }

  public render() {
    return (
      <div className="igContainer-horizontal">
          <div className="igGridColumnChooserContainer">
            <IgrColumnChooser
                ref={this.onColumnChoosingRef}
                height="100%" 
                width="200px"
                title="Column Chooser"
                showAllText="Show All"
                hideAllText="Hide All">
              </IgrColumnChooser>
          </div>
        <div className="igContainer-vertical">
          <IgrDataGrid
            ref={this.onGridRef}
            height="100%"
            width="100%"
            autoGenerateColumns="false"
            dataSource={this.data}
          >
            <IgrTextColumn
              propertyPath="ProductID"
              headerText="Order ID"
              width="*>70"
              horizontalAlignment="center"
            />
            <IgrTextColumn
              propertyPath="ProductName"
              headerText="Product Name"
            />
            <IgrNumericColumn
              propertyPath="ProductPrice"
              headerText="Price"
              width="*>90"
              positivePrefix="$"
              showGroupingSeparator="true"
              minFractionDigits={2}
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
      </div>
    );
  }
}
