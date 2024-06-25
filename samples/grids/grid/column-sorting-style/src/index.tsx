import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { ProductSalesItem, ProductSales } from './ProductSales';

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
                <IgrGrid
                    autoGenerate="false"
                    data={this.productSales}
                    ref={this.gridRef}
                    id="grid">
                    <IgrColumn
                        field="OrderID"
                        header="Order ID"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Category"
                        header="Category Name"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        header="Company"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        dataType="String"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="SaleAmount"
                        header="Sale Amount"
                        dataType="Currency"
                        sortable="true"
                        pipeArgs={this.columnPipeArgs1}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ShippedDate"
                        header="Shipped Date"
                        dataType="Date"
                        sortable="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _productSales: ProductSales = null;
    public get productSales(): ProductSales {
        if (this._productSales == null)
        {
            this._productSales = new ProductSales();
        }
        return this._productSales;
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