<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Stacked Spline Area Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-stacked-spline-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeStackedSplineAreaSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-stacked-spline-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeStackedSplineAreaSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-stacked-spline-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeStackedSplineAreaSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataChartTypeStackedSplineAreaSeries.tsx](./src/DataChartTypeStackedSplineAreaSeries.tsx) file.

<!-- The following section provides source code from:
`./src/DataChartTypeStackedSplineAreaSeries.tsx` file: -->

<!-- ```tsx
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartStackedModule } from 'igniteui-react-charts';
import { IgrColumnFragmentModule } from 'igniteui-react-charts'
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrStackedFragmentSeries } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrStackedSplineAreaSeries } from 'igniteui-react-charts';
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

export default class DataChartTypeStackedSplineAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
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
                        <IgrCategoryXAxis name="xAxis" label="Country"/>
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />

                        <IgrStackedSplineAreaSeries name="series"
                        xAxisName="xAxis"
                        yAxisName="yAxis"
                        showDefaultTooltip="true"
                        areaFillOpacity="1">
                            <IgrStackedFragmentSeries name="coal" valueMemberPath="Coal" title="Coal"/>
                            <IgrStackedFragmentSeries name="hydro" valueMemberPath="Hydro" title="Hydro"/>
                            <IgrStackedFragmentSeries name="nuclear" valueMemberPath="Nuclear" title="Nuclear"/>
                            <IgrStackedFragmentSeries name="gas" valueMemberPath="Gas" title="Gas" />
                            <IgrStackedFragmentSeries name="oil" valueMemberPath="Oil" title="Oil"/>
                        </IgrStackedSplineAreaSeries>
                    </IgrDataChart>
                </div>
            </div>
        );
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
cd ./samples/charts/data-chart/type-stacked-spline-area-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

