<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Financial Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-financial-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeFinancialSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataChartTypeFinancialSeries.tsx](./src/DataChartTypeFinancialSeries.tsx) file.

<!-- The following section provides source code from:
`./src/DataChartTypeFinancialSeries.tsx` file: -->

<!-- ```tsx
// axis' modules:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
// series' modules:
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';
import { IgrBollingerBandsOverlay } from 'igniteui-react-charts';
import { IgrMedianPriceIndicator } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleFinancialData } from './SampleFinancialData';

IgrDataChartCoreModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeFinancialSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = {
            displayTypeIndicator: "Line",
            displayTypeSeries: "Candlestick" }
        this.data = SampleFinancialData.create();
    }

    public onDisplayTypeSeriesChanged = (e: any) =>{
        const type = e.target.value.toString();
        this.setState({displayTypeSeries: type});
    }

    public onDisplayTypeIndicatorChanged = (e: any) =>{
        const type = e.target.value.toString();
        this.setState({displayTypeIndicator: type});
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <span className="igOptions-label"> Series Display Type: </span>
                <select value={this.state.markersType}
                    onChange={this.onDisplayTypeSeriesChanged}>
                    <option>Candlestick</option>
                    <option>OHLC</option>
                </select>
                <span className="igOptions-label"> Indicator Display Type: </span>
                <select value={this.state.markersType}
                    onChange={this.onDisplayTypeIndicatorChanged}>
                    <option>Line</option>
                    <option>Area</option>
                    <option>Column</option>
                </select>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    width="100%"
                    height="100%"
                    dataSource={this.data}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true} >

                    <IgrCategoryXAxis name="xAxis" label="Label" labelAngle={90} />
                    <IgrNumericYAxis  name="yAxis1" labelLocation="OutsideRight"
                     title="Financial Prices"/>
                    <IgrNumericYAxis  name="yAxis2" labelLocation="OutsideLeft"
                    title="Indicator Values" majorStrokeThickness={0} maximumValue={800}/>

                    <IgrBollingerBandsOverlay
                    name="series1"
                    xAxisName="xAxis"
                    yAxisName="yAxis1"
                    highMemberPath="High"
                    lowMemberPath="Low"
                    closeMemberPath="Close"
                    openMemberPath="Open"
                    brush="rgba(171, 82, 235, 0.39)"/>

                    <IgrFinancialPriceSeries
                    name="series2"
                    xAxisName="xAxis"
                    yAxisName="yAxis1"
                    displayType={this.state.displayTypeSeries}
                    highMemberPath="High"
                    lowMemberPath="Low"
                    closeMemberPath="Close"
                    openMemberPath="Open"
                    volumeMemberPath="Volume" />

                    <IgrMedianPriceIndicator
                    name="series3"
                    xAxisName="xAxis"
                    yAxisName="yAxis2"
                    displayType={this.state.displayTypeIndicator}
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

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-financial-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

