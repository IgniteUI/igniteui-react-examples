import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumnGroup, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomers from './HierarchicalCustomers.json';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrColumnGroupModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }
    private columnGroup: IgrColumnGroup
    private column: IgrColumn
    private rowIsland: IgrRowIsland

    constructor(props: any) {
        super(props);

        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    data={this.hierarchicalCustomers}
                    columnSelection="multiple">
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            header="Company">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                header="Name">
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                header="Title">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                header="Address"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                header="City">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                header="Postal Code"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                header="Country"
                                selectable={false}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone">
                            </IgrColumn>
                            <IgrColumn
                                field="Fax">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}
                        columnSelection="multiple">
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details">
                                <IgrColumn
                                    field="OrderID">
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID">
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="date">
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="date">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information">
                                <IgrColumn
                                    field="ShippedDate"
                                    dataType="date">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    selectable={false}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    selectable={false}>
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Location">
                                <IgrColumn
                                    field="ShipAddress">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry">
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}
                            columnSelection="single">
                            <IgrColumn
                                field="ProductID">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                selectable={false}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);