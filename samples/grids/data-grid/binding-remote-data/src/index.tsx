import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './odatajs-4.0.0';
import { IgrDataGridModule } from "@infragistics/igniteui-react-grids";
import { IgrDataGrid } from "@infragistics/igniteui-react-grids";
import { IgrTextColumn } from "@infragistics/igniteui-react-grids";
import { IgrNumericColumn } from "@infragistics/igniteui-react-grids";
import { IgrDateTimeColumn } from "@infragistics/igniteui-react-grids";
import { ODataVirtualDataSource } from "@infragistics/igniteui-react-datasources";
import { IgrGridColumnOptionsModule } from "@infragistics/igniteui-react-grids";

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
        vds.baseUri = ("https://services.odata.org/northwind/northwind.svc");
        vds.entitySet = ("Orders");
        this.virtualData = vds;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataGridBindingRemoteData/>);
