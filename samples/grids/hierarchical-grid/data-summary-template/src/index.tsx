import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrHierarchicalGridModule } from 'igniteui-react-grids';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrHierarchicalGrid, IgrColumn, IgrRowIsland } from 'igniteui-react-grids';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, WebHierarchicalGridDescriptionModule } from 'igniteui-react-core';
import SingersData from './SingersData.json';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { IgrSummaryTemplateContext } from 'igniteui-react-grids';

import 'igniteui-react-grids/grids/combined';
import 'igniteui-react-grids/grids/themes/light/bootstrap.css';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrHierarchicalGridModule
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
    private hierarchicalGrid: IgrHierarchicalGrid
    private hierarchicalGridRef(r: IgrHierarchicalGrid) {
        this.hierarchicalGrid = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.webHierarchicalGridHasSummariesChange = this.webHierarchicalGridHasSummariesChange.bind(this);
        this.webHierarchicalGridSetGridSize = this.webHierarchicalGridSetGridSize.bind(this);
        this.hierarchicalGridRef = this.hierarchicalGridRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample ig-typography">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.hierarchicalGrid}
                    descriptionType="WebHierarchicalGrid"
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
                        changed={this.webHierarchicalGridHasSummariesChange}
                        name="ToggleSummariesEditor">
                    </IgrPropertyEditorPropertyDescription>
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
                    autoGenerate={false}
                    data={this.singersData}
                    ref={this.hierarchicalGridRef}
                    id="hierarchicalGrid"
                    primaryKey="ID">
                    <IgrColumn
                        field="Artist"
                        header="Artist"
                        hasSummary={true}>
                    </IgrColumn>
                    <IgrColumn
                        field="Photo"
                        header="Photo"
                        dataType="image"
                        hasSummary={true}
                        summaries={this.singerSummary}>
                    </IgrColumn>
                    <IgrColumn
                        field="Debut"
                        header="Debut">
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyNominations"
                        header="Grammy Nominations"
                        dataType="number"
                        hasSummary={true}
                        summaryTemplate={this.webHierarchicalGridSummaryTemplateStyle}>
                    </IgrColumn>
                    <IgrColumn
                        field="GrammyAwards"
                        header="Grammy Awards"
                        dataType="number"
                        hasSummary={true}
                        summaryTemplate={this.webHierarchicalGridSummaryTemplate}>
                    </IgrColumn>
                    <IgrRowIsland
                        childDataKey="Albums"
                        autoGenerate={false}>
                        <IgrColumn
                            field="Album"
                            header="Album"
                            dataType="string"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="LaunchDate"
                            header="Launch Date"
                            dataType="date"
                            hasSummary={true}
                            summaryTemplate={this.webRowIslandGridSummaryTemplateStyle}>
                        </IgrColumn>
                        <IgrColumn
                            field="BillboardReview"
                            header="Billboard Review"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrColumn
                            field="USBillboard200"
                            header="US Billboard 200"
                            dataType="number"
                            hasSummary={true}>
                        </IgrColumn>
                        <IgrRowIsland
                            childDataKey="Songs"
                            autoGenerate={false}>
                            <IgrColumn
                                field="Number"
                                header="No."
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Title"
                                header="Title"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Released"
                                header="Released"
                                dataType="date"
                                hasSummary={true}>
                            </IgrColumn>
                            <IgrColumn
                                field="Genre"
                                header="Genre"
                                dataType="string"
                                hasSummary={true}>
                            </IgrColumn>
                        </IgrRowIsland>
                    </IgrRowIsland>
                </IgrHierarchicalGrid>
            </div>
        </div>
        );
    }

    private _singersData: any[] = SingersData;
    public get singersData(): any[] {
        return this._singersData;
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

    public webHierarchicalGridHasSummariesChange(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let newValue = sender.primitiveValue as boolean;
        const grid = this.hierarchicalGrid;
        var column1 = grid.getColumnByName("Photo");
        var column2 = grid.getColumnByName("GrammyNominations");
        var column3 = grid.getColumnByName("GrammyAwards");

        column1.hasSummary = newValue;
        column2.hasSummary = newValue;
        column3.hasSummary = newValue;
    }

    public webHierarchicalGridSetGridSize(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var newVal = (args.newValue as string).toLowerCase();
        var grid = document.getElementById("hierarchicalGrid");
        grid.style.setProperty('--ig-size', `var(--ig-size-${newVal})`);
    }

    public webHierarchicalGridSummaryTemplateStyle = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[1].label }</strong><span>{ (summaryResults[1] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[2].label }</strong><span>{ (summaryResults[2] as any).summaryResult }</span></span>
            </div>
        );
    }

    public webHierarchicalGridSummaryTemplate = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span>{ summaryResults[0].label }<span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span>{ summaryResults[1].label }<span>{ (summaryResults[1] as any).summaryResult }</span></span>
                <span>{ summaryResults[2].label }<span>{ (summaryResults[2] as any).summaryResult }</span></span>
            </div>
        );
    }

    public webRowIslandGridSummaryTemplateStyle = (e: { dataContext: IgrSummaryTemplateContext }) => {
        const summaryResults = e.dataContext.implicit;
        return (
            <div className="summary-temp">
                <span><strong>{ summaryResults[0].label }</strong><span>{ (summaryResults[0] as any).summaryResult }</span></span>
                <span><strong>{ summaryResults[1].label }</strong><span>{ (new Date((summaryResults[2] as any).summaryResult)).toDateString() }</span></span>
            </div>
        );
    }

    private singerSummary = {
        sum(data: any[] = []): number {
            return data.length && data.filter((el) => el === 0 || Boolean(el)).length ? data.filter((el) => el === 0 || Boolean(el)).reduce((a, b) => +a + +b) : 0;
        },
        operate(data?: any[], allData: any[] = [], fieldName = ''): any[] {
            const result = [] as any[];
            result.push({
                key: 'nominatedSingers',
                label: 'Nominated Singers',
                summaryResult: allData.filter((rec) => rec['GrammyNominations'] > 0).length
            });
            result.push({
                key: 'singersWithAwards',
                label: 'Singers with Awards',
                summaryResult: allData.filter((rec) => rec['GrammyAwards'] > 0).length
            });
            result.push({
                key: 'nominations',
                label: 'Total Nominations',
                summaryResult: this.sum(allData.map(r => r['GrammyNominations']))
            } );
            result.push({
                key: 'awards',
                label: 'Total Awards',
                summaryResult: this.sum(allData.map(r => r['GrammyAwards']))
            });
            return result;
        }
    }
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);