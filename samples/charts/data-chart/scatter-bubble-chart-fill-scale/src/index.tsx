import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrNumberAbbreviatorModule, IgrDataChartCoreModule, IgrDataChartScatterModule, IgrDataChartScatterCoreModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrNumericXAxis, IgrNumericYAxis, IgrBubbleSeries, IgrSizeScale, IgrValueBrushScale, IgrDataToolTipLayer } from 'igniteui-react-charts';
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
            sizeScale1.maximumValue = 80;

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
            valueBrushScale1.minimumValue = 500;
            valueBrushScale1.maximumValue = 260000;
            valueBrushScale1.brushes = ["rgba(150, 189, 250, 1)", "rgba(111, 164, 247, 1)", "rgba(82, 144, 242, 1)", "rgba(19, 94, 212, 1)"];

            this._valueBrushScale1 = valueBrushScale1;
        }
        return this._valueBrushScale1;
    }
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
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    chartTitle="Population vs. Public Debt vs. GDP"
                    titleTopMargin={10}
                    titleBottomMargin={0}>
                    <IgrNumericXAxis
                        name="xAxis"
                        title="Population"
                        minimumValue={100}
                        maximumValue={10000000000}
                        isLogarithmic={true}
                        abbreviateLargeNumbers={true}>
                    </IgrNumericXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        title="Public Debt per GDP (%)"
                        titleLeftMargin={10}
                        isLogarithmic={true}
                        abbreviateLargeNumbers={true}
                        maximumValue={1000}>
                    </IgrNumericYAxis>
                    <IgrBubbleSeries
                        name="bubbleSeries1"
                        xMemberPath="population"
                        yMemberPath="publicDebt"
                        radiusMemberPath="gdpPerPerson"
                        radiusScale={this.sizeScale1}
                        fillMemberPath="gdpPerPerson"
                        yMemberAsLegendUnit="%"
                        yMemberAsLegendLabel="Debt"
                        xMemberAsLegendLabel="Population"
                        radiusMemberAsLegendLabel="GDP"
                        title="Country"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.worldStats}
                        markerType="Circle"
                        markerOutline="black"
                        markerThickness={1}
                        showDefaultTooltip={true}
                        fillScale={this.valueBrushScale1}>
                    </IgrBubbleSeries>
                    <IgrDataToolTipLayer
                        name="dataToolTipLayer"
                        valueRowMarginTop={1}
                        labelTextMarginTop={1}
                        titleTextMarginTop={1}
                        unitsTextMarginTop={1}
                        valueRowMarginBottom={1}
                        labelTextMarginBottom={1}
                        titleTextMarginBottom={1}
                        unitsTextMarginBottom={1}
                        unitsTextMarginRight={5}
                        valueTextMarginLeft={10}
                        labelTextMarginLeft={1}
                        layoutMode="Vertical"
                        badgeShape="Hidden"
                        includedColumns={["X", "Y", "Radius"]}
                        headerRowVisible={false}>
                    </IgrDataToolTipLayer>
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