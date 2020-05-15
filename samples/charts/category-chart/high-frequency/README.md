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
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/high-frequency?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartHighFrequency.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/high-frequency?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartHighFrequency.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/high-frequency?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartHighFrequency.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/CategoryChartHighFrequency.tsx` file:

```tsx
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';

import * as React from 'react';



import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();

export default class CategoryChartHighFrequency extends React.Component<any, any> {
    public dataIndex: number = 0;
    public dataPoints: number = 100000;
    public data: any[];

    public refreshMilliseconds: number = 10;
    public interval: number = -1;

    public chart: IgrCategoryChart;
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

        this.data = CategoryChartSharedData.generateItems(100, this.dataPoints, false);
        this.dataIndex = this.data.length;

        this.state = {
            dataInfo: CategoryChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.data,
            scalingRatio: window.devicePixelRatio,
            refreshInterval: this.refreshMilliseconds,
            refreshInfo: (this.refreshMilliseconds / 1000).toFixed(3) + "s"
        }
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <label className="igOptions-label">Refresh Interval: </label>
                <label className="igOptions-value" >
                    {this.state.refreshInfo}
                </label>
                <input className="igOptions-slider" type="range" min="10" max="500"
                    value={this.state.refreshInterval}
                    onChange={this.onRefreshFrequencyChanged}/>
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
            <div className="igComponent" style={{height: "calc(100% - 45px)"}} >
                <IgrCategoryChart ref={this.onChartRef}
                    width="100%"
                    height="100%"
                    chartType="Line"
                    dataSource={this.state.dataSource}/>
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

    public onChartRef(chart: IgrCategoryChart) {
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
        this.data = CategoryChartSharedData.generateItems(100, this.dataPoints, false);
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
        const info = CategoryChartSharedData.toShortString(num);
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
        const info = (this.refreshMilliseconds / 1000).toFixed(3) + "s";
        this.setState({refreshInterval: num, refreshInfo: info });
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
        const newItem = CategoryChartSharedData.getNewItem(this.data, this.dataIndex);

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

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/category-chart/high-frequency
npm install
npm start

# Open http://localhost:3000/ in your browser
```

