import {Data, Callouts } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrCalloutLayer } from 'igniteui-react-charts';
import { IgrCalloutLayerModule } from 'igniteui-react-charts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis } from 'igniteui-react-charts';
const mods: any[] = [
    IgrCalloutLayerModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
            </div>
            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.data}
                        label="year"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        title="TWh"
                        labelLocation="OutsideRight"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrLineSeries name="series1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="uSA"
                        dataSource={this.data}>
                    </IgrLineSeries>
                    <IgrCalloutLayer name="layer1"
                        labelMemberPath="label"
                        xMemberPath="index"
                        yMemberPath="value"
                        calloutTextColor="black"
                        calloutBackground="orange"
                        calloutOutline="black"
                        calloutLeaderBrush="black"
                        calloutStrokeThickness="2"
                        dataSource={this.callouts}>
                    </IgrCalloutLayer>
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

    private _callouts: Callouts = null;
    public get callouts(): Callouts {
        if (this._callouts == null)
        {
            this._callouts = new Callouts();
        }
        return this._callouts;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
