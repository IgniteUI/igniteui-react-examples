import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AnnotationDataItem, AnnotationData } from './SampleData';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationRectLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationRectLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationRectLayerModule,
    IgrNumberAbbreviatorModule,
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
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private rectLayer: IgrDataAnnotationRectLayer

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
                    shouldAutoExpandMarginForInitialLabels="true"
                    computedPlotAreaMarginMode="Series"
                    isVerticalZoomEnabled="false"
                    isHorizontalZoomEnabled="true"
                    brushes="green red"
                    outlines="green red"
                    plotAreaMarginLeft="10"
                    plotAreaMarginTop="0"
                    plotAreaMarginRight="20"
                    plotAreaMarginBottom="0"
                    leftMargin="10"
                    topMargin="0"
                    rightMargin="20"
                    bottomMargin="0"
                    isWindowSyncedToVisibleRange="false"
                    chartTitle="This Data Chart demonstrates the DataAnnotationRectLayer bound to data that annotates bearish patterns in stock prices.">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="10"
                        labelRightMargin="0"
                        labelBottomMargin="10">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["High", "Low", "Open", "Close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationRectLayer
                        name="RectLayer"
                        dataSource={this.annotationData}
                        targetAxis={this.xAxis}
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        endLabelXDisplayMode="Hidden"
                        startLabelYDisplayMode="Hidden"
                        endLabelYDisplayMode="Hidden"
                        actualAreaFillOpacity="0.1"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="-50"
                        overlayTextLocation="OutsideBottomCenter"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationRectLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _annotationData: AnnotationData = null;
    public get annotationData(): AnnotationData {
        if (this._annotationData == null)
        {
            this._annotationData = new AnnotationData();
        }
        return this._annotationData;
    }

    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);