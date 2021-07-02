import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { DataItem, Data } from './SampleData';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrWaterfallSeries } from 'igniteui-react-charts';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule
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
    private waterfallSeries1: IgrWaterfallSeries
    private waterfallSeries2: IgrWaterfallSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            <div className="legend-title">
                Facebook's Consolidated Statements of Income
            </div>
            
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        interval="1"
                        dataSource={this.data}
                        overlap="1"
                        label="category"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="60"
                        title="Millions of Dollars"
                        titleLeftMargin="10"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrWaterfallSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="costs"
                        isTransitionInEnabled="true"
                        dataSource={this.data}
                        showDefaultTooltip="true"
                        name="WaterfallSeries1">
                    </IgrWaterfallSeries>
                    <IgrWaterfallSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.data}
                        valueMemberPath="netIncome"
                        showDefaultTooltip="true"
                        isTransitionInEnabled="true"
                        brush="rgba(116, 70, 185, 1)"
                        outline="rgba(116, 70, 185, 1)"
                        name="WaterfallSeries2">
                    </IgrWaterfallSeries>
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
