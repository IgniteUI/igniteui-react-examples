import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrTreeGridModule } from 'igniteui-react-grids';
import { IgrTreeGrid, IgrColumnGroup, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, WebTreeGridDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';

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
                    autoGenerate="false"
                    ref={this.treeGridRef}
                    id="treeGrid"
                    data={this.employeesFlatDetails}
                    primaryKey="ID"
                    foreignKey="ParentID"
                    moving="true"
                    displayDensity="Compact"
                    rowSelection="None">
                    <IgrColumnGroup
                        header="General Information"
                        collapsible="true"
                        pinned="false">
                        <IgrColumn
                            field="Name"
                            header="Full Name"
                            dataType="String"
                            sortable="true"
                            resizable="true"
                            width="200"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumn
                            field="LastName"
                            header="Last Name"
                            dataType="String"
                            sortable="true"
                            resizable="true"
                            width="200"
                            visibleWhenCollapsed="true">
                        </IgrColumn>
                        <IgrColumn
                            field="Title"
                            width="250"
                            dataType="String"
                            sortable="true"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumn
                            field="ID"
                            dataType="Number"
                            resizable="true"
                            filterable="false"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumn
                            field="HireDate"
                            dataType="Date"
                            sortable="true"
                            resizable="true"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                        <IgrColumn
                            field="Age"
                            dataType="Number"
                            sortable="true"
                            resizable="true"
                            visibleWhenCollapsed="false">
                        </IgrColumn>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location"
                            collapsible="true">
                            <IgrColumn
                                field="FullAddress"
                                width="300"
                                dataType="String"
                                sortable="true"
                                resizable="true"
                                visibleWhenCollapsed="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Country"
                                dataType="String"
                                sortable="true"
                                resizable="true"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                dataType="String"
                                sortable="true"
                                resizable="true"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                dataType="String"
                                sortable="true"
                                resizable="true"
                                visibleWhenCollapsed="false">
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
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