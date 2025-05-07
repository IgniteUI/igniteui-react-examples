import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';

const mods: any[] = [
    IgrTreeGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private grid: IgrTreeGrid
    private gridRef(r: IgrTreeGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    id="grid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        dataType="String"
                        resizable="true"
                        minWidth="60"
                        maxWidth="250"
                        width="220">
                    </IgrColumn>
                    <IgrColumn
                        field="Title"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="HireDate"
                        header="Hire Date"
                        dataType="Date"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Age"
                        dataType="Number"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="String"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="String"
                        resizable="true">
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);