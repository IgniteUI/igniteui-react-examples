<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Stacked Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-stacked-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeStackedSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-stacked-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeStackedSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-stacked-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeStackedSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataChartTypeStackedSeries.tsx](./src/DataChartTypeStackedSeries.tsx) file.

<!-- The following section provides source code from:
`./src/DataChartTypeStackedSeries.tsx` file: -->

<!-- ```tsx
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartStackedModule } from 'igniteui-react-charts';
import { IgrColumnFragmentModule } from 'igniteui-react-charts'
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrStackedFragmentSeries } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
import { IgrStackedColumnSeries } from 'igniteui-react-charts';
import { IgrStacked100ColumnSeries } from 'igniteui-react-charts';
import { IgrStackedAreaSeries } from 'igniteui-react-charts';
import { IgrStacked100AreaSeries } from 'igniteui-react-charts';
import { IgrStackedLineSeries } from 'igniteui-react-charts';
import { IgrStacked100LineSeries } from 'igniteui-react-charts';
import { IgrStackedSplineSeries } from 'igniteui-react-charts';
import { IgrStacked100SplineSeries } from 'igniteui-react-charts';
import { IgrStackedBarSeries } from 'igniteui-react-charts';
import { IgrStacked100BarSeries } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartStackedModule.register();
IgrColumnFragmentModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypeStackedSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    public catXAxis: IgrCategoryXAxis;
    public catYAxis: IgrCategoryYAxis;

    public numXAxis: IgrNumericXAxis;
    public numYAxis: IgrNumericYAxis;

    constructor(props: any) {
        super(props);

        this.catXAxis = new IgrCategoryXAxis({ name: "catXAxis" });
        this.catXAxis.label = "Country";

        this.catYAxis = new IgrCategoryYAxis({ name: "catYAxis" });
        this.catYAxis.label = "Country";

        this.numXAxis = new IgrNumericXAxis({ name: "numXAxis" });
        this.numYAxis = new IgrNumericYAxis({ name: "numYAxis" });

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);
        this.onSeriesTypeChanged = this.onSeriesTypeChanged.bind(this);

        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label">Type of Category Series: </span>
                    <select onChange={this.onSeriesTypeChanged}>
                        <option>Stacked Column Series</option>
                        <option>Stacked 100 Column Series</option>
                        <option>Stacked Area Series</option>
                        <option>Stacked 100 Area Series</option>
                        <option>Stacked Line Series</option>
                        <option>Stacked 100 Line Series</option>
                        <option>Stacked Spline Series</option>
                        <option>Stacked 100 Spline Series</option>
                        <option>Stacked Bar Series</option>
                        <option>Stacked 100 Bar Series</option>
                    </select>
                    <span className="igLegend-title">Legend: </span>
                    <div className="igLegend">
                        <IgrLegend ref={this.onLegendRef}
                            orientation="Horizontal" />
                    </div>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}}>
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >
                        {/* at least 2 axes are required: */}
                        {/* <IgrCategoryXAxis name="xAxis" label="Country"/>
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />

                        <IgrStackedColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis">
                            <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal"/>
                            <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro"/>
                            <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear"/>
                            <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
                            <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil"/>
                        </IgrStackedColumnSeries> */}
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public getFragments(): IgrStackedFragmentSeries[] {
        let fragments: IgrStackedFragmentSeries[];

        fragments = [];

        const fragment1 = new IgrStackedFragmentSeries({ name: "series1" });
        fragment1.valueMemberPath = "Coal";
        fragment1.title = "Coal";

        const fragment2 = new IgrStackedFragmentSeries({ name: "series2" });
        fragment2.valueMemberPath = "Hydro";
        fragment2.title = "Hydro";

        const fragment3 = new IgrStackedFragmentSeries({ name: "series3" });
        fragment3.valueMemberPath = "Nuclear";
        fragment3.title = "Nuclear";

        const fragment4 = new IgrStackedFragmentSeries({ name: "series4" });
        fragment4.valueMemberPath = "Gas";
        fragment4.title = "Gas";

        const fragment5 = new IgrStackedFragmentSeries({ name: "series5" });
        fragment5.valueMemberPath = "Oil";
        fragment5.title = "Oil";

        fragments.push(fragment1);
        fragments.push(fragment2);
        fragments.push(fragment3);
        fragments.push(fragment4);
        fragments.push(fragment5);

        return fragments;
    }

    public onSeriesTypeChanged(e: any) {
        const selectedSeries = e.target.value.toString();
        this.chart.series.clear();
        this.setSeries(selectedSeries);
    }

    public setSeries(seriesType: string) {

        this.chart.axes.clear();
        this.chart.series.clear();

        const fragments = this.getFragments();

        if (seriesType === "Stacked Column Series") {

            const stack = new IgrStackedColumnSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);

        }
        else if (seriesType === "Stacked 100 Column Series") {

            const stack = new IgrStacked100ColumnSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);

        }
        else if (seriesType === "Stacked Area Series") {
            const stack = new IgrStackedAreaSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);

        }
        else if (seriesType === "Stacked 100 Area Series") {
            const stack = new IgrStacked100AreaSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
        else if (seriesType === "Stacked Line Series") {
            const stack = new IgrStackedLineSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
        else if (seriesType === "Stacked 100 Line Series") {
            const stack = new IgrStacked100LineSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
        else if (seriesType === "Stacked Spline Series") {
            const stack = new IgrStackedSplineSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
        else if (seriesType === "Stacked 100 Spline Series") {
            const stack = new IgrStacked100SplineSeries({ name: "series1" });

            stack.xAxis = this.catXAxis;
            stack.yAxis = this.numYAxis;
            stack.yAxisName = "numYAxis";
            stack.xAxisName = "catXAxis";

            this.chart.axes.add(this.catXAxis);
            this.chart.axes.add(this.numYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
        else if (seriesType === "Stacked Bar Series") {
            const stack = new IgrStackedBarSeries({ name: "series1" });

            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;
            stack.xAxisName = "numXAxis";
            stack.yAxisName = "catYAxis";

            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
        }
        else if (seriesType === "Stacked 100 Bar Series") {
            const stack = new IgrStacked100BarSeries({ name: "series1" });

            stack.xAxis = this.numXAxis;
            stack.yAxis = this.catYAxis;
            stack.xAxisName = "numXAxis";
            stack.yAxisName = "catYAxis";

            this.chart.axes.add(this.numXAxis);
            this.chart.axes.add(this.catYAxis);

            for (const frag of fragments) {
                stack.series.add(frag);
            }

            this.chart.series.add(stack);
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
        if (this.legend) {
            this.chart.legend = this.legend;
        }
        this.setSeries("Stacked Column Series");
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-stacked-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

