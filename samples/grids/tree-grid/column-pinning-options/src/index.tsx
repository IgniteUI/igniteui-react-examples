import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDataItem, EmployeesFlatData } from './EmployeesFlatData';
import { IgrColumnTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
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
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatData}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        dataType="string"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="string"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        pinned={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="string"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="boolean"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}>
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatData: EmployeesFlatData = null;
    public get employeesFlatData(): EmployeesFlatData {
        if (this._employeesFlatData == null)
        {
            this._employeesFlatData = new EmployeesFlatData();
        }
        return this._employeesFlatData;
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

    public webTreeGridPinHeaderTemplate = (props: {dataContext: IgrColumnTemplateContext}) => {
        const column = (props.dataContext as any).column;
        return (
            <div>
                <span style={{float: 'left'}}>{column.field}</span>
                <span style={{float: 'right'}} onPointerDown={(e: any) => this.toggleColumnPin(column.field)}>📌</span>
            </div>
        );
    }

    public toggleColumnPin(field: string) {
        var treeGrid = this.treeGrid;
        var col = treeGrid.getColumnByName(field);
        col.pinned = !col.pinned;
        treeGrid.markForCheck();
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);