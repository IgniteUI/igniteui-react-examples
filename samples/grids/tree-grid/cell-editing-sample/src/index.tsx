import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrSelectModule } from 'igniteui-react';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebSelectDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrSelectModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }
    private column1: IgrColumn

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
                    id="treeGrid"
                    ref={this.treeGridRef}
                    data={this.ordersTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        dataType="String"
                        editable="true"
                        inlineEditorTemplate={this.webTreeGridCellEditCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        dataType="Number"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Number"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        dataType="Boolean"
                        editable="true">
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
            WebSelectDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);