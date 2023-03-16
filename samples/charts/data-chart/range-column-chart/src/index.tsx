import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrRangeColumnSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { TemperatureRangeDataItem, TemperatureRangeData } from './TemperatureRangeData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrLegendModule
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
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private rangeColumnSeries1: IgrRangeColumnSeries
    private rangeColumnSeries2: IgrRangeColumnSeries
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
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    legend={this.legend}
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        interval="1"
                        dataSource={this.temperatureRangeData}
                        label="month"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        title="Temperature (in Celsius)"
                        titleAngle="90"
                        titleLeftMargin="10"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrRangeColumnSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        lowMemberPath="lowLA"
                        highMemberPath="highLA"
                        dataSource={this.temperatureRangeData}
                        showDefaultTooltip="false"
                        title="Los Angeles"
                        name="RangeColumnSeries1">
                    </IgrRangeColumnSeries>
                    <IgrRangeColumnSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        title="New York"
                        lowMemberPath="lowNY"
                        highMemberPath="highNY"
                        showDefaultTooltip="false"
                        dataSource={this.temperatureRangeData}
                        name="RangeColumnSeries2">
                    </IgrRangeColumnSeries>
                    <IgrDataToolTipLayer
                        name="DataToolTipLayer">
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