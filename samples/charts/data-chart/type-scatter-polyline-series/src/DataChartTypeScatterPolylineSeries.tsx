// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolylineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleShapeData } from './SampleShapeData';

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterPolylineSeries extends React.Component {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleShapeData.create();
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">

                <div className="igComponent"   >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        width="100%"
                        height="100%"
                        dataSource={this.data} chartTitle="House Outline">
                        <IgrNumericXAxis name="xAxis" minimumValue={-1} maximumValue={11} interval={1}/>
                        <IgrNumericYAxis name="yAxis" minimumValue={-1} maximumValue={11} interval={1}/>

                        <IgrScatterPolylineSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            shapeMemberPath="Points"
                            title="House Outline"
                            brush="Black"
                            outline="Black"
                            showDefaultTooltip="true"/>
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
    }

    public setSeries()
    {
        const series1 = new IgrScatterPolylineSeries({ name: "series1" });
        series1.shapeMemberPath = "Points";
        series1.title = "House Outline";
        series1.brush = "Black";
        series1.outline = "Black";
        series1.xAxisName = "xAxis";
        series1.yAxisName = "yAxis";

        this.chart.series.clear();
        this.chart.series.add(series1);
    }

}
