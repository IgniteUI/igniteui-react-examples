import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

import 'igniteui-react-grids/grids/combined';
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
    private column1: IgrColumn
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "USD";
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
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
                    autoGenerate="false"
                    data={this.ordersTreeData}
                    ref={this.gridRef}
                    id="grid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        groupable="true"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Name"
                        dataType="String"
                        groupable="true"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Category"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="Currency"
                        sortable="true"
                        pipeArgs={this.columnPipeArgs1}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Units"
                        header="Units"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Delivered"
                        header="Units"
                        dataType="Boolean"
                        sortable="true">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);