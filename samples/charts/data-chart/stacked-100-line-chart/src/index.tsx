import { Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrStackedFragmentSeries } from "igniteui-react-charts";
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStacked100LineSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartStackedModule,
    IgrStackedFragmentSeriesModule
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
    private stacked100LineSeries: IgrStacked100LineSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Annual Number of Births by World Region, Relative
            </div>
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.data}
                        label="year"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        interval="20"
                        titleLeftMargin="10"
                        labelFormat="{0} %"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrStacked100LineSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.data}
                        showDefaultTooltip="false"
                        name="Stacked100LineSeries">
                        <IgrStackedFragmentSeries
                            valueMemberPath="asia">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            valueMemberPath="africa">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            valueMemberPath="europe">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            valueMemberPath="northAmerica">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            valueMemberPath="southAmerica">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            valueMemberPath="oceania">
                        </IgrStackedFragmentSeries>
                    </IgrStacked100LineSeries>
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
