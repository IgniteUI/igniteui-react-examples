import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataChart, IgrCategoryXAxis, IgrLegend, IgrDataToolTipLayer, IgrFinalValueLayer, IgrFinancialPriceSeries, IgrLineSeries, IgrNumericYAxis, IgrRangeAreaSeries, IgrPlotAreaMouseButtonEventArgs, IgrSeriesViewer, IgrPlotAreaMouseEventArgs } from 'igniteui-react-charts';
import { IgrDataChartCoreModule, IgrDataChartCategoryCoreModule, IgrDataChartCategoryModule, IgrDataChartFinancialCoreModule, IgrDataChartFinancialModule, IgrDataChartFinancialOverlaysModule, IgrDataChartInteractivityModule, IgrLegendModule, IgrDataChartToolbarModule, IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrToolbar, IgrToolActionLabel, IgrToolActionSeparator, IgrToolbarModule, IgrToolCommandEventArgs } from "igniteui-react-layouts";
import { IgPoint }  from "igniteui-react-core";
import StocksHistory from './StocksHistory';

IgrToolbarModule.register();
IgrDataChartToolbarModule.register();
IgrLegendModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartCategoryCoreModule.register();
IgrDataChartFinancialCoreModule.register();
IgrDataChartFinancialModule.register();
IgrDataChartFinancialOverlaysModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();

export default class DataChartCustomDrawingAnnotations extends React.Component<any, any> {
        
    private toolbar: IgrToolbar;
    private chart: IgrDataChart;    
    private legend: IgrLegend;
    private xAxis: IgrCategoryXAxis;
    private yAxis: IgrNumericYAxis;

    private axisMinValue: number;
    private axisMaxValue: number;

    private chartMouseDownLocation: IgPoint;
    private chartMouseMoveLocation: IgPoint;

    private isAxisRangeInitialized: boolean;
    private isDrawingHorizontalLine: boolean;
    private isDrawingRangeArea: boolean;
    private isDrawingSlopeLine: boolean;    

    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
            horizontalLineData: [],
            slopeLineData: [],
            rangeAreaData: [],
            drawMode: "",
            horizontalLineTextStyle: "13px Verdana",
            slopeLineTextStyle: "13px Verdana",
            rangeAreaTextStyle: "13px Verdana"
        };

        this.getDataLocation = this.getDataLocation.bind(this);
        this.initializeAxisRange = this.initializeAxisRange.bind(this);
        this.updateDrawMode = this.updateDrawMode.bind(this);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);       
        this.onToolbarRef = this.onToolbarRef.bind(this);         
    
        this.onToolbarCommandChanged = this.onToolbarCommandChanged.bind(this);
        this.onChartMouseLeftButtonDown = this.onChartMouseLeftButtonDown.bind(this);
        this.onChartMouseLeftButtonUp = this.onChartMouseLeftButtonUp.bind(this);
        this.onChartMouseOver = this.onChartMouseOver.bind(this);
        
        
        StocksHistory.getMicrosoftStock().then((stocks: any[]) => {                                    
            this.setState({data: stocks}, this.onAfterInitialStateFinished);            
        });        
    }

    public onAfterInitialStateFinished(){
        this.plotHorizontalLine(38, true);
        this.plotRangeArea(50, 60, true);
        this.plotSlopeLine({x: 0, y:45}, {x: this.state.data.length - 1, y: 80}, true);
    }

    public render(): JSX.Element {
        return (
            <div className="container vertical">
                <div className="legend-title">
                    Chart with Custom Drawing Annotations
                </div>
                <div className="legend">
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>
                <div>
                    <IgrToolbar ref={this.onToolbarRef} onCommand={this.onToolbarCommandChanged} target={this.chart} orientation="Horizontal">
                        <IgrToolActionLabel name="drawModesLabel" beforeId="ZoomReset" title="Draw Modes:" />
                        <IgrToolActionLabel name="drawRangeArea" beforeId="ZoomReset" title="Range Area" commandId="DrawRangeArea" /> 
                        <IgrToolActionLabel name="drawSlopeLine" title="Slope Line" beforeId="ZoomReset" commandId="DrawSlopeLine" textStyle={this.state.slopeLineTextStyle}/>
                        <IgrToolActionLabel name="drawHorizontalLine" title="Horizontal Line" beforeId="ZoomReset" commandId="DrawHorizontalLine" textStyle={this.state.horizontalLineTextStyle} />
                    </IgrToolbar>
                </div>

                <IgrDataChart ref={this.onChartRef} height="100%" width="100%" defaultInteraction="None" isWindowSyncedToVisibleRange={true}
                              isHorizontalZoomEnabled={true} isVerticalZoomEnabled={false} legend={this.legend} plotAreaMouseLeftButtonDown={this.onChartMouseLeftButtonDown}
                              plotAreaMouseLeftButtonUp={this.onChartMouseLeftButtonUp} plotAreaMouseOver={this.onChartMouseOver}>
                    <IgrCategoryXAxis name="xAxis" dataSource={this.state.data} label="date" formatLabel={this.onFormatXAxisLabel} gap={0.25} useClusteringMode={true} labelAngle={45} />

                    <IgrNumericYAxis name="yAxis" labelExtent={70} labelHorizontalAlignment="Left" labelLocation="OutsideRight" title="Stock Price ($)" />

                    <IgrFinancialPriceSeries name="financialSeries" xAxisName="xAxis" yAxisName="yAxis" displayType="Candlestick" dataSource={this.state.data}
                                             highMemberPath="high" lowMemberPath="low" closeMemberPath="close" openMemberPath="open" volumeMemberPath="volume"
                                             showDefaultTooltip="true" title="Stock Price" />

                    <IgrRangeAreaSeries name="rangeAreaSeries" xAxisName="xAxis" yAxisName="yAxis" title="Range Area" dataSource={this.state.rangeAreaData}
                                        areaFillOpacity={0.25} lowMemberPath="low" highMemberPath="high" showDefaultTooltip="false" dashArray="5 5" />

                    <IgrLineSeries name="slopeLine" xAxisName="xAxis" yAxisName="yAxis" markerType="None" title="Slope Line" dataSource={this.state.slopeLineData}
                                   valueMemberPath="y" thickness="4" dashArray="5, 5" />

                    <IgrLineSeries name="horizontalLine" xAxisName="xAxis" yAxisName="yAxis" dataSource={this.state.horizontalLineData} title="Horizontal Line" markerType="None"
                                   valueMemberPath="y" thickness="4" brush="red" dashArray="5 5" />

                    <IgrFinalValueLayer name="finalValue" axisAnnotationInterpolatedValuePrecision={0} />

                    <IgrDataToolTipLayer name="dataTooltip" value-format-max-fractions={1} />

                </IgrDataChart>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }
        this.chart = chart;

        this.xAxis = chart.actualAxes[0] as IgrCategoryXAxis;
        this.yAxis = chart.actualAxes[1] as IgrNumericYAxis;        
    }

    public onLegendRef(legend: IgrLegend) {
        if (!legend) { return; }
        this.legend = legend;
    }

    public onToolbarRef(toolbar: IgrToolbar){
        if(!toolbar) {return;}
        this.toolbar = toolbar;
    }

    public onChartMouseLeftButtonDown(s: IgrSeriesViewer, e: IgrPlotAreaMouseButtonEventArgs){
        this.initializeAxisRange();
        if (!this.isAxisRangeInitialized) return;    

        if (this.state.drawMode == "DrawHorizontalLine") this.isDrawingHorizontalLine = true; 
        if (this.state.drawMode == "DrawSlopeLine") this.isDrawingSlopeLine = true; 
        if (this.state.drawMode == "DrawRangeArea") this.isDrawingRangeArea = true; 

        this.chartMouseDownLocation = this.getDataLocation(e.plotAreaPosition); 
        this.chartMouseMoveLocation = this.getDataLocation(e.plotAreaPosition); 

        this.plotRangeArea(this.chartMouseDownLocation.y, this.chartMouseMoveLocation.y, false); 
        this.plotSlopeLine(this.chartMouseDownLocation, this.chartMouseMoveLocation, false); 
        this.plotHorizontalLine(this.chartMouseMoveLocation.y, false); 
    }

    public onChartMouseOver(s: IgrSeriesViewer, e: IgrPlotAreaMouseEventArgs){
        if (!this.isAxisRangeInitialized) return; 

        this.chartMouseMoveLocation = this.getDataLocation(e.plotAreaPosition);        

        this.plotRangeArea(this.chartMouseDownLocation.y, this.chartMouseMoveLocation.y, false); 
        this.plotSlopeLine(this.chartMouseDownLocation, this.chartMouseMoveLocation, false); 
        this.plotHorizontalLine(this.chartMouseMoveLocation.y, false);         
    }

    public onChartMouseLeftButtonUp(s: IgrSeriesViewer, e: IgrPlotAreaMouseButtonEventArgs){
        this.isDrawingSlopeLine = false;
        this.isDrawingRangeArea = false;
        this.isDrawingHorizontalLine = false;   
    }

    public initializeAxisRange(){
        if (this.isAxisRangeInitialized) return;
        this.isAxisRangeInitialized = true;        

        this.axisMaxValue = this.yAxis.actualMaximumValue;
        this.axisMinValue = this.yAxis.actualMinimumValue;        

        this.yAxis.maximumValue = this.axisMaxValue;
        this.yAxis.minimumValue = this.axisMinValue;
    }

    public getDataLocation(chartPixel: IgPoint): IgPoint
    {    
        const x = this.xAxis.unscaleValue(chartPixel.x);
        const y = this.yAxis.unscaleValue(chartPixel.y);

        return {x: x, y: y};
    }

    public plotHorizontalLine(value: number, forceRender: boolean){
        if(!forceRender){
            if(!this.isAxisRangeInitialized) return;
            if(!this.isDrawingHorizontalLine) return;
        }

        let dataPoints: any[] = [];

        

        for(let i=0; i<this.state.data.length; i++){
            let point: IgPoint = { x: i, y: value};
            dataPoints.push(point);            
        }

        this.setState({horizontalLineData: dataPoints});
    }

    public plotSlopeLine(start: IgPoint, end: IgPoint, forceRender: boolean){
        if(!forceRender){
            if(!this.isAxisRangeInitialized) return;
            if(!this.isDrawingSlopeLine) return;
        }

        let slope = 0.0;
        let offset = end.y;

        if(Math.abs(end.x - start.x) > 0.01){
            slope = (end.y - start.y) / (end.x - start.x);
            offset = end.y - (end.x  * slope);
        }

        let dataPoints: any[] = [];

        for(let i=0; i<this.state.data.length; i++){
            let y = (slope * i) + offset;
            let point: IgPoint = {x: i, y: y};
            dataPoints.push(point);
        }

        this.setState({slopeLineData: dataPoints});        
    }

    public plotRangeArea(start: number, end: number, forceRender: boolean){
        if(!forceRender){
            if(!this.isAxisRangeInitialized) return;
            if(!this.isDrawingRangeArea) return;
        }

        let low = Math.min(end, start);
        let high = Math.max(end, start);

        let dataPoints: any[] = [];

        for(let i=0; i<this.state.data.length; i++){
            let point: any = {low: low, high: high};            
            dataPoints.push(point);
        }

        this.setState({rangeAreaData: dataPoints});        
    }         

    public onFormatXAxisLabel(item: any): string{
        
        let year = item.date.getFullYear();
        let monthString: string = "";
        let dayString: string = "";        

        if((item.date.getMonth() + 1) < 10){
            monthString = "0" + (item.date.getMonth() + 1);
        }
        else{
            monthString = item.date.getMonth() + 1;
        }

        if((item.date.getDay() + 1) < 10){
            dayString = "0" + (item.date.getDay() + 1);
        }
        else{
            dayString = item.date.getDay() + 1;
        }

        return year + "-" + monthString + "-" + dayString;
    }

    public onToolbarCommandChanged(s: IgrToolbar, e: IgrToolCommandEventArgs){
        this.updateDrawMode(e.command.commandId);
    }

    public updateDrawMode(selectedDrawMode: string){        
        switch(selectedDrawMode){
            case "DrawRangeArea":
                this.toolbar.actualActions.item(1).textStyle = "800 13px Verdana";
                this.toolbar.actualActions.item(2).textStyle = "13px Verdana";
                this.toolbar.actualActions.item(3).textStyle = "13px Verdana";       
                this.setState({drawMode: "DrawRangeArea"});         
                break;
            case "DrawSlopeLine":
                this.toolbar.actualActions.item(1).textStyle = "13px Verdana";
                this.toolbar.actualActions.item(2).textStyle = "800 13px Verdana";
                this.toolbar.actualActions.item(3).textStyle = "13px Verdana";
                this.setState({drawMode: "DrawSlopeLine"});
                break;

            case "DrawHorizontalLine":
                this.toolbar.actualActions.item(1).textStyle = "13px Verdana";
                this.toolbar.actualActions.item(2).textStyle = "13px Verdana";
                this.toolbar.actualActions.item(3).textStyle = "800 13px Verdana";
                this.setState({drawMode: "DrawHorizontalLine"});
                break;
        }
    }   
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DataChartCustomDrawingAnnotations/>);
