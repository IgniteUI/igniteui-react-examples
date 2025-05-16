import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { OrdersDataItem, OrdersData } from './OrdersData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.ordersData}
                    filterMode="QuickFilter"
                    primaryKey="ID"
                    foreignKey="ParentID"
                    allowFiltering="true">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number"
                        sortable="true"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="Currency">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date">
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        dataType="Boolean">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersData: OrdersData = null;
    public get ordersData(): OrdersData {
        if (this._ordersData == null)
        {
            this._ordersData = new OrdersData();
        }
        return this._ordersData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);