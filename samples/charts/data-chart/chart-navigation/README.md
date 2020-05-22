<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Navigation.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-navigation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartNavigation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-navigation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartNavigation.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/chart-navigation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartNavigation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartNavigation.tsx` file:

```tsx
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
// scatter series' modules:
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrNumberAbbreviatorModule } from 'igniteui-react-charts';
// data chart's elements:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrBubbleSeries } from 'igniteui-react-charts';
import { IgrSizeScale } from 'igniteui-react-charts';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import * as React from 'react';
import { SampleScatterStats } from './SampleScatterStats';

IgrDataChartCoreModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrDataChartInteractivityModule.register();
IgrNumberAbbreviatorModule.register();

export default class DataChartNavigation extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;

    constructor(props: any) {
        super(props);

        this.state = {
            defaultInteraction: "DragZoom",
            dragModifier: "Alt",
            isZoomEnabled: true,
            panModifier: "Control" };

        this.onChartRef = this.onChartRef.bind(this);

        this.onDefaultInteractionChange = this.onDefaultInteractionChange.bind(this);
        this.onPanModifierChange = this.onPanModifierChange.bind(this);
        this.onDragModifierChange = this.onDragModifierChange.bind(this);

        this.onZoomEnabledChange = this.onZoomEnabledChange.bind(this);

        this.onPanDownClick = this.onPanDownClick.bind(this);
        this.onPanLeftClick = this.onPanLeftClick.bind(this);
        this.onPanRightClick = this.onPanRightClick.bind(this);
        this.onPanUpClick = this.onPanUpClick.bind(this);
        this.onZoomInClick = this.onZoomInClick.bind(this);
        this.onZoomOutClick = this.onZoomOutClick.bind(this);

        this.data = SampleScatterStats.getCountriesWithHighIncome();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <button className="igOptions-item" style={{width: "80px"}} onClick={this.onPanUpClick}>Pan Up</button>
                    <button className="igOptions-item" style={{width: "80px"}} onClick={this.onPanLeftClick}>Pan Left</button>
                    <button className="igOptions-item" style={{width: "80px"}} onClick={this.onZoomInClick}>Zoom In</button>
                    <span className="igOptions-item" style={{width: "85px"}}>Pan Modifier:</span>
                    <select value={this.state.panModifier} style={{width: "85px"}} onChange={this.onPanModifierChange}>
                        <option>Alt</option>
                        <option>Control</option>
                        <option>Shift</option>
                        <option>Windows</option>
                        <option>Apple</option>
                        <option>None</option>
                    </select>
                    <span className="igOptions-item">Default Drag Option:</span>
                    <select value={this.state.defaultInteraction} onChange={this.onDefaultInteractionChange}>
                        <option>DragZoom</option>
                        <option>DragPan</option>
                        <option>None</option>
                    </select>
                </div>
                <div className="igOptions" style={{marginBottom: "15px"}}>
                    <button className="igOptions-item" style={{width: "80px"}} onClick={this.onPanDownClick}>Pan Down</button>
                    <button className="igOptions-item" style={{width: "80px"}} onClick={this.onPanRightClick}>Pan Right</button>
                    <button className="igOptions-item" style={{width: "80px"}} onClick={this.onZoomOutClick}>Zoom Out</button>
                    <span className="igOptions-item" style={{width: "85px"}}>Zoom Modifier:</span>
                    <select value={this.state.dragModifier} style={{width: "85px"}} onChange={this.onDragModifierChange}>
                        <option>Alt</option>
                        <option>Control</option>
                        <option>Shift</option>
                        <option>Windows</option>
                        <option>Apple</option>
                        <option>None</option>
                    </select>
                    <label className="igOptions-item"><input type="checkbox"
                        checked={this.state.isZoomEnabled}
                        onChange={this.onZoomEnabledChange} /> Enable Zooming</label>
                </div>
                <div className="igComponent" style={{height: "calc(100% - 75px)"}} >
                    <IgrDataChart
                        ref={this.onChartRef}
                        defaultInteraction={this.state.defaultInteraction}
                        dragModifier={this.state.dragModifier}
                        panModifier={this.state.panModifier}
                        isHorizontalZoomEnabled={this.state.isZoomEnabled}
                        isVerticalZoomEnabled={this.state.isZoomEnabled}
                        width="100%"
                        height="100%" >
                        {/* axes: */}
                        <IgrNumericXAxis name="xAxis"
                        isLogarithmic={true}
                        abbreviateLargeNumbers={true}
                        title="Population" />
                        <IgrNumericYAxis name="yAxis"
                        isLogarithmic={true}
                        abbreviateLargeNumbers={true}
                        title="Total GDP ($)" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.createSeries();
        this.chart.actualWindowScaleHorizontal = 0.60;
        this.chart.actualWindowScaleVertical = 0.60;
        this.chart.actualWindowPositionVertical = 0.20;
        this.chart.actualWindowPositionHorizontal = 0.20;
    }

    public onDefaultInteractionChange = (e: any) => {
        this.setState({ defaultInteraction: e.target.value });
    }

    public onPanModifierChange = (e: any) => {
        this.setState({ panModifier: e.target.value });
    }

    public onDragModifierChange = (e: any) => {
        this.setState({ dragModifier: e.target.value });
    }

    public onZoomEnabledChange = (e: any) => {
        this.setState({ isZoomEnabled: e.target.checked });
    }

    public onPanUpClick = (e: any) => {
        this.chart.actualWindowPositionVertical -= 0.05;
    }

    public onPanDownClick = (e: any) => {
        this.chart.actualWindowPositionVertical += 0.05;
    }

    public onPanLeftClick = (e: any) => {
        this.chart.actualWindowPositionHorizontal -= 0.05;
    }

    public onPanRightClick = (e: any) => {
        this.chart.actualWindowPositionHorizontal += 0.05;
    }

    public onZoomOutClick = (e: any) => {
        if (this.chart.actualWindowPositionHorizontal > 0.025) {
            this.chart.actualWindowPositionHorizontal -= 0.025;
        }
        if (this.chart.actualWindowPositionVertical > 0.025) {
            this.chart.actualWindowPositionVertical -= 0.025;
        }

        if (this.chart.actualWindowScaleHorizontal < 1.0) {
            this.chart.actualWindowScaleHorizontal += 0.05;
        }
        if (this.chart.actualWindowScaleVertical < 1.0) {
            this.chart.actualWindowScaleVertical += 0.05;
        }
    }

    public onZoomInClick = (e: any) => {
        if (this.chart.actualWindowPositionHorizontal < 1.0) {
            this.chart.actualWindowPositionHorizontal += 0.025;
        }
        if (this.chart.actualWindowPositionVertical < 1.0) {
            this.chart.actualWindowPositionVertical += 0.025;
        }

        if (this.chart.actualWindowScaleHorizontal > 0.05) {
            this.chart.actualWindowScaleHorizontal -= 0.05;
        }
        if (this.chart.actualWindowScaleVertical > 0.05) {
            this.chart.actualWindowScaleVertical -= 0.05;
        }

    }

    public createSeries()
    {
        const sizeScale = new IgrSizeScale({});
        sizeScale.minimumValue = 10;
        sizeScale.maximumValue = 60;

        const brushScale1 = new IgrValueBrushScale({});
        brushScale1.brushes = ["#FFFFFF", "#b56ffc"];
        brushScale1.minimumValue = 10;
        brushScale1.maximumValue = 60;

        const series = new IgrBubbleSeries({ name: "series" });
        series.title = "Countries";
        series.dataSource = SampleScatterStats.getCountries();
        series.showDefaultTooltip = true;
        series.xMemberPath = "Population";
        series.yMemberPath = "GdpTotal";
        series.radiusMemberPath = "GdpPerCapita";
        series.radiusScale = sizeScale;
        // series.fillMemberPath = "GdpPerCapita";
        // series.fillScale = brushScale1;
        series.xAxisName = "xAxis";
        series.yAxisName = "yAxis";

        this.chart.series.clear();
        this.chart.series.add(series);
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/chart-navigation
npm install
npm start

```

Then open http://localhost:3000/ in your browser

