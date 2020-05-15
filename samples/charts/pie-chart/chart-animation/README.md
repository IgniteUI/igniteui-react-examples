<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Pie Chart Animation.
<!-- in the Pie Chart component -->
<!-- [Pie Chart](https://infragistics.com/Reactsite/components/pie-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/pie-chart/chart-animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/PieChartAnimation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/pie-chart/chart-animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/PieChartAnimation.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/pie-chart/chart-animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/PieChartAnimation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/PieChartAnimation.tsx` file:

```tsx
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';

import * as React from 'react';




IgrPieChartModule.register();

export default class PieChartAnimation extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;

    public refreshMilliseconds: number = 10;
    public interval: number = -1;
    public fps: HTMLSpanElement;
    public frameTime: Date;
    public frameCount: number = 0;
    public isTimerStarted: boolean = true;

    constructor(props: any) {
        super(props);
        this.initData();
        this.onPieRef = this.onPieRef.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    public render() {
        return (
            <div style={{ height: "100%", width: "100%", background: "white" }}>
                <div>
                    <button onClick={this.onClick}><label>{this.state.animateChartLabel}</label></button>
                </div>
                <IgrPieChart dataSource={this.state.data}
                    ref={this.onPieRef}
                    labelMemberPath="Company"
                    valueMemberPath="MarketShare"
                    width="100%"
                    height="calc(100% - 45px)"
                    labelsPosition="InsideEnd"
                    startAngle={0}
                    labelExtent={0.7}
                    radiusFactor={0.8} />
            </div >
        );
    }

    public onPieRef(chart: IgrPieChart) {
        this.chart = chart;
        this.setState({ animateChartLabel: "Start Animation" });
        this.setupInterval();
    }

    public onClick = () => {

        if (!this.isTimerStarted) {
            this.setState({ animateChartLabel: "Start Animation" });
            this.isTimerStarted = true;
            window.setTimeout(() => this.tick(), 16);
        } else {
            this.isTimerStarted = false;
            this.setState({ animateChartLabel: "Pause Animation" });
        }

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
        if (!this.isTimerStarted) {
            this.chart.radiusFactor += 0.0025;
            this.chart.startAngle++;

            if (this.chart.startAngle >= 360) {
                this.chart.startAngle = 0;
            }
            if (this.chart.radiusFactor >= 1.0) {
                this.chart.radiusFactor = 0.1;
            }
        }
    }

    public initData() {
        this.state = {
            data: [
                { MarketShare: 30, Company: "Google", },
                { MarketShare: 30, Company: "Apple", },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 15, Company: "Samsung", },
                { MarketShare: 10, Company: "Other", },
            ]
        }
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/pie-chart/chart-animation
npm install
npm start

```

Then open http://localhost:3000/ in your browser

