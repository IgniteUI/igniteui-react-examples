<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Scatter Area Series.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterAreaSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterAreaSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/type-scatter-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartTypeScatterAreaSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartTypeScatterAreaSeries.tsx` file:

```tsx
// types of axis:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
// elements of scatter series:
import { IgrScatterAreaSeries } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleScatterData } from './SampleScatterData';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartTypeScatterAreaSeries extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public colorScale: IgrCustomPaletteColorScale;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.seriesScaleMinChanged = this.seriesScaleMinChanged.bind(this);
        this.seriesScaleMaxChanged = this.seriesScaleMaxChanged.bind(this);
        this.seriesScaleModeChanged = this.seriesScaleModeChanged.bind(this);

        this.data = SampleScatterData.create();
        this.state = {
            seriesScaleMax: 2,
            seriesScaleMin: -2,
            seriesScaleMode: "InterpolateHSV",
         }
    }

    public seriesScaleMinChanged = (e: any) => {
        const num: number = e.target.value.toString();
        this.colorScale.minimumValue = num;
        this.setState({seriesScaleMin: num});
    }

    public seriesScaleMaxChanged = (e: any) => {
        const num: number = e.target.value.toString();
        this.colorScale.maximumValue = num;
        this.setState({seriesScaleMax: num});
    }

    public seriesScaleModeChanged = (e: any) =>{
        const mode = e.target.value.toString();
        this.colorScale.interpolationMode = mode;
        this.setState({seriesScaleMode: mode});
    }

    public render() {
        return (
        <div className="igContainer">
            {/* <div className="igOptions">
                <span className="igOptions-label">Scale Mode: </span>
                <select value={this.state.seriesScaleMode}
                    onChange={this.seriesScaleModeChanged}>
                    <option>Select</option>
                    <option>InterpolateRGB</option>
                    <option>InterpolateHSV</option>
                </select>
                <label className="igOptions-label">Minimum: </label>
                <label className="igOptions-value" >
                    {this.state.seriesScaleMin}
                </label>
                <input className="igOptions-slider" type="range" min="-5" max="0" step="1"
                    value={this.state.seriesScaleMin}
                    onChange={this.seriesScaleMinChanged}/>

                <label className="igOptions-label">Maximum: </label>
                <label className="igOptions-value" >
                    {this.state.seriesScaleMax}
                </label>
                <input className="igOptions-slider" type="range" min="0" max="5" step="1"
                    value={this.state.seriesScaleMax}
                    onChange={this.seriesScaleMaxChanged}/>

            </div> */}
            <div className="igComponent" style={{height: "calc(100% - 35px)"}} >
                <IgrDataChart
                    ref={this.onChartRef}
                    isHorizontalZoomEnabled={true}
                    isVerticalZoomEnabled={true}
                    width="100%"
                    height="100%"
                    chartTitle="Magnetic Field Distribution"
                    gridMode="BeforeSeries"
                    dataSource={this.data} >
                    {/* primary axes: */}
                    <IgrNumericXAxis name="xAxis1" labelLocation="OutsideLeft"
                    minimumValue={-180} maximumValue={180} interval={30} title="Longitude" />
                    <IgrNumericYAxis name="yAxis1" labelLocation="OutsideBottom"
                    minimumValue={-90} maximumValue={90} interval={30}  title="Latitude"/>
                    {/* optional axes: */}
                    <IgrNumericXAxis name="xAxis2" labelLocation="OutsideTop"
                    minimumValue={-180} maximumValue={180} interval={30}  />
                    <IgrNumericYAxis name="yAxis2" labelLocation="OutsideRight"
                    minimumValue={-90} maximumValue={90} interval={30} title="Latitude"/>

                    <IgrScatterAreaSeries
                    name="series"
                    xAxisName="xAxis1"
                    yAxisName="yAxis1"
                    xMemberPath="X"
                    yMemberPath="Y"
                    colorMemberPath="Z"
                    showDefaultTooltip="true"/>
               </IgrDataChart>
            </div>
        </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;

        this.colorScale = new IgrCustomPaletteColorScale({});
        this.colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateHSV;
        this.colorScale.minimumValue = -2;
        this.colorScale.maximumValue = 2;
        this.colorScale.palette = [
            "#8670CB", "#513E8C", "#003F5E",
            "#0C6B99", "#4AC4FF", "#B5CC2E",
            "#FFD034", "#FC8612", "#ED4840"
        ];
        const series = this.chart.actualSeries[0] as IgrScatterAreaSeries;
        series.colorScale = this.colorScale;
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/type-scatter-area-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

