import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGridKeydownEventArgs } from 'igniteui-react-grids';

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
                    autoGenerate={false}
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}
                    moving={true}
                    primaryKey="ProductID"
                    rowEditable={true}
                    onGridKeydown={this.webGridCustomKBNav}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID">
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units In Stock"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
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

    public webGridCustomKBNav(eventArgs: IgrGridKeydownEventArgs): void {
        const args = eventArgs.detail;
        const target = args.target;
        const evt = args.event;
        const type = args.targetType;
        const grid = eventArgs.target as IgrGrid;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
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
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
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