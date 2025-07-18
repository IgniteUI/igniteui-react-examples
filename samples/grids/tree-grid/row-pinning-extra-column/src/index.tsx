import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrPinningConfig, RowPinningPosition, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

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
    private  _pinningConfig1: IgrPinningConfig | null = null;
    public get pinningConfig1(): IgrPinningConfig {
        if (this._pinningConfig1 == null)
        {
            var pinningConfig1: IgrPinningConfig = {} as IgrPinningConfig;
            pinningConfig1.rows = RowPinningPosition.Top;

            this._pinningConfig1 = pinningConfig1;
        }
        return this._pinningConfig1;
    }

    constructor(props: any) {
        super(props);

        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    data={this.employeesNestedTreeData}
                    rowEditable={true}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    cellSelection="none"
                    pinning={this.pinningConfig1}>
                    <IgrColumn
                        width="150px"
                        filterable={false}
                        pinned={true}
                        bodyTemplate={this.webTreeGridRowPinCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Name"
                        header="Full Name">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="Title">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
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

    public webTreeGridRowPinCellTemplate = (e: {dataContext: IgrCellTemplateContext}) => {
        const index = e.dataContext.cell.row.index;
        return (
            <span onPointerDown={(e: any) => this.toggleRowPin(index)} style={{ cursor: 'pointer'}}>📌</span>
        );
    }

    public toggleRowPin(index: number) {
        var treeGrid = this.treeGrid;
        treeGrid.getRowByIndex(index).pinned = !treeGrid.getRowByIndex(index).pinned;
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);