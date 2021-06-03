import {Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule, IgrLegendModule } from 'igniteui-react-charts';

import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialColumnSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
    IgrDataChartInteractivityModule,
    IgrLegendModule
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
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialColumnSeries1: IgrRadialColumnSeries
    private radialColumnSeries2: IgrRadialColumnSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Ronaldo vs. Messi Player Stats
            </div>

            <div className="legend">
                <IgrLegend
                    orientation="Horizontal"
                    ref={this.legendRef}>
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled="false"
                    isVerticalZoomEnabled="false"
                    legend={this.legend}
                    ref={this.chartRef}>
                    <IgrCategoryAngleAxis
                        dataSource={this.data}
                        label="attribute"
                        name="angleAxis">
                    </IgrCategoryAngleAxis>
                    <IgrNumericRadiusAxis
                        innerRadiusExtentScale="0.1"
                        minimumValue="0"
                        maximumValue="10"
                        interval="2"
                        name="radiusAxis">
                    </IgrNumericRadiusAxis>
                    <IgrRadialColumnSeries
                        valueMemberPath="ronaldoValue"
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        dataSource={this.data}
                        thickness="3"
                        areaFillOpacity="0.8"
                        showDefaultTooltip="true"
                        title="Ronaldo"
                        name="RadialColumnSeries1">
                    </IgrRadialColumnSeries>
                    <IgrRadialColumnSeries
                        dataSource={this.data}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messiValue"
                        showDefaultTooltip="true"
                        areaFillOpacity="0.8"
                        thickness="3"
                        title="Messi"
                        name="RadialColumnSeries2">
                    </IgrRadialColumnSeries>
                </IgrDataChart>
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
