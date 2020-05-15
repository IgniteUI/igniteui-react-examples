<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Financial Chart Axis Types.
<!-- in the Financial Chart component -->
<!-- [Financial Chart](https://infragistics.com/Reactsite/components/financial-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/axis-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartAxisTypes.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/axis-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartAxisTypes.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/axis-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartAxisTypes.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/FinancialChartAxisTypes.tsx` file:

```tsx
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';



import { StocksUtility } from '/StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAxisTypes extends React.Component<any, any> {

    public data: any[];

    constructor(props: any) {
        super(props);

        this.state = { xAxisMode: "Time", yAxisMode: "PercentChange" }
        this.initData();
    }

    public render() {
        return (
        <div className="igContainer" >
            <div className="igOptions">
                <label className="igOptions-label">X-Axis Mode:</label>
                <select value={this.state.xAxisMode}
                    onChange={this.onXAxisModeChanged}>
                    <option>Ordinal</option>
                    <option>Time</option>
                </select>
                <label className="igOptions-label">Y-Axis Mode:</label>
                <select value={this.state.yAxisMode}
                    onChange={this.onYAxisModeChanged}>
                    <option>PercentChange</option>
                    <option>Numeric</option>
                </select>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    dataSource={this.data}/>
            </div>

        </div>
        );
    }

    public onXAxisModeChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({xAxisMode: mode});
    }

    public onYAxisModeChanged = (e: any) =>{
        const mode = e.target.value;
        this.setState({yAxisMode: mode});
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();
        const dateEnd = new Date(year, month, 1);
        const dateStart = new Date(year - 1, month, 1);

        this.data = StocksUtility.GetStocksBetween(dateStart, dateEnd);
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/financial-chart/axis-types
npm install
npm start

```

Then open http://localhost:3000/ in your browser

