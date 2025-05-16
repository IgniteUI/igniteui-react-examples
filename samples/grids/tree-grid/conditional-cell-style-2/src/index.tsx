import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { OrdersTreeDataItem, OrdersTreeData } from './OrdersTreeData';

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
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn
    private column4: IgrColumn

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.ordersTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="ID"
                        header="Order ID"
                        dataType="String"
                        cellStyles={this.webTreeGridCellStylesHandler}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Order Product"
                        dataType="String"
                        cellStyles={this.webTreeGridCellStylesHandler}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Currency"
                        cellStyles={this.webTreeGridCellStylesHandler}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        cellStyles={this.webTreeGridCellStylesHandler}
                        name="column4">
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


    public webTreeGridCellStylesHandler = {
        background: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => rowIndex % 2 === 0 ? "#EFF4FD" : null,
        color: (rowData: any, columnKey: any, cellValue: any, rowIndex: any) => {
            if (columnKey === "UnitPrice") {
                if (cellValue > 10) return "#dc3545";
                if (cellValue < 5) return "#28a745";
                if (cellValue >= 5 && cellValue <= 10) return "#17a2b8";
            }
            return undefined;
        }
    };

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);