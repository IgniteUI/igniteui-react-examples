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
    private shouldAppendValue: boolean = false;

    constructor(props: any) {
        super(props);
        this.webGridEditingExcelStyle = this.webGridEditingExcelStyle.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.onActiveNodeChange = this.onActiveNodeChange.bind(this);
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
        this.webGridEditingExcelStyle(this.grid1Ref.current, event);
    }

    private onActiveNodeChange = (args: any) => {
        this.grid1Ref.current.endEdit(true, args);
        var grid = document.querySelector(".igx-grid__tbody-content") as HTMLElement;
        if(grid){
            grid.focus();
        }
    }
    

    public render(): JSX.Element {
        return (
            <div className="container sample ig-typography">
                <div className="container fill" onKeyDown={this.handleKeyDown}>
                    <IgrGrid autoGenerate="false" data={this.nwindData} primaryKey="ProductID" cellSelection={"single"} ref={this.grid1Ref} activeNodeChange={this.onActiveNodeChange}>
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

    private webGridEditingExcelStyle(grid: IgrGrid, args: React.KeyboardEvent): void {
            var activeElem = grid.selectedCells[0];

            if ((args.code >= 'Digit0' && args.code <= 'Digit9') || 
                    (args.code >= 'KeyA' && args.code <= 'KeyZ') && 
                    args.code !== 'Enter') {
        
                        if (activeElem && activeElem.editMode === false) {
                            activeElem.editMode = true;
                            activeElem.editValue = args.key;
                            this.shouldAppendValue = true;
                            grid.markForCheck();
                        } else
                        
                        if (activeElem && activeElem.editMode && this.shouldAppendValue) {
                            args.preventDefault();
                            activeElem.editValue = activeElem.editValue + args.key;
                            this.shouldAppendValue = false;
                        }

                if (args.code === 'Backspace') {
                    if(activeElem == null) {
                        return;
                    }
                    const rowIndex = activeElem.row.index;
                    const columnKey = activeElem.column.field; 
            
                    grid.data[rowIndex][columnKey] = '';

                }
            }

            if (args.code === 'Enter') {
                    
                if(activeElem == null) {
                    return;
                }

                const nextRowIndex = this.getNextEditableRowIndex(activeElem.row.index, grid.dataView, args.shiftKey);    

                grid.navigateTo(nextRowIndex, activeElem.visibleColumnIndex, (obj: any) => {
                    grid.clearCellSelection(); 
                    obj.target.activate(); 
                });

            }
    }

    public getNextEditableRowIndex(currentRowIndex: number, dataView: any[], previous: boolean): number {
        if (currentRowIndex < 0 || (currentRowIndex === 0 && previous) || (currentRowIndex >= dataView.length - 1 && !previous)) {
            return currentRowIndex;
        }
        if(previous){
            for (let index = dataView.length - 1; index >= 0; index--) {
            if (index < currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView)) {
                return index;
            }
          }
        return -1
        }
        return dataView.findIndex((rec, index) => index > currentRowIndex && this.isEditableDataRecordAtIndex(index, dataView));
    }

    private isEditableDataRecordAtIndex(rowIndex: number, dataView: any[]): boolean {
        const rec = dataView[rowIndex];
        return !rec.expression && !rec.summaries && !rec.childGridsData && !rec.detailsData
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);