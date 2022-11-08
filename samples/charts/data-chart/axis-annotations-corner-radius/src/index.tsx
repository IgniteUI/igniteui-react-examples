import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrCalloutLayer, IgrFinalValueLayer, IgrCrosshairLayer, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
    private finalValueLayer: IgrFinalValueLayer
    private crosshairLayer: IgrCrosshairLayer
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
                        valueMemberPath="america"
                        dataSource={this.countryRenewableElectricity}
                        title="Electricity"
                        name="LineSeries1">
                    </IgrLineSeries>
                    <IgrCalloutLayer
                        labelMemberPath="label"
                        xMemberPath="index"
                        yMemberPath="value"
                        calloutCornerRadius="5"
                        calloutPaddingLeft="20"
                        calloutPaddingTop="10"
                        calloutPaddingRight="20"
                        calloutPaddingBottom="10"
                        dataSource={this.countryRenewableCallouts}
                        name="CalloutLayer1">
                    </IgrCalloutLayer>
                    <IgrFinalValueLayer
                        axisAnnotationBackgroundCornerRadius="10"
                        axisAnnotationPaddingLeft="10"
                        axisAnnotationPaddingTop="10"
                        axisAnnotationPaddingRight="10"
                        axisAnnotationPaddingBottom="10"
                        name="FinalValueLayer">
                    </IgrFinalValueLayer>
                    <IgrCrosshairLayer
                        isAxisAnnotationEnabled="true"
                        xAxisAnnotationBackgroundCornerRadius="10"
                        yAxisAnnotationBackgroundCornerRadius="10"
                        yAxisAnnotationInterpolatedValuePrecision="0"
                        name="CrosshairLayer">
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);
