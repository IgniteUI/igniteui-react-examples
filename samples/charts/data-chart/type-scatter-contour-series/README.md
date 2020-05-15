<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Type Scatter Contour Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-contour-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterContourSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-contour-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterContourSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-contour-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterContourSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/DataChartTypeScatterContourSeries.tsx` file:

```tsx
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterContourSeries } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrLinearContourValueResolver } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from 'react';



import { SampleScatterData } from './SampleScatterData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterContourSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.data = SampleScatterData.create();

        this.state = {
            seriesContours: 10,
            seriesThickness: 3,
        };
    }

    public onSeriesThicknessChanged = (e: any) => {
        const num: number = parseInt(e.target.value, 10);
        this.setState({ seriesThickness: num });
    }

    public onSeriesContoursChanged = (e: any) => {
        const num: number = parseInt(e.target.value, 10);

        const series = this.chart.actualSeries[0] as IgrScatterContourSeries;
        if (series !== undefined) {
            const contours = new IgrLinearContourValueResolver({});
            contours.valueCount = num;
            series.valueResolver = contours;
        }
        this.setState({ seriesContours: num });
    }

    public render() {
        return (
        <div className="igContainer">
            {/* <div className="igOptions">
                <label className="igOptions-label">Thickness: </label>
                <label className="igOptions-value" >
                    {this.state.seriesThickness}
                </label>
                <input className="igOptions-slider" type="range" min="1" max="10" step="1"
                    value={this.state.seriesThickness}
                    onChange={this.onSeriesThicknessChanged}/>

                <label className="igOptions-label">Contours: </label>
                <label className="igOptions-value" >
                    {this.state.seriesContours}
                </label>
                <input className="igOptions-slider" type="range" min="1" max="15" step="1"
                    value={this.state.seriesContours}
                    onChange={this.onSeriesContoursChanged}/>
            </div> */}
            <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    ref={this.onChartRef}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    width="100%"
                    height="100%"
                    chartTitle="Magnetic Field Lines"
                    gridMode="BeforeSeries"
                    dataSource={this.data} >
                    {/* primary axes: */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideLeft"
                    minimumValue={-180} maximumValue={180} interval={30} title="Longitude" />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideBottom"
                    minimumValue={-90} maximumValue={90} interval={30} title="Latitude"/>
                    {/* optional axes: */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop"
                    minimumValue={-180} maximumValue={180} interval={30} />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight"
                    minimumValue={-90} maximumValue={90} interval={30} title="Latitude"/>

                    <IgrScatterContourSeries
                    name="series"
                    xAxisName="xAxis1"
                    yAxisName="yAxis1"
                    xMemberPath="X"
                    yMemberPath="Y"
                    valueMemberPath="Z"
                    thickness={this.state.seriesThickness}
                    showDefaultTooltip="true" />
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;

        const brushScale = new IgrValueBrushScale({});
        brushScale.minimumValue = -2;
        brushScale.maximumValue = 2;
        brushScale.brushes = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
        const series = this.chart.actualSeries[0] as IgrScatterContourSeries;
        series.fillScale = brushScale;
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-scatter-contour-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

