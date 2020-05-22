<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Scatter Point Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-point-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterPointSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-point-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterPointSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-point-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterPointSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataChartTypeScatterPointSeries.tsx](./src/DataChartTypeScatterPointSeries.tsx) file.

<!-- The following section provides source code from:
`./src/DataChartTypeScatterPointSeries.tsx` file: -->

<!-- ```tsx
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// types of scatter series:
import { IgrScatterSeries } from 'igniteui-react-charts';
// modules of data chart:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
// additional modules
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleScatterStats } from './SampleScatterStats';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterPointSeries extends React.Component {

    public data1: any[];
    public data2: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);
        this.data1 = SampleScatterStats.getCountriesWithHighIncome();
        this.data2 = SampleScatterStats.getCountriesWithLowIncome();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent"   >
                    <IgrDataChart
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        width="100%"
                        height="100%"
                        chartTitle="GDP vs Population">

                        <IgrNumericXAxis name="xAxis"
                            isLogarithmic={true}
                            abbreviateLargeNumbers={true}
                            title="Population" />
                        <IgrNumericYAxis name="yAxis"
                            isLogarithmic={true}
                            abbreviateLargeNumbers={true}
                            title="Total GDP ($)" />

                        <IgrScatterSeries name="series1"
                        markerType="Circle"
                        dataSource={this.data1}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="Population"
                        yMemberPath="GdpTotal"
                        showDefaultTooltip="true"
                        title="Rich Countries" />

                        <IgrScatterSeries name="series2"
                        markerType="Circle"
                        dataSource={this.data2}
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        xMemberPath="Population"
                        yMemberPath="GdpTotal"
                        showDefaultTooltip="true"
                        title="Poor Countries" />

                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public setSeries(seriesType: string)
    {
        if (seriesType === "Point") {
            const series1 = new IgrScatterSeries({ name: "series1" });
            series1.title = "Rich Countries";
            series1.markerType = MarkerType.Circle;
            series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
            series1.showDefaultTooltip = true;
            series1.xMemberPath = "Population";
            series1.yMemberPath = "GdpTotal";
            series1.xAxisName = "xAxis";
            series1.yAxisName = "yAxis";

            const series2 = new IgrScatterSeries({ name: "series2" });
            series2.title = "Poor Countries";
            series2.markerType = MarkerType.Circle;
            series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
            series2.showDefaultTooltip = true;
            series2.xMemberPath = "Population";
            series2.yMemberPath = "GdpTotal";
            series2.xAxisName = "xAxis";
            series2.yAxisName = "yAxis";

            this.chart.series.clear();
            this.chart.series.add(series1);
            this.chart.series.add(series2);

        }
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-scatter-point-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

