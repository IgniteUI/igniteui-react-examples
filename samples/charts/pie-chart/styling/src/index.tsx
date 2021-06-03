import { Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrPieChartModule, IgrItemLegendModule } from 'igniteui-react-charts';

import { IgrItemLegend, IgrPieChart } from 'igniteui-react-charts';
const mods: any[] = [
    IgrPieChartModule,
    IgrItemLegendModule
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
                    labelsPosition="OutsideEnd"
                    radiusFactor="0.7"
                    legend={this.legend}
                    labelExtent="30"
                    startAngle="0"
                    brushes="rgba(247, 210, 98, 1) rgba(168, 168, 183, 1) rgba(224, 81, 169, 1) rgba(248, 161, 95, 1) rgba(115, 86, 86, 1)"
                    outlines="white"
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
