import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { MonthsItem, Months, SeasonsItem, Seasons } from './SampleData';
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
    private series1: IgrRingSeries
    private series2: IgrRingSeries

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            <div className="legend-title">
                Hierarchical Chart
            </div>
            
            <div className="container fill">
                <IgrDoughnutChart
                    allowSliceSelection="false"
                    allowSliceExplosion="false"
                    ref={this.chartRef}>
                    <IgrRingSeries
                        dataSource={this.seasons}
                        valueMemberPath="value"
                        labelMemberPath="label"
                        labelsPosition="Center"
                        brushes="rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1)"
                        outlines="white"
                        radiusFactor="0.9"
                        name="series1">
                    </IgrRingSeries>
                    <IgrRingSeries
                        brushes="rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1)"
                        dataSource={this.months}
                        valueMemberPath="value"
                        labelMemberPath="label"
                        labelsPosition="Center"
                        outlines="white"
                        radiusFactor="0.9"
                        name="series2">
                    </IgrRingSeries>
                </IgrDoughnutChart>
            </div>
        </div>
        );
    }

    private _months: Months = null;
    public get months(): Months {
        if (this._months == null)
        {
            this._months = new Months();
        }
        return this._months;
    }
    
    private _seasons: Seasons = null;
    public get seasons(): Seasons {
        if (this._seasons == null)
        {
            this._seasons = new Seasons();
        }
        return this._seasons;
    }
    


}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
