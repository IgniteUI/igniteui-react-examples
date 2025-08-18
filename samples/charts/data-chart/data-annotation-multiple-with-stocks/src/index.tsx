import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationStripLayerModule, IgrDataAnnotationSliceLayerModule, IgrDataAnnotationLineLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationStripLayer, IgrDataAnnotationLineLayer, IgrDataAnnotationSliceLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationStripDataItem, AnnotationStripData } from './AnnotationStripData';
import { AnnotationLineData1Item, AnnotationLineData1 } from './AnnotationLineData1';
import { AnnotationLineData2Item, AnnotationLineData2 } from './AnnotationLineData2';
import { AnnotationSliceStockSplitDataItem, AnnotationSliceStockSplitData } from './AnnotationSliceStockSplitData';
import { AnnotationSliceEarningsMissDataItem, AnnotationSliceEarningsMissData } from './AnnotationSliceEarningsMissData';
import { AnnotationSliceEarningsBeatDataItem, AnnotationSliceEarningsBeatData } from './AnnotationSliceEarningsBeatData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartFinancialCoreModule,
    IgrDataChartFinancialModule,
    IgrDataChartFinancialOverlaysModule,
    IgrDataChartInteractivityModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationStripLayerModule,
    IgrDataAnnotationSliceLayerModule,
    IgrDataAnnotationLineLayerModule,
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
    private xAxisBottom: IgrCategoryXAxis
    private xAxis: IgrCategoryXAxis
    private xAxisTop: IgrCategoryXAxis
    private yAxisLeft: IgrNumericYAxis
    private yAxisRight: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private stripLayer: IgrDataAnnotationStripLayer
    private lineLayer52WeekRange: IgrDataAnnotationLineLayer
    private lineLayerGrowthAndDecline: IgrDataAnnotationLineLayer
    private sliceLayerStockSplit: IgrDataAnnotationSliceLayer
    private sliceLayerEarningsMissAnnotations: IgrDataAnnotationSliceLayer
    private sliceLayerEarningsBeatAnnotations: IgrDataAnnotationSliceLayer

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
                    chartTitle="This Data Chart has multiple Data Annotation Layers bound to data that annotates important events and patterns in stock prices.">
                    <IgrCategoryXAxis
                        name="xAxisBottom"
                        dataSource={this.stockTesla}
                        label="index"
                        tickLength="0"
                        labelLocation="OutsideBottom"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="140"
                        labelLeftMargin="0"
                        labelTopMargin="15"
                        labelRightMargin="0"
                        labelBottomMargin="15"
                        labelAngle="90">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="5"
                        labelRightMargin="0"
                        labelBottomMargin="5">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxisTop"
                        dataSource={this.stockTesla}
                        label="date"
                        tickLength="0"
                        labelLocation="OutsideTop"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="40"
                        labelTextColor="rgba(0, 0, 0, 0)"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxisLeft"
                        labelLocation="OutsideLeft"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Right"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrNumericYAxis
                        name="yAxisRight"
                        labelLocation="OutsideRight"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="80"
                        labelHorizontalAlignment="Left"
                        labelLeftMargin="8"
                        labelTopMargin="3"
                        labelRightMargin="8"
                        labelBottomMargin="5"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrFinancialPriceSeries
                        name="series1"
                        title="Stock Price"
                        displayType="Candlestick"
                        xAxisName="xAxis"
                        yAxisName="yAxisLeft"
                        dataSource={this.stockTesla}
                        openMemberPath="open"
                        highMemberPath="high"
                        lowMemberPath="low"
                        closeMemberPath="close"
                        showDefaultTooltip="false">
                    </IgrFinancialPriceSeries>
                    <IgrDataToolTipLayer
                        name="Tooltip"
                        includedColumns={["high", "low", "open", "close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationStripLayer
                        name="StripLayer"
                        dataSource={this.annotationStripData}
                        targetAxisName="xAxisTop"
                        centerLabelMemberPath="label"
                        startValueMemberPath="start"
                        endValueMemberPath="end"
                        endLabelDisplayMode="Hidden"
                        startLabelDisplayMode="Hidden"
                        brush="black"
                        outline="black"
                        overlayTextColor="purple"
                        overlayTextLocation="Hidden"
                        overlayTextMemberPath="label">
                    </IgrDataAnnotationStripLayer>
                    <IgrDataAnnotationLineLayer
                        name="LineLayer52WeekRange"
                        dataSource={this.annotationLineData1}
                        targetAxisName="yAxisRight"
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        startLabelYDisplayMode="DataValue"
                        endLabelXDisplayMode="Hidden"
                        endLabelYDisplayMode="DataValue"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="5"
                        overlayTextHorizontalMargin="5"
                        overlayTextLocation="OutsideBottomLeft"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationLineLayer>
                    <IgrDataAnnotationLineLayer
                        name="LineLayerGrowthAndDecline"
                        dataSource={this.annotationLineData2}
                        targetAxisName="xAxis"
                        centerLabelXDisplayMode="Hidden"
                        startLabelXDisplayMode="Hidden"
                        endLabelXDisplayMode="Hidden"
                        annotationBackgroundMode="BrightnessShift"
                        brush="purple"
                        outline="purple"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="-10"
                        overlayTextHorizontalMargin="70"
                        overlayTextMemberPath="label"
                        startLabelXMemberPath="startLabel"
                        endLabelXMemberPath="endLabel"
                        startValueXMemberPath="startX"
                        startValueYMemberPath="startY"
                        endValueXMemberPath="endX"
                        endValueYMemberPath="endY">
                    </IgrDataAnnotationLineLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerStockSplit"
                        dataSource={this.annotationSliceStockSplitData}
                        targetAxisName="xAxisBottom"
                        brush="dodgerblue"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerEarningsMissAnnotations"
                        dataSource={this.annotationSliceEarningsMissData}
                        targetAxisName="xAxisBottom"
                        brush="red"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                    <IgrDataAnnotationSliceLayer
                        name="SliceLayerEarningsBeatAnnotations"
                        dataSource={this.annotationSliceEarningsBeatData}
                        targetAxisName="xAxisBottom"
                        brush="green"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextAngle="90"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="Hidden">
                    </IgrDataAnnotationSliceLayer>
                </IgrDataChart>
            </div>
        </div>
        );
    }

    private _stockTesla: StockTesla = null;
    public get stockTesla(): StockTesla {
        if (this._stockTesla == null)
        {
            this._stockTesla = new StockTesla();
        }
        return this._stockTesla;
    }

    private _annotationStripData: AnnotationStripData = null;
    public get annotationStripData(): AnnotationStripData {
        if (this._annotationStripData == null)
        {
            this._annotationStripData = new AnnotationStripData();
        }
        return this._annotationStripData;
    }

    private _annotationLineData1: AnnotationLineData1 = null;
    public get annotationLineData1(): AnnotationLineData1 {
        if (this._annotationLineData1 == null)
        {
            this._annotationLineData1 = new AnnotationLineData1();
        }
        return this._annotationLineData1;
    }

    private _annotationLineData2: AnnotationLineData2 = null;
    public get annotationLineData2(): AnnotationLineData2 {
        if (this._annotationLineData2 == null)
        {
            this._annotationLineData2 = new AnnotationLineData2();
        }
        return this._annotationLineData2;
    }

    private _annotationSliceStockSplitData: AnnotationSliceStockSplitData = null;
    public get annotationSliceStockSplitData(): AnnotationSliceStockSplitData {
        if (this._annotationSliceStockSplitData == null)
        {
            this._annotationSliceStockSplitData = new AnnotationSliceStockSplitData();
        }
        return this._annotationSliceStockSplitData;
    }

    private _annotationSliceEarningsMissData: AnnotationSliceEarningsMissData = null;
    public get annotationSliceEarningsMissData(): AnnotationSliceEarningsMissData {
        if (this._annotationSliceEarningsMissData == null)
        {
            this._annotationSliceEarningsMissData = new AnnotationSliceEarningsMissData();
        }
        return this._annotationSliceEarningsMissData;
    }

    private _annotationSliceEarningsBeatData: AnnotationSliceEarningsBeatData = null;
    public get annotationSliceEarningsBeatData(): AnnotationSliceEarningsBeatData {
        if (this._annotationSliceEarningsBeatData == null)
        {
            this._annotationSliceEarningsBeatData = new AnnotationSliceEarningsBeatData();
        }
        return this._annotationSliceEarningsBeatData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);