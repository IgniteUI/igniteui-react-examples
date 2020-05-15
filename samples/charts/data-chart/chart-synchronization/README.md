<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Data Chart component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-synchronization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartSynchronization.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-synchronization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartSynchronization.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-synchronization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartSynchronization.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartSynchronization.tsx` file:

```tsx
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
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

export default class DataChartSynchronization extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.initData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent" style={{height: "100%"}}>
                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="50%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}>

                        <IgrCategoryXAxis name="xAxis" label="Year" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrLineSeries name="series1" title="USA"
                            valueMemberPath="USA"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series2" title="China"
                            valueMemberPath="China"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series3" title="Russia"
                            valueMemberPath="Russia"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                    </IgrDataChart>

                    <IgrDataChart ref={this.onChartRef}
                        width="100%"
                        height="50%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Year" />
                        <IgrNumericYAxis name="yAxis" />

                        <IgrLineSeries name="series1" title="USA"
                            valueMemberPath="USA"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series2" title="China"
                            valueMemberPath="China"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                        <IgrLineSeries name="series3" title="Russia"
                            valueMemberPath="Russia"
                            xAxisName="xAxis"
                            yAxisName="yAxis" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public initData() {
        this.data = [
            { Year: "1996", USA: 148, China: 110, Russia: 95 },
            { Year: "2000", USA: 142, China: 115, Russia: 91 },
            { Year: "2004", USA: 134, China: 121, Russia: 86 },
            { Year: "2008", USA: 131, China: 129, Russia: 65 },
            { Year: "2012", USA: 135, China: 115, Russia: 77 },
            { Year: "2016", USA: 146, China: 112, Russia: 88 }
        ];
    }

    public onChartRef(chart: IgrDataChart) {
        if(chart != null){
            chart.syncChannel = "ChannelA";
            chart.synchronizeHorizontally = true;
            chart.synchronizeVertically = true;
        }
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/chart-synchronization
npm install
npm start

# Open http://localhost:3000/ in your browser
```

