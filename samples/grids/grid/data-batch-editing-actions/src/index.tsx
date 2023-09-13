import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';
import { IgrGrid } from 'igniteui-react-grids/grids';

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
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private propertyEditorPropertyDescription1: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription2: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription3: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription4: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn
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

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webGridAddRow = this.webGridAddRow.bind(this);
        this.webGridUndo = this.webGridUndo.bind(this);
        this.webGridRedo = this.webGridRedo.bind(this);
        this.webGridCommit = this.webGridCommit.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        label=""
                        valueType="Button"
                        primitiveValue="Add Row"
                        buttonClicked={this.webGridAddRow}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label=""
                        valueType="Button"
                        primitiveValue="Undo"
                        buttonClicked={this.webGridUndo}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label=""
                        valueType="Button"
                        primitiveValue="Redo"
                        buttonClicked={this.webGridRedo}
                        name="propertyEditorPropertyDescription3">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label=""
                        valueType="Button"
                        primitiveValue="Commit"
                        buttonClicked={this.webGridCommit}
                        name="propertyEditorPropertyDescription4">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    ref={this.gridRef}
                    data={this.nwindData}
                    rowEditable="true"
                    primaryKey="ProductID">
                    <IgrColumn
                        bodyTemplate={this.webGridDeleteCellTemplate}
                        name="column1">
                    </IgrColumn>
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

    public webGridAddRow(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        //TODO
        var grid = this.grid;
        const randomInteger = (start: number, end: number) => Math.floor(Math.random() * (end - start + 1)) + start;
        const randomFloat = (start: number, end: number) => Math.random() * (end - start) + start;

        //TODO Refactor later
        if (!(grid as any).__productId) {
            (grid as any).__productId = 0;
        }
        var year = randomInteger(2000, 2050);
        var month = randomInteger(0, 11);
        var day = randomInteger(1, 25);
        grid.addRow({
            CategoryID: randomInteger(1, 10),
            Discontinued: randomInteger(1, 10) % 2 === 0,
            OrderDate: new Date(year, month, day).toISOString().slice(0, 10),
            ProductID: (grid as any).__productId++,
            ProductName: 'Product with index ' + randomInteger(0, 20),
            QuantityPerUnit: (randomInteger(1, 10) * 10).toString() + ' pcs.',
            ReorderLevel: randomInteger(10, 20),
            SupplierID: randomInteger(1, 20),
            UnitPrice: randomInteger(10, 1000),
            UnitsInStock: randomInteger(1, 100),
            UnitsOnOrder: randomInteger(1, 20)
        });

        console.log("test");
    }

    public webGridUndo(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        //TODO

        var grid = this.grid;
        //grid.endEdit(true);
        //grid.transactions.undo();

    }

    public webGridRedo(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        //TODO

        var grid = this.grid;

        //grid.endEdit(true);
        //grid.transactions.redo();

    }

    public webGridCommit(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        //TODO

        var grid = this.grid;

        // grid.transactions.commit(grid.data);
        //dialog.close();

        console.log("test");
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);