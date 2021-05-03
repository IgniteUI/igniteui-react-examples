import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import './odatajs-4.0.0';
import { IgrDataGridModule } from 'igniteui-react-grids';
import { IgrDataGrid } from 'igniteui-react-grids';
import { IgrTextColumn } from 'igniteui-react-grids';
import { IgrNumericColumn } from 'igniteui-react-grids';
import { IgrDateTimeColumn } from 'igniteui-react-grids';
import { ODataVirtualDataSource } from 'igniteui-react-datasources';
import { IgrGridColumnOptionsModule } from 'igniteui-react-grids';

IgrDataGridModule.register();
IgrGridColumnOptionsModule.register();

export default class DataGridBindingRemoteData extends React.Component<any, any> {

    public data: any[];
    private virtualData: ODataVirtualDataSource;

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
        this.initData();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDataGrid
                   width="100%"
                   height="100%"
                   autoGenerateColumns="false"
                   isColumnOptionsEnabled="true"
                   dataSource={this.virtualData}>
                   <IgrTextColumn field="OrderID" headerText="ID" width="*>110" horizontalAlignment="center"/>
                   <IgrDateTimeColumn field="OrderDate" headerText="Order Date" width="*>150"/>
                   <IgrTextColumn field="ShipName" headerText="Name"  width="*>150"/>
                   <IgrNumericColumn field="Freight" headerText="Freight" width="*>120"
                   positivePrefix="$" minFractionDigits={2}/>
                   <IgrDateTimeColumn field="ShippedDate" headerText="Ship Date" width="*>150"
                   horizontalAlignment="right"/>
                   <IgrTextColumn field="ShipAddress" headerText="Address" width="*>130" />
                   <IgrTextColumn field="ShipCity" headerText="City" width="*>150"/>
                   <IgrTextColumn field="ShipCountry" headerText="Country" width="*>150"/>
                </IgrDataGrid>
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

// rendering above class to the React DOM
ReactDOM.render(<DataGridBindingRemoteData />, document.getElementById('root'));