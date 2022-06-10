import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { SizeScale1Item, SizeScale2Item } from './SampleData';
import { IgrLegendModule, IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries } from 'igniteui-react-charts';
import { CountryDemographicAfricanItem, CountryDemographicAfrican } from './CountryDemographicAfrican';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';



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
                        dataSource={this.countryDemographicAfrican}
                        showDefaultTooltip="true"
                        title="African Countries"
                        name="BubbleSeries1">
                    </IgrBubbleSeries>
                    <IgrBubbleSeries
                        title="European Countries"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="workedHours"
                        yMemberPath="gDP"
                        radiusMemberPath="population"
                        dataSource={this.countryDemographicEurope}
                        markerType="Circle"
                        showDefaultTooltip="true"
                        name="BubbleSeries2">
                    </IgrBubbleSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _sizeScale1: SizeScale1Item = null;
    public get sizeScale1(): SizeScale1Item {
        if (this._sizeScale1 == null)
        {
            this._sizeScale1 = 
            new SizeScale1Item(
            {
                type: `SizeScale`,
                minimumValue: 10,
                maximumValue: 50
            })}
            return this._sizeScale1;
        }
        
        private _sizeScale2: SizeScale2Item = null;
        public get sizeScale2(): SizeScale2Item {
            if (this._sizeScale2 == null)
            {
                this._sizeScale2 = 
                new SizeScale2Item(
                {
                    type: `SizeScale`,
                    minimumValue: 10,
                    maximumValue: 50
                })}
                return this._sizeScale2;
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
