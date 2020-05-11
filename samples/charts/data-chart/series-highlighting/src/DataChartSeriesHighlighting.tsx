// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrCategoryHighlightLayer } from 'igniteui-react-charts';
import { IgrCategoryItemHighlightLayer } from 'igniteui-react-charts';
import { IgrSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from "react";

import "./DataChartSharedStyles.css";
import { DataChartSharedComponent } from "./DataChartSharedComponent";

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartSeriesHighlighting extends DataChartSharedComponent {
    public data: any[];
    public chart: IgrDataChart;

    public categoryHighlightLayer: IgrCategoryHighlightLayer;
    public itemHighlightLayer: IgrCategoryItemHighlightLayer;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.onSeriesHighlightingChanged = this.onSeriesHighlightingChanged.bind(this);
        this.onItemHighlightingChanged = this.onItemHighlightingChanged.bind(this);
        this.onCategoryHighlightingChanged = this.onCategoryHighlightingChanged.bind(this);

        this.state = { isCategoryHighlighting: false, isItemHighlighting: false, isSeriesHighlighting: false };

        this.categoryHighlightLayer = new IgrCategoryHighlightLayer({ name: "categoryHighlightLayer"});
        this.itemHighlightLayer = new IgrCategoryItemHighlightLayer({name: "itemHighlightLayer"});

        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <label className="igOptions-label">Enable Highlighting: </label>
                    <label className="igOptions-item"><input type="checkbox"
                        checked={this.state.isSeriesHighlighting}
                        onChange={this.onSeriesHighlightingChanged} /> Series </label>
                    <label className="igOptions-item"><input type="checkbox"
                        checked={this.state.isItemHighlighting}
                        onChange={this.onItemHighlightingChanged} />Item </label>
                    <label className="igOptions-item"><input type="checkbox"
                        checked={this.state.isCategoryHighlighting}
                        onChange={this.onCategoryHighlightingChanged} />Category </label>
                </div>

                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />

                        <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Coal"
                            isHighlightingEnabled={this.state.isSeriesHighlighting}
                            isTransitionInEnabled={true} />
                        <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Hydro"
                            isHighlightingEnabled={this.state.isSeriesHighlighting}
                            isTransitionInEnabled={true} />
                        <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Nuclear"
                            isHighlightingEnabled={this.state.isSeriesHighlighting}
                            isTransitionInEnabled={true} />
                        <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Gas"
                            isHighlightingEnabled={this.state.isSeriesHighlighting}
                            isTransitionInEnabled={true} />
                        <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Oil"
                            isHighlightingEnabled={this.state.isSeriesHighlighting}
                            isTransitionInEnabled={true} />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onSeriesHighlightingChanged = (e: any) => {
        const isChecked : boolean = e.target.checked;
        this.toggleSeriesHighlighting(isChecked);
    }

    public onItemHighlightingChanged = (e: any) => {
        const isChecked : boolean = e.target.checked;
        this.toggleItemHighlighting(isChecked);
    }

    public onCategoryHighlightingChanged = (e: any) => {
        const isChecked : boolean = e.target.checked;
        this.toggleCategoryHighlighting(isChecked);
    }

    public toggleCategoryHighlighting(isChecked: boolean) {
        this.setState({ isCategoryHighlighting: isChecked });
        this.toggleSeries(this.categoryHighlightLayer, isChecked);
    }
    public toggleItemHighlighting(isChecked: boolean) {
        this.setState({ isItemHighlighting: isChecked });
        this.toggleSeries(this.itemHighlightLayer, isChecked);
    }
    public toggleSeriesHighlighting(isChecked: boolean) {
        this.setState({ isSeriesHighlighting: isChecked });
    }

    public toggleSeries(series: IgrSeries, isChecked: boolean) {
        if (isChecked) {
            this.chart.series.add(series);
        }
        else {
            this.chart.series.remove(series);
        }
    }

    public initData() {
        this.data = [
            { Country: "Canada", Coal: 400, Oil: 100, Gas: 175, Nuclear: 225, Hydro: 350 },
            { Country: "China", Coal: 925, Oil: 200, Gas: 350, Nuclear: 400, Hydro: 625 },
            { Country: "Russia", Coal: 550, Oil: 200, Gas: 250, Nuclear: 475, Hydro: 425 },
            { Country: "Australia", Coal: 450, Oil: 100, Gas: 150, Nuclear: 175, Hydro: 350 },
            { Country: "United States", Coal: 800, Oil: 250, Gas: 475, Nuclear: 575, Hydro: 750 },
            { Country: "France", Coal: 375, Oil: 150, Gas: 350, Nuclear: 275, Hydro: 325 }
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;

        this.toggleSeriesHighlighting(true);
        this.toggleItemHighlighting(true);
        this.toggleCategoryHighlighting(false);
    }
}
