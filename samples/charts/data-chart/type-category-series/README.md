<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Category Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-category-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeCategorySeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-category-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeCategorySeries.tsx">
            <img height="40px" style="border-radius: 5px" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
https://codesandbox.io/embed/react-treemap-overview-rtb45
https://codesandbox.io/static/img/play-codesandbox.svg
https://codesandbox.io/embed/react-treemap-overview-rtb45?view=browser -->
    </body>
</html>

<!-- ## Sample Preview -->

<!-- <iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-category-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeCategorySeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartTypeCategorySeries.tsx` file:

```tsx
// importing axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
// importing category series' modules:
import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrAreaSeries } from 'igniteui-react-charts';
import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
import { IgrPointSeries } from 'igniteui-react-charts';
import { IgrSplineSeries } from 'igniteui-react-charts';
import { IgrSplineAreaSeries } from 'igniteui-react-charts';
import { IgrStepAreaSeries } from 'igniteui-react-charts';
import { IgrStepLineSeries } from 'igniteui-react-charts';
import { IgrWaterfallSeries } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
// importing data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// importing legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleCategoryData } from './SampleCategoryData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeCategorySeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.state = { seriesType: "Column" };
        this.data = SampleCategoryData.create();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label">Type of Category Series: </span>
                    <select value={this.state.seriesType}
                        onChange={this.onSeriesTypeChanged}>
                        <option>Column</option>
                        <option>Area</option>
                        {/* <option>Bar</option> */}
                        <option>Point</option>
                        <option>Line</option>
                        <option>Spline</option>
                        <option>SplineArea</option>
                        <option>StepArea</option>
                        <option>StepLine</option>
                        <option>Waterfall</option>
                    </select>
                    <span className="igLegend-title">Legend: </span>
                    <div className="igLegend">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        <IgrCategoryXAxis name="xAxis" label="Year"
                        title="Olympic Years"/>
                        <IgrNumericYAxis  name="yAxis" minimumValue={0}
                        title="Total Olympic Medals" />
                        {/* note series are created in code behind
                        alternatively, you can create these elements using this code: */}
                        {/*
                        <IgrColumnSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            valueMemberPath="USA" /> */}
                   </IgrDataChart>
                </div>
            </div>
        );
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.setState({seriesType: selectedSeries});
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string)
    {
        // creating axis based on requirements of series
        // if (seriesType === "Bar") {
        //     const xAxis = new IgrNumericXAxis({ name:  "xAxis", minimumValue: 0 });
        //     const yAxis = new IgrCategoryYAxis({ name: "yAxis" });
        //     yAxis.label = "Year";
        //     this.chart.axes.clear();
        //     this.chart.axes.add(xAxis);
        //     this.chart.axes.add(yAxis);
        // } else {
        //     const yAxis = new IgrNumericYAxis({ name:  "yAxis", minimumValue: 0 });
        //     const xAxis = new IgrCategoryXAxis({ name: "xAxis" });
        //     xAxis.label = "Year";
        //     this.chart.axes.clear();
        //     this.chart.axes.add(xAxis);
        //     this.chart.axes.add(yAxis);
        // }

        if (seriesType === "Column") {

            const series1 = new IgrColumnSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrColumnSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Line") {

            const series1 = new IgrLineSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.thickness = 2;

            const series2 = new IgrLineSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.thickness = 2;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Point") {

            const series1 = new IgrPointSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.thickness = 2;

            const series2 = new IgrPointSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.thickness = 2;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Area") {

            const series1 = new IgrAreaSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrAreaSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Spline") {

            const series1 = new IgrSplineSeries({ name: "series1" });
            series1.markerType = MarkerType.Circle;
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";
            series1.thickness = 2;

            const series2 = new IgrSplineSeries({ name: "series2" });
            series2.markerType = MarkerType.Circle;
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";
            series2.thickness = 2;

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "SplineArea") {

            const series1 = new IgrSplineAreaSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrSplineAreaSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "StepArea") {

            const series1 = new IgrStepAreaSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrStepAreaSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "StepLine") {

            const series1 = new IgrStepLineSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrStepLineSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Waterfall") {

            const series1 = new IgrWaterfallSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrWaterfallSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        } else if (seriesType === "Bar") {

            const series1 = new IgrBarSeries({ name: "series1" });
            series1.valueMemberPath = "USA";
            series1.title = "USA";
            // TODO-MT
            // series1.xAxisName = "xAxis";
            // series1.yAxisName = "yAxis";

            const series2 = new IgrBarSeries({ name: "series2" });
            series2.valueMemberPath = "RUS";
            series2.title = "Russia";
            // TODO-MT
            // series2.xAxisName = "xAxis";
            // series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
            this.setSeries("Column");
        }
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-category-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

