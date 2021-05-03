import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrCalloutLayer } from 'igniteui-react-charts';
import { IgrCrosshairLayer } from 'igniteui-react-charts';
import { IgrFinalValueLayer } from 'igniteui-react-charts';
import { IgrSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrCalloutLayerModule } from 'igniteui-react-charts';
import { IgrCrosshairLayerModule } from 'igniteui-react-charts';
import { IgrFinalValueLayerModule } from 'igniteui-react-charts';
import { IgrValueOverlay } from 'igniteui-react-charts';
import { IgrValueOverlayModule } from 'igniteui-react-charts';
import { FinalValueSelectionMode } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrCalloutLayerModule.register();
IgrCrosshairLayerModule.register();
IgrFinalValueLayerModule.register();
IgrValueOverlayModule.register();

export default class DataChartSeriesAnnotations extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    public targetSeries: IgrLineSeries;

    public calloutLayer: IgrCalloutLayer;
    public crosshairLayer: IgrCrosshairLayer;
    public finalValueLayer: IgrFinalValueLayer;
    public valueOverlay: IgrValueOverlay;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onSeriesRef = this.onSeriesRef.bind(this);

        this.onCalloutChange = this.onCalloutChange.bind(this);
        this.onCrosshairChange = this.onCrosshairChange.bind(this);
        this.onFinalValueChange = this.onFinalValueChange.bind(this);
        this.onValueOverlayChange = this.onValueOverlayChange.bind(this);

        this.initData();

        this.state = {
            calloutsVisible: true,
            crosshairsVisible: true,
            finalValuesVisible: true,
            valueOverlayVisible: true
        };

        this.calloutLayer = new IgrCalloutLayer({ name: "callout" });
        this.calloutLayer.xMemberPath = "Index";
        this.calloutLayer.yMemberPath = "SinValue";
        this.calloutLayer.labelMemberPath = "Label";
        this.calloutLayer.brush = "#0577e8";
        this.calloutLayer.outline = "white";

        this.crosshairLayer = new IgrCrosshairLayer({ name: "crosshair" });
        this.crosshairLayer.isAxisAnnotationEnabled = true;
        this.crosshairLayer.yAxisAnnotationInterpolatedValuePrecision = 2;
        this.crosshairLayer.brush = "#9FB328";
        this.crosshairLayer.outline = "Black";

        this.finalValueLayer = new IgrFinalValueLayer({ name: "finalValue" });
        this.finalValueLayer.axisAnnotationInterpolatedValuePrecision = 2;
        this.finalValueLayer.axisAnnotationTextColor = "White";
        this.finalValueLayer.axisAnnotationBackground = "#0577e8";
        this.finalValueLayer.finalValueSelectionMode = FinalValueSelectionMode.FinalVisibleInterpolated;

        this.valueOverlay = new IgrValueOverlay({ name: "valueOverlay" });
        this.valueOverlay.thickness = 3;
        this.valueOverlay.value = 0.25;
        this.valueOverlay.brush = "Brown";
        this.valueOverlay.isAxisAnnotationEnabled = true;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <label className="options-label">Annotations: </label>
                    <label className="options-label"><input type="checkbox" checked={this.state.calloutsVisible}
                        onChange={this.onCalloutChange} />Callouts </label>
                    <label className="options-label"><input type="checkbox" checked={this.state.finalValuesVisible}
                        onChange={this.onFinalValueChange} />Final Value</label>
                    <label className="options-label"><input type="checkbox" checked={this.state.crosshairsVisible}
                        onChange={this.onCrosshairChange} />Crosshairs</label>
                    {/* <label className="options-label"><input type="checkbox" checked={this.state.valueOverlayVisible}
                        onChange={this.onValueOverlayChange} />Value Overlay </label> #9505e8*/}
                </div>

                <div className="container" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        <IgrCategoryXAxis name="xAxis" label="Angle" interval={2} />
                        <IgrNumericYAxis name="yAxis" minimumValue={-1.25} maximumValue={1.25}
                        labelLocation="OutsideRight" formatLabel={this.formatDateLabel}/>
                        <IgrLineSeries name="series"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        valueMemberPath="SinValue"
                        markerType="Circle"
                        brush="#0577e8"
                        markerOutline="#0577e8"
                        ref={this.onSeriesRef} />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        this.data = [];
        let index = 0;
        for (let angle = 0; angle <= 360; angle += 10)
        {
            const radians = angle * Math.PI / 180;
            const sin = Math.round(Math.sin(radians) * 100) / 100;
            const cos = Math.round(Math.cos(radians) * 100) / 100;
            this.data.push({
                "Angle": angle, "Radians": radians,
                "SinValue": sin, "CosValue": cos,
                "Index": index++,
                "Label": sin.toFixed(2)
            });
        }
    }

    public onChartRef(chart: IgrDataChart) {
        if (!chart) { return; }

        this.chart = chart;
        this.valueOverlay.axis = this.chart.actualAxes[1];
        this.toggleCrosshairs(true);
        this.toggleCallouts(true);
        this.toggleFinalValues(true);
        this.toggleValueOverlay(true);
    }

    public onSeriesRef(series: IgrLineSeries) {
        this.targetSeries = series;
        this.finalValueLayer.targetSeries = series;
    }

    public onFinalValueChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleFinalValues(isChecked);
    }

    public onCalloutChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleCallouts(isChecked);
    }

    public onCrosshairChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleCrosshairs(isChecked);
    }

    public onValueOverlayChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleValueOverlay(isChecked);
    }

    public toggleCrosshairs(isChecked: boolean) {
        this.setState({ crosshairsVisible: isChecked });
        this.toggleSeries(this.crosshairLayer, isChecked);
    }

    public toggleFinalValues(isChecked: boolean) {
        this.setState({ finalValuesVisible: isChecked });
        this.toggleSeries(this.finalValueLayer, isChecked);
    }

    public toggleCallouts(isChecked: boolean) {
        this.setState({ calloutsVisible: isChecked });
        this.toggleSeries(this.calloutLayer, isChecked);
    }

    public toggleValueOverlay(isChecked: boolean) {
        this.valueOverlay.isAxisAnnotationEnabled = isChecked;
        this.setState({ valueOverlayVisible: isChecked });
        this.toggleSeries(this.valueOverlay, isChecked);
    }

    public toggleSeries(series: IgrSeries, isChecked: boolean) {
        if (isChecked) {
            this.chart.series.add(series);
        }
        else {
            this.chart.series.remove(series);
        }
    }

    public formatDateLabel(item: any): string {
        return item.toFixed(2);
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DataChartSeriesAnnotations />, document.getElementById('root'));