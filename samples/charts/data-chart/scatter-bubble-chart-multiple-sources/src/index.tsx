import { DataEuropeItem, DataEurope, DataAfricaItem, DataAfrica } from './SampleData';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries } from 'igniteui-react-charts';
const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
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
    private bubbleSeries1: IgrBubbleSeries
    private bubbleSeries2: IgrBubbleSeries

    private sizeScale: IgrSizeScale = new IgrSizeScale({});
    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);

        this.sizeScale = new IgrSizeScale({});
        this.sizeScale.minimumValue = 10;
        this.sizeScale.maximumValue = 50;
   }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Total Population of Selected Countries
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
                        title="Hours Worked per Week"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        title="GDP per Capita"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        radiusMemberPath="population"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="workedHours"
                        yMemberPath="gDP"
                        markerType="Circle"
                        dataSource={this.dataAfrica}
                        showDefaultTooltip="true"
                        title="African Countries"
                        name="BubbleSeries1"
                        radiusScale={this.sizeScale}>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        title="European Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="workedHours"
                        yMemberPath="gDP"
                        radiusMemberPath="population"
                        dataSource={this.dataEurope}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        name="BubbleSeries2"
                        radiusScale={this.sizeScale}>
                    </IgrBubbleSeries>
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
