import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrBadgeModule } from 'igniteui-react';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn, IgrColumnPipeArgs } from 'igniteui-react-grids';
import { ComponentRenderer, WebGridDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { FinancialDataAllItem, FinancialDataAll } from './FinancialDataAll';
import { IgrBadge } from 'igniteui-react';
import { IgrCellTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

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
    private  _columnPipeArgs1: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs1(): IgrColumnPipeArgs {
        if (this._columnPipeArgs1 == null)
        {
            var columnPipeArgs1: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs1.currencyCode = "USD";
            columnPipeArgs1.digitsInfo = "1.2-2";

            this._columnPipeArgs1 = columnPipeArgs1;
        }
        return this._columnPipeArgs1;
    }
    private  _columnPipeArgs2: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs2(): IgrColumnPipeArgs {
        if (this._columnPipeArgs2 == null)
        {
            var columnPipeArgs2: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs2.currencyCode = "USD";
            columnPipeArgs2.digitsInfo = "1.2-2";

            this._columnPipeArgs2 = columnPipeArgs2;
        }
        return this._columnPipeArgs2;
    }
    private  _columnPipeArgs3: IgrColumnPipeArgs | null = null;
    public get columnPipeArgs3(): IgrColumnPipeArgs {
        if (this._columnPipeArgs3 == null)
        {
            var columnPipeArgs3: IgrColumnPipeArgs = {} as IgrColumnPipeArgs;
            columnPipeArgs3.currencyCode = "USD";
            columnPipeArgs3.digitsInfo = "1.2-2";

            this._columnPipeArgs3 = columnPipeArgs3;
        }
        return this._columnPipeArgs3;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.grid1Ref = this.grid1Ref.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
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
                    autoGenerate={false}
                    data={this.financialDataAll}
                    primaryKey="ID"
                    moving={true}
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
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs1}>
                    </IgrColumn>
                    <IgrColumn
                        field="Buy"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs2}>
                    </IgrColumn>
                    <IgrColumn
                        field="Sell"
                        dataType="currency"
                        pipeArgs={this.columnPipeArgs3}>
                    </IgrColumn>
                    <IgrColumn
                        field="Change"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="ChangePercent"
                        header="Change Percent"
                        dataType="number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
                    </IgrColumn>
                    <IgrColumn
                        field="YearlyChange"
                        header="Yearly Change"
                        dataType="number"
                        bodyTemplate={this.webGridCurrencyCellTemplate}>
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

    public webGridCurrencyCellTemplate = (props: {dataContext: IgrCellTemplateContext}) => {
        var cell = props.dataContext.cell as any;
        const isCellCurrencyUp = typeof cell.value === 'number' && cell.value > 0;
        const isCellCurrencyDown = typeof cell.value === 'number' && cell.value <= 0;

        return (

            <div style={{width: '80px', float: 'right'}}>
                {
                    isCellCurrencyUp || isCellCurrencyDown ?
                    <span>
                        <IgrBadge variant={isCellCurrencyUp ? "success" : "danger"} style={{float: 'left'}}><span>{isCellCurrencyUp ? '▲' : '▼'}</span></IgrBadge>
                        <span style={{color: isCellCurrencyUp ? 'green' : 'red', float: 'right'}}>${cell.value.toFixed(2)}</span>
                    </span>
                    : <span>${cell.value}</span>
                }
            </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);