import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react-webinputs';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import { defineAllComponents } from 'igniteui-webcomponents';

defineAllComponents();

const mods: any[] = [
    IgrBadgeModule,
    IgrGridModule,
    IgrPropertyEditorPanelModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private selectionType: IgrPropertyEditorPropertyDescription
    private hideRowSelectors: IgrPropertyEditorPropertyDescription
    private grid1: IgrGrid
    private grid1Ref(r: IgrGrid) {
        this.grid1 = r;
        this.setState({});
    }
    private column1: IgrColumn
    private column2: IgrColumn
    private column3: IgrColumn

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    target={this.grid1}
                    descriptionType="WebGrid"
                    isWrappingEnabled="true"
                    isHorizontal="true"
                    componentRenderer={this.renderer}
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        name="selectionType"
                        propertyPath="RowSelection">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="hideRowSelectors"
                        propertyPath="HideRowSelectors">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    data={this.financialDataAll}
                    moving="true"
                    id="grid1"
                    ref={this.grid1Ref}>
                    <IgrColumn
                        field="Category">
                    </IgrColumn>
                    <IgrColumn
                        field="Type">
                    </IgrColumn>
                    <IgrColumn
                        field="Price"
                        dataType="Currency">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="Currency">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        dataType="Currency">
                        <IgrColumnPipeArgs
                            currencyCode="USD"
                            digitsInfo="1.2-2">
                        </IgrColumnPipeArgs>
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="Number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column2">
                    </IgrColumn>
                    <IgrColumn
                        field="AnnualChange"
                        header="Annual Change"
                        dataType="Number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}
                        name="column3">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _financialDataAll: FinancialDataAll = null;
    public get financialDataAll(): FinancialDataAll {
        if (this._financialDataAll == null)
        {
            this._financialDataAll = new FinancialDataAll();
        }
        return this._financialDataAll;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            WebGridDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);