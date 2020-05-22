<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Performance.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-performance?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartPerformance.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-performance?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartPerformance.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-performance?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartPerformance.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataChartPerformance.tsx](./src/DataChartPerformance.tsx) file.

<!-- The following section provides source code from:
`./src/DataChartPerformance.tsx` file: -->

<!-- ```tsx
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrLineSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import * as React from 'react';
import { DataChartSharedData } from './DataChartSharedData';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartPerformance extends React.Component<any, any> {
    public dataIndex: number = 0;
    public dataPoints: number = 100000;
    public data: any[];

    public refreshMilliseconds: number = 10;
    public interval: number = -1;

    public chart: IgrDataChart;
    public fps: HTMLSpanElement;
    public frameTime: Date;
    public frameCount: number = 0;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onFpsRef = this.onFpsRef.bind(this);
        this.onScalingRatioChanged = this.onScalingRatioChanged.bind(this);
        this.onRefreshFrequencyChanged = this.onRefreshFrequencyChanged.bind(this);
        this.onDataGenerateClick = this.onDataGenerateClick.bind(this);
        this.onDataPointsChanged = this.onDataPointsChanged.bind(this);

        this.data = DataChartSharedData.getItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.state = {
            dataInfo: DataChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.data,
            scalingRatio: window.devicePixelRatio,
        }
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <label className="igOptions-label">Data Points: </label>
                <label className="igOptions-value" >
                    {this.state.dataInfo}
                </label>
                <input className="igOptions-slider" type="range" min="10000" max="1000000" step="1000"
                    value={this.state.dataPoints}
                    onChange={this.onDataPointsChanged}/>
                <button onClick={this.onDataGenerateClick}>Generate Data</button>
                <label className="igOptions-item"><input type="checkbox"
                    onChange={this.onScalingRatioChanged}/> Optimize Scaling </label>
                <span ref={this.onFpsRef} className="igOptions-label" />
            </div>
            <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true} >

                    <IgrCategoryXAxis name="xAxis" label="Label"/>
                    <IgrNumericYAxis name="yAxis" />

                    <IgrLineSeries name="series1"
                                   valueMemberPath="Value"
                                   xAxisName="xAxis"
                                   yAxisName="yAxis"
                                   markerType="None"/>
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public componentWillUnmount() {
        if (this.interval >= 0) {
             window.clearInterval(this.interval);
             this.interval = -1;
         }
    }

    public onFpsRef(span: HTMLSpanElement) {
        this.fps = span;
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.onChartInit();
    }

    public onChartInit(): void {
        this.frameTime = new Date();
        this.setupInterval();
    }

    public onScalingRatioChanged = (e: any) =>{
        if (e.target.checked) {
            this.setState({ scalingRatio: 1.0 });
        } else {
            this.setState({ scalingRatio: NaN });
        }
    }

    public onDataGenerateClick() {
        this.data = DataChartSharedData.getItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.setState({ dataSource: this.data });
    }

    public onDataPointsChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10000;
        }
        if (num < 10000) {
            num = 10000;
        }
        if (num > 1000000) {
            num = 1000000;
        }
        const info = DataChartSharedData.toShortString(num);
        this.dataPoints = num;
        this.setState({ dataPoints: num, dataInfo: info });
    }

    public ngOnDestroy(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }
    }

    public onRefreshFrequencyChanged = (e: any) => {
        let num: number = parseInt(e.target.value, 10);

        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 500) {
            num = 500;
        }
        this.refreshMilliseconds = num;
        this.setupInterval();
    }

    public setupInterval(): void {
        if (this.interval >= 0) {
            window.clearInterval(this.interval);
            this.interval = -1;
        }

        this.interval = window.setInterval(() => this.tick(),
        this.refreshMilliseconds);
    }

    public tick(): void {
        this.dataIndex++;
        const oldItem = this.data[0];
        const newItem = DataChartSharedData.getNewItem(this.data, this.dataIndex);

        // updating data source and notifying category chart
        this.data.push(newItem);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, newItem);
        this.data.shift();
        this.chart.notifyRemoveItem(this.data, 0, oldItem);

        this.frameCount++;
        const currTime = new Date();
        const elapsed = (currTime.getTime() - this.frameTime.getTime());
        if (elapsed > 5000) {
            const fps = this.frameCount / (elapsed / 1000.0);
            this.frameTime = currTime;
            this.frameCount = 0;
            this.fps.textContent = " FPS: " + Math.round(fps).toString();
        }
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/chart-performance
npm install
npm start

```

Then open http://localhost:3000/ in your browser

