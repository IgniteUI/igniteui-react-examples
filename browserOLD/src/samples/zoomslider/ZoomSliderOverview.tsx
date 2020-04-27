import React from 'react';

import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrAnnotationLayer } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrCrosshairLayer } from 'igniteui-react-charts';
import { IgrCrosshairLayerModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgRect } from 'igniteui-react-core';
import { IgrZoomSlider } from 'igniteui-react-charts';
import { IgrChartCursorEventArgs } from 'igniteui-react-charts';
import { IgrZoomSliderResolvingAxisValueEventArgs } from 'igniteui-react-charts'
import { IgrRectChangedEventArgs } from 'igniteui-react-core';

import { SampleScatterStats } from "../data-chart/SampleScatterStats";

IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartAnnotationModule.register();
IgrNumberAbbreviatorModule.register();
IgrCrosshairLayerModule.register();

export default class ZoomSliderOverview extends React.Component<any, any> {

    private mainChart: IgrDataChart = null;
    private zoomChart: IgrDataChart = null;
    private zoomSlider: IgrZoomSlider = null;
    private charts: IgrDataChart[] = [];
    private container: HTMLDivElement;
    private isSynchronizingZoom: boolean = false;
    private lastRect: IgRect = { left: -1, top: -1, width: -1, height: -1};

    private regions: any[];
    private countriesAll: any[];
    private countriesByRegion: any;

    constructor(props: any) {
        super(props);

        this.onMainChartRef = this.onMainChartRef.bind(this);
        this.onZoomChartRef = this.onZoomChartRef.bind(this);
        this.onZoomSliderRef = this.onZoomSliderRef.bind(this);
        this.onActualWindowRectChanged = this.onActualWindowRectChanged.bind(this);
        this.onZoomSliderWindowChanged = this.onZoomSliderWindowChanged.bind(this);
        this.onGridAreaRectChanged = this.onGridAreaRectChanged.bind(this);
        this.onContainerRef = this.onContainerRef.bind(this);
        this.onCursorMove = this.onCursorMove.bind(this);
        this.onResolvingAxisValue = this.onResolvingAxisValue.bind(this);

        this.regions = [];
        this.countriesAll = SampleScatterStats.getCountries();
        console.log("countriesAll " + this.countriesAll.length);
        this.countriesByRegion = {};
        for (const country of this.countriesAll) {
            const name = country.Region;

            if (!this.countriesByRegion[name]) {
                this.countriesByRegion[name] = [];
                this.regions.push(name);
                console.log("region " + name);
            }
            this.countriesByRegion[name].push(country);
        }
        console.log("regions " + this.regions.length);
    }

    public render() {
        return (
            <div ref={this.onContainerRef} style={{ width: "calc(100% - 10px)", height: "calc(100% - 10px)" }}>
                <IgrDataChart
                titleTopMargin="10"
                chartTitle="World GDP vs Population"
                ref={this.onMainChartRef}
                width="100%"
                height="calc(100% - 160px)"
                isHorizontalZoomEnabled="true"
                isVerticalZoomEnabled="false"
                actualWindowRectChanged={this.onActualWindowRectChanged}
                gridAreaRectChanged={this.onGridAreaRectChanged}
                seriesCursorMouseMove={this.onCursorMove}>
                    <IgrNumericXAxis
                    name="mainXAxis"
                    isLogarithmic={true}
                    abbreviateLargeNumbers={true}
                    title="Population"/>
                    <IgrNumericYAxis name="mainYAxis"
                    isLogarithmic={true}
                    abbreviateLargeNumbers={true}
                    titleLeftMargin="10"
                    title="Total GDP ($)"/>
                </IgrDataChart>

                <div style={{ width: "100%", height:"160px", position: "relative" }}>
                    <div style={{ width: "100%", height:"160px", position: "absolute", top: "0px", left: "0px" }} >
                        <IgrDataChart
                        ref={this.onZoomChartRef}
                        width="100%"
                        height="160px"
                        isHorizontalZoomEnabled="true"
                        isVerticalZoomEnabled="true">
                            <IgrNumericXAxis
                            name="zoomXAxis"
                            isLogarithmic={true}
                            abbreviateLargeNumbers={true}
                            labelVisibility="collapsed"/>
                            <IgrNumericYAxis name="zoomYAxis"
                            isLogarithmic={true}
                            abbreviateLargeNumbers={true}
                            labelVisibility="collapsed" />
                        </IgrDataChart>
                    </div>

                    <div style={{ width: "100%", height:"160px", position: "absolute", top: "0px", left: "0px" }} >
                        <IgrZoomSlider
                        width="100%"
                        height="100%"
                        ref={this.onZoomSliderRef}
                        areThumbCalloutsEnabled="true"
                        windowRectChanged={this.onZoomSliderWindowChanged}
                        resolvingAxisValue={this.onResolvingAxisValue}/>
                    </div>
                </div>
            </div>
        );
    }

    private onMainChartRef(chart: IgrDataChart) {
        if (chart) {
            this.charts.push(chart);
            this.mainChart = chart;
            this.createSeries(this.mainChart);
        }
    }

    private onZoomChartRef(chart: IgrDataChart) {
        this.zoomChart = chart;
        this.createSeries(this.zoomChart);
    }

    private onZoomSliderRef(slider: IgrZoomSlider) {
        this.zoomSlider = slider;
    }

    private onCursorMove(chart: IgrDataChart, args: IgrChartCursorEventArgs) {
        console.log(this.container.offsetWidth);
        this.charts.map(c => {
            if (c !== chart) {
                c.actualSeries.filter((s) => s.isAnnotationLayer)
                    .map((s) => {
                        let a = s as IgrAnnotationLayer;

                        a.moveCursorPoint(chart.crosshairPoint);
                    });
            }
        });
    }

    private onActualWindowRectChanged(chart: IgrDataChart, args: IgrRectChangedEventArgs) {
        if (!this.isSynchronizingZoom) {
            this.syncZooms(chart);
        }
    }

    private onZoomSliderWindowChanged(slider: IgrZoomSlider, args: IgrRectChangedEventArgs) {
        if (!this.isSynchronizingZoom) {
            this.syncZooms(slider);
        }
    }

    private onContainerRef(div: HTMLDivElement) {
        this.container = div;
    }

    private syncZooms(sender: any) {
        window.setTimeout(() => {
            try
            {
                this.isSynchronizingZoom = true;

                const zoomWindow = this.zoomSlider.windowRect;
                const chartWindow = sender === this.zoomSlider ? this.mainChart.actualWindowRect : (sender as IgrDataChart).actualWindowRect;

                if (sender === this.zoomSlider) {
                    this.charts.map((chart) => {
                        this.updateChartZoom(chart, {
                            top: chartWindow.top,
                            left: zoomWindow.left,
                            width: zoomWindow.width,
                            height: chartWindow.height });
                    });
                } else {
                    this.zoomSlider.windowRect = {
                        top: zoomWindow.top,
                        left: chartWindow.left,
                        width: chartWindow.width,
                        height: zoomWindow.height };
                    this.charts.map((chart) => {
                        this.updateChartZoom(chart, {
                            top: zoomWindow.top,
                            left: chartWindow.left,
                            width: chartWindow.width,
                            height: zoomWindow.height });
                    });
                }
            } finally {
                this.isSynchronizingZoom = false;
            }
        }, 0);
    }

    private onResolvingAxisValue(slider: IgrZoomSlider, args: IgrZoomSliderResolvingAxisValueEventArgs) {
        const xAxis = this.zoomChart.actualAxes.filter(a => a.isNumeric)[0] as IgrNumericXAxis;
        if (xAxis) {
            const range = (xAxis.actualMaximumValue - xAxis.actualMinimumValue)
            const value = xAxis.actualMinimumValue + (args.position * range);
            const str = SampleScatterStats.abbreviate(value)
            // console.log("p=" + args.position + " r=" + range + " v=" + value + " str=" + str);
            args.value = null;
        }
        // const index = Math.round(args.position * (this.countriesAll.length - 1));
        // const item = this.countriesAll[index];
        // if (item) {
        //     args.value = SampleScatterStats.abbreviate(item.population);
        // }
    }

    private onGridAreaRectChanged(chart: IgrDataChart, args: IgrRectChangedEventArgs) {
        let newRect = args.newRect;

        if (!this.container) {
            return;
        }

        if (newRect.left !== this.lastRect.left ||
            newRect.top !== this.lastRect.top ||
            newRect.width !== this.lastRect.width ||
            newRect.height !== this.lastRect.height) {
            let rightMargin = (isNaN(this.mainChart.rightMargin) ? this.mainChart.autoMarginWidth : this.mainChart.rightMargin);
            let width = newRect.left + newRect.width + rightMargin;

            this.lastRect = newRect;
            let right = newRect.left + newRect.width;
            let insetLeft = newRect.left;
            let insetRight = width - right;
            this.zoomSlider.startInset = insetLeft - this.zoomSlider.trackStartInset;
            this.zoomSlider.endInset = insetRight - this.zoomSlider.trackEndInset;

            if (this.zoomSlider.endInset < 0) {
                let inset = this.zoomSlider.endInset;
                this.zoomSlider.endInset = 0;
                this.charts.map(c => c.rightMargin += (inset * -1.0));
            }
            if (this.zoomSlider.startInset < 0) {
                let inset = this.zoomSlider.startInset;
                this.zoomSlider.startInset = 0;
                this.charts.map(c => c.leftMargin += (inset * -1.0));
            }

            this.zoomChart.leftMargin = insetLeft;
            this.zoomChart.rightMargin = insetRight;
            this.zoomChart.bottomMargin = this.zoomSlider.barExtent;
        }
    }

    private updateChartZoom(chart: IgrDataChart, zoom: IgRect) {
        const data = this.countriesAll;

        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgrNumericYAxis;
        let indexStart = Math.floor((data.length - 1) * zoom.left);
        let indexEnd = Math.ceil((data.length - 1) * (zoom.left + zoom.width));
        // console.log("updateChartZoom");
        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;
        if (indexStart < 0) {
            indexStart = 0;
        }

        indexEnd = Math.min(indexEnd, this.countriesAll.length - 1);
        for (let i = indexStart; i <= indexEnd; i++) {
            min = Math.min(min, data[i].GdpTotal);
            max = Math.max(max, data[i].GdpTotal);
        }

        let yMin = (min - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);
        let yMax = (max - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);

        let newZoom = {
            left: zoom.left,
            width: zoom.width,
            top: (1.0 - yMax),
            // top: 0.0,
            // height: 1.0
            height: (yMax - yMin)
        }
        chart.windowRect = newZoom;
    }

    private createSeries(chart: IgrDataChart) {
        const sizeScale1 = new IgrSizeScale({});
        sizeScale1.minimumValue = 15;
        sizeScale1.maximumValue = 40;
        const sizeScale2 = new IgrSizeScale({});
        sizeScale2.minimumValue = 5;
        sizeScale2.maximumValue = 15;

        const xAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgrNumericXAxis;
        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[1] as IgrNumericYAxis;

        const series1 = new IgrBubbleSeries({ name: "series1" });
        series1.title = "High Income Country";
        series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
        series1.showDefaultTooltip = false;
        series1.xMemberPath = "Population";
        series1.yMemberPath = "GdpTotal";
        series1.radiusMemberPath = "GdpPerCapita";
        series1.radiusScale = sizeScale1;
        series1.markerType = MarkerType.Circle;
        series1.xAxis = xAxis;
        series1.yAxis = yAxis;
        // series1.tooltipTemplate = this.seriesTooltip;

        const series2 = new IgrBubbleSeries({ name: "series2" });
        series2.title = "Low Income Country";
        series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
        series2.showDefaultTooltip = false;
        series2.xMemberPath = "Population";
        series2.yMemberPath = "GdpTotal";
        series2.radiusMemberPath = "GdpPerCapita";
        series2.radiusScale = sizeScale2;
        series2.markerType = MarkerType.Circle;
        series2.xAxis = xAxis;
        series2.yAxis = yAxis;
        // series2.tooltipTemplate = this.seriesTooltip;

        chart.series.add(series1);
        chart.series.add(series2);

        // chart.markerOutlines = [ "#7446B9", "#9FB328", "#2E9CA6", "#525251", "#dcbf3f", "#F96232"];
        // chart.brushes = [ "#7446B9", "#9FB328", "#2E9CA6", "#525251", "#dcbf3f", "#F96232"];

    }
}