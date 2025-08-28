import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrPaginatorModule } from 'igniteui-react-grids';
import { IgrInputModule } from 'igniteui-react';
import { IgrGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebPaginatorDescriptionModule, WebInputDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGridBaseDirective, IgrGridEditEventArgs } from 'igniteui-react-grids';
import { IgrCellTemplateContext } from 'igniteui-react-grids';
import { IgrInput } from 'igniteui-react';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrPaginatorModule,
    IgrInputModule
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
        this.webGridOnEditEnter = this.webGridOnEditEnter.bind(this);
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
                    primaryKey="ProductID"
                    allowFiltering={true}
                    onCellEditEnter={this.webGridOnEditEnter}>
                    <IgrPaginator
                        perPage={10}>
                    </IgrPaginator>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="date"
                        sortable={true}
                        hasSummary={true}
                        editable={true}
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="boolean"
                        sortable={true}
                        hasSummary={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number"
                        sortable={true}
                        hasSummary={true}
                        inlineEditorTemplate={this.webGridNumericColEditCellTemplate}
                        editable={true}
                        filterable={false}>
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
            WebGridDescriptionModule.register(context);
            WebPaginatorDescriptionModule.register(context);
            WebInputDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webGridOnEditEnter(s: IgrGridBaseDirective, e: IgrGridEditEventArgs): void {

        const column = s.getColumnByVisibleIndex(e.detail.cellID.columnID);
        if(column.field === 'ReorderLevel') {
            setTimeout(() => {
                const rowId = e.detail.cellID.rowID;
                const columnId = e.detail.cellID.columnID;
                const inputTemplateId = `edit-cell-${rowId}-${columnId}`;
                const element = document.getElementById(inputTemplateId);
                element?.focus();
            });
        }
    }

    public webGridNumericColEditCellTemplate = (e: { dataContext: IgrCellTemplateContext }) => {

        const cell = e.dataContext.cell;
        const rowId = cell.id.rowID;
        const columnId = cell.id.columnID;
        const inputTemplateId = `edit-cell-${rowId}-${columnId}`;

        return (
            <IgrInput
                type="number"
                id={inputTemplateId}
                name={cell.id.rowID}
                value={cell.editValue}
                inputOcurred={(s:any, e: any) => {
                    cell.editValue = e.detail;
                }}
                style={{width: "100%"}}
            />
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);