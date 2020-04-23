// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrScatterPolygonSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeCoreModule } from 'igniteui-react-charts';
import { IgrDataChartShapeModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from "react";
import "../styles.css";
import "./DataChartSharedStyles.css";
import { SampleShapeData } from "./SampleShapeData";

IgrDataChartCoreModule.register();
IgrDataChartShapeCoreModule.register();
IgrDataChartShapeModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterPolygonSeries extends React.Component {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleShapeData.create();
    }

    public render() {
        return (
            <div className="sample">
                <div className="chart"  >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        width="100%"
                        height="100%"
                        dataSource={this.data}  chartTitle="House Floor Plan">
                        <IgrNumericXAxis name="xAxis" minimumValue={-1} maximumValue={11} interval={1} />
                        <IgrNumericYAxis name="yAxis" minimumValue={-1} maximumValue={11} interval={1} />

                        <IgrScatterPolygonSeries
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
        this.chart = chart;
        this.setSeries();
    }

    public setSeries()
    {
        const series1 = new IgrScatterPolygonSeries({ name: "series1" });
        series1.shapeMemberPath = "Points";
        series1.title = "House Floor Plan";
        series1.brush = "Gray";
        series1.outline = "Black";
        series1.xAxisName = "xAxis";
        series1.yAxisName = "yAxis";

        this.chart.series.clear();
        this.chart.series.add(series1);
    }

}
