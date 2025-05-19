import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { StripAnnotationDataItem, StripAnnotationData, LineAnnotationData1Item, LineAnnotationData1, LineAnnotationData2Item, LineAnnotationData2, SliceAnnotationData1Item, SliceAnnotationData1, SliceAnnotationData2Item, SliceAnnotationData2, SliceAnnotationData3Item, SliceAnnotationData3 } from './SampleData';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationStripLayerModule, IgrDataAnnotationSliceLayerModule, IgrDataAnnotationLineLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationStripLayer, IgrDataAnnotationLineLayer, IgrDataAnnotationSliceLayer } from 'igniteui-react-charts';
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
                        includedColumns={["High", "Low", "Open", "Close"]}
                        layoutMode="Vertical">
                    </IgrDataToolTipLayer>
                    <IgrDataAnnotationStripLayer
                        name="StripLayer"
                        dataSource={this.stripAnnotationData}
                        targetAxis={this.xAxisTop}
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
                        dataSource={this.lineAnnotationData1}
                        targetAxis={this.yAxisRight}
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
                        dataSource={this.lineAnnotationData2}
                        targetAxis={this.xAxis}
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
                        dataSource={this.sliceAnnotationData1}
                        targetAxis={this.xAxisBottom}
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
                        dataSource={this.sliceAnnotationData2}
                        targetAxis={this.xAxisBottom}
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
                        dataSource={this.sliceAnnotationData3}
                        targetAxis={this.xAxisBottom}
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

    private _stripAnnotationData: StripAnnotationData = null;
    public get stripAnnotationData(): StripAnnotationData {
        if (this._stripAnnotationData == null)
        {
            this._stripAnnotationData = new StripAnnotationData();
        }
        return this._stripAnnotationData;
    }

    private _lineAnnotationData1: LineAnnotationData1 = null;
    public get lineAnnotationData1(): LineAnnotationData1 {
        if (this._lineAnnotationData1 == null)
        {
            this._lineAnnotationData1 = new LineAnnotationData1();
        }
        return this._lineAnnotationData1;
    }

    private _lineAnnotationData2: LineAnnotationData2 = null;
    public get lineAnnotationData2(): LineAnnotationData2 {
        if (this._lineAnnotationData2 == null)
        {
            this._lineAnnotationData2 = new LineAnnotationData2();
        }
        return this._lineAnnotationData2;
    }

    private _sliceAnnotationData1: SliceAnnotationData1 = null;
    public get sliceAnnotationData1(): SliceAnnotationData1 {
        if (this._sliceAnnotationData1 == null)
        {
            this._sliceAnnotationData1 = new SliceAnnotationData1();
        }
        return this._sliceAnnotationData1;
    }

    private _sliceAnnotationData2: SliceAnnotationData2 = null;
    public get sliceAnnotationData2(): SliceAnnotationData2 {
        if (this._sliceAnnotationData2 == null)
        {
            this._sliceAnnotationData2 = new SliceAnnotationData2();
        }
        return this._sliceAnnotationData2;
    }

    private _sliceAnnotationData3: SliceAnnotationData3 = null;
    public get sliceAnnotationData3(): SliceAnnotationData3 {
        if (this._sliceAnnotationData3 == null)
        {
            this._sliceAnnotationData3 = new SliceAnnotationData3();
        }
        return this._sliceAnnotationData3;
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