import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { DataItem, Data } from './SampleData';
import { IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartVerticalCategoryModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryYAxis, IgrNumericXAxis, IgrBarSeries } from 'igniteui-react-charts';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartInteractivityModule,
    IgrDataChartVerticalCategoryModule
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
    private barSeries1: IgrBarSeries

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
                        gap="0.5"
                        overlap="-0.1"
                        isInverted="true"
                        label="shop"
                        name="yAxis">
                    </IgrCategoryYAxis>
                    <IgrNumericXAxis
                        labelFormat="{0}%"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrBarSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="percent"
                        isTransitionInEnabled="true"
                        dataSource={this.data}
                        isHighlightingEnabled="true"
                        showDefaultTooltip="true"
                        name="BarSeries1">
                    </IgrBarSeries>
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
