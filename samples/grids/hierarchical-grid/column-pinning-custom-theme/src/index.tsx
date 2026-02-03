import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import 'igniteui-react-grids/grids/themes/dark/bootstrap.css';

function HierarchicalGridColumnPinningCustomTheme() {
    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrHierarchicalGrid
                    id="grid"
                    className="custom-grid-palette-theme"
                    data={HierarchicalCustomersData}
                    columnSelection="single"
                    primaryKey="CustomerID">
                    <IgrGridToolbar>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarPinning>
                            </IgrGridToolbarPinning>
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn
                        field="CustomerID"
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company Name"
                        pinned={true}>
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
                        autoGenerate={false}>
                        <IgrColumn
                            field="OrderDate"
                            header="Order Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            header="Required Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            header="Shipped Date"
                            dataType="date"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            header="Ship Name"
                            dataType="string"
                            resizable={true}
                            pinned={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedVia"
                            header="Shipped Via"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            header="Freight"
                            dataType="string"
                            resizable={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate={false}>
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
                            <IgrColumn
                                field="Weight"
                                header="Weight"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Length"
                                header="Length"
                                dataType="string"
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="TotalPrice"
                                header="Total Price"
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

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HierarchicalGridColumnPinningCustomTheme/>);
