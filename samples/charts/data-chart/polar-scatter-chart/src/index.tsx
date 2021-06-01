import { DataItem, Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrNumericAngleAxis, IgrNumericRadiusAxis, IgrPolarScatterSeries } from 'igniteui-react-charts';
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
    private polarScatterSeries1: IgrPolarScatterSeries
    private polarScatterSeries2: IgrPolarScatterSeries

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
                    <IgrPolarScatterSeries
                        angleMemberPath="direction"
                        radiusMemberPath="windSpeed"
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        markerType="Circle"
                        dataSource={this.data}
                        showDefaultTooltip="true"
                        title="Wind Speed"
                        name="PolarScatterSeries1">
                    </IgrPolarScatterSeries>
                    <IgrPolarScatterSeries
                        dataSource={this.data}
                        angleAxisName="angleAxis"
                        radiusAxisName="radiusAxis"
                        angleMemberPath="direction"
                        radiusMemberPath="boatSpeed"
                        showDefaultTooltip="true"
                        title="Boat Speed"
                        markerType="Circle"
                        name="PolarScatterSeries2">
                    </IgrPolarScatterSeries>
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
