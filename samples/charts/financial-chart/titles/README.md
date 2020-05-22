<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Financial Chart Titles.
<!-- in the Financial Chart component -->
<!-- [Financial Chart](https://infragistics.com/Reactsite/components/financial-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/titles?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartTitles.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/titles?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartTitles.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/titles?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartTitles.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/FinancialChartTitles.tsx](./src/FinancialChartTitles.tsx) file.

<!-- The following section provides source code from:
`./src/FinancialChartTitles.tsx` file: -->

<!-- ```tsx
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import StocksHistory from './StocksHistory';

IgrFinancialChartModule.register();

export default class FinancialChartTitles extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { data: [] }
        this.initData();
    }

    public render() {
        return (
            <div className="igContainer" >
                <div className="igComponent" style={{height: "calc(100% - 25px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    zoomSliderType="None"
                    chartTitle="Amazon Stock Prices"
                    subtitle="Between 2013 and 2017"
                    yAxisTitle="Closing Prices ($)"
                    xAxisTitle="Time Range (1-Day Interval)"
                    thickness={2}
                    dataSource={this.state.data} />
                </div>
            </div>
        );
    }

    public initData() {
        StocksHistory.getAmazonStock().then((stocks: any[]) => {
            console.log("getMultipleStocks " + stocks.length);
            this.setState({ data: stocks });
        });
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/financial-chart/titles
npm install
npm start

```

Then open http://localhost:3000/ in your browser

