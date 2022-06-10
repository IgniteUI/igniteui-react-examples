import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrCalloutLayer, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';
import { CountryRenewableCalloutsItem, CountryRenewableCallouts } from './CountryRenewableCallouts';



const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries
    private calloutLayer1: IgrCalloutLayer
    private tooltips: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">
            
            <div className="legend-title">
                Renewable Electricity Generated
            </div>
            
            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.countryRenewableElectricity}
                        label="year"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        title="TWh"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="uSA"
                        dataSource={this.countryRenewableElectricity}
                        name="LineSeries1">
                    </IgrLineSeries>
                    <IgrCalloutLayer
                        labelMemberPath="label"
                        xMemberPath="index"
                        yMemberPath="value"
                        calloutCornerRadius="10"
                        dataSource={this.countryRenewableCallouts}
                        name="CalloutLayer1">
                    </IgrCalloutLayer>
                    <IgrFinalValueLayer
                        axisAnnotationBackgroundCornerRadius="100">
                    </IgrFinalValueLayer>
                    <IgrCrosshairLayer
                        isAxisAnnotationEnabled="true"
                        xAxisAnnotationBackgroundCornerRadius="100"
                        yAxisAnnotationBackgroundCornerRadius="100">
                    </IgrCrosshairLayer>
                    <IgrDataToolTipLayer
                        name="Tooltips">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _countryRenewableElectricity: CountryRenewableElectricity = null;
    public get countryRenewableElectricity(): CountryRenewableElectricity {
        if (this._countryRenewableElectricity == null)
        {
            this._countryRenewableElectricity = new CountryRenewableElectricity();
        }
        return this._countryRenewableElectricity;
    }
    
    private _countryRenewableCallouts: CountryRenewableCallouts = null;
    public get countryRenewableCallouts(): CountryRenewableCallouts {
        if (this._countryRenewableCallouts == null)
        {
            this._countryRenewableCallouts = new CountryRenewableCallouts();
        }
        return this._countryRenewableCallouts;
    }
    


}


// rendering above component in the React DOM
ReactDOM.render(<Sample />, document.getElementById('root'));
