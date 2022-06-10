import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { SizeScaleItem } from './SampleData';
import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries } from 'igniteui-react-charts';
import { CountryDemographicEuropeItem, CountryDemographicEurope } from './CountryDemographicEurope';



const mods: any[] = [
    IgrNumberAbbreviatorModule,
    IgrDataChartCoreModule,
    IgrDataChartScatterModule,
    IgrDataChartScatterCoreModule,
    IgrDataChartInteractivityModule
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

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            <div className="legend-title">
                GDP per Capita vs Hours Worked per Week
            </div>
            
            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrNumericXAxis
                        title="Hours Worked per Week"
                        name="xAxis">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        isLogarithmic="false"
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
                        dataSource={this.countryDemographicEurope}
                        showDefaultTooltip="true"
                        title="European Countries"
                        name="BubbleSeries1">
                    </IgrBubbleSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _sizeScale: SizeScaleItem = null;
    public get sizeScale(): SizeScaleItem {
        if (this._sizeScale == null)
        {
            this._sizeScale = 
            new SizeScaleItem(
            {
                type: `SizeScale`,
                minimumValue: 10,
                maximumValue: 50
            })}
            return this._sizeScale;
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
