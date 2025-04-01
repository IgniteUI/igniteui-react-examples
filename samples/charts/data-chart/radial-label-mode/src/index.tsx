import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { ComponentRenderer, PropertyEditorPanelDescriptionModule, DataChartCoreDescriptionModule, DataChartRadialDescriptionModule, DataChartRadialCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule, LegendDescriptionModule } from 'igniteui-react-core';
import { FootballPlayerStatsItem, FootballPlayerStats } from './FootballPlayerStats';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrPropertyEditorPanelModule,
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditorPanel1: IgrPropertyEditorPanel
    private propertyEditorPanel1Ref(r: IgrPropertyEditorPanel) {
        this.propertyEditorPanel1 = r;
        this.setState({});
    }
    private labelExtent: IgrPropertyEditorPropertyDescription
    private labelMode: IgrPropertyEditorPropertyDescription
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialColumnSeries1: IgrRadialColumnSeries
    private radialColumnSeries2: IgrRadialColumnSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.propertyEditorPanel1Ref = this.propertyEditorPanel1Ref.bind(this);
        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="DataChart"
                    isHorizontal={true}
                    isWrappingEnabled={true}
                    ref={this.propertyEditorPanel1Ref}>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="Axes[0 as CategoryAngleAxis].LabelExtent"
                        name="LabelExtent"
                        label="Label Extent"
                        shouldOverrideDefaultEditor={true}
                        valueType="Slider"
                        primitiveValue="5"
                        min={0}
                        max={100}
                        step={1}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        propertyPath="Axes[0 as CategoryAngleAxis].LabelMode"
                        name="LabelMode"
                        label="LabelMode"
                        shouldOverrideDefaultEditor={true}
                        valueType="EnumValue"
                        dropDownNames={["Auto", "Center", "ClosestPoint"]}
                        dropDownValues={["Auto", "Center", "ClosestPoint"]}
                        primitiveValue="Auto">
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="legend-title">
                Ronaldo vs Messi Player Stats
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}>
                    <IgrCategoryAngleAxis
                        name="angleAxis"
                        dataSource={this.footballPlayerStats}
                        label="attribute">
                    </IgrCategoryAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        innerRadiusExtentScale={0.1}
                        interval={2}
                        minimumValue={0}
                        maximumValue={10}>
                    </IgrNumericRadiusAxis>
                    <IgrRadialColumnSeries
                        name="RadialColumnSeries1"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="ronaldo"
                        showDefaultTooltip={false}
                        areaFillOpacity={0.8}
                        thickness={3}
                        title="Ronaldo">
                    </IgrRadialColumnSeries>
                    <IgrRadialColumnSeries
                        name="RadialColumnSeries2"
                        dataSource={this.footballPlayerStats}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messi"
                        showDefaultTooltip={false}
                        areaFillOpacity={0.8}
                        thickness={3}
                        title="Messi">
                    </IgrRadialColumnSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _footballPlayerStats: FootballPlayerStats = null;
    public get footballPlayerStats(): FootballPlayerStats {
        if (this._footballPlayerStats == null)
        {
            this._footballPlayerStats = new FootballPlayerStats();
        }
        return this._footballPlayerStats;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            PropertyEditorPanelDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartRadialDescriptionModule.register(context);
            DataChartRadialCoreDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            LegendDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);