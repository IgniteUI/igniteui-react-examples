import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrLegendModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrLegend, IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries } from 'igniteui-react-charts';
import { CountryRenewableElectricityItem, CountryRenewableElectricity } from './CountryRenewableElectricity';

const mods: any[] = [
    IgrLegendModule,
    IgrDataChartCategoryModule,
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
    private xAxis: IgrCategoryXAxis
    private yAxis: IgrNumericYAxis
    private lineSeries1: IgrLineSeries
    private lineSeries2: IgrLineSeries
    private lineSeries3: IgrLineSeries

    constructor(props: any) {
        super(props);

        this.legendRef = this.legendRef.bind(this);
        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Renewable Electricity Generated
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
                    computedPlotAreaMarginMode="Series">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.countryRenewableElectricity}
                        label="year"
                        interval="1"
                        majorStroke="rgba(71, 71, 71, 1)"
                        majorStrokeThickness="0.5"
                        stroke="rgba(145, 145, 145, 1)"
                        strokeThickness="2"
                        strokeDashArray="["5", "5"]"
                        majorStrokeDashArray="["5", "5"]"
                        tickLength="0">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        stroke="gray"
                        strokeThickness="2"
                        interval="20"
                        majorStroke="darkslategray"
                        majorStrokeThickness="1"
                        minorInterval="5"
                        minorStroke="gray"
                        minorStrokeThickness="0.5"
                        strokeDashArray="["5", "5"]"
                        majorStrokeDashArray="["5", "5"]"
                        minorStrokeDashArray="["2.5", "2.5"]"
                        tickLength="0">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="LineSeries1"
                        title="Europe"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="europe"
                        showDefaultTooltip="true">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries2"
                        title="China"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="china"
                        showDefaultTooltip="true">
                    </IgrLineSeries>
                    <IgrLineSeries
                        name="LineSeries3"
                        title="America"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        markerType="Circle"
                        dataSource={this.countryRenewableElectricity}
                        valueMemberPath="america"
                        showDefaultTooltip="true">
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