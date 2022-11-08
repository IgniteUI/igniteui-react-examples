import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrCalloutLayer } from 'igniteui-react-charts';
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
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        dataSource={this.countryRenewableElectricity}
                        label="year"
                        name="xAxis">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        title="TWh"
                        labelLocation="OutsideRight"
                        name="yAxis">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="america"
                        dataSource={this.countryRenewableElectricity}
                        name="LineSeries1">
                    </IgrLineSeries>
                    <IgrCalloutLayer
                        labelMemberPath="label"
                        xMemberPath="index"
                        yMemberPath="value"
                        calloutTextColor="black"
                        calloutBackground="orange"
                        calloutOutline="black"
                        calloutLeaderBrush="black"
                        calloutStrokeThickness="2"
                        dataSource={this.countryRenewableCallouts}
                        name="CalloutLayer1">
                    </IgrCalloutLayer>
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
