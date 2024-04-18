import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrHierarchicalGrid, IgrPaginator, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebPaginatorDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrGrid, IgrGridEditEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
    IgrPaginatorModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrHierarchicalGrid
    private gridRef(r: IgrHierarchicalGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridEditingEventsCellEdit = this.webGridEditingEventsCellEdit.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    cellEdit={this.webGridEditingEventsCellEdit}
                    primaryKey="ProductID"
                    displayDensity="Cosy"
                    allowFiltering="true">
                    <IgrPaginator
                        perPage="10">
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="String"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsOnOrder"
                        header="Units in Order"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="Boolean"
                        sortable="true"
                        hasSummary="true"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        editable="true"
                        filterable="false">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Locations"
                        autoGenerate="false">
                        <IgrColumn
                            field="Shop"
                            header="Shop"
                            dataType="String"
                            editable="true"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="LastInventory"
                            header="Last Inventory"
                            dataType="Date"
                            editable="true"
                            resizable="true">
                        </IgrColumn>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
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
            WebHierarchicalGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridEditingEventsCellEdit(sender: IgrHierarchicalGrid, args: IgrGridEditEventArgs): void {
        var d = args.detail;

        if (d.column != null && d.column.field == "UnitsOnOrder") {
            if (d.newValue > d.rowData.UnitsInStock) {
                d.cancel = true;
                alert("You cannot order more than the units in stock!")
            }
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);