<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Financial Chart Indicator Custom.
<!-- in the Financial Chart component -->
<!-- [Financial Chart](https://infragistics.com/Reactsite/components/financial-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/indicator-customization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartIndicatorCustom.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/indicator-customization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartIndicatorCustom.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/indicator-customization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartIndicatorCustom.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/FinancialChartIndicatorCustom.tsx` file:

```tsx
import { IgrFinancialEventArgs } from 'igniteui-react-charts';
import { IgrFinancialChartCustomIndicatorArgs } from 'igniteui-react-charts';
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';


import { StocksUtility } from '/StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartIndicatorCustom extends React.Component {

    public data: any[];

    constructor(props: any) {
        super(props);
        this.data = this.getStockData();
        this.applyCustomIndicators = this.applyCustomIndicators.bind(this);
    }

    public render() {
        return (
            <div className="igContainer" style={{height: "calc(100% - 25px)"}} >
                <div className="igComponent">
                    <IgrFinancialChart
                        width="100%"
                        height="100%"
                        chartType="candle"
                        zoomSliderType="none"
                        dataSource={this.data}
                        customIndicatorNames="Custom Indicator (Price Changes)"
                        applyCustomIndicators={this.applyCustomIndicators}/>
                </div>
            </div>
        );
    }

    public applyCustomIndicators(chart: IgrFinancialChart, event: IgrFinancialChartCustomIndicatorArgs) {

        if (event.index === 0) {
            const info: IgrFinancialEventArgs = event.indicatorInfo;
            if (info === undefined)
            {
                console.log("indicatorInfo is undefined"); return;
            }

            const ds = info.dataSource;
            if (ds === undefined)
            {
                console.log("dataSource is undefined"); return;
            }
            if (ds.openColumn === undefined)
            {
                console.log("dataSource has no openColumn"); return;
            }
            if (ds.indicatorColumn.length === 0)
            {
                console.log("dataSource has no indicatorColumn"); return;
            }

            const prices = ds.openColumn;
            const priceStart = ds.openColumn[0];
            let min = Number.MAX_VALUE;
            let max = Number.MIN_VALUE;

            // calculating price changes using start price as reference
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                const priceChange = prices[i] - priceStart;
                const pricePercentage = (priceChange / priceStart) * 100;
                min = Math.min(min, pricePercentage);
                max = Math.max(max, pricePercentage);
                // setting values for indicator
                ds.indicatorColumn[i] = pricePercentage;
            }

            // setting min and max on data source
            ds.minimumValue = min;
            ds.maximumValue = max;

            console.log("custom indicator created between " + min + "  " + max);
        }
    }

    public getStockData(): any {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dateEnd = new Date(year, month, 1);
        const dateStart = new Date(year - 2, month, 1);

        return StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}


```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/financial-chart/indicator-customization
npm install
npm start

```

Then open http://localhost:3000/ in your browser

