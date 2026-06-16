import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartAnnotationModule, IgrDataChartCategoryModule, IgrDataChartCoreModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule, IgrLegendModule, IgrRangeBarSeriesModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrRangeBarSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { TemperatureRangeDataItem, TemperatureRangeData } from './TemperatureRangeData';

const mods: any[] = [
    IgrDataChartAnnotationModule,
    IgrDataChartCategoryModule,
    IgrDataChartCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule,
    IgrLegendModule,
    IgrRangeBarSeriesModule
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
    private rangeBarSeries1: IgrRangeBarSeries
    private rangeBarSeries2: IgrRangeBarSeries
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
                Monthly Temperature Range in LA and NYC
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
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    legend={this.legend}>
                    <IgrCategoryYAxis
                        name="yAxis"
                        label="month"
                        interval="1"
                        dataSource={this.temperatureRangeData}>
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Temperature (in Celsius)"
                        titleAngle="0"
                        titleTopMargin="10">
                    </IgrNumericXAxis>
                    <IgrRangeBarSeries
                        name="RangeBarSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="Los Angeles"
                        lowMemberPath="lowLA"
                        highMemberPath="highLA"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}>
                    </IgrRangeBarSeries>
                    <IgrRangeBarSeries
                        name="RangeBarSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="New York"
                        lowMemberPath="lowNY"
                        highMemberPath="highNY"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}>
                    </IgrRangeBarSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _temperatureRangeData: TemperatureRangeData = null;
    public get temperatureRangeData(): TemperatureRangeData {
        if (this._temperatureRangeData == null)
        {
            this._temperatureRangeData = new TemperatureRangeData();
        }
        return this._temperatureRangeData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);