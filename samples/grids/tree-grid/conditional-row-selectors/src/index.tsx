import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDataItem, EmployeesFlatData } from './EmployeesFlatData';
import { IgrRowSelectionEventArgs, IgrGrid } from 'igniteui-react-grids';

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
        this.webTreeGridRowSelectionConditional = this.webTreeGridRowSelectionConditional.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.employeesFlatData}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID"
                    rowSelection="multiple"
                    onRowSelectionChanging={this.webTreeGridRowSelectionConditional}>
                    <IgrColumn
                        field="Name"
                        dataType="string">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        header="Job Title">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="date">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="number">
                    </IgrColumn>
                    <IgrColumn
                        field="OnPTO"
                        dataType="boolean">
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

    public webTreeGridRowSelectionConditional(sender: IgrTreeGrid, eventArgs: IgrRowSelectionEventArgs): void {
        const event = eventArgs.detail;
        if (!event.added.length && event.removed.length) {
            // ignore de-select
            return;
        }
        var grid = this.treeGrid;
        const originalAddedLength = event.added.length;

        // only allow selection for employees that are not pn PTO
        event.newSelection = event.newSelection.filter(x => x.OnPTO === true);

        // cleanup selection if all conditionally selectable rows are already selected
        if (event.newSelection.length
            && !event.newSelection.filter((x: any) => event.oldSelection.indexOf(x) === -1).length
            && originalAddedLength > 1) {
                // all selected from header, de-select instead
                event.newSelection = [];
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);