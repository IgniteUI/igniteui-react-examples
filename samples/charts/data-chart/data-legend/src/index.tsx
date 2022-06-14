import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataLegendModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrCrosshairLayer, IgrSizeScale } from 'igniteui-react-charts';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';



const mods: any[] = [
    IgrLegendModule,
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataLegendModule,
    IgrDataChartAnnotationModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private legend: IgrDataLegend
    private legendRef(r: IgrDataLegend) {
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
    private crosshairLayer: IgrCrosshairLayer

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
                <IgrDataLegend
                    target={this.chart}
                    ref={this.legendRef}>
                </IgrDataLegend>
            </div>
            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrNumericXAxis
                        minimumValue="4"
                        maximumValue="16"
                        interval="1"
                        title="Death Rate"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        minimumValue="0"
                        maximumValue="60"
                        interval="10"
                        title="Birth Rate"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        radiusMemberPath="population"
                        radiusMemberAsLegendLabel="Population:"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        xMemberAsLegendLabel="Death Rate:"
                        yMemberAsLegendLabel="Birth Rate:"
                        dataSource={this.countryDemographicAfrican}
                        title="Africa"
                        name="BubbleSeries1">
                        <IgrSizeScale
                            minimumValue="10"
                            maximumValue="100">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryDemographicEurope}
                        xMemberPath="deathRate"
                        yMemberPath="birthRate"
                        radiusMemberPath="population"
                        title="Europe"
                        radiusMemberAsLegendLabel="Population:"
                        xMemberAsLegendLabel="Death Rate:"
                        yMemberAsLegendLabel="Birth Rate:"
                        name="BubbleSeries2">
                        <IgrSizeScale
                            minimumValue="10"
                            maximumValue="100">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                    <IgrCrosshairLayer
                        name="CrosshairLayer">
                    </IgrCrosshairLayer>
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
ReactDOM.render(<Sample />, document.getElementById('root'));
