import { DataItem, Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrStackedFragmentSeries } from "igniteui-react-charts";
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrDataChartStackedModule, IgrStackedFragmentSeriesModule } from 'igniteui-react-charts';

import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrStackedColumnSeries } from 'igniteui-react-charts';
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
    private stackedColumnSeries: IgrStackedColumnSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Electricity Production from Renewables
            </div>
            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.data}
                        gap="0.75"
                        label="year"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="140"
                        interval="20"
                        titleLeftMargin="10"
                        labelFormat="{0} m"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrStackedColumnSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.data}
                        showDefaultTooltip="false"
                        name="StackedColumnSeries">
                        <IgrStackedFragmentSeries
                            name="s1"
                            valueMemberPath="asia">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s2"
                            valueMemberPath="africa">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s3"
                            valueMemberPath="europe">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s4"
                            valueMemberPath="northAmerica">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s5"
                            valueMemberPath="southAmerica">
                        </IgrStackedFragmentSeries>
                        <IgrStackedFragmentSeries
                            name="s6"
                            valueMemberPath="oceania">
                        </IgrStackedFragmentSeries>
                    </IgrStackedColumnSeries>
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
