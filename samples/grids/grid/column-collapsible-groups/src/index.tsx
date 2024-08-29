import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumnGroup, IgrColumn } from 'igniteui-react-grids';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
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
                <IgrGrid
                    autoGenerate="false"
                    data={this.invoicesData}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumnGroup
                        header="Customer Information"
                        collapsible="true">
                        <IgrColumn
                            field="CustomerName"
                            header="Customer Name"
                            visibleWhenCollapsed="true">
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerID"
                            header="Customer ID"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerFirstName"
                            header="First Name"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumn
                            field="CustomerLastName"
                            header="Last Name"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Customer Address"
                            expanded="false"
                            collapsible="true">
                            <IgrColumn
                                field="CustomerAddress"
                                header="Full Address"
                                width="250px"
                                visibleWhenCollapsed="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                header="Postal Code"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="Product Details"
                        collapsible="true"
                        expanded="false">
                        <IgrColumn
                            field="ProductName"
                            header="Name"
                            visibleWhenCollapsed="true">
                        </IgrColumn>
                        <IgrColumn
                            field="UnitPrice"
                            header="Unit Price"
                            visibleWhenCollapsed="true">
                        </IgrColumn>
                        <IgrColumn
                            field="ProductID"
                            header="ID"
                            visibleWhenCollapsed="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Quantity"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumn
                            field="Quantity"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                    </IgrColumnGroup>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);