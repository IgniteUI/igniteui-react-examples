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
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 50;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private bubbleSeries2: IgrBubbleSeries
    private  _sizeScale2: IgrSizeScale | null = null;
    public get sizeScale2(): IgrSizeScale {
        if (this._sizeScale2 == null)
        {
            var sizeScale2 = new IgrSizeScale({});
            sizeScale2.isLogarithmic = false;
            sizeScale2.minimumValue = 10;
            sizeScale2.maximumValue = 50;

            this._sizeScale2 = sizeScale2;
        }
        return this._sizeScale2;
    }

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
                        name="bubbleSeries1"
                        title="African Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="population"
                        dataSource={this.countryStatsAfrica}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale1}>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        name="bubbleSeries2"
                        title="European Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="population"
                        yMemberPath="gDP"
                        radiusMemberPath="population"
                        dataSource={this.countryStatsEurope}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        radiusScale={this.sizeScale2}>
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