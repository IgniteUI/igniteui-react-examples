import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { AnnotationDataItem, AnnotationData } from './SampleData';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrDataChartAnnotationModule, IgrDataAnnotationStripLayerModule, IgrNumberAbbreviatorModule, IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrFinancialPriceSeries, IgrDataToolTipLayer, IgrDataAnnotationStripLayer } from 'igniteui-react-charts';
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
    private xAxisTop: IgrCategoryXAxis
    private yAxisLeft: IgrNumericYAxis
    private yAxisRight: IgrNumericYAxis
    private series1: IgrFinancialPriceSeries
    private tooltip: IgrDataToolTipLayer
    private stripLayer: IgrDataAnnotationStripLayer

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
                    chartTitle="This Data Chart demonstrates the DataAnnotationStripLayer bound to data that markert events affecting stock prices.">
                    <IgrCategoryXAxis
                        name="xAxisBottom"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="10"
                        labelTopMargin="5"
                        labelRightMargin="10"
                        labelBottomMargin="15">
                    </IgrCategoryXAxis>
                    <IgrCategoryXAxis
                        name="xAxisTop"
                        dataSource={this.stockTesla}
                        label="date"
                        tickLength="0"
                        labelLocation="OutsideTop"
                        labelTextStyle="normal normal 12px Verdana"
                        labelExtent="40"
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
                        xAxisName="xAxisBottom"
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
                        dataSource={this.annotationData}
                        targetAxis={this.xAxisTop}
                        centerLabelMemberPath="label"
                        startValueMemberPath="start"
                        endValueMemberPath="end"
                        brush="black"
                        outline="black"
                        overlayTextColor="purple"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="-50"
                        overlayTextLocation="InsideTopCenter"
                        overlayTextMemberPath="label">
                    </IgrDataAnnotationStripLayer>
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