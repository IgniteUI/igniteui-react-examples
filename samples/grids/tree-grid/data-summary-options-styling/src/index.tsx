import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

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
                    autoGenerate={false}
                    data={this.ordersTreeData}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Category"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        header="Price"
                        dataType="number"
                        hasSummary={true}
                        editable={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Delivered"
                        dataType="boolean"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        hasSummary={true}
                        headerTemplate={this.webTreeGridSummariesHeaderTemplate}>
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

    public webTreeGridSummariesHeaderTemplate = (props: { dataContext: IgrColumnTemplateContext }) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{ float: 'left' }}>{column.field}</span>
                <span style={{ float: 'right', color: column.hasSummary ? '#e41c77' : '' }} onPointerDown={(e: any) => this.toggleSummary(column)}>∑</span>
            </div>
        );
    }

        public toggleSummary(field: IgrColumn) {
            if (field) {
                field.hasSummary = !field.hasSummary;
                (this as any).setState({ summary: field.hasSummary });
            }
        }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);