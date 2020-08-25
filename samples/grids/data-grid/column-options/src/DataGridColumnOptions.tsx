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

    public render(): JSX.Element {
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
                    <IgrTextColumn field="ProductID" headerText="ID" width="*>90" horizontalAlignment="center"/>
                    <IgrTextColumn field="ProductName" headerText="Product"  width="*>120" />
                    <IgrImageColumn field="CountryFlag" headerText="Country" width="*>120" paddingTop="5" paddingBottom="5"
                    contentOpacity="1" horizontalAlignment="center"/>
                    <IgrNumericColumn field="ProductPrice" headerText="Price" width="*>110"
                    positivePrefix="$" showGroupingSeparator="true" minFractionDigits={2}/>
                    <IgrNumericColumn field="OrderItems" headerText="Orders" width="*>110"/>
                    <IgrNumericColumn field="OrderValue" headerText="Order Value" width="*>150"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrDateTimeColumn field="OrderDate" headerText="Order Date" width="*>150"
                    horizontalAlignment="right" dateTimeFormat="DateShort" />
                    <IgrNumericColumn field="Margin" headerText="Margin" width="*>120"
                    positiveSuffix="%" horizontalAlignment="center" />
                    <IgrNumericColumn field="Profit" headerText="Profit" width="*>120"
                    positivePrefix="$" showGroupingSeparator="true" />
                    <IgrTextColumn field="Status" headerText="Status" width="*>110"
                    horizontalAlignment="center"   />
                </IgrDataGrid>
            </div>
        );
    }
}
