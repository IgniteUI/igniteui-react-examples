import React from "react";
import { DataGridSharedData } from "./DataGridSharedData";

import { IgrImageColumn } from "igniteui-react-grids";
import { IgrTextColumn } from "igniteui-react-grids";
import { IgrNumericColumn } from "igniteui-react-grids";
import { IgrDateTimeColumn } from "igniteui-react-grids";
import { IgrDataGridModule } from "igniteui-react-grids";
import { IgrDataGrid } from "igniteui-react-grids";
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

import { IgrColumnChooserModule } from 'igniteui-react-grids';
import { IgrColumnChooser } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrColumnChooserModule.register();
IgrGridColumnOptionsModule.register();

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

  public render(): JSX.Element {
    return (
      <div className="igContainer-horizontal">
          <div className="igGridColumnChooserContainer">
            <IgrColumnChooser
                ref={this.onColumnChoosingRef}
                height="100%"
                width="200px"
                title="Column Chooser">
              </IgrColumnChooser>
          </div>
        <div className="igContainer-vertical">
          <IgrDataGrid
            ref={this.onGridRef}
            height="100%"
            width="100%"
            autoGenerateColumns="false"
            isColumnOptionsEnabled="true"
            dataSource={this.data}
          >
            <IgrTextColumn
              field="ProductID"
              headerText="ID"
              width="*>90"
              horizontalAlignment="center"
            />
            <IgrTextColumn
              field="ProductName"
              headerText="Product" width="*>100"
            />
            <IgrImageColumn
              field="CountryFlag"
              headerText="Country"
              width="*>120"
              contentOpacity="1"
              horizontalAlignment="center"
              paddingTop="5" paddingBottom="5"
            />
            <IgrNumericColumn
              field="ProductPrice"
              headerText="Price"
              width="*>110"
              positivePrefix="$"
              showGroupingSeparator="true"
              minFractionDigits={2}
            />
            <IgrNumericColumn
              field="OrderItems"
              headerText="Orders"
              width="*>100"
            />
            <IgrNumericColumn
              field="OrderValue"
              headerText="Order Value"
              width="*>140"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrDateTimeColumn
              field="OrderDate"
              headerText="Order Date"
              width="*>130"
              horizontalAlignment="right"
              dateTimeFormat="DateShort"
            />
            <IgrNumericColumn
              field="Margin"
              headerText="Margin"
              width="*>100"
              positiveSuffix="%"
              horizontalAlignment="center"
            />
            <IgrNumericColumn
              field="Profit"
              headerText="Profit"
              width="*>100"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrTextColumn
              field="Status"
              headerText="Status"
              width="*>110"
              horizontalAlignment="center"
            />
          </IgrDataGrid>
        </div>
      </div>
    );
  }
}
