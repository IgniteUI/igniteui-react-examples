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
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisAnnotations.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisAnnotations.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisAnnotations.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DataChartAxisAnnotations.tsx` file:

```tsx
import React from 'react';



import { IgrAnnotationLayerProxyModule } from 'igniteui-react-charts';
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartAnnotationModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrColumnFragmentModule } from 'igniteui-react-charts'
import { IgrValueOverlayModule } from 'igniteui-react-charts';
import { IgrFinalValueLayerModule } from 'igniteui-react-charts';
import { IgrCrosshairLayerModule } from 'igniteui-react-charts';

import { IgrColumnSeries } from 'igniteui-react-charts';
import { IgrCrosshairLayer } from 'igniteui-react-charts';
import { IgrFinalValueLayer } from 'igniteui-react-charts';
import { IgrValueOverlay } from 'igniteui-react-charts';
import { IgrSeries } from 'igniteui-react-charts';
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';



IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartAnnotationModule.register();
IgrDataChartInteractivityModule.register();
IgrAnnotationLayerProxyModule.register();
IgrColumnFragmentModule.register();
IgrCrosshairLayerModule.register();
IgrFinalValueLayerModule.register();
IgrValueOverlayModule.register();

export default class DataChartAxisAnnotations extends React.Component<any, any> {
    public data: any[];
    public chart: IgrDataChart;
    public targetSeries: IgrColumnSeries;
    public crosshairLayer: IgrCrosshairLayer;
    public finalValueLayer: IgrFinalValueLayer;
    public valueOverlay: IgrValueOverlay;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);

        this.onValueOverlayChange = this.onValueOverlayChange.bind(this);
        this.onCrosshairChange = this.onCrosshairChange.bind(this);
        this.onFinalValueChange = this.onFinalValueChange.bind(this);

        this.initData();

        this.state = { crosshairsVisible: true, finalValuesVisible: true, valueOverlayVisible: true };

        this.valueOverlay = new IgrValueOverlay({ name: "valueOverlay" });
        this.valueOverlay.thickness = 3;
        this.valueOverlay.value = 85;
        this.valueOverlay.brush = "Orange";
        this.valueOverlay.isAxisAnnotationEnabled = true;

        this.crosshairLayer = new IgrCrosshairLayer({ name: "crosshair" });
        this.crosshairLayer.isAxisAnnotationEnabled = true;
        this.crosshairLayer.yAxisAnnotationInterpolatedValuePrecision = 0;

        this.finalValueLayer = new IgrFinalValueLayer({ name: "finalValue" });
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Annotations: </span>
                    <label className="igOptions-item"><input type="checkbox" checked={this.state.finalValuesVisible}
                        onChange={this.onFinalValueChange} />Final Value</label>
                    <label className="igOptions-item"><input type="checkbox" checked={this.state.crosshairsVisible}
                        onChange={this.onCrosshairChange} />Crosshairs</label>
                    {/*<label className="igOptions-item"><input type="checkbox" checked={this.state.valueOverlayVisible}
                        onChange={this.onValueOverlayChange} />Value Overlay </label>*/}
                </div>
                <div className="igComponent" style={{ height: "calc(100% - 35px)" }} >
                    <IgrDataChart ref={this.onChartRef} dataSource={this.data} width="100%" height="100%" isHorizontalZoomEnabled={true} isVerticalZoomEnabled={true}>
                        <IgrCategoryXAxis name="xAxis" interval={1} formatLabel={this.formatDateLabel} />
                        <IgrNumericYAxis name="yAxis" interval={20} minimumValue={70} maximumValue={110}
                        labelLocation="OutsideRight" />
                        <IgrColumnSeries name="series" xAxisName="xAxis" yAxisName="yAxis"
                        valueMemberPath="temperature" />
                    </IgrDataChart>
                </div>
            </div>
        );
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;
        this.valueOverlay.axis = this.chart.actualAxes[1];
        this.toggleCrosshairs(this.state.crosshairsVisible);
        this.toggleFinalValues(this.state.valueOverlayVisible);
        this.toggleValueOverlay(this.state.finalValuesVisible);
    }

    public onFinalValueChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleFinalValues(isChecked);
    }

    public onValueOverlayChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleValueOverlay(isChecked);
    }

    public onCrosshairChange = (e: any) => {
        const isChecked: boolean = e.target.checked;
        this.toggleCrosshairs(isChecked);
    }

    public toggleCrosshairs(isChecked: boolean) {
        this.setState({ crosshairsVisible: isChecked });
        this.toggleSeries(this.crosshairLayer, isChecked);
    }

    public toggleFinalValues(isChecked: boolean) {
        this.setState({ finalValuesVisible: isChecked });
        this.toggleSeries(this.finalValueLayer, isChecked);
    }

    public toggleValueOverlay(isChecked: boolean) {
        this.valueOverlay.isAxisAnnotationEnabled = isChecked;
        this.setState({ valueOverlayVisible: isChecked });
        this.toggleSeries(this.valueOverlay, isChecked);
    }

    public toggleSeries(series: IgrSeries, isChecked: boolean) {
        if (isChecked) {
            this.chart.series.add(series);
        }
        else {
            this.chart.series.remove(series);
        }
    }

    public formatDateLabel(item: any): string {
        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        return months[item.date.getMonth()];
    }

    public initData() {
        const year: number = new Date().getFullYear();
        this.data = [
            { temperature: 74, date: new Date(year, 0, 1) },
            { temperature: 74, date: new Date(year, 1, 1) },
            { temperature: 76, date: new Date(year, 2, 1) },
            { temperature: 78, date: new Date(year, 3, 1) },
            { temperature: 83, date: new Date(year, 4, 1) },
            { temperature: 87, date: new Date(year, 5, 1) },
            { temperature: 94, date: new Date(year, 6, 1) },
            { temperature: 97, date: new Date(year, 7, 1) },
            { temperature: 93, date: new Date(year, 8, 1) },
            { temperature: 86, date: new Date(year, 9, 1) },
            { temperature: 81, date: new Date(year, 10, 1) },
            { temperature: 79, date: new Date(year, 11, 1) },
        ];
    }

}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/axis-annotations
npm install
npm start

# Open http://localhost:3000/ in your browser
```

