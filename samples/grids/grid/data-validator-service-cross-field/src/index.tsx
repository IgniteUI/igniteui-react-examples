import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private productID: IgrColumn
    private productName: IgrColumn
    private unitPrice: IgrColumn
    private unitsOnOrder: IgrColumn
    private unitsInStock: IgrColumn
    private quantityPerUnit: IgrColumn
    private reorderLevel: IgrColumn
    private supplierID: IgrColumn
    private categoryID: IgrColumn
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
                    ref={this.gridRef}
                    data={this.nwindData}
                    rowEditable="true"
                    primaryKey="ProductID">
                    <IgrColumn
                        name="ProductID"
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        name="ProductName"
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitPrice"
                        field="UnitPrice"
                        header="Unit Price">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitsOnOrder"
                        field="UnitsOnOrder"
                        header="Units On Order">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitsInStock"
                        field="UnitsInStock"
                        header="Units In Stock">
                    </IgrColumn>
                    <IgrColumn
                        name="QuantityPerUnit"
                        field="QuantityPerUnit"
                        header="Quantity Per Unit">
                    </IgrColumn>
                    <IgrColumn
                        name="ReorderLevel"
                        field="ReorderLevel"
                        header="Reorder Level">
                    </IgrColumn>
                    <IgrColumn
                        name="SupplierID"
                        field="SupplierID"
                        header="Supplier ID">
                    </IgrColumn>
                    <IgrColumn
                        name="CategoryID"
                        field="CategoryID"
                        header="Category ID">
                    </IgrColumn>
                    <IgrColumn
                        name="Discontinued"
                        field="Discontinued"
                        header="Discontinued">
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
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);