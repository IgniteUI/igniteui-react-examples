import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartCategoryCoreModule, IgrDataChartInteractivityModule, IgrAnnotationLayerProxyModule, IgrDataChartAnnotationModule, IgrDataAnnotationSliceLayerModule, IgrNumberAbbreviatorModule, IgrValueOverlayModule } from 'igniteui-react-charts';
import { IgrDataChart, IgrCategoryXAxis, IgrNumericYAxis, IgrLineSeries, IgrValueOverlay, IgrValueLayer, IgrDataAnnotationSliceLayer } from 'igniteui-react-charts';
import { StockTeslaItem, StockTesla } from './StockTesla';
import { AnnotationSliceMultiOverlayDataItem, AnnotationSliceMultiOverlayData } from './AnnotationSliceMultiOverlayData';

const mods: any[] = [
    IgrDataChartCoreModule,
    IgrDataChartCategoryModule,
    IgrDataChartCategoryCoreModule,
    IgrDataChartInteractivityModule,
    IgrAnnotationLayerProxyModule,
    IgrDataChartAnnotationModule,
    IgrDataAnnotationSliceLayerModule,
    IgrNumberAbbreviatorModule,
    IgrAnnotationLayerProxyModule,
    IgrValueOverlayModule
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
    private yAxisRef(r: IgrNumericYAxis) {
        this.yAxis = r;
        this.setState({});
    }
    private series1: IgrLineSeries
    private valueOverlay: IgrValueOverlay
    private valueLayer: IgrValueLayer
    private annoLayer: IgrDataAnnotationSliceLayer
    private annoLayerRef(r: IgrDataAnnotationSliceLayer){
        this.annoLayer = r;
        this.setState({});
    }

    constructor(props: any) {
        super(props);

        this.chartRef = this.chartRef.bind(this);
        this.yAxisRef = this.yAxisRef.bind(this);
        this.annoLayerRef = this.annoLayerRef.bind(this);
    }
    componentDidMount(): void {
        this.annoLayer.targetAxis = this.yAxis;
    }

    public render(): JSX.Element {
        return (
        <div className="container sample">

            <div className="container fill">
                <IgrDataChart
                    ref={this.chartRef}
                    plotAreaMarginBottom="50"
                    chartTitle="This sample demonstrates the DataAnnotationSliceLayer with overlay text compared against the value layers in the DataChart.">
                    <IgrCategoryXAxis
                        name="xAxis"
                        dataSource={this.stockTesla}
                        label="date"
                        labelLeftMargin="0"
                        labelTopMargin="5"
                        labelRightMargin="0"
                        labelBottomMargin="15">
                    </IgrCategoryXAxis>
                    <IgrNumericYAxis
                        name="yAxis"
                        ref={this.yAxisRef}
                        labelExtent="60"
                        labelHorizontalAlignment="Center"
                        labelLeftMargin="0"
                        labelTopMargin="0"
                        labelRightMargin="5"
                        labelBottomMargin="0"
                        minimumValue="0"
                        maximumValue="550">
                    </IgrNumericYAxis>
                    <IgrLineSeries
                        name="series1"
                        title="Stock Price"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        dataSource={this.stockTesla}
                        valueMemberPath="open"
                        showDefaultTooltip="true"
                        markerType="None"
                        brush="black">
                    </IgrLineSeries>
                    <IgrValueOverlay
                        name="valueOverlay"
                        value="435"
                        brush="green"
                        isAxisAnnotationEnabled="true"
                        thickness="2"
                        dashArray="2, 4"
                        axisName="yAxis"
                        overlayText="OverlayText on ValueOverlay"
                        overlayTextLocation="OutsideBottomCenter">
                    </IgrValueOverlay>
                    <IgrValueLayer
                        name="valueLayer"
                        valueMode="Average"
                        brush="purple"
                        thickness="2"
                        dashArray="2, 4"
                        targetAxisName="yAxis"
                        isAxisAnnotationEnabled="true"
                        overlayText="OverlayText on ValueLayer (Average)"
                        overlayTextLocation="OutsideBottomCenter">
                    </IgrValueLayer>
                    <IgrDataAnnotationSliceLayer
                        name="AnnoLayer"
                        ref={this.annoLayerRef}
                        dataSource={this.annotationSliceMultiOverlayData}
                        brush="green"
                        annotationTextColor="white"
                        annotationLabelMemberPath="label"
                        annotationValueMemberPath="value"
                        overlayTextMemberPath="label"
                        overlayTextVerticalMargin="20"
                        overlayTextHorizontalMargin="0"
                        overlayTextLocation="OutsideBottomCenter"
                        overlayText="OverlayText on DataAnnotationSliceLayer"
                        thickness="2">
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

    private _annotationSliceMultiOverlayData: AnnotationSliceMultiOverlayData = null;
    public get annotationSliceMultiOverlayData(): AnnotationSliceMultiOverlayData {
        if (this._annotationSliceMultiOverlayData == null)
        {
            this._annotationSliceMultiOverlayData = new AnnotationSliceMultiOverlayData();
        }
        return this._annotationSliceMultiOverlayData;
    }

}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Sample/>);