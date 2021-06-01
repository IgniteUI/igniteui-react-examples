import { DataItem, Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';

import { IgrItemLegend, IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrDoughnutChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrItemLegend
    private legendRef(r: IgrItemLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDoughnutChart
    private chartRef(r: IgrDoughnutChart) {
        this.chart = r;
        this.setState({});
    }
    private series: IgrRingSeries

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
                <IgrDoughnutChart
                    allowSliceExplosion="true"
                    ref={this.chartRef}>
                    <IgrRingSeries
                        dataSource={this.data}
                        valueMemberPath="marketShare"
                        labelMemberPath="summary"
                        legendLabelMemberPath="category"
                        labelsPosition="OutsideEnd"
                        legend={this.legend}
                        labelExtent="30"
                        startAngle="30"
                        outlines="white"
                        radiusFactor="0.6"
                        name="series">
                    </IgrRingSeries>
                </IgrDoughnutChart>
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
