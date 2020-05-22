// axis modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SamplePolarData } from './SamplePolarData';

IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypePolarSplineAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { seriesType: "Spline" }
        this.data = SamplePolarData.create();
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
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        titleTopMargin="10px"
                        chartTitle="Sailing Chart"
                        subtitle="Wind Speed vs. Boat Speed"
                        width="100%"
                        height="100%"
                        gridMode="BeforeSeries"
                        dataSource={this.data} >
                        <IgrNumericAngleAxis name="angleAxis"
                            startAngleOffset={-90}
                            interval={30}
                            minimumValue={0}
                            maximumValue={360} />
                        <IgrNumericRadiusAxis name="radiusAxis"
                            innerRadiusExtentScale={0.1}
                            radiusExtentScale={0.9}
                            minimumValue={0}
                            maximumValue={100}
                            interval={25} />
                        <IgrPolarSplineAreaSeries
                            name="series1"
                            angleMemberPath="Direction"
                            radiusMemberPath="WindSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Wind Speed"
                            markerType="Circle"
                            areaFillOpacity="0.8"
                            showDefaultTooltip="true" />
                        <IgrPolarSplineAreaSeries
                            name="series2"
                            angleMemberPath="Direction"
                            radiusMemberPath="BoatSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Boat Speed"
                            markerType="Circle"
                            areaFillOpacity="0.8"
                            showDefaultTooltip="true"/>
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
