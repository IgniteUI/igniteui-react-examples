// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
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

import * as React from "react";

import "./DataChartSharedStyles.css";
import { DataChartSharedComponent } from "./DataChartSharedComponent";

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrCalloutLayerModule.register();
IgrCrosshairLayerModule.register();
IgrFinalValueLayerModule.register();
IgrValueOverlayModule.register();

export default class DataChartSeriesAnnotations extends DataChartSharedComponent {
    public data: any[];
    public chart: IgrDataChart;

    public targetSeries: IgrColumnSeries;

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
        this.calloutLayer.xMemberPath = "index";
        this.calloutLayer.yMemberPath = "value";
        this.calloutLayer.labelMemberPath = "value";
        this.calloutLayer.brush = "gray";
        this.calloutLayer.outline = "white";

        this.crosshairLayer = new IgrCrosshairLayer({ name: "crosshair" });
        this.crosshairLayer.isAxisAnnotationEnabled = true;
        this.crosshairLayer.yAxisAnnotationInterpolatedValuePrecision = 0;
        this.crosshairLayer.brush = "#9FB328";
        this.crosshairLayer.outline = "Black";

        this.finalValueLayer = new IgrFinalValueLayer({ name: "finalValue" });
        this.finalValueLayer.axisAnnotationInterpolatedValuePrecision = 0;
        this.finalValueLayer.axisAnnotationTextColor = "White";
        this.finalValueLayer.finalValueSelectionMode = FinalValueSelectionMode.FinalVisibleInterpolated;

        this.valueOverlay = new IgrValueOverlay({ name: "valueOverlay" });
        this.valueOverlay.thickness = 3;
        this.valueOverlay.value = 100;
        this.valueOverlay.brush = "Green";
        this.valueOverlay.isAxisAnnotationEnabled = true;
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Annotations: </span>
                    <label className="igOptions-item"><input type="checkbox" checked={this.state.calloutsVisible}
                        onChange={this.onCalloutChange} />Callouts </label>
                    <label className="igOptions-item"><input type="checkbox" checked={this.state.finalValuesVisible}
                        onChange={this.onFinalValueChange} />Final Value</label>
                    <label className="igOptions-item"><input type="checkbox" checked={this.state.crosshairsVisible}
                        onChange={this.onCrosshairChange} />Crosshairs</label>
                    {/*<label className="igOptions-item"><input type="checkbox" checked={this.state.valueOverlayVisible}
                        onChange={this.onValueOverlayChange} />Value Overlay </label>*/}
                </div>

                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        <IgrCategoryXAxis name="xAxis" formatLabel={this.formatDateLabel} interval={1} />
                        <IgrNumericYAxis name="yAxis" minimumValue={70} maximumValue={110} labelLocation="OutsideRight" />
                        <IgrColumnSeries name="series"
                        xAxisName="xAxis" yAxisName="yAxis"
                        valueMemberPath="temperature"
                        ref={this.onSeriesRef} />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        const year: number = new Date().getFullYear();
        this.data = [
            { temperature: 74, date: new Date(year, 0, 1) },
            { temperature: 74, date: new Date(year, 1, 1) },
            { temperature: 76, date: new Date(year, 2, 1) },
            { temperature: 78, date: new Date(year, 3, 1) },
            { temperature: 83, date: new Date(year, 4, 1) },
            { temperature: 87, date: new Date(year, 5, 1) },
            { temperature: 94, date: new Date(year, 6, 1) },
            { temperature: 97, date: new Date(year, 7, 1) },
            { temperature: 93, date: new Date(year, 8, 1) },
            { temperature: 86, date: new Date(year, 9, 1) },
            { temperature: 81, date: new Date(year, 10, 1) },
            { temperature: 79, date: new Date(year, 11, 1) },
        ];

        let idx: number = 0;
        for (const item of this.data) {
             item.index = idx;
            item.value = item.temperature;
            idx++;
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.valueOverlay.axis = this.chart.actualAxes[1];
        this.toggleCrosshairs(true);
        this.toggleCallouts(true);
        this.toggleFinalValues(true);
        this.toggleValueOverlay(true);
    }

    public onSeriesRef(series: IgrColumnSeries) {
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
        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        return months[item.date.getMonth()];
    }
}
