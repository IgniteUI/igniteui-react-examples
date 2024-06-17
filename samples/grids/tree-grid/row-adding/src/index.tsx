import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule, IgrActionStripModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrActionStrip, IgrGridEditingActions, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule, WebActionStripDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule,
    IgrActionStripModule
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
                    autoGenerate="false"
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesNestedTreeData}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    rowEditable="true">
                    <IgrActionStrip
                    >
                        <IgrGridEditingActions
                            addRow="true"
                            addChild="true">
                        </IgrGridEditingActions>
                    </IgrActionStrip>
                    <IgrColumn
                        field="Name"
                        header="Full Name"
                        dataType="String"
                        resizable="true"
                        sortable="true"
                        filterable="true"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number"
                        resizable="false"
                        sortable="false"
                        filterable="false"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="String"
                        resizable="true"
                        sortable="true"
                        filterable="true"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="Date"
                        resizable="true"
                        sortable="true"
                        filterable="true"
                        editable="true">
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
            WebActionStripDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);