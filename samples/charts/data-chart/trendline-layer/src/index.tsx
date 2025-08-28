import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataChartCategoryTrendLineModule, IgrTrendLineLayerModule, IgrDataLegendModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrTrendLineLayer } from 'igniteui-react-charts';
import { ComponentRenderer, DataChartCategoryDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule, DataChartCategoryTrendLineDescriptionModule, TrendLineLayerDescriptionModule, DataLegendDescriptionModule } from 'igniteui-react-core';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataChartCategoryTrendLineModule,
    IgrTrendLineLayerModule,
    IgrDataLegendModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries
    private trendLine1: IgrTrendLineLayer
    private trendLine2: IgrTrendLineLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend">
                <IgrDataLegend
                    ref={this.legendRef}
                    target={this.chart}
                    headerRowVisible="true"
                    summaryType="None"
                    valueRowVisible="true"
                    valueTextColor="rgba(0, 0, 0, 0)"
                    headerText="European Renewable Energy (2009-2018)">
                </IgrDataLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    computedPlotAreaMarginMode="Series"
                    legend={this.legend}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        labelLocation="OutsideBottom"
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        labelLocation="OutsideLeft">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        title="EU Energy"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe"
                        showDefaultTooltip="true">
                    </IgrLineSeries>
                    <IgrTrendLineLayer
                        name="trendLine1"
                        title="Logarithmic Trend"
                        useIndex="true"
                        trendLineType="LogarithmicFit"
                        trendLinePeriod="10"
                        useLegend="true"
                        legendItemBadgeMode="MatchSeries">
                    </IgrTrendLineLayer>
                    <IgrTrendLineLayer
                        name="trendLine2"
                        title="Cubic Trend"
                        useIndex="true"
                        trendLineType="CubicFit"
                        trendLinePeriod="10"
                        useLegend="true"
                        legendItemBadgeMode="MatchSeries">
                    </IgrTrendLineLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            DataChartCategoryDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
            DataChartCategoryTrendLineDescriptionModule.register(context);
            TrendLineLayerDescriptionModule.register(context);
            DataLegendDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);