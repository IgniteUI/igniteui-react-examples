import { Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrCategoryChartModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrLegend, IgrCategoryChart } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrCategoryChartModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }

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
                Olympic Medals By Country
            </div>
            <div className="container fill">
                <IgrCategoryChart
                    chartType="Line"
                    yAxisTitle="TWh"
                    dataSource={this.data}
                    legend={this.legend}
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
