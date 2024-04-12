import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrPropertyEditorPanelModule } from 'igniteui-react-layouts';
import { IgrPropertyEditorPanel, IgrPropertyEditorPropertyDescription } from 'igniteui-react-layouts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrValueBrushScale } from 'igniteui-react-charts';
import { ComponentRenderer, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartScatterDescriptionModule, DataChartScatterCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule, PropertyEditorPanelDescriptionModule } from 'igniteui-react-core';
import { WorldDebtAndPopulationItem, WorldDebtAndPopulation } from './WorldDebtAndPopulation';
import { IgrPropertyEditorPropertyDescriptionChangedEventArgs } from 'igniteui-react-layouts';
import { EnumUtil } from 'igniteui-react-core';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

const mods: any[] = [
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrPropertyEditorPanelModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private propertyEditor: IgrPropertyEditorPanel
    private propertyEditorRef(r: IgrPropertyEditorPanel) {
        this.propertyEditor = r;
        this.setState({});
    }
    private fillScaleMinimumValueEditor: IgrPropertyEditorPropertyDescription
    private fillScaleMaximumValueEditor: IgrPropertyEditorPropertyDescription
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private bubbleSeries1: IgrBubbleSeries
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 120;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private  _valueBrushScale1: IgrValueBrushScale | null = null;
    public get valueBrushScale1(): IgrValueBrushScale {
        if (this._valueBrushScale1 == null)
        {
            var valueBrushScale1 = new IgrValueBrushScale({});
            valueBrushScale1.isLogarithmic = false;
            valueBrushScale1.minimumValue = 0;
            valueBrushScale1.maximumValue = 100000;
            valueBrushScale1.brushes = "rgba(26, 161, 226, 1) rgba(24, 154, 217, 1) rgba(22, 146, 206, 1) rgba(19, 133, 188, 1) rgba(15, 121, 171, 1) rgba(12, 107, 153, 1) rgba(9, 94, 136, 1) rgba(5, 82, 119, 1) rgba(2, 70, 105, 1) rgba(0, 63, 94, 1)";

            this._valueBrushScale1 = valueBrushScale1;
        }
        return this._valueBrushScale1;
    }

    constructor(props: any) {
        super(props);

        this.propertyEditorRef = this.propertyEditorRef.bind(this);
        this.scatterBubbleSeriesFillScaleSliderChanged = this.scatterBubbleSeriesFillScaleSliderChanged.bind(this);
        this.scatterBubbleSeriesFillScaleSliderChanged = this.scatterBubbleSeriesFillScaleSliderChanged.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <IgrPropertyEditorPanel
                    ref={this.propertyEditorRef}
                    componentRenderer={this.renderer}
                    target={this.chart}
                    descriptionType="DataChart"
                    isHorizontal="true"
                    isWrappingEnabled="true">
                    <IgrPropertyEditorPropertyDescription
                        name="FillScaleMinimumValueEditor"
                        label="MinimumValue: "
                        valueType="Slider"
                        min="0"
                        max="20000"
                        changed={this.scatterBubbleSeriesFillScaleSliderChanged}>
                    </IgrPropertyEditorPropertyDescription>
                    <IgrPropertyEditorPropertyDescription
                        name="FillScaleMaximumValueEditor"
                        label="MaximumValue: "
                        valueType="Slider"
                        min="25000"
                        max="100000"
                        changed={this.scatterBubbleSeriesFillScaleSliderChanged}>
                    </IgrPropertyEditorPropertyDescription>
                </IgrPropertyEditorPanel>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    chartTitle="Public Debt vs. Population"
                    subtitle="GDP per Capita">
                    <IgrNumericXAxis
                        name="xAxis"
                        minimumValue="10000"
                        maximumValue="10000000000"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        title="Population">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        isLogarithmic="true"
                        logarithmBase="10"
                        title="Public Debt per GDP">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="BubbleSeries1"
                        xMemberPath="population"
                        yMemberPath="publicDebt"
                        radiusMemberPath="gdpPerCapita"
                        radiusScale={this.sizeScale1}
                        fillMemberPath="gdpPerCapita"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.worldDebtAndPopulation}
                        markerType="Circle"
                        markerOutline="black"
                        showDefaultTooltip="true"
                        fillScale={this.valueBrushScale1}>
                    </IgrBubbleSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _worldDebtAndPopulation: WorldDebtAndPopulation = null;
    public get worldDebtAndPopulation(): WorldDebtAndPopulation {
        if (this._worldDebtAndPopulation == null)
        {
            this._worldDebtAndPopulation = new WorldDebtAndPopulation();
        }
        return this._worldDebtAndPopulation;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            NumberAbbreviatorDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartScatterDescriptionModule.register(context);
            DataChartScatterCoreDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            PropertyEditorPanelDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

    public scatterBubbleSeriesFillScaleSliderChanged(sender: any, args: IgrPropertyEditorPropertyDescriptionChangedEventArgs): void {
        let series: IgrBubbleSeries = this.chart.actualSeries[0] as IgrBubbleSeries;

        let fillScale = (series.fillScale as any);

        if(args.newValue >= 25000){
            fillScale.maximumValue = args.newValue;
        }
        else{
            fillScale.minimumValue = args.newValue;
        }
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);