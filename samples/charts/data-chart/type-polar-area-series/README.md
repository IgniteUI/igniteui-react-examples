<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Type Polar Area Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-polar-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypePolarAreaSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-polar-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypePolarAreaSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-polar-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypePolarAreaSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartTypePolarAreaSeries.tsx` file:

```tsx
// axis modules:
import { IgrNumericAngleAxis } from 'igniteui-react-charts';
import { IgrNumericRadiusAxis } from 'igniteui-react-charts';
// series modules:
import { IgrPolarAreaSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarCoreModule } from 'igniteui-react-charts';
import { IgrDataChartPolarModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

// legend's modules:
import { IgrLegend } from 'igniteui-react-charts';
import { IgrLegendModule } from 'igniteui-react-charts';

import * as React from 'react';



import { SamplePolarData } from './SamplePolarData';

IgrDataChartCoreModule.register();
IgrDataChartPolarCoreModule.register();
IgrDataChartPolarModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();

export default class DataChartTypePolarAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public legend: IgrLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { seriesType: "Spline" }
        this.data = SamplePolarData.create();
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
                <div className="igComponent" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true}
                        titleTopMargin="10px"
                        chartTitle="Sailing Chart"
                        subtitle="Wind Speed vs. Boat Speed"
                        width="100%"
                        height="100%"
                        gridMode="BeforeSeries"
                        dataSource={this.data} >
                        <IgrNumericAngleAxis name="angleAxis"
                            startAngleOffset={-90}
                            interval={30}
                            minimumValue={0}
                            maximumValue={360} />
                        <IgrNumericRadiusAxis name="radiusAxis"
                            innerRadiusExtentScale={0.1}
                            radiusExtentScale={0.9}
                            minimumValue={0}
                            maximumValue={100}
                            interval={25} />
                        <IgrPolarAreaSeries
                            name="series1"
                            angleMemberPath="Direction"
                            radiusMemberPath="WindSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Wind Speed"
                            markerType="Circle"
                            areaFillOpacity="0.8"
                            showDefaultTooltip="true"/>
                        <IgrPolarAreaSeries
                            name="series2"
                            angleMemberPath="Direction"
                            radiusMemberPath="BoatSpeed"
                            radiusAxisName="radiusAxis"
                            angleAxisName="angleAxis"
                            title="Boat Speed"
                            markerType="Circle"
                            areaFillOpacity="0.8"
                            showDefaultTooltip="true"  />
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
cd ./samples/charts/data-chart/type-polar-area-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

