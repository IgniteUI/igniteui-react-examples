import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrValueBrushScale } from 'igniteui-react-charts';
import { ComponentRenderer, NumberAbbreviatorDescriptionModule, DataChartCoreDescriptionModule, DataChartScatterDescriptionModule, DataChartScatterCoreDescriptionModule, DataChartInteractivityDescriptionModule, DataChartAnnotationDescriptionModule } from 'igniteui-react-core';
import { WorldStatsItem, WorldStats } from './WorldStats';

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
            var sizeScale1 = new IgrSizeScale({});
            sizeScale1.isLogarithmic = false;
            sizeScale1.minimumValue = 10;
            sizeScale1.maximumValue = 120;

            this._sizeScale1 = sizeScale1;
        }
        return this._sizeScale1;
    }
    private  _valueBrushScale1: IgrValueBrushScale | null = null;
    public get valueBrushScale1(): IgrValueBrushScale {
        if (this._valueBrushScale1 == null)
        {
            var valueBrushScale1 = new IgrValueBrushScale({});
            valueBrushScale1.isLogarithmic = false;
            valueBrushScale1.minimumValue = 0;
            valueBrushScale1.maximumValue = 260000;
            valueBrushScale1.brushes = ["rgba(137, 181, 250, 1)", "rgba(20, 108, 247, 1)", "rgba(82, 144, 242, 1)"];

            this._valueBrushScale1 = valueBrushScale1;
        }
        return this._valueBrushScale1;
    }

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
                    isHorizontalZoomEnabled="true"
                    isVerticalZoomEnabled="true"
                    chartTitle="Public Debt vs. Population"
                    subtitle="GDP per Capita">
                    <IgrNumericXAxis
                        name="xAxis"
                        minimumValue="10000"
                        maximumValue="10000000000"
                        isLogarithmic="true"
                        abbreviateLargeNumbers="true"
                        title="Population">
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Public Debt per GDP (%)"
                        titleLeftMargin="5"
                        isLogarithmic="false"
                        maximumValue="120">
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        xMemberPath="population"
                        yMemberPath="publicDebt"
                        radiusMemberPath="gdpPerPerson"
                        radiusScale={this.sizeScale1}
                        fillMemberPath="gdpPerPerson"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.worldStats}
                        markerType="Circle"
                        markerOutline="black"
                        showDefaultTooltip="true"
                        fillScale={this.valueBrushScale1}>
                    </IgrBubbleSeries>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _worldStats: WorldStats = null;
    public get worldStats(): WorldStats {
        if (this._worldStats == null)
        {
            this._worldStats = new WorldStats();
        }
        return this._worldStats;
    }

    private _componentRenderer: ComponentRenderer = null;
    public get renderer(): ComponentRenderer {
        if (this._componentRenderer == null) {
            this._componentRenderer = new ComponentRenderer();
            var context = this._componentRenderer.context;
            NumberAbbreviatorDescriptionModule.register(context);
            DataChartCoreDescriptionModule.register(context);
            DataChartScatterDescriptionModule.register(context);
            DataChartScatterCoreDescriptionModule.register(context);
            DataChartInteractivityDescriptionModule.register(context);
            DataChartAnnotationDescriptionModule.register(context);
        }
        return this._componentRenderer;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);