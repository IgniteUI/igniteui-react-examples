import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrLegendModule, IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, LegendDescriptionModule, CategoryChartDescriptionModule } from 'igniteui-react-core';
import { SalesData } from './SalesData';
import { PropertyEditorValueType, IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
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
    private editor: IgrPropertyEditorPanel
    private editorRef(r: IgrPropertyEditorPanel) {
        this.editor = r;
        this.setState({});
    }
    private initialGroups: IgrPropertyEditorPropertyDescription
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.editorRef = this.editorRef.bind(this);
        this.editorChangeUpdateInitialGroups = this.editorChangeUpdateInitialGroups.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }
    public componentDidMount() {
        this.propertyEditorInitAggregationsOnViewInit();
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.editorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="CategoryChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
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

    public propertyEditorInitAggregationsOnViewInit(): void {

        var editor = this.editor;
        var initialSummariesDropdown = new IgrPropertyEditorPropertyDescription({});
        var sortGroupsDropdown = new IgrPropertyEditorPropertyDescription({});

        initialSummariesDropdown.label = "Initial Summaries";
        initialSummariesDropdown.valueType = PropertyEditorValueType.EnumValue;
        initialSummariesDropdown.shouldOverrideDefaultEditor = true;
        initialSummariesDropdown.dropDownNames = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];
        initialSummariesDropdown.dropDownValues = ["Sum(Sales) as Sales", "Avg(Sales) as Sales", "Min(Sales) as Sales", "Max(Sales) as Sales", "Count(Sales) as Sales" ];

        sortGroupsDropdown.label = "Sort Groups"
        sortGroupsDropdown.valueType = PropertyEditorValueType.EnumValue;
        sortGroupsDropdown.shouldOverrideDefaultEditor = true;
        sortGroupsDropdown.dropDownNames = ["Sales Asc", "Sales Desc"];
        sortGroupsDropdown.dropDownValues = ["Sales Asc","Sales Desc"];

        editor.properties.add(initialSummariesDropdown);
        editor.properties.add(sortGroupsDropdown);

        this.editorChangeUpdateInitialSummaries = this.editorChangeUpdateInitialSummaries.bind(this);
        this.editorChangeUpdateGroupSorts = this.editorChangeUpdateGroupSorts.bind(this);
        initialSummariesDropdown.changed = this.editorChangeUpdateInitialSummaries;
        sortGroupsDropdown.changed = this.editorChangeUpdateGroupSorts;
    }

    public editorChangeUpdateInitialSummaries(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {

        var chart = this.chart;
        var intialSummaryVal = args.newValue.toString();
        chart.initialSummaries = intialSummaryVal;
    }

    public editorChangeUpdateGroupSorts(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = this.chart;
        var groupSortsVal = args.newValue.toString();
        chart.groupSorts = groupSortsVal;
    }

    public editorChangeUpdateInitialGroups(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        var chart = this.chart;
        chart.initialGroups = args.newValue.toString();
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);