import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// types of scatter series:
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrScatterSeries } from 'igniteui-react-charts';
import { IgrScatterLineSeries } from 'igniteui-react-charts';
import { IgrScatterSplineSeries } from 'igniteui-react-charts';
// modules of data chart:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// additional modules
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import { SampleScatterStats } from './SampleScatterStats';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();
IgrLegendModule.register();

export default class DataChartTypeScatterSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Point" }
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            <div className="options vertical">
                <span className="legend-title">GDP vs Population </span>
                <div className="legend" >
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>
            </div>
                
            <div className="overlay-right"> 
                        <label className="options-label">Type of Scatter Series </label>
                        <select value={this.state.seriesType} onChange={this.onSeriesTypeChanged}>
                            <option>Bubble</option>
                            <option>Point</option>
                            <option>Line</option>
                            <option>Spline</option>
                        </select> 
            </div>

            <div className="container" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}>
                    {/* axes: */}
                    <IgrNumericXAxis
                        name="xAxis"
                        isLogarithmic={true}
                        abbreviateLargeNumbers={true}
                        title="Population" />
                    <IgrNumericYAxis
                        name="yAxis"
                        isLogarithmic={true}
                        abbreviateLargeNumbers={true}
                        title="Total GDP ($)" />
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.setSeries(this.state.seriesType);
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }

        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setState({seriesType: selectedSeries});
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {
        if (seriesType === "Point") {
            const series1 = new IgrScatterSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.showDefaultTooltip = true;
            series1.title = "High Income Countries";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.xMemberPath = "Population";
            series1.yMemberPath = "GdpTotal";
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            
            const series2 = new IgrScatterSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.showDefaultTooltip = true;
            series2.title = "Low Income Countries";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.xMemberPath = "Population";
            series2.yMemberPath = "GdpTotal";
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);
        } else if (seriesType === "Line") {
            const series1 = new IgrScatterLineSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.showDefaultTooltip = true;
            series1.title = "High Income Countries";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.xMemberPath = "Population";
            series1.yMemberPath = "GdpTotal";
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();

            const series2 = new IgrScatterLineSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.showDefaultTooltip = true;
            series2.title = "Low Income Countries";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.xMemberPath = "Population";
            series2.yMemberPath = "GdpTotal";
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);
        } else if (seriesType === "Spline") {
            const series1 = new IgrScatterSplineSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.showDefaultTooltip = true;
            series1.title = "High Income Countries";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.xMemberPath = "Population";
            series1.yMemberPath = "GdpTotal";
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            
            const series2 = new IgrScatterSplineSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.showDefaultTooltip = true;
            series2.title = "Low Income Countries";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.xMemberPath = "Population";
            series2.yMemberPath = "GdpTotal";
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);
        } else if (seriesType === "Bubble") {
            const series1 = new IgrBubbleSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.showDefaultTooltip = true;
            series1.title = "High Income Countries";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.xMemberPath = "Population";
            series1.yMemberPath = "GdpTotal";
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();

            const series2 = new IgrBubbleSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.showDefaultTooltip = true;
            series2.title = "Low Income Countries";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.xMemberPath = "Population";
            series2.yMemberPath = "GdpTotal";
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartTypeScatterSeries/>);
