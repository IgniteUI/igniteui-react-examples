import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
import { WorldDebtAndPopulationItem, WorldDebtAndPopulation } from './WorldDebtAndPopulation';

const mods: any[] = [
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
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    chartTitle="Public Debt vs. Population"
                    subtitle="GDP per Capita">
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Population"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Public Debt"
                        isLogarithmic="false"
                        abbreviateLargeNumbers="true"
                        maximumValue="120">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="BubbleSeries1"
                        xMemberPath="population"
                        yMemberPath="publicDebt"
                        radiusMemberPath="gdpPerCapita"
                        fillMemberPath="gdpPerCapita"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.worldDebtAndPopulation}
                        markerType="Circle"
                        showDefaultTooltip="true">
                        <IgrSizeScale
                            isLogarithmic="false"
                            minimumValue="5"
                            maximumValue="40">
                        </IgrSizeScale>
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="DataToolTipLayer">
                    </IgrDataToolTipLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _worldDebtAndPopulation: WorldDebtAndPopulation = null;
    public get worldDebtAndPopulation(): WorldDebtAndPopulation {
        if (this._worldDebtAndPopulation == null)
        {
            this._worldDebtAndPopulation = new WorldDebtAndPopulation();
        }
        return this._worldDebtAndPopulation;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);