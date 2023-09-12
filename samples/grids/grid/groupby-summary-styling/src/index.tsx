import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import { InvoicesDataItem, InvoicesData } from './InvoicesData';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

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
    private summaryCalcModeEditor: IgrPropertyEditorPropertyDescription
    private summaryPositionEditor: IgrPropertyEditorPropertyDescription
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

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryCalculationMode"
                        name="SummaryCalcModeEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryPosition"
                        name="SummaryPositionEditor">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    ref={this.gridRef}
                    id="grid"
                    data={this.invoicesData}
                    groupingExpressions={["Infragistics.Controls.Description.CodeGenerationItemBuilder"]}>
                    <IgrColumn
                        field="ShipCountry"
                        header="Ship Country"
                        width="200px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ShipCity"
                        header="Ship City"
                        width="250px"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Unit Price"
                        width="150px"
                        dataType="Currency"
                        groupable="true"
                        hasSummary="true">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        field="Quantity"
                        header="Quantity"
                        width="150px"
                        dataType="Number"
                        groupable="true"
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