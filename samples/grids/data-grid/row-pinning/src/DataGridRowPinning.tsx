import * as React from 'react';
import { DataGridSharedData } from './DataGridSharedData';
// grid modules:
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridRowPinning extends React.Component<any, any> {

    public data: any[];
    public grid: IgrDataGrid;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true };
        this.onGridRef = this.onGridRef.bind(this);
        this.data = DataGridSharedData.getEmployees();
    }

    public render() {
        return (
        <div className="igContainer">

            <IgrDataGrid
                height="100%"
                width="100%"
                rowHeight="70"
                autoGenerateColumns="false"
                dataSource={this.data}
                ref={this.onGridRef}
                isColumnOptionsEnabled="true">
                {/* <IgrTextColumn propertyPath="ID"  width="*>90" /> */}
                <IgrImageColumn propertyPath="Photo" width="*>140" contentOpacity="1" horizontalAlignment="center"/>
                <IgrTextColumn propertyPath="FirstName" width="*>150" headerText="First Name" />
                <IgrTextColumn propertyPath="LastName" width="*>140" headerText="Last Name"/>
                <IgrTextColumn propertyPath="City"  width="*>120"/>
                <IgrTextColumn propertyPath="Country"  width="*>150"/>
                <IgrNumericColumn propertyPath="Sales"  width="*>140" positivePrefix="$" showGroupingSeparator="true"/>
                <IgrNumericColumn propertyPath="Age"  width="*>110"/>
                <IgrDateTimeColumn propertyPath="Birthday" width="*>170" headerText="Date of Birth" horizontalAlignment="right"/>
            </IgrDataGrid>
        </div>
        );
    }

    public onGridRef(grid: IgrDataGrid) {
        if (!grid) { return; }

        this.grid = grid;
        this.grid.pinnedItems.add(this.data[2]);
        this.grid.pinnedItems.add(this.data[4]);
    }

}
