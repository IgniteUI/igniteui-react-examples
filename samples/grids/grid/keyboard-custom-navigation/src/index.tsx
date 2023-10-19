import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrGridKeydownEventArgs, GridKeydownTargetType } from 'igniteui-react-grids';

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
    private reorderLevel: IgrColumn
    private productName: IgrColumn
    private unitsInStock: IgrColumn
    private orderDate: IgrColumn
    private discontinued: IgrColumn

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
        this.webGridCustomKBNav = this.webGridCustomKBNav.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    data={this.nwindData}
                    moving="true"
                    primaryKey="ProductID"
                    displayDensity="Cosy"
                    rowEditable="true"
                    gridKeydown={this.webGridCustomKBNav}>
                    <IgrColumn
                        name="ProductID"
                        field="ProductID"
                        header="Product ID">
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
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        name="UnitsInStock"
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="Number">
                    </IgrColumn>
                    <IgrColumn
                        name="OrderDate"
                        field="OrderDate"
                        header="Order Date">
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

    public webGridCustomKBNav(sender: IgrGrid, evtArgs: IgrGridKeydownEventArgs): void {
        const args = evtArgs.detail;
        const target = args.target;
        const evt = args.event;
        const type = args.targetType;
        var grid = this.grid as any;

        if (type === GridKeydownTargetType.DataCell && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
                return;
            }
            const cell = evt.shiftKey ?
            grid.getPreviousCell(target.row.index, target.column.visibleIndex, (col: any) => col.editable) :
            grid.getNextCell(target.row.index, target.column.visibleIndex, (col: any) => col.editable);

            grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj: any) => { obj.target.activate(); });
        } else if (type === GridKeydownTargetType.DataCell && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            grid.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj: any) => {
                obj.target.activate();
            });
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);