import { DataItem, Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarSplineAreaSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private angleAxis: IgrNumericAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private polarSplineAreaSeries1: IgrPolarSplineAreaSeries
    private polarSplineAreaSeries2: IgrPolarSplineAreaSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Wind Speed vs Boat Speed
            </div>
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
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
                    <IgrPolarSplineAreaSeries
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
                        name="PolarSplineAreaSeries1">
                    </IgrPolarSplineAreaSeries>
                    <IgrPolarSplineAreaSeries
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        markerType="Circle"
                        dataSource={this.data}
                        thickness="1"
                        areaFillOpacity="0.8"
                        showDefaultTooltip="true"
                        title="Boat Speed"
                        name="PolarSplineAreaSeries2">
                    </IgrPolarSplineAreaSeries>
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
