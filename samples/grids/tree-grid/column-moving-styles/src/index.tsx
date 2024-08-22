import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrPaginator, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';
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
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn
    private column4: IgrColumn
    private column5: IgrColumn
    private column6: IgrColumn
    private column7: IgrColumn
    private column8: IgrColumn
    private column9: IgrColumn
    private column10: IgrColumn
    private column11: IgrColumn

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
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    moving="true"
                    columnWidth="200">
                    <IgrPaginator
                        perPage="10"
                        totalRecords="20">
                    </IgrPaginator>
                    <IgrColumn
                        field="Name"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="ID"
                        dataType="Number"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column3">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        dataType="Date"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column4">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column5">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column6">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column7">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column8">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column9">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column10">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="String"
                        headerTemplate={this.webTreeGridPinHeaderTemplate}
                        name="column11">
                    </IgrColumn>
                </IgrTreeGrid>
            </div>
        </div>
        );
    }

    private _employeesFlatDetails: EmployeesFlatDetails = null;
    public get employeesFlatDetails(): EmployeesFlatDetails {
        if (this._employeesFlatDetails == null)
        {
            this._employeesFlatDetails = new EmployeesFlatDetails();
        }
        return this._employeesFlatDetails;
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