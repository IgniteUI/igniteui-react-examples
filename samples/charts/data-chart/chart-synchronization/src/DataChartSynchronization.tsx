// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from "react";




IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartSynchronization extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent" style={{height: "100%"}}>
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="50%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>

                        <IgrCategoryXAxis name="xAxis" label="Year" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrLineSeries name="series1" title="USA"
                            valueMemberPath="USA"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series2" title="China"
                            valueMemberPath="China"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series3" title="Russia"
                            valueMemberPath="Russia"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                    </IgrDataChart>

                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="50%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Year" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrLineSeries name="series1" title="USA"
                            valueMemberPath="USA"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series2" title="China"
                            valueMemberPath="China"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series3" title="Russia"
                            valueMemberPath="Russia"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        this.data = [
            { Year: "1996", USA: 148, China: 110, Russia: 95 },
            { Year: "2000", USA: 142, China: 115, Russia: 91 },
            { Year: "2004", USA: 134, China: 121, Russia: 86 },
            { Year: "2008", USA: 131, China: 129, Russia: 65 },
            { Year: "2012", USA: 135, China: 115, Russia: 77 },
            { Year: "2016", USA: 146, China: 112, Russia: 88 }
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        if(chart != null){
            chart.syncChannel = "ChannelA";
            chart.synchronizeHorizontally = true;
            chart.synchronizeVertically = true;
        }
    }
}
