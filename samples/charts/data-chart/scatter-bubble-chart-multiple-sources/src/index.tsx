import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale } from 'igniteui-react-charts';
import { CountryStatsAfricaItem, CountryStatsAfrica } from './CountryStatsAfrica';
import { CountryStatsEuropeItem, CountryStatsEurope } from './CountryStatsEurope';

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

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Total Population of Selected Countries
            </div>

            <div className="legend">
                <IgrLegend
                    ref={this.legendRef}
                    orientation="Horizontal">
                </IgrLegend>
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    legend={this.legend}>
                    <IgrNumericXAxis
                        name="xAxis"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        title="Population">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="GDP per Capita"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="BubbleSeries1"
                        title="African Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="population"
                        dataSource={this.countryStatsAfrica}
                        markerType="Circle"
                        showDefaultTooltip="true">
                        <IgrSizeScale
                            isLogarithmic="false"
                            minimumValue="20"
                            maximumValue="40">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        name="BubbleSeries2"
                        title="European Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="population"
                        dataSource={this.countryStatsEurope}
                        markerType="Circle"
                        showDefaultTooltip="true">
                        <IgrSizeScale
                            isLogarithmic="false"
                            minimumValue="20"
                            maximumValue="40">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryStatsAfrica: CountryStatsAfrica = null;
    public get countryStatsAfrica(): CountryStatsAfrica {
        if (this._countryStatsAfrica == null)
        {
            this._countryStatsAfrica = new CountryStatsAfrica();
        }
        return this._countryStatsAfrica;
    }

    private _countryStatsEurope: CountryStatsEurope = null;
    public get countryStatsEurope(): CountryStatsEurope {
        if (this._countryStatsEurope == null)
        {
            this._countryStatsEurope = new CountryStatsEurope();
        }
        return this._countryStatsEurope;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);