import { DataForGermanyItem, DataForGermany, DataForFranceItem, DataForFrance, DataForNorwayItem, DataForNorway } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrScatterLineSeries } from 'igniteui-react-charts';
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
    private scatterLineSeries1: IgrScatterLineSeries
    private scatterLineSeries2: IgrScatterLineSeries
    private scatterLineSeries3: IgrScatterLineSeries

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
                    <IgrScatterLineSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        markerType="Circle"
                        dataSource={this.dataForGermany}
                        showDefaultTooltip="true"
                        title="Germany"
                        name="ScatterLineSeries1">
                    </IgrScatterLineSeries>
                    <IgrScatterLineSeries
                        title="France"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.dataForFrance}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        name="ScatterLineSeries2">
                    </IgrScatterLineSeries>
                    <IgrScatterLineSeries
                        title="Norway"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="lifeExpectancy"
                        yMemberPath="healthExpense"
                        dataSource={this.dataForNorway}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        name="ScatterLineSeries3">
                    </IgrScatterLineSeries>
                </IgrDataChart>
            </div>
        </div>
        );
   }

    private _dataForGermany: DataForGermany = null;
    public get dataForGermany(): DataForGermany {
        if (this._dataForGermany == null)
        {
            this._dataForGermany = new DataForGermany();
        }
        return this._dataForGermany;
    }

    private _dataForFrance: DataForFrance = null;
    public get dataForFrance(): DataForFrance {
        if (this._dataForFrance == null)
        {
            this._dataForFrance = new DataForFrance();
        }
        return this._dataForFrance;
    }

    private _dataForNorway: DataForNorway = null;
    public get dataForNorway(): DataForNorway {
        if (this._dataForNorway == null)
        {
            this._dataForNorway = new DataForNorway();
        }
        return this._dataForNorway;
    }

}
// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
