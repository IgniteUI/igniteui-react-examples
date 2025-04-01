import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrToolbarModule } from 'igniteui-react-layouts';
import { IgrDataChartToolbarModule, IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartAnnotationModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule, IgrDataChartCategoryTrendLineModule } from 'igniteui-react-charts';
import { IgrToolbar } from 'igniteui-react-layouts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrToolbarModule,
    IgrDataChartToolbarModule,
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartAnnotationModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule,
    IgrDataChartCategoryTrendLineModule
];
mods.forEach((m) => m.register());

export default class Sample extends React.Component<any, any> {
    private toolbar: IgrToolbar
    private toolbarRef(r: IgrToolbar) {
        this.toolbar = r;
        this.setState({});
    }
    private chart: IgrDataChart
    private chartRef(r: IgrDataChart) {
        this.chart = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.toolbarRef = this.toolbarRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="aboveContent">
                <IgrToolbar
                    ref={this.toolbarRef}
                    target={this.chart}
                    orientation="Vertical">
                </IgrToolbar>
            </div>

            <div className="container fill">
                <IgrDataChart
                    isHorizontalZoomEnabled={true}
                    ref={this.chartRef}>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="TWh"
                        labelLocation="OutsideRight">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="lineSeries1"
                        title="Electricity"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america">
                    </IgrLineSeries>
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

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);