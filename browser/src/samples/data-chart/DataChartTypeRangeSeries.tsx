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
import * as React from "react";
import "../styles.css";
import "./DataChartSharedStyles.css";
import { DataChartSharedComponent } from "./DataChartSharedComponent";
import { SampleRangeData } from "./SampleRangeData";

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeRangeSeries extends DataChartSharedComponent {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Column" }
        this.data = SampleRangeData.create();
    }

    public render() {
        return (
            <div className="sample">
                <div className="options">
                    <span className="optionLabel">Type of Range Series: </span>
                    <select value={this.state.seriesType}
                        onChange={this.onSeriesTypeChanged}>
                        <option>Column</option>
                        <option>Area</option>
                    </select>
                </div>
                <div className="chart" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        chartTitle="Annual Temperature Changes"
                        width="100%"
                        height="100%"
                        dataSource={this.data} >
                        <IgrCategoryXAxis name="xAxis" label="Year" gap={0.5} />
                        <IgrNumericYAxis  name="yAxis" minimumValue={20}
                        title="Temperature (°C)"/>
                        {/* series are created in the setSeries function */}
                        {/* <IgrRangeColumnSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            highMemberPath="High"
                            lowMemberPath="Low" /> */}
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

            const series1 = new IgrRangeAreaSeries({ name: "series1" });
            series1.highMemberPath = "High";
            series1.lowMemberPath  = "Low";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.thickness = 0;

            this.chart.series.clear();
            this.chart.series.add(series1);

        } else if (seriesType === "Column") {

            const series1 = new IgrRangeColumnSeries({ name: "series1" });
            series1.highMemberPath = "High";
            series1.lowMemberPath  = "Low";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.setSeries("Column");
    }

}
