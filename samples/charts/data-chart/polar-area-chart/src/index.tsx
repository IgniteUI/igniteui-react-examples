import {Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrLegend, IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarAreaSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarAreaSeries1: IgrPolarAreaSeries
    private polarAreaSeries2: IgrPolarAreaSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Wind Speed vs Boat Speed
            </div>

            <div className="legend">
                <IgrLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    legend={this.legend}
                    ref={this.chartRef}>
                    <IgrNumericAngleAxis
                        startAngleOffset="-90"
                        minimumValue="0"
                        maximumValue="360"
                        interval="30"
                        name="angleAxis">
                    </IgrNumericAngleAxis>
                    <IgrNumericRadiusAxis
                        radiusExtentScale="0.9"
                        innerRadiusExtentScale="0.1"
                        minimumValue="0"
                        maximumValue="100"
                        interval="25"
                        name="radiusAxis">
                    </IgrNumericRadiusAxis>
                    <IgrPolarAreaSeries
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        markerType="Circle"
                        dataSource={this.data}
                        thickness="1"
                        areaFillOpacity="0.8"
                        showDefaultTooltip="true"
                        title="Wind Speed"
                        name="PolarAreaSeries1">
                    </IgrPolarAreaSeries>
                    <IgrPolarAreaSeries
                        dataSource={this.data}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="true"
                        areaFillOpacity="0.8"
                        thickness="1"
                        title="Boat Speed"
                        markerType="Circle"
                        name="PolarAreaSeries2">
                    </IgrPolarAreaSeries>
                </IgrDataChart>
            </div>
        </div>
        );
   }

    private _data: Data = null;
    public get data(): Data {
        if (this._data == null)
        {
            this._data = new Data();
        }
        return this._data;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
