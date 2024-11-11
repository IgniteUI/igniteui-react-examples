import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';

const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
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
            var SizeScale1 = new IgrSizeScale({});

            SizeScale1.minimumValue = 10;
            SizeScale1.maximumValue = 50;

            this._sizeScale1 = SizeScale1;
        }
        return this._sizeScale1;
    }
    private bubbleSeries2: IgrBubbleSeries
    private  _sizeScale2: IgrSizeScale | null = null;
    public get sizeScale2(): IgrSizeScale {
        if (this._sizeScale2 == null)
        {
            var SizeScale2 = new IgrSizeScale({});

            SizeScale2.minimumValue = 10;
            SizeScale2.maximumValue = 50;

            this._sizeScale2 = SizeScale2;
        }
        return this._sizeScale2;
    }
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Total Population of Selected Countries
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Death Rate"
                        interval="1"
                        minimumValue="4"
                        maximumValue="16">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Birth Rate"
                        interval="10"
                        minimumValue="0"
                        maximumValue="60">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryDemographicAfrican}
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        radiusMemberPath="population"
                        radiusScale={this.sizeScale1}
                        title="Africa"
                        radiusMemberAsLegendLabel="Population: "
                        xMemberAsLegendLabel="Death Rate: "
                        yMemberAsLegendLabel="Birth Rate: ">
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        name="bubbleSeries2"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryDemographicEurope}
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        radiusMemberPath="population"
                        radiusScale={this.sizeScale2}
                        title="Europe"
                        radiusMemberAsLegendLabel="Population: "
                        xMemberAsLegendLabel="Death Rate: "
                        yMemberAsLegendLabel="Birth Rate: ">
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryDemographicAfrican: CountryDemographicAfrican = null;
    public get countryDemographicAfrican(): CountryDemographicAfrican {
        if (this._countryDemographicAfrican == null)
        {
            this._countryDemographicAfrican = new CountryDemographicAfrican();
        }
        return this._countryDemographicAfrican;
    }

    private _countryDemographicEurope: CountryDemographicEurope = null;
    public get countryDemographicEurope(): CountryDemographicEurope {
        if (this._countryDemographicEurope == null)
        {
            this._countryDemographicEurope = new CountryDemographicEurope();
        }
        return this._countryDemographicEurope;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);