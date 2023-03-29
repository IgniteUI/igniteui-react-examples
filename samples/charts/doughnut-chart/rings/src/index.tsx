import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart, IgrRingSeries } from 'igniteui-react-charts';
import { CalendarSeasonsItem, CalendarSeasons } from './CalendarSeasons';
import { CalendarMonthsItem, CalendarMonths } from './CalendarMonths';

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
                    ref={this.chartRef}
                    allowSliceExplosion="false"
                    allowSliceSelection="false">
                    <IgrRingSeries
                        name="series1"
                        labelMemberPath="label"
                        valueMemberPath="value"
                        labelsPosition="Center"
                        radiusFactor="0.9"
                        outlines="white"
                        brushes="rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1)"
                        dataSource={this.calendarSeasons}>
                    </IgrRingSeries>
                    <IgrRingSeries
                        name="series2"
                        labelMemberPath="label"
                        valueMemberPath="value"
                        labelsPosition="Center"
                        radiusFactor="0.9"
                        outlines="white"
                        brushes="rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(60, 189, 201, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(159, 179, 40, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(249, 98, 50, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1) rgba(138, 88, 214, 1)"
                        dataSource={this.calendarMonths}>
                    </IgrRingSeries>
                </IgrDoughnutChart>
            </div>
        </div>
        );
    }

    private _calendarSeasons: CalendarSeasons = null;
    public get calendarSeasons(): CalendarSeasons {
        if (this._calendarSeasons == null)
        {
            this._calendarSeasons = new CalendarSeasons();
        }
        return this._calendarSeasons;
    }

    private _calendarMonths: CalendarMonths = null;
    public get calendarMonths(): CalendarMonths {
        if (this._calendarMonths == null)
        {
            this._calendarMonths = new CalendarMonths();
        }
        return this._calendarMonths;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);