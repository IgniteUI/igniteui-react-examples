import * as React from "react";


import { SharedData } from "./DataGridSharedData";

// grid modules:
import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { IgrImageColumn } from 'igniteui-react-grids';

IgrLiveGridModule.register();

export default class DataGridRowPinning extends React.Component<any, any> {

    public data: any[];
    public grid: IgrLiveGrid;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true };
        this.onGridRef = this.onGridRef.bind(this);
        this.data = SharedData.getEmployees();
    }

    public render() {
        return (
        <div className="igContainer">

            <IgrLiveGrid
                height="100%"
                width="100%"
                rowHeight="70"
                autoGenerateColumns="false"
                dataSource={this.data}
                ref={this.onGridRef}>
                <IgrTextColumn propertyPath="ID"  width="80" />
                <IgrTextColumn propertyPath="FirstName" headerText="First Name" />
                <IgrTextColumn propertyPath="LastName" headerText="Last Name" width="100"/>
                <IgrTextColumn propertyPath="City"  width="100"/>
                <IgrTextColumn propertyPath="Country"  width="100"/>

                <IgrNumericColumn propertyPath="Sales"  width="120" positivePrefix="$" showGroupingSeparator="true"/>
                <IgrNumericColumn propertyPath="Age"  width="70"/>
                <IgrDateTimeColumn propertyPath="Birthday" headerText="Date of Birth" horizontalAlignment="right"/>
                <IgrImageColumn propertyPath="Photo" contentOpacity="1" horizontalAlignment="center"/>
            </IgrLiveGrid>
        </div>
        );
    }

    public onGridRef(grid: IgrLiveGrid) {
        this.grid = grid;
        this.grid.pinnedItems.add(this.data[2]);
        this.grid.pinnedItems.add(this.data[4]);
    }

}