import {Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';

import { IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrDoughnutChartModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDoughnutChart
    private chartRef(r: IgrDoughnutChart) {
        this.chart = r;
        this.setState({});
    }
    private series: IgrRingSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Market Share of Tech Companies
            </div>
            <div className="container fill">
                <IgrDoughnutChart
                    ref={this.chartRef}>
                    <IgrRingSeries
                        dataSource={this.data}
                        valueMemberPath="marketShare"
                        labelMemberPath="summary"
                        legendLabelMemberPath="category"
                        outlines="white"
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
