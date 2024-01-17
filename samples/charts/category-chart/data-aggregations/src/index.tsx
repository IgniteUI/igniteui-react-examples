import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { SalesData } from './SalesData';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { MarkerType, MarkerType_$type } from 'igniteui-react-charts';
import { EnumUtil } from 'igniteui-react-core';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrLegendModule,
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private initialGroups: IgrPropertyEditorPropertyDescription
    private initialSummaries: IgrPropertyEditorPropertyDescription
    private groupSorts: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.editorChangeUpdateInitialGroups = this.editorChangeUpdateInitialGroups.bind(this);
        this.editorChangeUpdateInitialSummaries = this.editorChangeUpdateInitialSummaries.bind(this);
        this.editorChangeUpdateGroupSorts = this.editorChangeUpdateGroupSorts.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true"
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="InitialGroupsHandler"
                        name="InitialGroups"
                        label="Initial Groups"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["Country", "Product", "MonthName", "Year"]}
                        dropDownValues={["Country", "Product", "MonthName", "Year"]}
                        primitiveValue="Country"
                        changed={this.editorChangeUpdateInitialGroups}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="InitialSummariesHandler"
                        name="InitialSummaries"
                        label="Initial Summaries"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"]}
                        dropDownValues={["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales"]}
                        primitiveValue="Sum(Sales) as Sales"
                        changed={this.editorChangeUpdateInitialSummaries}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="GroupSortsHandler"
                        name="GroupSorts"
                        label="Sort Groups"
                        valueType="EnumValue"
                        shouldOverrideDefaultEditor="true"
                        dropDownNames={["Sales Desc", "Sales Asc"]}
                        dropDownValues={["Sales Desc", "Sales Asc"]}
                        primitiveValue="Sales Desc"
                        changed={this.editorChangeUpdateGroupSorts}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Renewable Electricity Generated
            </div>

            <div className="container fill">
                <IgrCategoryChart
                    ref={this.chartRef}
                    dataSource={this.salesData}
                    chartType="Column"
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    crosshairsDisplayMode="None"
                    initialGroups="Country"
                    initialSummaries="Sum(Sales) as Sales"
                    groupSorts="Sales Desc">
                </IgrCategoryChart>
            </div>
        </div>
        );
    }

    private _salesData: SalesData = null;
    public get salesData(): SalesData {
        if (this._salesData == null)
        {
            this._salesData = new SalesData();
        }
        return this._salesData;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
            CategoryChartDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public editorChangeUpdateInitialGroups(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var intialGroupVal = args.newValue.toString();
        chart.initialGroups = intialGroupVal;
    }

    public editorChangeUpdateInitialSummaries(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var intialSummaryVal = args.newValue.toString();
        chart.initialSummaries = intialSummaryVal;
    }

    public editorChangeUpdateGroupSorts(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var groupSortsVal = args.newValue.toString();
        chart.groupSorts = groupSortsVal;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);