import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataChart, IgrDataToolTipLayer, IgrCategoryXAxis, IgrNumericXAxis, IgrNumericYAxis, IgrLineSeries, IgrPointSeries, IgrScatterLineSeries, IgrScatterSeries, IgrPlotAreaMouseButtonEventArgs, IgrPlotAreaMouseEventArgs, IgrDataChartMouseButtonEventArgs, IgrSeriesViewer } from 'igniteui-react-charts';
import { IgrDataChartCoreModule, IgrDataChartCategoryModule, IgrDataChartInteractivityModule, IgrDataChartScatterCoreModule, IgrDataChartScatterModule, IgrLegendModule, IgrDataChartAnnotationModule, IgrAnnotationLayerProxyModule, IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { EditableDataSource } from './EditableDataSource';

IgrLegendModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrAnnotationLayerProxyModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartCustomEditingData extends React.Component<any, any> {
    
    private lineChart: IgrDataChart;    
    private lineYAxis: IgrNumericYAxis;

    private scatterChart: IgrDataChart;
    private scatterXAxis: IgrNumericXAxis;
    private scatterYAxis: IgrNumericYAxis;

    private lineSeriesEditingActive = false;
    private lineSeriesEditingIndex = -1;

    private scatterLineEditingActive = false;
    private scatterLineEditingIndex = -1;

    constructor(props: any) {
        super(props);

        this.state = { lineData: EditableDataSource.getLineData(), scatterData: EditableDataSource.getScatterData() };

        this.onLineChartRef = this.onLineChartRef.bind(this);
        this.onScatterChartRef = this.onScatterChartRef.bind(this);

        this.onLineChartMouseDown = this.onLineChartMouseDown.bind(this);
        this.onLineChartMouseMove = this.onLineChartMouseMove.bind(this);
        this.onLineChartMouseUp = this.onLineChartMouseUp.bind(this);

        this.onScatterChartMouseDown = this.onScatterChartMouseDown.bind(this);
        this.onScatterChartMouseMove = this.onScatterChartMouseMove.bind(this);
        this.onScatterChartMouseUp = this.onScatterChartMouseUp.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container vertical">
                <div className="container vertical">
                    <div className="legend-title">
                        Line Chart with Editable Values by Dragging Markers Up/Down Directions
                    </div>

                    <IgrDataChart ref={this.onLineChartRef} height="50%" width="100%" plotAreaMarginLeft={5} plotAreaMarginRight={5} defaultInteraction="none"
                                  isWindowSyncedToVisibleRange={true} isHorizontalZoomEnabled={true} isVerticalZoomEnabled={false} seriesMouseLeftButtonDown={this.onLineChartMouseDown}
                                  plotAreaMouseOver={this.onLineChartMouseMove} plotAreaMouseLeftButtonUp={this.onLineChartMouseUp}>

                        <IgrCategoryXAxis name="LineXAxis" dataSource={this.state.lineData} label="Category" labelAngle={0} interval={1} />
                        <IgrNumericYAxis  name="LineYAxis" labelExtent={30} minimumValue={10} maximumValue={90} labelHorizontalAlignment="left" labelLocation="OutsideRight" />

                        <IgrLineSeries name="lineSeries" xAxisName="LineXAxis" yAxisName="LineYAxis" dataSource={this.state.lineData} markerType="Circle" valueMemberPath="DataValue" title="Data Points" />

                        <IgrPointSeries name="pointSeries" xAxisName="LineXAxis" yAxisName="LineYAxis" dataSource={this.state.lineData} markerType="Circle"
                                        valueMemberPath="EditingValue" markerOutline="dodgerblue" markerBrush="white" title="Editing Point" />                        

                        <IgrDataToolTipLayer name="lineTooltip" valueFormatMaxFractions={1} summaryType="none" />
                    </IgrDataChart>

                    <div className="legend-title">
                        Scatter Chart with Editable Values by Dragging Markers In All Directions
                    </div>

                    <IgrDataChart ref={this.onScatterChartRef} height="50%" width="100%" plotAreaMarginLeft={5} plotAreaMarginRight={5} defaultInteraction="none"
                                  isWindowSyncedToVisibleRange={true} isHorizontalZoomEnabled={true} isVerticalZoomEnabled={false} seriesMouseLeftButtonDown={this.onScatterChartMouseDown}
                                  plotAreaMouseOver={this.onScatterChartMouseMove} plotAreaMouseLeftButtonUp={this.onScatterChartMouseUp}>

                        <IgrNumericXAxis name="ScatterXAxis" labelAngle={0} />
                        <IgrNumericYAxis name="ScatterYAxis" labelExtent={30} minimumValue={10} maximumValue={90} labelHorizontalAlignment="left" labelLocation="OutsideRight" />

                        <IgrScatterLineSeries name="scatterLineSeries" xAxisName="ScatterXAxis" yAxisName="ScatterYAxis" dataSource={this.state.scatterData}
                                              markerType="Circle" xMemberPath="X" yMemberPath="Y" title="Data Points" />                        

                        <IgrScatterSeries name="scatterSeries" xAxisName="ScatterXAxis" yAxisName="ScatterYAxis" markerOutline="dodgerblue" dataSource={this.state.scatterData}
                                          markerType="circle" xMemberPath="EditingX" yMemberPath="EditingY" title="Editing Point" markerBrush="white" />                        

                        <IgrDataToolTipLayer name="scatterTooltip" valueFormatMaxFractions={1} summaryType="none" />

                    </IgrDataChart>
                </div>
            </div>    
        );
    }

    public onLineChartRef(chart: IgrDataChart) {
        if (!chart) { return; }
        this.lineChart = chart;
        
        this.lineYAxis = chart.actualAxes[1] as IgrNumericYAxis;
    }

    public onScatterChartRef(chart: IgrDataChart) {
        if (!chart) { return; }
        this.scatterChart = chart;

        this.scatterXAxis = chart.actualAxes[0] as IgrNumericXAxis;
        this.scatterYAxis = chart.actualAxes[1] as IgrNumericYAxis;
    }

    public onLineChartMouseDown(s: IgrSeriesViewer, e: IgrDataChartMouseButtonEventArgs){
        this.lineSeriesEditingActive = true;
        this.lineSeriesEditingIndex = -1;

        let itemData = e.item;
        
        for(let i=0; i<this.state.lineData.length; i++){
            
            let lineDataItem = this.state.lineData[i];            
            let newItemData = { Category: lineDataItem.Category, DataValue: lineDataItem.DataValue, EditingValue: lineDataItem.EditingValue };   

            newItemData.EditingValue = null;

            if(lineDataItem.Category === itemData.Category){
                this.lineSeriesEditingIndex = i;
            }

            this.lineChart.notifySetItem(this.state.lineData, i, lineDataItem, newItemData);
        }
    }

    public onLineChartMouseMove(s: IgrSeriesViewer, e: IgrPlotAreaMouseEventArgs) {
        if (this.lineSeriesEditingIndex !== -1) {
            let index = this.lineSeriesEditingIndex;

            let oldItem = this.state.lineData[index];
            let newItem = { Category: oldItem.Category, DataValue: oldItem.DataValue, EditingValue: oldItem.EditingValue };

            if (!this.lineSeriesEditingActive) {
                newItem.EditingValue = null;
                this.lineChart.notifySetItem(this.state.lineData, index, oldItem, newItem);
            }
            else {
                let y = this.lineYAxis.unscaleValue(e.chartPosition.y);

                newItem.DataValue = y;
                newItem.EditingValue = y;

                oldItem.DataValue = y;
                oldItem.EditingValue = y;

                this.lineChart.notifySetItem(this.state.lineData, index, oldItem, newItem);
            }
        }
    }

    public onLineChartMouseUp(s: IgrSeriesViewer, e: IgrPlotAreaMouseButtonEventArgs){
        this.lineSeriesEditingActive = false;
    }

    public onScatterChartMouseDown(s: IgrSeriesViewer, e: IgrDataChartMouseButtonEventArgs){
        this.scatterLineEditingActive = true;
        this.scatterLineEditingIndex = -1;

        let itemData = e.item;
        
        for(let i=0; i<this.state.scatterData.length; i++){
            
            let scatterDataItem = this.state.scatterData[i];            
            let newItemData = { X: scatterDataItem.X, Y: scatterDataItem.Y, EditingX: scatterDataItem.EditingX, EditingY: scatterDataItem.EditingY };   

            newItemData.EditingX = null;
            newItemData.EditingY = null;

            if(scatterDataItem.X === itemData.X && scatterDataItem.Y === itemData.Y){
                this.scatterLineEditingIndex = i;
            }

            this.scatterChart.notifySetItem(this.state.scatterData, i, scatterDataItem, newItemData);
        }
    }

    public onScatterChartMouseMove(s: IgrSeriesViewer, e: IgrPlotAreaMouseEventArgs){
        if (this.scatterLineEditingIndex !== -1) {
            let index = this.scatterLineEditingIndex;

            let oldItem = this.state.scatterData[index];
            let newItem = { X: oldItem.X, Y: oldItem.Y, EditingX: oldItem.EditingX, EditingY: oldItem.EditingY };

            if (!this.scatterLineEditingActive) {
                newItem.EditingX = null;
                newItem.EditingY = null;
                this.scatterChart.notifySetItem(this.state.scatterData, index, oldItem, newItem);
            }
            else {
                let x = this.scatterXAxis.unscaleValue(e.chartPosition.x);
                let y = this.scatterYAxis.unscaleValue(e.chartPosition.y);

                newItem.X = x;
                newItem.EditingX = x;

                newItem.Y = y;
                newItem.EditingY = y;

                oldItem.X = x;
                oldItem.EditingX = x;

                oldItem.Y = y;
                oldItem.EditingY = y;

                this.scatterChart.notifySetItem(this.state.scatterData, index, oldItem, newItem);
            }
        }
    }

    public onScatterChartMouseUp(s: IgrSeriesViewer, e: IgrPlotAreaMouseButtonEventArgs){
        this.scatterLineEditingActive = false;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartCustomEditingData/>);
