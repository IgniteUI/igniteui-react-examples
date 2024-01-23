import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private displayDensityEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public componentDidMount() {
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="DisplayDensity"
                        name="DisplayDensityEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    data={this.invoicesData}
                    allowFiltering="true">
                    <IgrColumn
                        field="CustomerName"
                        header="Customer Name"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Country"
                        header="Country"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="City"
                        header="City"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Address"
                        header="Address"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="PostalCode"
                        header="Postal Code"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="Salesperson"
                        header="Sales Person"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipperName"
                        header="Shipper Name"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        header="Order Date"
                        dataType="Date"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductID"
                        header="ID"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Name"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        filterable="false">
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        header="Quantity"
                        dataType="Number"
                        sortable="true"
                        hasSummary="true"
                        filterable="false">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        dataType="Boolean"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipName"
                        header="Name"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCountry"
                        header="Country"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="City"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipPostalCode"
                        header="Postal Code"
                        dataType="String"
                        sortable="true"
                        hasSummary="true">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _invoicesData: InvoicesData = null;
    public get invoicesData(): InvoicesData {
        if (this._invoicesData == null)
        {
            this._invoicesData = new InvoicesData();
        }
        return this._invoicesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            WebGridDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);