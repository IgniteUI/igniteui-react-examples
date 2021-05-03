import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

// axis modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarLineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

import { SamplePolarData } from './SamplePolarData';

IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypePolarLineSeries extends React.Component<any, any> {
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

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="legend-title">Legend: </label>
                    <div className="options vertical">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="container" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        titleTopMargin="10px"
                        chartTitle="Sailing Chart"
                        subtitle="Wind Speed vs. Boat Speed"
                        width="100%"
                        height="100%"
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
                        <IgrPolarLineSeries
                            name="series1"
                            angleMemberPath="Direction"
                            radiusMemberPath="WindSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Wind Speed"
                            markerType="Circle"
                            showDefaultTooltip="true"  />
                        <IgrPolarLineSeries
                            name="series2"
                            angleMemberPath="Direction"
                            radiusMemberPath="BoatSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Boat Speed"
                            markerType="Circle"
                            showDefaultTooltip="true"  />
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

// rendering above class to the React DOM
ReactDOM.render(<DataChartTypePolarLineSeries />, document.getElementById('root'));