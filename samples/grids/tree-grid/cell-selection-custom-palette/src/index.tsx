import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
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
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.gridRef}
                    id="grid"
                    className="custom-selection-palette"
                    data={this.ordersTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    cellSelection="multiple"
                    rowSelection="multiple"
                    columnSelection="multiple"
                    allowFiltering={true}>
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        dataType="number"
                        width="120px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        header="Order Product"
                        width="200px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        dataType="number"
                        header="Units"
                        width="120px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="currency"
                        width="150px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="currency"
                        width="150px"
                        sortable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        width="150px"
                        sortable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _ordersTreeData: OrdersTreeData = null;
    public get ordersTreeData(): OrdersTreeData {
        if (this._ordersTreeData == null)
        {
            this._ordersTreeData = new OrdersTreeData();
        }
        return this._ordersTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);