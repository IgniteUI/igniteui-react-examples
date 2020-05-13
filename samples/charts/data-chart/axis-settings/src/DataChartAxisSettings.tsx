// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

import * as React from 'react';

import { DataChartSharedData } from './DataChartSharedData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrNumberAbbreviatorModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartAxisSettings extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.data = DataChartSharedData.getEnergyProduction();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igLegend-title">Energy Source: </span>
                    <div className="igLegend">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis"
                            label="Country"
                            labelTextStyle="9pt Verdana"
                            labelTopMargin={5}
                            labelTextColor="gray"
                            title="Countries"
                            titleTextColor="gray"
                            titleTextStyle="12pt Verdana"
                            titleAngle={0}
                            tickLength={10}
                            tickStrokeThickness={0.5}
                            tickStroke="gray"
                            interval={1}
                            majorStroke="gray"
                            majorStrokeThickness={0.5}
                            gap={0.125}
                            overlap={0}/>

                        <IgrNumericYAxis name="yAxis"
                            labelLocation="OutsideRight"
                            labelTextStyle="9pt Verdana"
                            labelRightMargin={0}
                            labelTextColor="gray"
                            labelHorizontalAlignment="left"
                            title="Energy Production (Wh)"
                            titleTextStyle="10pt Verdana"
                            titleTextColor="gray"
                            titleAngle={90}
                            titleLeftMargin={5}
                            tickLength={10}
                            tickStrokeThickness={0.5}
                            tickStroke="black"
                            minimumValue={0}
                            maximumValue={1000000000}
                            interval={100000000}
                            majorStroke="black"
                            majorStrokeThickness={1}
                            minorInterval={25000000}
                            minorStroke="gray"
                            minorStrokeThickness={0.5}
                            abbreviateLargeNumbers={true} />

                        <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Coal"
                            isTransitionInEnabled="true" />
                        <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Hydro"
                            isTransitionInEnabled="true" />
                        <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Nuclear"
                            isTransitionInEnabled="true" />
                        <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Gas"
                            isTransitionInEnabled="true" />
                        <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Oil"
                            isTransitionInEnabled="true" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
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
}
