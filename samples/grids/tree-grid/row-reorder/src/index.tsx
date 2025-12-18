import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';
import { IgrRowDragStartEventArgs, IgrRowDragEndEventArgs } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
        this.webTreeGridReorderRowStartHandler = this.webTreeGridReorderRowStartHandler.bind(this);
        this.webTreeGridReorderRowHandler = this.webTreeGridReorderRowHandler.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesNestedTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    onRowDragStart={this.webTreeGridReorderRowStartHandler}
                    rowDraggable={true}
                    onRowDragEnd={this.webTreeGridReorderRowHandler}>
                    <IgrColumn
                        field="Name"
                        header="Full Name"
                        dataType="string"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        resizable={false}
                        sortable={false}
                        filterable={false}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="date"
                        resizable={true}
                        sortable={true}
                        filterable={true}
                        editable={true}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesNestedTreeData: EmployeesNestedTreeData = null;
    public get employeesNestedTreeData(): EmployeesNestedTreeData {
        if (this._employeesNestedTreeData == null)
        {
            this._employeesNestedTreeData = new EmployeesNestedTreeData();
        }
        return this._employeesNestedTreeData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebTreeGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridReorderRowStartHandler(args: IgrRowDragStartEventArgs){
        const draggedRow = args.detail.dragData;
        if(draggedRow.expanded){
            draggedRow.expanded = false;
        }
    }

    public webTreeGridReorderRowHandler(args: IgrRowDragEndEventArgs): void {
        const ghostElement = args.detail.dragDirective.ghostElement;
        if (!ghostElement) {
            return;
        }
        const dragElementPos = ghostElement.getBoundingClientRect();
        const grid = this.treeGrid;
        const rows = Array.prototype.slice.call(document.getElementsByTagName("igx-tree-grid-row"));
        const currRowIndex = this.getCurrentRowIndex(rows,
        { x: dragElementPos.x, y: dragElementPos.y });
        if (currRowIndex === -1) { return; }
        const draggedRow = args.detail.dragData.data;
        const childRows = this.findChildRows(grid.data, draggedRow);
        //remove the row that was dragged and place it onto its new location
        grid.deleteRow(args.detail.dragData.key);
        grid.data.splice(currRowIndex, 0, args.detail.dragData.data);
        // reinsert the child rows
        childRows.reverse().forEach(childRow => {
            grid.data.splice(currRowIndex + 1, 0, childRow);
        });
    }

    private findChildRows(rows: any[], parent: any): any[] {
        const childRows: any[] = [];
        rows.forEach(row => {
            if (row.ParentID === parent.ID) {
                childRows.push(row);
                // Recursively find children of current row
                const grandchildren = this.findChildRows(rows, row);
                childRows.push(...grandchildren);
            }
        });
        return childRows;
    }

    public getCurrentRowIndex(rowList: any[], cursorPosition: any) {
        for (const row of rowList) {
            const rowRect = row.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                // return the index of the targeted row
                return parseInt(row.attributes["data-rowindex"].value);
            }
        }
        return -1;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);