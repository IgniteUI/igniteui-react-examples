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
    private xAxisBottonRef(r: IgrCategoryXAxis){
        this.xAxisBottom = r;
        this.setState({});
    }
    private xAxis: IgrCategoryXAxis
     private xAxisRef(r: IgrCategoryXAxis){
        this.xAxis = r;
        this.setState({});
    }
    private xAxisTop: IgrCategoryXAxis
    private xAxisTopRef(r: IgrCategoryXAxis){
        this.xAxisTop = r;
        this.setState({});
    }
    private yAxisLeft: IgrNumericYAxis
    private yAxisLeftRef(r: IgrNumericYAxis){
        this.yAxisLeft = r;
        this.setState({});
    }
    private yAxisRight: IgrNumericYAxis
      private yAxisRightRef(r: IgrNumericYAxis){
        this.yAxisRight = r;
        this.setState({});
    }
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private stripLayer: IgrDataAnnotationStripLayer
     private stripRef1(r: IgrDataAnnotationStripLayer){
        this.stripLayer = r;
        this.setState({});
    }
    private lineLayer52WeekRange: IgrDataAnnotationLineLayer
    private lineRef1(r: IgrDataAnnotationLineLayer){
        this.lineLayer52WeekRange = r;
        this.setState({});
    }
    private lineLayerGrowthAndDecline: IgrDataAnnotationLineLayer
     private lineRef2(r: IgrDataAnnotationLineLayer){
        this.lineLayerGrowthAndDecline = r;
        this.setState({});
    }
    private sliceLayerStockSplit: IgrDataAnnotationSliceLayer
     private sliceRef1(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerStockSplit = r;
        this.setState({});
    }
    private sliceLayerEarningsMissAnnotations: IgrDataAnnotationSliceLayer
    private sliceRef2(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerEarningsMissAnnotations = r;
        this.setState({});
    }
    private sliceLayerEarningsBeatAnnotations: IgrDataAnnotationSliceLayer
    private sliceRef3(r: IgrDataAnnotationSliceLayer){
        this.sliceLayerEarningsBeatAnnotations = r;
        this.setState({});
    }
    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.stripRef1 = this.stripRef1.bind(this);
        this.lineRef1 = this.lineRef1.bind(this);
        this.lineRef2 = this.lineRef2.bind(this);
        this.sliceRef1 = this.sliceRef1.bind(this);
        this.sliceRef2 = this.sliceRef2.bind(this);
        this.sliceRef3 = this.sliceRef3.bind(this);
        this.xAxisRef = this.xAxisRef.bind(this);
        this.xAxisBottonRef = this.xAxisBottonRef.bind(this);
        this.xAxisTopRef = this.xAxisTopRef.bind(this);
        this.yAxisLeftRef = this.yAxisLeftRef.bind(this);
        this.yAxisRightRef = this.yAxisRightRef.bind(this);
    }
    componentDidMount(): void {
        this.stripLayer.targetAxis = this.xAxisTop;
        this.lineLayer52WeekRange.targetAxis = this.yAxisRight;
        this.lineLayerGrowthAndDecline.targetAxis = this.xAxis;
        this.sliceLayerStockSplit.targetAxis = this.xAxisBottom;
        this.sliceLayerEarningsMissAnnotations.targetAxis = this.xAxisBottom;
        this.sliceLayerEarningsBeatAnnotations.targetAxis = this.xAxisBottom;        
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
                        ref={this.xAxisBottonRef}
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
                        ref={this.xAxisRef}
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="5"
                        labelRightMargin="0"
                        labelBottomMargin="5">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxisTop"
                        ref={this.xAxisTopRef}
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
                        ref={this.yAxisLeftRef}
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
                        ref={this.yAxisRightRef}
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
                        ref={this.stripRef1}
                        name="StripLayer"
                        dataSource={this.annotationStripData}
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
                        ref={this.lineRef1}
                        dataSource={this.annotationLineData1}
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
                        ref={this.lineRef2}
                        dataSource={this.annotationLineData2}
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
                        ref={this.sliceRef1}
                        dataSource={this.annotationSliceStockSplitData}
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
                        ref={this.sliceRef2}
                        dataSource={this.annotationSliceEarningsMissData}
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
                        ref={this.sliceRef3}
                        dataSource={this.annotationSliceEarningsBeatData}
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