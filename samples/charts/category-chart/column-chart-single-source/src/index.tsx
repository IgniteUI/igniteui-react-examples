import { DataItem, Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrCategoryChartModule } from 'igniteui-react-charts';

import { IgrCategoryChart } from 'igniteui-react-charts';
const mods: any[] = [
    IgrCategoryChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrCategoryChart
    private chartRef(r: IgrCategoryChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Average Temperature Range in New York
            </div>
            <div className="container fill">
                <IgrCategoryChart
                    chartType="Column"
                    xAxisInterval="1"
                    yAxisLabelLeftMargin="0"
                    yAxisTitleLeftMargin="10"
                    yAxisTitleRightMargin="5"
                    yAxisTitle="Temperature in Degrees Celsius"
                    dataSource={this.data}
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    ref={this.chartRef}>
                </IgrCategoryChart>
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
