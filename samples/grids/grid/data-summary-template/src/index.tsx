import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrGrid, IgrColumn } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebGridDescriptionModule } from 'igniteui-react-core';
import NwindData from './NwindData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrGridModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private summaryRowHeightEditor: IgrPropertyEditorPropertyDescription
    private toggleSummariesEditor: IgrPropertyEditorPropertyDescription
    private sizeEditor: IgrPropertyEditorPropertyDescription
    private grid: IgrGrid
    private gridRef(r: IgrGrid) {
        this.grid = r;
        this.setState({});
    }
    private column1: IgrColumn
    private column2: IgrColumn

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webGridHasSummariesChange = this.webGridHasSummariesChange.bind(this);
        this.webGridSetGridSize = this.webGridSetGridSize.bind(this);
        this.gridRef = this.gridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.grid}
                    descriptionType="WebGrid"
                    isHorizontal="true"
                    isWrappingEnabled="false"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="SummaryRowHeight"
                        label="Summary Row Height"
                        valueType="Number"
                        name="SummaryRowHeightEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        label="Toggle Summaries"
                        valueType="Boolean1"
                        primitiveValue="True"
                        changed={this.webGridHasSummariesChange}
                        name="ToggleSummariesEditor">
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="SizeEditor"
                        label="Grid Size:"
                        valueType="EnumValue"
                        dropDownNames={["Small", "Medium", "Large"]}
                        dropDownValues={["Small", "Medium", "Large"]}
                        changed={this.webGridSetGridSize}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrGrid
                    autoGenerate="false"
                    id="grid"
                    ref={this.gridRef}
                    data={this.nwindData}>
                    <IgrColumn
                        field="ProductID"
                        header="Product ID"
                        width="10%"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="ProductName"
                        header="Product Name"
                        width="17%"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitPrice"
                        header="Price"
                        filterable="false"
                        width="17%"
                        editable="true"
                        dataType="Number"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="UnitsInStock"
                        header="Units in Stock"
                        width="21%"
                        dataType="Number"
                        editable="true"
                        groupable="true"
                        hasSummary="true"
                        summaries={this.discontinuedSummary}
                        name="column1">
                    </IgrColumn>
                    <IgrColumn
                        field="Discontinued"
                        header="Discontinued"
                        editable="true"
                        width="17%"
                        dataType="Boolean"
                        groupable="true">
                    </IgrColumn>
                    <IgrColumn
                        field="OrderDate"
                        width="18%"
                        dataType="Date"
                        groupable="true"
                        hasSummary="true"
                        summaryTemplate={this.webGridOrderDateSummaryTemplate}
                        name="column2">
                    </IgrColumn>
                </IgrGrid>
            </div>
        </div>
        );
    }

    private _nwindData: any[] = NwindData;
    public get nwindData(): any[] {
        return this._nwindData;
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

    public webGridHasSummariesChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = this.grid;
        var column1 = grid.getColumnByName("UnitsInStock");
        var column2 = grid.getColumnByName("OrderDate");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
    }

    public webGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("grid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webGridOrderDateSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[1].label }</strong><span>{ (summaryResults[1] as any).summaryResult }</span></span>
            </div>
        );
    }

    private discontinuedSummary = {
        sum(data: any[] = []): number {
            return data.length && data.filter((el) => el === 0 || Boolean(el)).length ? data.filter((el) => el === 0 || Boolean(el)).reduce((a, b) => +a + +b) : 0;
        },
        operate(data?: any[], allData: any[] = [], fieldName = ''): any[] {
            const result = [] as any[];
            result.push({
                key: 'products',
                label: 'Producs',
                summaryResult: data?.length
            });
            result.push({
                key: 'total',
                label: 'Total Items',
                summaryResult: this.sum(data)
            });
            result.push({
                key: 'discontinued',
                label: 'Discontinued Producs',
                summaryResult: allData.map(r => r['Discontinued']).filter((rec) => rec).length
            } );
            result.push({
                key: 'totalDiscontinued',
                label: 'Total Discontinued Items',
                summaryResult: this.sum(allData.filter((rec) => rec['Discontinued']).map(r => r[fieldName]))
            } );
            return result;
        }
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);