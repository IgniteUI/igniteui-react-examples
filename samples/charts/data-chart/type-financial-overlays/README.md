<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Data Chart component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-overlays?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialOverlays.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-overlays?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialOverlays.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-overlays?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialOverlays.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartTypeFinancialOverlays.tsx` file:

```tsx
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';
import { IgrPriceChannelOverlay } from 'igniteui-react-charts';

// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

import * as React from 'react';


import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialLineIndicators extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    private bollingerBands: IgrBollingerBandsOverlay;
    private priceChannel: IgrPriceChannelOverlay;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onOverlayChanged = this.onOverlayChanged.bind(this);

        this.state = { displayOverlay: "BollingerBands" };
        this.data = SampleFinancialData.create();

        this.bollingerBands = new IgrBollingerBandsOverlay({ name: "bollinger" });
        this.bollingerBands.xAxisName = "xAxis";
        this.bollingerBands.yAxisName = "yAxis";
        this.bollingerBands.highMemberPath = "High";
        this.bollingerBands.lowMemberPath = "Low";
        this.bollingerBands.closeMemberPath = "Close";
        this.bollingerBands.openMemberPath = "Open";
        this.bollingerBands.volumeMemberPath = "Volume";
        this.bollingerBands.brush="rgba(171, 82, 235, 0.3)";
        this.bollingerBands.outline="rgba(171, 82, 235, 0.9)";

        this.priceChannel = new IgrPriceChannelOverlay({ name: "priceChannel" });
        this.priceChannel.xAxisName = "xAxis";
        this.priceChannel.yAxisName = "yAxis";
        this.priceChannel.highMemberPath = "High";
        this.priceChannel.lowMemberPath = "Low";
        this.priceChannel.closeMemberPath = "Close";
        this.priceChannel.openMemberPath = "Open";
        this.priceChannel.volumeMemberPath = "Volume";
        this.priceChannel.brush="rgba(171, 82, 235, 0.3)";
        this.priceChannel.outline="rgba(171, 82, 235, 0.9)";
    }

    public onOverlayChanged = (e: any) => {
        const type = e.target.value.toString();
        switch (type) {
            case "None": {
                this.chart.series.remove(this.priceChannel);
                this.chart.series.remove(this.bollingerBands);
                break;
            }
            case "BollingerBands": {
                this.chart.series.remove(this.priceChannel);
                this.chart.series.add(this.bollingerBands);
                break;
            }
            case "PriceChannel": {
                this.chart.series.remove(this.bollingerBands);
                this.chart.series.add(this.priceChannel);
            }
        }
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.chart.series.add(this.bollingerBands);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-label"> Overlay Display Type: </span>
                    <select defaultValue={this.state.displayOverlay}
                        onChange={this.onOverlayChanged}>
                        <option>None</option>
                        <option>BollingerBands</option>
                        <option>PriceChannel</option>
                    </select>
                </div>
                <div className="igComponent" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart
                        width="100%"
                        height="100%"
                        ref={this.onChartRef}
                        dataSource={this.data}
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} >

                        <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={90} />
                        <IgrNumericYAxis name="yAxis" title="Financial Prices" />

                        <IgrFinancialPriceSeries
                            name="series1"
                            xAxisName="xAxis"
                            yAxisName="yAxis"
                            displayType="Candlestick"
                            highMemberPath="High"
                            lowMemberPath="Low"
                            closeMemberPath="Close"
                            openMemberPath="Open"
                            volumeMemberPath="Volume"
                            showDefaultTooltip="true"/>

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
cd ./samples/charts/data-chart/type-financial-overlays
npm install
npm start

# Open http://localhost:3000/ in your browser
```

