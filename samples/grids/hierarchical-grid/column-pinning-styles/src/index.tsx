import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule } from "@infragistics/igniteui-react-grids";
import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from "@infragistics/igniteui-react-grids";
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import "@infragistics/igniteui-react-grids/grids/combined";
import "@infragistics/igniteui-react-grids/grids/themes/light/bootstrap.css";

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
                    ref={this.gridRef}
                    id="grid"
                    data={this.hierarchicalCustomersData}
                    columnSelection="Single"
                    primaryKey="CustomerID">
                    <IgrGridToolbar
                    >
                        <IgrGridToolbarActions
                        >
                            <IgrGridToolbarPinning
                            >
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CustomerID"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="CompanyName"
                        header="Company Name"
                        pinned="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        header="Contact Name">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactTitle"
                        header="Contact Title">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate="false">
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="Date"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="Date"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="Date"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="String"
                            resizable="true"
                            pinned="true">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="String"
                            resizable="true">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate="false">
                            <IgrColumn
                                field="UnitPrice"
                                header="Unit Price"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                header="Quantity"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                header="Discount"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="String"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
                                dataType="String"
                                resizable="true">
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