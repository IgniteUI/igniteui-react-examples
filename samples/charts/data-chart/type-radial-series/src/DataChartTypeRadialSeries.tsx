// axis modules:
import { IgrCategoryAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrRadialAreaSeries } from 'igniteui-react-charts';
import { IgrRadialLineSeries } from 'igniteui-react-charts';
import { IgrRadialPieSeries } from 'igniteui-react-charts';
import { IgrRadialColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartRadialCoreModule } from 'igniteui-react-charts';
import { IgrDataChartRadialModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleRadialData } from './SampleRadialData';

IgrDataChartCoreModule.register();
IgrDataChartRadialCoreModule.register();
IgrDataChartRadialModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeRadialSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Pie" }
        this.data = SampleRadialData.create();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label">Type of Radial Series: </span>
                    <select value={this.state.seriesType}
                        onChange={this.onSeriesTypeChanged}>
                        <option>Area</option>
                        <option>Column</option>
                        <option>Pie</option>
                        <option>Line</option>
                    </select>
                    <span className="igLegend-title">Legend: </span>
                    <div className="igLegend">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        chartTitle="Company Finances by Department"
                        width="100%"
                        height="100%"
                        gridMode="BeforeSeries"
                        brushes="#9FB328, #7446B9"
                        outlines="#9FB328, #7446B9"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        <IgrCategoryAngleAxis name="angleAxis" label="Department" />
                        <IgrNumericRadiusAxis name="radiusAxis" innerRadiusExtentScale={0.1}
                        minimumValue={0} />
                        {/* series are created in the setSeries function
                        alternatively, you can create these elements using this code: */}
                        {/* <IgrRadialPieSeries
                            name="series1"
                            valueMemberPath="Budget"
                            valueAxisName="radiusAxis"
                            angleAxisName="angleAxis"/> */}
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

    public setSeries(seriesType: string)
    {
         if (seriesType === "Area") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgrRadialAreaSeries({ name: "series1" });
            series1.valueMemberPath  = "Budget";
            series1.valueAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrRadialAreaSeries({ name: "series2" });
            series2.valueMemberPath  = "Spending";
            series2.valueAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Pie") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgrRadialPieSeries({ name: "series1" });
            series1.valueMemberPath  = "Budget";
            series1.valueAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrRadialPieSeries({ name: "series2" });
            series2.valueMemberPath  = "Spending";
            series2.valueAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Line") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgrRadialLineSeries({ name: "series1" });
            series1.valueMemberPath  = "Budget";
            series1.valueAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrRadialLineSeries({ name: "series2" });
            series2.valueMemberPath  = "Spending";
            series2.valueAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Column") {
            // creating a series with mapping to data columns of financial data
            const series1 = new IgrRadialColumnSeries({ name: "series1" });
            series1.valueMemberPath  = "Budget";
            series1.valueAxisName = "radiusAxis";
            series1.angleAxisName = "angleAxis";
            const series2 = new IgrRadialColumnSeries({ name: "series2" });
            series2.valueMemberPath  = "Spending";
            series2.valueAxisName = "radiusAxis";
            series2.angleAxisName = "angleAxis";

            series1.title = "Budget";
            series2.title = "Spending";
            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
            this.setSeries("Pie");
        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
            this.setSeries("Column");
        }
    }
}
