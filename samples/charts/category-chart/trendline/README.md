<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Category Chart component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Category Chart](https://infragistics.com/Reactsite/components/category-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/trendline?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartTrendline.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/trendline?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartTrendline.tsx">
            <img height="40px" style="border-radius: 0.3rem" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/trendline?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartTrendline.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/CategoryChartTrendline.tsx` file:

```tsx
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';
import * as React from 'react';



import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();
IgrLegendModule.register();

export default class CategoryChartTrendline extends React.Component<any, any> {
    public data: any[];
    public chart: IgrCategoryChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { trendLineType: "QuarticFit" }
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer" >
                <div className="igOptions">
                    <span className="igOptions-label">Trend Line Type: </span>
                    <select
                        value={this.state.trendLineType}
                        onChange={this.onTrendlineTypeChanged}>
                        <option>LinearFit</option>
                        <option>QuadraticFit</option>
                        <option>CubicFit</option>
                        <option>QuarticFit</option>
                        <option>QuinticFit</option>
                        <option>LogarithmicFit</option>
                        <option>ExponentialFit</option>
                        <option>PowerLawFit</option>
                        <option>SimpleAverage</option>
                        <option>ExponentialAverage</option>
                        <option>ModifiedAverage</option>
                        <option>CumulativeAverage</option>
                        <option>WeightedAverage</option>
                        <option>None</option>
                    </select>
                </div>

            <div className="igComponent" style={{height: "calc(100% - 50px)"}} >
                <IgrCategoryChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    chartType="Point"
                    markerTypes="Circle"
                    chartTitle="Average Temperature over 2000 Years"
                    dataSource={this.data}
                    trendLineType={this.state.trendLineType}
                    trendLineThickness={2}
                    trendLinePeriod={20}
                    yAxisMinimumValue={0}
                    yAxisTitle="Temperature (C)"
                    xAxisTitle="Years"/>
            </div>
            <div className="igLegend">
                <IgrLegend ref={this.onLegendRef} orientation="Horizontal"  />
            </div>

        </div>
        );
    }

    public onTrendlineTypeChanged = (e: any) =>{
        this.setState({trendLineType: e.target.value});
    }

    public onChartRef(chart: IgrCategoryChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
            this.chart.includedProperties = ["Value", "Label"];
            this.chart.excludedProperties = ["High", "Low"];
        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }

    public initData() {

        // generating average temperature for a few cities
        const eg: any = CategoryChartSharedData.getTemperatures(30, 0, 2000);
        const it: any = CategoryChartSharedData.getTemperatures(20, 0, 2000);
        const uk: any = CategoryChartSharedData.getTemperatures(10, 0, 2000);

        // setting data intent for Series Title
        uk.__dataIntents = {
            Value: ["SeriesTitle/London"]
        };
        it.__dataIntents = {
            Value: ["SeriesTitle/Rome"]
        };
        eg.__dataIntents = {
            Value: ["SeriesTitle/Cairo"]
        };
        this.data = [ eg, it, uk ];
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/category-chart/trendline
npm install
npm start

# Open http://localhost:3000/ in your browser
```

