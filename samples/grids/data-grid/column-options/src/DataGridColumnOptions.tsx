import * as React from 'react';
import { DataGridSharedData } from "./DataGridSharedData";
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrColumnGroupDescription } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridColumnOptions extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.onGridRef = this.onGridRef.bind(this);
        this.state = { componentVisible: true }
        this.data = DataGridSharedData.getSales();
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        const state = new IgrColumnGroupDescription();
        state.propertyPath = "Status";
        state.displayName = "Status";
        this.grid = grid;
        this.grid.groupDescriptions.add(state);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDataGrid
                ref={this.onGridRef}
                height="100%"
                width="100%"
                rowHeight="45"
                autoGenerateColumns="false"
                isColumnOptionsEnabled="true"
                dataSource={this.data}>
                    <IgrTextColumn propertyPath="ProductID" headerText="ID" width="*>90" horizontalAlignment="center"/>
                    <IgrTextColumn propertyPath="ProductName" headerText="Product"  width="*>120" />
                    <IgrImageColumn propertyPath="CountryFlag" headerText="Country" width="*>120" paddingTop="5" paddingBottom="5"
                    contentOpacity="1" horizontalAlignment="center"/>
                    <IgrNumericColumn propertyPath="ProductPrice" headerText="Price" width="*>110"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>
                    <IgrNumericColumn propertyPath="OrderItems" headerText="Orders" width="*>110"/>
                    <IgrNumericColumn propertyPath="OrderValue" headerText="Order Value" width="*>150"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn propertyPath="OrderDate" headerText="Order Date" width="*>150"
                    horizontalAlignment="right" dateTimeFormat="DateShort" />
                    <IgrNumericColumn propertyPath="Margin" headerText="Margin" width="*>90"
                    positiveSuffix="%" horizontalAlignment="center" />
                    <IgrNumericColumn propertyPath="Profit" headerText="Profit" width="*>90"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrTextColumn propertyPath="Status" headerText="Status" width="*>110"
                    horizontalAlignment="center"   />
                </IgrDataGrid>
            </div>
        );
    }
}
