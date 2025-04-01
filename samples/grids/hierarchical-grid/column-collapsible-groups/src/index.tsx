import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrColumnGroup, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate={false}
                    data={this.hierarchicalCustomersData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="CustomerID">
                    <IgrColumnGroup
                        header="General Information"
                        collapsible={true}>
                        <IgrColumn
                            field="ContactName"
                            header="Contact Name"
                            visibleWhenCollapsed={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ContactTitle"
                            header="Contact Title"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerID"
                            header="Customer ID"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumn
                            field="Company"
                            header="Company Name"
                            visibleWhenCollapsed={false}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Address Information"
                            collapsible={true}>
                            <IgrColumnGroup
                                header="Location"
                                width="250px"
                                visibleWhenCollapsed={true}>
                                <IgrColumn
                                    field="Country"
                                    header="Country"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="City"
                                    header="City"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="Address"
                                    header="Address"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                                <IgrColumn
                                    field="PostalCode"
                                    header="Postal Code"
                                    visibleWhenCollapsed={true}>
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate={false}>
                        <IgrColumnGroup
                            header="Order Details"
                            collapsible={true}>
                            <IgrColumn
                                field="OrderID"
                                header="Order ID"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="EmployeeID"
                                header="Employee ID"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="OrderDate"
                                header="Order Date"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="RequiredDate"
                                header="Required Date"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="General Shipping Information"
                            collapsible={true}>
                            <IgrColumn
                                field="ShippedDate"
                                header="Shipped Date"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipVia"
                                header="Ship Via"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Freight"
                                header="Freight"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipName"
                                header="Ship Name"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Shipping Location"
                            collapsible={true}>
                            <IgrColumn
                                field="ShipAddress"
                                header="Ship Address"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipCity"
                                header="Ship City"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipPostalCode"
                                header="Ship Postal Code"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="ShipCountry"
                                header="Ship Country"
                                visibleWhenCollapsed={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
                            <IgrColumn
                                field="ProductID"
                                header="Product ID"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomersData: any[] = HierarchicalCustomersData;
    public get hierarchicalCustomersData(): any[] {
        return this._hierarchicalCustomersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);