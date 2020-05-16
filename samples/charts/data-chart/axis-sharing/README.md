<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Axis Sharing.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-sharing?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisSharing.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-sharing?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisSharing.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-sharing?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisSharing.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartAxisSharing.tsx` file:

```tsx
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrMoneyFlowIndexIndicator } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from 'react';



import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisSharing extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.data = SampleFinancialData.create();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxisShared" label="Label" />
                        <IgrNumericYAxis  name="yAxisRight" labelLocation="OutsideRight"
                        minimumValue={400} title="Stock Price ($)"
                        maximumValue={700}
                        />
                        <IgrNumericYAxis name="yAxisLeft" labelLocation="OutsideLeft"
                        minimumValue={0} title="Money Flow Index"
                        maximumValue={300}
                        majorStrokeThickness={0}/>

                        <IgrMoneyFlowIndexIndicator
                        name="series2"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisLeft"
                        displayType="Area"
                        highMemberPath="High"
                        lowMemberPath="Low"
                        closeMemberPath="Close"
                        openMemberPath="Open"
                        volumeMemberPath="Volume" />

                        <IgrFinancialPriceSeries
                        name="series1"
                        xAxisName="xAxisShared"
                        yAxisName="yAxisRight"
                        displayType="Candlestick"
                        highMemberPath="High"
                        lowMemberPath="Low"
                        closeMemberPath="Close"
                        openMemberPath="Open"
                        volumeMemberPath="Volume" />

                    </IgrDataChart>
                </div>
            </div>
        );
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/axis-sharing
npm install
npm start

```

Then open http://localhost:3000/ in your browser

