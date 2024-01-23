import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrActionStrip, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';

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
    private iD: IgrColumn
    private reorderLevel: IgrColumn
    private productName: IgrColumn
    private unitsInStock: IgrColumn
    private unitPrice: IgrColumn
    private orderDate: IgrColumn
    private discontinued: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    id="grid"
                    data={this.nwindData}
                    primaryKey="ProductID"
                    rowEditable="true">
                    <IgrActionStrip
                    >
                        <IgrGridEditingActions
                            addRow="true">
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        name="ID"
                        field="ProductID"
                        header="Product ID"
                        dataType="Number"
                        hidden="true">
                    </IgrColumn>
                    <IgrColumn
                        name="ReorderLevel"
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        name="ProductName"
                        field="ProductName"
                        header="Product Name"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitsInStock"
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitPrice"
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Number"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        name="OrderDate"
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date">
                    </IgrColumn>
                    <IgrColumn
                        name="Discontinued"
                        field="Discontinued"
                        header="Discontinued"
                        dataType="Boolean">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: NwindData = null;
    public get nwindData(): NwindData {
        if (this._nwindData == null)
        {
            this._nwindData = new NwindData();
        }
        return this._nwindData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);