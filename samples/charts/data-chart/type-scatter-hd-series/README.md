<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Scatter Density Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-hd-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterDensitySeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-hd-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterDensitySeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-hd-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterDensitySeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/DataChartTypeScatterDensitySeries.tsx](./src/DataChartTypeScatterDensitySeries.tsx) file.

<!-- The following section provides source code from:
`./src/DataChartTypeScatterDensitySeries.tsx` file: -->

<!-- ```tsx
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrHighDensityScatterSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrHighDensityScatterSeriesModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleDensityData } from './SampleDensityData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrHighDensityScatterSeriesModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartTypeScatterDensitySeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.seriesMinChanged = this.seriesMinChanged.bind(this);
        this.seriesMaxChanged = this.seriesMaxChanged.bind(this);
        this.seriesResolutionChanged = this.seriesResolutionChanged.bind(this);
        this.seriesExtentChanged = this.seriesExtentChanged.bind(this);

        this.data = SampleDensityData.create();

        this.state = {
            seriesHeatMin: 1,
            seriesHeatMax: 15,
            seriesResolution: 3,
            seriesPointExtent: 1,
            hdUseBruteForce: false
        }
    }

    public seriesMinChanged = (e: any) => {
        const min = e.target.value;
        this.setState({seriesHeatMin: min});
    }

    public seriesMaxChanged = (e: any) => {
        const max = e.target.value;
        this.setState({seriesHeatMax: max});
    }

    public seriesResolutionChanged = (e: any) => {
        const res = e.target.value;
        this.setState({seriesResolution: res});
    }

    public seriesExtentChanged = (e: any) => {
        const extent = e.target.value;
        this.setState({seriesPointExtent: extent});
    }

    public useBruteForceChanged = (e: any) => {
        const useBruteForce = e.target.checked;
        this.setState({hdUseBruteForce: useBruteForce});
    }

    public render() {
        return (
        <div className="igContainer">
            {/* <div className="igOptions">
                <span className="igOptions-label">Minimum Value: {this.state.seriesHeatMin}</span>
                <input className="igOptions-slider" type="range" min="0" max="30" step="1"
                    value={this.state.seriesHeatMin}
                    onChange={this.seriesMinChanged}/>
                <span className="igOptions-label">Maximum Value: {this.state.seriesHeatMax}</span>
                <input className="igOptions-slider" type="range" min="0" max="30" step="1"
                    value={this.state.seriesHeatMax}
                    onChange={this.seriesMaxChanged}/>
                <span className="igOptions-label">Series Resolution: {this.state.seriesResolution}</span>
                <input className="igOptions-slider" type="range" min="0" max="10" step="1"
                    value={this.state.seriesResolution}
                    onChange={this.seriesResolutionChanged}/>
                <span className="igOptions-label">Point Extent: {this.state.seriesPointExtent}</span>
                <input className="igOptions-slider" type="range" min="1" max="5" step="1"
                    value={this.state.seriesPointExtent}
                    onChange={this.seriesExtentChanged}/>
                <span className="igOptions-label">Use Brute Force</span>
                <input className="checkbox" type="checkbox" checked={this.state.hdUseBruteForce} onChange={this.useBruteForceChanged} />
            </div> */}
            <div className="igComponent">
                <IgrDataChart
                    ref={this.onChartRef}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    width="100%"
                    height="calc(100% - 20px)"
                    dataSource={this.data} >

                    <IgrNumericXAxis name="xAxis" abbreviateLargeNumbers={true}/>
                    <IgrNumericYAxis name="yAxis" abbreviateLargeNumbers={true}/>

                    <IgrHighDensityScatterSeries
                    name="series"
                    xAxisName="xAxis"
                    yAxisName="yAxis"
                    xMemberPath="X"
                    yMemberPath="Y"
                    heatMaximum={this.state.seriesHeatMax}
                    heatMinimum={this.state.seriesHeatMin}
                    heatMinimumColor="Blue"
                    heatMaximumColor="Red"
                    pointExtent={this.state.seriesPointExtent}
                    useBruteForce={this.state.hdUseBruteForce}
                    mouseOverEnabled="true"
                    resolution={this.state.seriesResolution}
                    progressiveLoad="true"
                    showDefaultTooltip="true"
                    title="High Density Data"
                    />
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-scatter-hd-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

