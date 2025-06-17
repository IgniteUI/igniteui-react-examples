import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrTreeGrid, IgrColumn, IgrColumnGroup } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, WebColumnGroupDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { EmployeesFlatDetailsItem, EmployeesFlatDetails } from './EmployeesFlatDetails';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrGridModule,
    IgrColumnGroupModule,
    IgrPropertyEditorPanelModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private propertyEditorPropertyDescription1: IgrPropertyEditorPropertyDescription
    private propertyEditorPropertyDescription2: IgrPropertyEditorPropertyDescription
    private treeGrid: IgrTreeGrid
    private treeGridRef(r: IgrTreeGrid) {
        this.treeGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webTreeGridPinFirstGroupToggle = this.webTreeGridPinFirstGroupToggle.bind(this);
        this.webTreeGridHideFirstGroupToggle = this.webTreeGridHideFirstGroupToggle.bind(this);
        this.treeGridRef = this.treeGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.treeGrid}
                    descriptionType="WebTreeGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Toggle First Group Pinned"
                        buttonClicked={this.webTreeGridPinFirstGroupToggle}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Toggle First Group Hidden"
                        buttonClicked={this.webTreeGridHideFirstGroupToggle}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrTreeGrid
                    autoGenerate={false}
                    data={this.employeesFlatDetails}
                    ref={this.treeGridRef}
                    id="treeGrid"
                    primaryKey="ID"
                    foreignKey="ParentID">
                    <IgrColumn
                        field="Name"
                        resizable={true}>
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="HireDate"
                            sortable={true}
                            resizable={true}>
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ID"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Age"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Country"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="City"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Address"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                        </IgrColumnGroup>
                        <IgrColumnGroup
                            header="Contact Information">
                            <IgrColumn
                                field="Phone"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Fax"
                                sortable={true}
                                resizable={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="PostalCode"
                                sortable={true}
                                resizable={true}>
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
            WebGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webTreeGridPinFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgrTreeGrid = this.treeGrid;
        const firstColumnGroup = grid.getColumnByName("HireDate").parent;
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        grid.markForCheck();
    }

    public webTreeGridHideFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const grid: IgrTreeGrid = this.treeGrid;
        const firstColumnGroup = grid.getColumnByName("HireDate").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        grid.markForCheck();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);