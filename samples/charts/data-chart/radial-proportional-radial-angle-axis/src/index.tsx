import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataPieChartModule, IgrDataChartCoreModule, IgrDataChartRadialModule, IgrDataChartRadialCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrProportionalCategoryAngleAxis, IgrNumericRadiusAxis, IgrRadialPieSeries, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { EnergyRenewableConsumptionItem, EnergyRenewableConsumption } from './EnergyRenewableConsumption';

const mods: any[] = [
    IgrLegendModule,
    IgrDataPieChartModule,
    IgrDataChartCoreModule,
    IgrDataChartRadialModule,
    IgrDataChartRadialCoreModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule
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
    private angleAxis: IgrProportionalCategoryAngleAxis
    private radiusAxis: IgrNumericRadiusAxis
    private radialPieSeries1: IgrRadialPieSeries
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Hydro Consumption in 2019
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
                    legend={this.legend}
                    isHorizontalZoomEnabled={false}
                    isVerticalZoomEnabled={false}>
                    <IgrProportionalCategoryAngleAxis
                        name="angleAxis"
                        dataSource={this.energyRenewableConsumption}
                        label="location"
                        valueMemberPath="hydro"
                        gap={0}>
                    </IgrProportionalCategoryAngleAxis>
                    <IgrNumericRadiusAxis
                        name="radiusAxis"
                        minimumValue={0}
                        maximumValue={100}>
                    </IgrNumericRadiusAxis>
                    <IgrRadialPieSeries
                        name="RadialPieSeries1"
                        dataSource={this.energyRenewableConsumption}
                        angleAxisName="angleAxis"
                        valueAxisName="radiusAxis"
                        valueMemberPath="hydro"
                        showDefaultTooltip={false}
                        useItemWiseColors={true}
                        title="Hydro Consumption">
                    </IgrRadialPieSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _energyRenewableConsumption: EnergyRenewableConsumption = null;
    public get energyRenewableConsumption(): EnergyRenewableConsumption {
        if (this._energyRenewableConsumption == null)
        {
            this._energyRenewableConsumption = new EnergyRenewableConsumption();
        }
        return this._energyRenewableConsumption;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);