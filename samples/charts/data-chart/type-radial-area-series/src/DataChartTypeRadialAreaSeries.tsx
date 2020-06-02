// axis modules:
import { IgrCategoryAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrRadialAreaSeries } from 'igniteui-react-charts';
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

export default class DataChartTypeRadialAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { seriesType: "Pie" }
        this.data = SampleRadialData.create();
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
                <div className="igComponent" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef}
                        chartTitle="Company Finances by Department"
                        width="100%"
                        height="100%"
                        gridMode="BeforeSeries"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        <IgrCategoryAngleAxis name="angleAxis" label="Department" />
                        <IgrNumericRadiusAxis name="radiusAxis" innerRadiusExtentScale={0.1} minimumValue={0} />
                        <IgrRadialAreaSeries
                            name="series1"
                            valueMemberPath="Budget"
                            valueAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Budget"
                            areaFillOpacity="0.8"
                            showDefaultTooltip="true"/>
                        <IgrRadialAreaSeries
                            name="series2"
                            valueMemberPath="Spending"
                            valueAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Spending"
                            areaFillOpacity="0.8"
                            showDefaultTooltip="true" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
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
}
