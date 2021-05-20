import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrRangeAreaSeries } from 'igniteui-react-charts';
import { IgrRangeColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import { SampleRangeData } from './SampleRangeData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeRangeSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Column" }
        this.data = SampleRangeData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options vertical">
                    <span className="legend-title">Legend: </span>
                    <div className="legend">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>

                    <div className="overlay-right">
                        <div className="options horizontal">
                            <label className="options-label">Polar Series: </label>
                            <select value={this.state.seriesType} onChange={this.onSeriesTypeChanged}>
                                <option>Area</option>
                                <option>Column</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="container" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        chartTitle="Annual Temperature Changes"
                        isHorizontalZoomEnabled={false}
                        isVerticalZoomEnabled={false}
                        dataSource={this.data} >
                        <IgrCategoryXAxis name="xAxis"
                            label="Year"
                            gap={0.5} />
                        <IgrNumericYAxis name="yAxis"
                            minimumValue={20}
                            title="Temperature (°C)"/>
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setState({seriesType: selectedSeries});
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
         if (seriesType === "Area") {
            const series1 = new IgrRangeAreaSeries({ name: "series1" });
            series1.highMemberPath = "High";
            series1.lowMemberPath  = "Low";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.thickness = 0;
            series1.title = "Weather Forecast";

            this.chart.series.clear();
            this.chart.series.add(series1);
        } else if (seriesType === "Column") {
            const series1 = new IgrRangeColumnSeries({ name: "series1" });
            series1.highMemberPath = "High";
            series1.lowMemberPath  = "Low";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.title = "Weather Forecast";

            this.chart.series.clear();
            this.chart.series.add(series1);
        }
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
            this.setSeries(this.state.seriesType);
        }
    }
    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
            this.setSeries(this.state.seriesType);
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypeRangeSeries />, document.getElementById('root'));
