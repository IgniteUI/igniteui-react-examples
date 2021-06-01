import { DataItem, Data, CalloutDataItem, CalloutData } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrStackedFragmentSeries } from "igniteui-react-charts";
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule, IgrCalloutLayerModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrStackedBarSeries, IgrCalloutLayer } from 'igniteui-react-charts';
const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartStackedModule,
    IgrStackedFragmentSeriesModule,
    IgrCalloutLayerModule
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
    private stackedBarSeries: IgrStackedBarSeries
    private calloutLayer: IgrCalloutLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable energy consumption
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
                        label="location"
                        name="yAxis">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        minimumValue="0"
                        title="TWh"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrStackedBarSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.data}
                        areaFillOpacity="1"
                        showDefaultTooltip="true"
                        name="StackedBarSeries">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="hydro">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="wind">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="solar">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="other">
                        </IgrStackedFragmentSeries>
                    </IgrStackedBarSeries>
                    <IgrCalloutLayer
                        labelMemberPath="label"
                        xMemberPath="x"
                        yMemberPath="y"
                        calloutTextColor="black"
                        calloutBackground="rgba(0, 0, 0, 0)"
                        calloutLeaderBrush="rgba(0, 0, 0, 0)"
                        dataSource={this.calloutData}
                        name="CalloutLayer">
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

    private _calloutData: CalloutData = null;
    public get calloutData(): CalloutData {
        if (this._calloutData == null)
        {
            this._calloutData = new CalloutData();
        }
        return this._calloutData;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
