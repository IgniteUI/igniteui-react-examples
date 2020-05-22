// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
// scatter series' modules:
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
// scatter series' elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleScatterStats } from './SampleScatterStats';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();
IgrLegendModule.register();

export default class DataChartOverview extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <span className="igLegend-title">Legend: </span>
                <div className="igLegend">
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 35px)"}}>
                <IgrDataChart ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    dataSource={this.data} >
                    {/* axes */}
                    <IgrNumericXAxis name="xAxis"
                    isLogarithmic={true}
                    abbreviateLargeNumbers={true}
                    title="Population" />
                    <IgrNumericYAxis name="yAxis"
                    isLogarithmic={true}
                    abbreviateLargeNumbers={true}
                    title="Total GDP ($)" />
                    {/* NOTE series are created in code-behind */}
                </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.populateChart();
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public populateChart()
    {
        const data1 = SampleScatterStats.getCountriesWithLargePop();
        const data2 = SampleScatterStats.getCountriesWithSmallPop();

        this.chart.series.clear();
        this.createSeries(data1, "Large Countries");
        this.createSeries(data2, "Small Countries");
    }

    public createSeries(data: any, title: string)
    {
        const sizeScale = new IgrSizeScale({});
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const id = "series" + this.chart.series.count;

        const series1 = new IgrBubbleSeries({ name: id });
        series1.title = title;
        series1.markerType = MarkerType.Circle;
        series1.dataSource = data;
        series1.showDefaultTooltip = true;
        series1.xMemberPath = "Population";
        series1.yMemberPath = "GdpTotal";
        series1.radiusMemberPath = "GdpPerCapita";
        series1.radiusScale = sizeScale;
        series1.labelMemberPath = "Name";
        series1.xAxisName = "xAxis";
        series1.yAxisName = "yAxis";

        this.chart.series.add(series1);
    }
}
