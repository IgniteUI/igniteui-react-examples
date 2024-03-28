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
    private  _sizeScale1: IgrSizeScale | null = null;
    public get sizeScale1(): IgrSizeScale {
        if (this._sizeScale1 == null)
        {
            var sizeScale1 = new IgrSizeScale();
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 50;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private dataToolTipLayer: IgrDataToolTipLayer

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="legend-title">
                Total Population of Selected Countries
            </div>

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}>
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
                        radiusScale={this.sizeScale1}
                        fillMemberPath="gdpPerCapita"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.worldDebtAndPopulation}
                        markerType="Circle"
                        showDefaultTooltip="true">
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