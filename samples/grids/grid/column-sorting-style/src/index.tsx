import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { ProductSalesItem, ProductSales } from './ProductSales';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private sortingOptionsEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SortingOptions"
                        label="Select Sorting Type"
                        name="SortingOptionsEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    data={this.productSales}>
                    <IgrColumn
                        field="OrderID"
                        header="Order ID"
                        groupable="true"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="CategoryName"
                        header="Category Name"
                        dataType="String"
                        groupable="true"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="CompanyName"
                        header="Company"
                        dataType="String"
                        groupable="true"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        dataType="String"
                        groupable="true"
                        sortable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="SaleAmount"
                        header="Sale Amount"
                        dataType="Currency"
                        groupable="true"
                        sortable="true">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
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
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);