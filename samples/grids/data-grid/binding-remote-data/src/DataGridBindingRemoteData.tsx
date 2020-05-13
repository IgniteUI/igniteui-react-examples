import * as React from "react";

import './odatajs-4.0.0';


import { IgrLiveGridModule } from 'igniteui-react-grids';
import { IgrLiveGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { ODataVirtualDataSource } from 'igniteui-react-datasources';

IgrLiveGridModule.register();

export default class DataGridBindingRemoteData extends React.Component<any, any> {

    public data: any[];
    private virtualData: ODataVirtualDataSource;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLiveGrid
                   width="100%"
                   height="100%"
                   autoGenerateColumns="false"
                   dataSource={this.virtualData}>
                   <IgrTextColumn propertyPath="OrderID" headerText="Order ID" width="90" horizontalAlignment="center"/>
                   <IgrDateTimeColumn propertyPath="OrderDate" headerText="Order Date" width="110"/>
                   <IgrTextColumn propertyPath="ShipName" headerText="Name"  width="*>130"/>
                   <IgrNumericColumn propertyPath="Freight" headerText="Freight" width="80"
                   positivePrefix="$" minFractionDigits={2}/>
                   <IgrDateTimeColumn propertyPath="ShippedDate" headerText="Ship Date" width="110"
                   horizontalAlignment="right"/>
                   <IgrTextColumn propertyPath="ShipAddress" headerText="Address" />
                   <IgrTextColumn propertyPath="ShipCity" headerText="City" width="130"/>
                   <IgrTextColumn propertyPath="ShipCountry" headerText="Country" width="110"/>
                </IgrLiveGrid>
            </div>
        );
    }

    public initData() {
        const vds = new ODataVirtualDataSource();
        vds.baseUri = ("https://services.odata.org/V4/Northwind/Northwind.svc");
        vds.entitySet = ("Orders");
        this.virtualData = vds;
    }
}