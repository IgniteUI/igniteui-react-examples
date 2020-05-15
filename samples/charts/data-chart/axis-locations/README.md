<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Axis Locations.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-locations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisLocations.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-locations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisLocations.tsx">
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

<iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-locations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisLocations.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/DataChartAxisLocations.tsx` file:

```tsx
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

import * as React from 'react';



IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartAxisLocations extends React.Component {
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
                    <IgrLegend ref={this.onLegendRef} orientation="Horizontal" />
                </div>
            </div>
            <div className="igComponent"  style={{height: "calc(100% - 35px)"}}>
                <IgrDataChart ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    chartTitle="Company Financial Projections"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}>

                    {/* multiple axes at various location: */}
                    <IgrCategoryXAxis name="xAxisYears"
                    interval={12} labelLocation="OutsideBottom" overlap={1} gap={0.4}
                    label="Year"  labelTextColor="gray" tickLength={0} />
                    <IgrCategoryXAxis name="xAxisMonths" overlap={1} gap={0.4}
                    interval={1}  labelLocation="OutsideBottom"
                    label="Month" labelTextColor="gray"/>
                    <IgrNumericYAxis  name="yAxisLeft" title="Expanse | Revenue" titleTextColor="gray"
                    minimumValue={-900} labelLocation="OutsideLeft"
                    maximumValue={900} labelTextColor="gray"
                    interval={300} />
                    <IgrNumericYAxis  name="yAxisRight" title="Profit (%)" titleTextColor="gray"
                    minimumValue={0}  labelLocation="OutsideRight" majorStrokeThickness={0}
                    maximumValue={100} labelTextColor="gray" labelHorizontalAlignment="left"
                    titleVerticalAlignment="center"
                      />

                    {/* multiple series: */}
                    <IgrColumnSeries name="series1"
                    title="Revenue"
                    valueMemberPath="Revenue"
                    brush="#9b58e2"
                    outline="#9b58e2"
                    xAxisName="xAxisMonths"
                    yAxisName="yAxisLeft"
                    isTransitionInEnabled="true"
                    showDefaultTooltip="true"/>
                    <IgrColumnSeries name="series3"
                    title="Expanse"
                    valueMemberPath="Expanse"
                    brush="#f23030"
                    outline="#f23030"
                    xAxisName="xAxisMonths"
                    yAxisName="yAxisLeft"
                    isTransitionInEnabled="true"
                    showDefaultTooltip="true" />
                    <IgrColumnSeries name="series2"
                    title="Profit"
                    valueMemberPath="Profit"
                    brush="#48ba39"
                    outline="#48ba39"
                    xAxisName="xAxisYears"
                    yAxisName="yAxisRight"
                    isTransitionInEnabled="true"
                    showDefaultTooltip="true"/>
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

    public initData() {
        const items: any[] = [];
        const months: string[] = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];

        let revenue = 200;
        let profit = 15;
        let expanse = 0;

        let year = 2020;
        let month = 0;
        for (let i = 0; i < 25; i++) {
            revenue += Math.random() * 50 - 20;
            profit += Math.random() * 4.0 - 2.0; // percentage
            expanse = revenue - (revenue * profit / 100);
            items.push(
                {
                    Expanse: Math.round(-expanse),
                    Month:  months[month],
                    Profit: Math.round(profit),
                    Revenue: Math.round(revenue),
                    Year: year,
            });
            month += 1;
            if (month >= 12) {
                month = 0;
                year += 1;
            }
        }


        this.data = items;
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/axis-locations
npm install
npm start

```

Then open http://localhost:3000/ in your browser

