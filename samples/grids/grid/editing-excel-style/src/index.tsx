import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrGridKeydownEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.grid1Ref = this.grid1Ref.bind(this);
        this.webGridEditingExcelStyle = this.webGridEditingExcelStyle.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrGrid
                    autoGenerate={false}
                    data={this.nwindData}
                    primaryKey="ProductID"
                    onGridKeydown={this.webGridEditingExcelStyle}
                    ref={this.grid1Ref}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID"
                        editable={true}
                        groupable={true}
                        hidden={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="number"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="QuantityPerUnit"
                        header="Quantity Per Unit"
                        groupable={true}
                        dataType="string"
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="ReorderLevel"
                        header="Reorder Level"
                        dataType="number"
                        groupable={true}
                        editable={true}>
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
        }
        return this._componentRenderer;
    }

    public webGridEditingExcelStyle(args: IgrGridKeydownEventArgs): void {
        var key = (args.detail.event as any).keyCode;
        var grid = args.detail.target.grid;
        var activeElem = grid.navigation.activeNode;

        if ((key >= 48 && key <= 57) || (key >= 65 && key <= 90) || (key >= 97 && key <= 122)) {
            var columnName = grid.getColumnByVisibleIndex(activeElem.column).field;
            var cell = grid.getCellByColumn(activeElem.row, columnName);

            if (cell && !grid.crudService.cellInEditMode) {
                grid.crudService.enterEditMode(cell);
                cell.editValue = key;
            }
        }

        if (key == 13) {
            var thisRow = activeElem.row;
            var column = activeElem.column;
            var rowInfo = grid.dataView;

            var nextRow = this.getNextEditableRowIndex(thisRow, rowInfo, (args.detail.event as any).shiftKey);

            grid.navigateTo(nextRow, column, (obj: any) => {
                obj.target.activate();
                grid.clearCellSelection();
            });
        }
    }

    public getNextEditableRowIndex(currentRowIndex: number, dataView: any, previous: boolean) {
        if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
            return currentRowIndex;
        }
        if (previous) {
            return dataView.findLastIndex((rec: any, index: number) => index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
        }
        return dataView.findIndex((rec: any, index: number) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
    }

    public isEditableDataRecordAtIndex(dataViewIndex: number, dataView: any) {
        const rec = dataView[dataViewIndex];
        return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);