import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import HierarchicalCustomers from './HierarchicalCustomers.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.webHierarchicalGridSetGridSize = this.webHierarchicalGridSetGridSize.bind(this);
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
                    descriptionType="WebHierarchicalGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webHierarchicalGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrHierarchicalGrid
                    autoGenerate="false"
                    data={this.hierarchicalCustomers}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    allowFiltering="true">
                    <IgrColumn
                        field="CustomerID"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Company"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="ContactName"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Phone"
                        dataType="String">
                    </IgrColumn>
                    <IgrColumn
                        field="Fax"
                        dataType="String">
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Orders"
                        autoGenerate="false">
                        <IgrColumn
                            field="OrderID"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="EmployeeID"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="OrderDate"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="RequiredDate"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShippedDate"
                            dataType="Date">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipVia"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="Freight"
                            dataType="Number">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipName"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipAddress"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCity"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipPostalCode"
                            dataType="String">
                        </IgrColumn>
                        <IgrColumn
                            field="ShipCountry"
                            dataType="String">
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="OrderDetails"
                            autoGenerate="false">
                            <IgrColumn
                                field="ProductID"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="UnitPrice"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="Quantity"
                                dataType="Number">
                            </IgrColumn>
                            <IgrColumn
                                field="Discount"
                                dataType="Number">
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
            PropertyEditorPanelDescriptionModule.register(context);
            WebHierarchicalGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public webHierarchicalGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("hierarchicalGrid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);