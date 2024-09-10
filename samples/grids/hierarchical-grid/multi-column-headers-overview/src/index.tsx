import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrHierarchicalGridModule, IgrColumnGroupModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrColumn, IgrColumnGroup, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, WebHierarchicalGridDescriptionModule, WebColumnGroupDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrPropertyEditorPropertyDescriptionButtonClickEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrHierarchicalGridModule,
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
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webHierarchicalGridPinFirstGroupToggle = this.webHierarchicalGridPinFirstGroupToggle.bind(this);
        this.webHierarchicalGridHideFirstGroupToggle = this.webHierarchicalGridHideFirstGroupToggle.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.hierarchicalGrid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Pin First Group"
                        buttonClicked={this.webHierarchicalGridPinFirstGroupToggle}
                        name="propertyEditorPropertyDescription1">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        valueType="Button"
                        primitiveValue="Hide First Group"
                        buttonClicked={this.webHierarchicalGridHideFirstGroupToggle}
                        name="propertyEditorPropertyDescription2">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="CustomerID"
                    moving="true"
                    allowFiltering="true">
                    <IgrColumn
                        field="CustomerID"
                        dataType="String"
                        sortable="true"
                        resizable="true">
                    </IgrColumn>
                    <IgrColumnGroup
                        header="General Information">
                        <IgrColumn
                            field="Company"
                            dataType="String"
                            sortable="true"
                            resizable="true">
                        </IgrColumn>
                        <IgrColumnGroup
                            header="Personal Details">
                            <IgrColumn
                                field="ContactName"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="ContactTitle"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrColumnGroup
                        header="Address Information">
                        <IgrColumnGroup
                            header="Location">
                            <IgrColumn
                                field="Address"
                                dataType="String"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="City"
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
                            <IgrColumn
                                field="Country"
                                dataType="String"
                                sortable="true"
                                resizable="true">
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
                        </IgrColumnGroup>
                    </IgrColumnGroup>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate="false">
                        <IgrColumnGroup
                            header="Order Information">
                            <IgrColumnGroup
                                header="Order Details">
                                <IgrColumn
                                    field="OrderID"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="EmployeeID"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="OrderDate"
                                    dataType="Date"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="RequiredDate"
                                    dataType="Date"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="General Shipping Information">
                                <IgrColumn
                                    field="ShipDate"
                                    dataType="Date"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipVia"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="Freight"
                                    dataType="Number"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipName"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                            </IgrColumnGroup>
                            <IgrColumnGroup
                                header="Shipping Locations">
                                <IgrColumn
                                    field="ShipAddress"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCity"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipPostalCode"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                                <IgrColumn
                                    field="ShipCountry"
                                    dataType="String"
                                    sortable="true"
                                    resizable="true">
                                </IgrColumn>
                            </IgrColumnGroup>
                        </IgrColumnGroup>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate="false">
                            <IgrColumn
                                field="ProductID"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="Number"
                                sortable="true"
                                resizable="true">
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _hierarchicalCustomers: any[] = HierarchicalCustomers;
    public get hierarchicalCustomers(): any[] {
        return this._hierarchicalCustomers;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebHierarchicalGridDescriptionModule.register(context);
            WebColumnGroupDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridPinFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const hgrid: IgrHierarchicalGrid = this.hierarchicalGrid;
        const firstColumnGroup = hgrid.getColumnByName("Company").parent;
        firstColumnGroup.pinned = !firstColumnGroup.pinned;
        hgrid.markForCheck();
    }

    public webHierarchicalGridHideFirstGroupToggle(sender: any, args: IgrPropertyEditorPropertyDescriptionButtonClickEventArgs): void {
        const hgrid: IgrHierarchicalGrid = this.hierarchicalGrid;
        const firstColumnGroup = hgrid.getColumnByName("Company").parent;
        firstColumnGroup.hidden = !firstColumnGroup.hidden;
        hgrid.markForCheck();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);