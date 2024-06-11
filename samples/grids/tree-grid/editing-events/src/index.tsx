import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesNestedTreeDataItem, EmployeesNestedTreeData } from './EmployeesNestedTreeData';
import { IgrGrid } from 'igniteui-react-grids';

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
        this.webTreeGridCellEdit = this.webTreeGridCellEdit.bind(this);
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
                    cellEdit={this.webTreeGridCellEdit}
                    foreignKey="ParentID">
                    <IgrColumn
                        field="name"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="title"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="age"
                        dataType="Number"
                        editable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="hireDate"
                        dataType="Date"
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
        }
        return this._componentRenderer;
    }

    public webTreeGridCellEdit(args: any): void {
    	const column = args.detail.column;

    	if (column.field === 'Age') {
    		if (args.newValue < 18) {
    			args.cancel = true;
    			alert('Employees must be at least 18 years old!');
    		}
    	} else if (column.field === 'HireDate') {
    		if (args.newValue > new Date().getTime()) {
    			args.cancel = true;
    			alert('The employee hire date must be in the past!');
    		}
    	}
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);