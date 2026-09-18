import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGrid, IgrGridToolbar, IgrGridToolbarActions, IgrGridToolbarPinning, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import HierarchicalCustomersData from './HierarchicalCustomersData.json';

import 'igniteui-react-grids/grids/themes/dark/bootstrap.css';

export default function HierarchicalGridColumnPinningCustomTheme() {
    return (
        <div className="container sample ig-typography">
            <div className="container fill">
                <IgrHierarchicalGrid id="grid" className="custom-grid-palette-theme" data={HierarchicalCustomersData} columnSelection="single" primaryKey="CustomerID">
                    <IgrGridToolbar>
                        <IgrGridToolbarActions>
                            <IgrGridToolbarPinning />
                        </IgrGridToolbarActions>
                    </IgrGridToolbar>
                    <IgrColumn field="CustomerID" hidden={true} />
                    <IgrColumn field="Company" header="Company Name" pinned={true} />
                    <IgrColumn field="ContactName" header="Contact Name" />
                    <IgrColumn field="ContactTitle" header="Contact Title" />
                    <IgrColumn field="Address" header="Address" />
                    <IgrColumn field="City" header="City" />
                    <IgrColumn field="PostalCode" header="Postal Code" />
                    <IgrColumn field="Country" header="Country" />
                    <IgrColumn field="Phone" />
                    <IgrColumn field="Fax" />
                    <IgrRowIsland childDataKey="Orders" autoGenerate={false}>
                        <IgrColumn field="OrderDate" header="Order Date" dataType="date" resizable={true} />
                        <IgrColumn field="RequiredDate" header="Required Date" dataType="date" resizable={true} />
                        <IgrColumn field="ShippedDate" header="Shipped Date" dataType="date" resizable={true} />
                        <IgrColumn field="ShipName" header="Ship Name" dataType="string" resizable={true} pinned={true} />
                        <IgrColumn field="ShippedVia" header="Shipped Via" dataType="string" resizable={true} />
                        <IgrColumn field="Freight" header="Freight" dataType="string" resizable={true} />
                        <IgrRowIsland childDataKey="OrderDetails" autoGenerate={false}>
                            <IgrColumn field="UnitPrice" header="Unit Price" dataType="string" resizable={true} />
                            <IgrColumn field="Quantity" header="Quantity" dataType="string" resizable={true} />
                            <IgrColumn field="Discount" header="Discount" dataType="string" resizable={true} />
                            <IgrColumn field="Weight" header="Weight" dataType="string" resizable={true} />
                            <IgrColumn field="Length" header="Length" dataType="string" resizable={true} />
                            <IgrColumn field="TotalPrice" header="Total Price" dataType="string" resizable={true} />
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
