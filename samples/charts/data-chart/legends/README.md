<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Legends.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/legends?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartLegends.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/legends?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartLegends.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/legends?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartLegends.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartLegends.tsx` file:

```tsx
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

import * as React from 'react';

import { DataChartSharedData } from './DataChartSharedData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrNumberAbbreviatorModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartLegends extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.data = DataChartSharedData.getEnergyProduction();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igLegend-title">Energy Source: </span>
                    <div className="igLegend">
                        <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                    </div>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                    <IgrDataChart
                        dataSource={this.data}
                        ref={this.onChartRef}
                        width="100%" height="100%"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0}
                        abbreviateLargeNumbers={true}  />

                        <IgrColumnSeries name="series1" title="Coal" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Coal" />
                        <IgrColumnSeries name="series2" title="Hydro" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Hydro" />
                        <IgrColumnSeries name="series3" title="Nuclear" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Nuclear" />
                        <IgrColumnSeries name="series4" title="Gas" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Gas" />
                        <IgrColumnSeries name="series5" title="Oil" xAxisName="xAxis"
                            yAxisName="yAxis" valueMemberPath="Oil" />
                    </IgrDataChart>

                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.legend = this.legend;
        }
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/legends
npm install
npm start

```

Then open http://localhost:3000/ in your browser

