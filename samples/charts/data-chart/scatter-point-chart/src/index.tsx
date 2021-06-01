import { DataEuropeItem, DataEurope, DataAfricaItem, DataAfrica } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartInteractivityModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrLegend
    private legendRef(r: IgrLegend) {
        this.legend = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrNumericXAxis
    private yAxis: IgrNumericYAxis
    private scatterSeries1: IgrScatterSeries
    private scatterSeries2: IgrScatterSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Population Statistics for Selected Continents
            </div>

            <div className="legend">
                <IgrLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    legend={this.legend}
                    ref={this.chartRef}>
                    <IgrNumericXAxis
                        minimumValue="5"
                        maximumValue="15"
                        title="Death Rate (per 1,000 people)"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="50"
                        interval="10"
                        title="Birth Rate (per 1,000 people)"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrScatterSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        markerType="Circle"
                        dataSource={this.dataEurope}
                        showDefaultTooltip="true"
                        title="Europe"
                        name="ScatterSeries1">
                    </IgrScatterSeries>
                    <IgrScatterSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        markerType="Circle"
                        dataSource={this.dataAfrica}
                        showDefaultTooltip="true"
                        title="Africa"
                        name="ScatterSeries2">
                    </IgrScatterSeries>
                </IgrDataChart>
            </div>
        </div>
        );
   }

    private _dataEurope: DataEurope = null;
    public get dataEurope(): DataEurope {
        if (this._dataEurope == null)
        {
            this._dataEurope = new DataEurope();
        }
        return this._dataEurope;
    }

    private _dataAfrica: DataAfrica = null;
    public get dataAfrica(): DataAfrica {
        if (this._dataAfrica == null)
        {
            this._dataAfrica = new DataAfrica();
        }
        return this._dataAfrica;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
