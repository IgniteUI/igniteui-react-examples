import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { DataGridSharedData } from "./DataGridSharedData";
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

  public render(): JSX.Element {
    return (
      <div className="container sample">
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
            isColumnOptionsEnabled="true"
            dataSource={this.data}
          >
            <IgrTextColumn
              field="ProductID"
              headerText="ID"
              width="*>110"
              horizontalAlignment="center"
              isHidden="true"
            />
            <IgrTextColumn
              field="ProductName"
              headerText="Product"
              isHidden="true"
              width="*>140"
            />
            <IgrImageColumn
              field="CountryFlag"
              headerText="Country"
              width="*>140"
              contentOpacity="1"
              horizontalAlignment="center"
              paddingTop="5" paddingBottom="5"
            />
            <IgrNumericColumn
              field="ProductPrice"
              headerText="Price"
              width="*>100"
              positivePrefix="$"
              showGroupingSeparator="true"
              minFractionDigits={2}
              isHidden="true"
            />
            <IgrNumericColumn
              field="OrderItems"
              headerText="Orders"
              width="*>90"
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
              width="*>140"
              horizontalAlignment="right"
              dateTimeFormat="DateShort"
            />
            <IgrNumericColumn
              field="Margin"
              headerText="Margin"
              width="*>120"
              positiveSuffix="%"
              horizontalAlignment="center"
            />
            <IgrNumericColumn
              field="Profit"
              headerText="Profit"
              width="*>120"
              positivePrefix="$"
              showGroupingSeparator="true"
            />
            <IgrTextColumn
              field="Status"
              headerText="Status"
              width="*>120"
              horizontalAlignment="center"
            />
          </IgrDataGrid>
      </div>
    );
  }
}

// rendering above class to the React DOM
ReactDOM.render(<DataGridColumnChooserToolbar />, document.getElementById('root'));
