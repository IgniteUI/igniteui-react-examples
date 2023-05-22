import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrStackedFragmentSeriesModule, IgrCalloutLayerModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrBarSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrStackedFragmentSeriesModule,
    IgrCalloutLayerModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
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
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis
    private barSeries1: IgrBarSeries
    private barSeries2: IgrBarSeries
    private barSeries3: IgrBarSeries
    private barSeries4: IgrBarSeries
    private barSeries5: IgrBarSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Market Capitalization of Technology Companies
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
                    chartTitle="Market Capitalization of Technology Companies"
                    legend={this.legend}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false">
                    <IgrCategoryYAxis
                        name="yAxis"
                        dataSource={this.companyMarketCapItemized}
                        label="category"
                        isInverted="true"
                        gap="0.75"
                        overlap="1">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        minimumValue="0"
                        maximumValue="220">
                    </IgrNumericXAxis>
                    <IgrBarSeries
                        name="BarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v1"
                        title="Apple"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v2"
                        title="Microsoft"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries3"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v3"
                        title="Google"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries4"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v4"
                        title="NVidia"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrBarSeries
                        name="BarSeries5"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="v5"
                        title="Tesla"
                        dataSource={this.companyMarketCapItemized}
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrDataToolTipLayer
                        name="DataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);