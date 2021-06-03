import { Data } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrDataChartCoreModule, IgrDataChartPolarModule, IgrDataChartPolarCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrLegend, IgrDataChart, IgrCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialAreaSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCoreModule,
    IgrDataChartPolarModule,
    IgrDataChartPolarCoreModule,
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
    private angleAxis: IgrCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialAreaSeries1: IgrRadialAreaSeries
    private radialAreaSeries2: IgrRadialAreaSeries

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
                    brushes="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
                    markerBrushes="white"
                    outlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
                    markerOutlines="rgba(140, 231, 217, 1) rgba(238, 88, 121, 1)"
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
                    <IgrRadialAreaSeries
                        valueMemberPath="ronaldoValue"
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        markerType="Circle"
                        dataSource={this.data}
                        thickness="3"
                        areaFillOpacity="0.5"
                        showDefaultTooltip="true"
                        title="Ronaldo"
                        name="RadialAreaSeries1">
                    </IgrRadialAreaSeries>
                    <IgrRadialAreaSeries
                        dataSource={this.data}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="messiValue"
                        showDefaultTooltip="true"
                        areaFillOpacity="0.5"
                        thickness="3"
                        title="Messi"
                        markerType="Circle"
                        name="RadialAreaSeries2">
                    </IgrRadialAreaSeries>
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
