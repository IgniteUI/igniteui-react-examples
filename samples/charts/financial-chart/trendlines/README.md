<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Financial Chart Trendlines.
<!-- in the Financial Chart component -->
<!-- [Financial Chart](https://infragistics.com/Reactsite/components/financial-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/trendlines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartTrendlines.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/trendlines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartTrendlines.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/trendlines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartTrendlines.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/FinancialChartTrendlines.tsx` file:

```tsx
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import StocksHistory from '/StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTrendlines extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { trendLineType: "QuinticFit", data:[] }
        this.initData();
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <label className="igOptions-label">Trendline Type:</label>
                <select value={this.state.trendLineType}
                    onChange={this.onTrendlineChanged}>
                    <option>CubicFit</option>
                    <option>LinearFit</option>
                    <option>QuinticFit</option>
                    <option>QuarticFit</option>
                    <option>ExponentialFit</option>
                    <option>PowerLawFit</option>
                    <option>LogarithmicFit</option>
                    <option>CumulativeAverage</option>
                    <option>ExponentialAverage</option>
                    <option>SimpleAverage</option>
                    <option>ModifiedAverage</option>
                    <option>WeightedAverage</option>
                    <option>None</option>
                </select>
            </div>

            <div className="igComponent" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    trendLineType={this.state.trendLineType}
                    trendLineThickness={2}
                    trendLinePeriod={10}
                    trendLineBrushes="rgba(5, 138, 0, 1), rgba(0, 101, 209, 1)"
                    brushes="rgba(5, 138, 0, 1), rgba(0, 101, 209, 1)"
                    chartTitle="Tesla vs Amazon Trend"
                    subtitle="Between 2013 and 2017"
                    dataSource={this.state.data}
                    zoomSliderType="None"
                    chartType="Line" />
            </div>
        </div>
        );
    }

    public onTrendlineChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({trendLineType: mode});
    }

    public initData() {
        StocksHistory.getMultipleStocks().then((stocks: any[]) => {
            console.log("getMultipleStocks " + stocks.length);
            this.setState({ data: stocks });
        });
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/financial-chart/trendlines
npm install
npm start

```

Then open http://localhost:3000/ in your browser

