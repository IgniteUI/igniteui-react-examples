import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrGrid, IgrSummaryResult } from 'igniteui-react-grids/grids';

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
    private productID: IgrColumn
    private productName: IgrColumn
    private unitPrice: IgrColumn
    private unitsInStock: IgrColumn
    private discontinued: IgrColumn
    private orderDate: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridCustomSummary = this.webGridCustomSummary.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    columnInit={this.webGridCustomSummary}>
                    <IgrColumn
                        name="ProductID"
                        field="ProductID">
                    </IgrColumn>
                    <IgrColumn
                        name="ProductName"
                        field="ProductName"
                        header="Product Name"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitPrice"
                        field="UnitPrice"
                        header="Unit Price"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitsInStock"
                        field="UnitsInStock"
                        header="Units In Stock"
                        hasSummary="true"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        name="Discontinued"
                        field="Discontinued"
                        header="Discontinued">
                    </IgrColumn>
                    <IgrColumn
                        name="OrderDate"
                        field="OrderDate"
                        header="Order Date"
                        hasSummary="true"
                        dataType="Date">
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

    public webGridCustomSummary(args: any): void {
        //if (args.detail.field === "UnitsInStock") {
        //    args.detail.summaries = 1; //TODO CUSTOM SUMMARY - NOT IMPLEMENTED YET(?)
        //}

        //Units in Stock needs to have above "CustomSummary" class assigned to it in constructor. Not sure if this will be possible
        //with current implementation of xplat examples?
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);