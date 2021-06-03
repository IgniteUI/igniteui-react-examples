import {Data, Callouts } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrCalloutLayer } from 'igniteui-react-charts';
import { IgrCalloutLayerModule } from 'igniteui-react-charts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartVerticalCategoryModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis } from 'igniteui-react-charts';
const mods: any[] = [
    IgrCalloutLayerModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartVerticalCategoryModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private yAxis: IgrCategoryYAxis
    private xAxis: IgrNumericXAxis

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Where Online Shoppers Start Their Search
            </div>
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryYAxis
                        dataSource={this.data}
                        gap="0.75"
                        isInverted="true"
                        label="shop"
                        name="yAxis">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        interval="20"
                        labelFormat="{0}%"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrBarSeries name="series1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="percent"
                        isTransitionInEnabled="true"
                        dataSource={this.data}
                        isHighlightingEnabled="true"
                        showDefaultTooltip="true">
                    </IgrBarSeries>
                    <IgrCalloutLayer name="layer1"
                        labelMemberPath="label"
                        xMemberPath="x"
                        yMemberPath="y"
                        contentMemberPath="label"
                        calloutTextColor="black"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
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
