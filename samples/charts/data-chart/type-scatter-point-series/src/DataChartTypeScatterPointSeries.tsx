// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// types of scatter series:
import { IgrScatterSeries } from 'igniteui-react-charts';
// modules of data chart:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// additional modules
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleScatterStats } from './SampleScatterStats';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterPointSeries extends React.Component {

    public data1: any[];
    public data2: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);
        this.data1 = SampleScatterStats.getCountriesWithHighIncome();
        this.data2 = SampleScatterStats.getCountriesWithLowIncome();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent"   >
                    <IgrDataChart
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        width="100%"
                        height="100%"
                        chartTitle="GDP vs Population">

                        <IgrNumericXAxis name="xAxis"
                            isLogarithmic={true}
                            abbreviateLargeNumbers={true}
                            title="Population" />
                        <IgrNumericYAxis name="yAxis"
                            isLogarithmic={true}
                            abbreviateLargeNumbers={true}
                            title="Total GDP ($)" />

                        <IgrScatterSeries name="series1"
                        markerType="Circle"
                        dataSource={this.data1}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="Population"
                        yMemberPath="GdpTotal"
                        showDefaultTooltip="true"
                        title="Rich Countries" />

                        <IgrScatterSeries name="series2"
                        markerType="Circle"
                        dataSource={this.data2}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="Population"
                        yMemberPath="GdpTotal"
                        showDefaultTooltip="true"
                        title="Poor Countries" />

                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public setSeries(seriesType: string)
    {
        if (seriesType === "Point") {
            const series1 = new IgrScatterSeries({ name: "series1" });
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "Population";
            series1.yMemberPath = "GdpTotal";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrScatterSeries({ name: "series2" });
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "Population";
            series2.yMemberPath = "GdpTotal";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        }
    }
}
