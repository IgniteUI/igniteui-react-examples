import React, { useEffect, useRef, useState } from "react";
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule } from 'igniteui-react-grids';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule } from 'igniteui-react-core';
import { NwindDataItem, NwindDataItem_LocationsItem, NwindData } from './NwindData';
import { IgrGridKeydownEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid1Ref: React.RefObject<IgrGrid> = React.createRef<IgrGrid>();

    constructor(props: any) {
        super(props);
        this.webGridEditingExcelStyle = this.webGridEditingExcelStyle.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        const gridElement = this.grid1Ref.current;
        if (!gridElement) {
            console.error("Grid element is not found.");
        }
    }

    componentWillUnmount() {
        // No need for cleanup as React handles it
    }

    private handleKeyDown(event: React.KeyboardEvent) {
        console.log("Key pressed:", event.key);
        this.webGridEditingExcelStyle(this.grid1Ref.current, event);
    }
    

    public render(): JSX.Element {
        return (
            <div className="container sample ig-typography">
                <div className="container fill" onKeyDown={this.handleKeyDown}>
                    <IgrGrid autoGenerate="false" data={this.nwindData} primaryKey="ProductID" ref={this.grid1Ref}>
                        <IgrColumn field="ProductID" header="Product ID" editable="true" groupable="true" hidden="true" />
                        <IgrColumn field="ProductName" header="Product Name" dataType="String" editable="true" />
                        <IgrColumn field="UnitPrice" header="Unit Price" dataType="Number" editable="true" />
                        <IgrColumn field="QuantityPerUnit" header="Quantity Per Unit" groupable="true" dataType="String" editable="true" />
                        <IgrColumn field="ReorderLevel" header="Reorder Level" dataType="Number" groupable="true" editable="true" />
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

    private webGridEditingExcelStyle(sender: IgrGrid, args: React.KeyboardEvent): void {
        var key = args.key; 
        var grid1 = this.grid1Ref.current;
        var code = args.code;
        console.log('keydown: ' + key + ' ' + code);
        var activeElem = grid1.selectedCells[0];

        if(key === 'Escape') {
            activeElem.editMode = false;
            return;
        }

        if ((key >= '0' && key <= '9') || (key.toLowerCase() >= 'a' && key.toLowerCase() <= 'z') && key != 'Enter') {

            if (activeElem && activeElem.editMode === false) {
                activeElem.value = key;
                
                activeElem.editMode = true;
                grid1.markForCheck();
            }
            const inputElem = document.activeElement as HTMLInputElement;
            if (inputElem && inputElem.tagName.toLowerCase() === 'input') {
                if (inputElem.type === 'number') {
                    inputElem.type = 'text';
                    inputElem.setSelectionRange(inputElem.value.length, inputElem.value.length);
                    inputElem.type = 'number';
                } else {
                    inputElem.selectionStart = inputElem.selectionEnd = inputElem.value.length;
                }
            }
        }

        if (key === 'Enter') {

            if(activeElem == null) {
                return;
            }
            var nextRowIndex = activeElem.row.index + 1;
            if(args.shiftKey) {
                nextRowIndex = activeElem.row.index - 1;
            }
            const maxRows = grid1.data.length;
            if (nextRowIndex >= maxRows) {
                nextRowIndex--;
            }
            if(nextRowIndex < 0) {
                nextRowIndex = 0;
            }

            grid1.navigateTo(nextRowIndex, activeElem.column.colEnd, (obj: any) => {
                grid1.clearCellSelection(); 
                obj.target.activate(); 
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