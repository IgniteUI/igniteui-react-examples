import { Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrItemLegendModule, IgrPieChartModule } from 'igniteui-react-charts';

import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
const mods: any[] = [
    IgrItemLegendModule,
    IgrPieChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrPieChart
    private chartRef(r: IgrPieChart) {
        this.chart = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Global Electricity Demand by Energy Use
            </div>

            <div className="legend">
                <IgrItemLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrItemLegend>
            </div>

            <div className="container fill">
                <IgrPieChart
                    dataSource={this.data}
                    valueMemberPath="marketShare"
                    labelMemberPath="category"
                    labelsPosition="BestFit"
                    radiusFactor="0.7"
                    legend={this.legend}
                    ref={this.chartRef}>
                </IgrPieChart>
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
