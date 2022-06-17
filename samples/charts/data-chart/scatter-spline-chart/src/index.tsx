import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterSplineSeries } from 'igniteui-react-charts';
import { HealthDataForGermanyItem, HealthDataForGermany } from './HealthDataForGermany';
import { HealthDataForFranceItem, HealthDataForFrance } from './HealthDataForFrance';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
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
    private scatterSplineSeries1: IgrScatterSplineSeries
    private scatterSplineSeries2: IgrScatterSplineSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
                                    <div className="legend-title">
                Life Expectancy vs Health Expenditure
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
                        minimumValue="72"
                        maximumValue="84"
                        interval="2"
                        title="Life Expectancy (in years)"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        minimumValue="1000"
                        maximumValue="6000"
                        interval="1000"
                        abbreviateLargeNumbers="true"
                        title="Health Expenditure per Capita"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrScatterSplineSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        markerType="Circle"
                        dataSource={this.healthDataForGermany}
                        showDefaultTooltip="true"
                        title="Germany"
                        name="ScatterSplineSeries1">
                    </IgrScatterSplineSeries>
                    <IgrScatterSplineSeries
                        title="France"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.healthDataForFrance}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        name="ScatterSplineSeries2">
                    </IgrScatterSplineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _healthDataForGermany: HealthDataForGermany = null;
    public get healthDataForGermany(): HealthDataForGermany {
        if (this._healthDataForGermany == null)
        {
            this._healthDataForGermany = new HealthDataForGermany();
        }
        return this._healthDataForGermany;
    }
    
    private _healthDataForFrance: HealthDataForFrance = null;
    public get healthDataForFrance(): HealthDataForFrance {
        if (this._healthDataForFrance == null)
        {
            this._healthDataForFrance = new HealthDataForFrance();
        }
        return this._healthDataForFrance;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
