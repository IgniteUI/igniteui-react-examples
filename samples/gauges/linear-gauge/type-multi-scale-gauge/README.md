<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Linear Gauge Type Multi Scale.
<!-- in the Linear Gauge component -->
<!-- [Linear Gauge](https://infragistics.com/Reactsite/components/linear-gauge.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-multi-scale-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeMultiScale.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-multi-scale-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeMultiScale.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-multi-scale-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeMultiScale.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/LinearGaugeTypeMultiScale.tsx](./src/LinearGaugeTypeMultiScale.tsx) file.

<!-- The following section provides source code from:
`./src/LinearGaugeTypeMultiScale.tsx` file: -->

<!-- ```tsx
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
// import { IgrFormatLinearGraphLabelEventArgs } from 'igniteui-react-gauges';
import * as React from 'react';

IgrLinearGaugeModule.register();

export default class LinearGaugeTypeMultiScale extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateCelsiusGauge = this.onCreateCelsiusGauge.bind(this);
        this.onCreateFahrenheitGauge = this.onCreateFahrenheitGauge.bind(this);
    }

    public onCreateCelsiusGauge(component: IgrLinearGauge) {
        this.renderCelsiusGauge(component);
    }

    public onCreateFahrenheitGauge(component: IgrLinearGauge) {
        this.renderFahrenheitGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLinearGauge
                    ref={this.onCreateFahrenheitGauge}
                    width="100%"
                    height="100px"/>
                <IgrLinearGauge
                    ref={this.onCreateCelsiusGauge}
                    width="100%"
                    height="100px"/>
            </div>
        );
    }

    public covertToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + 32;
    }

    public renderCelsiusGauge(gauge: IgrLinearGauge) {

        if (!gauge) { return; }

        this.setupGauge(gauge);

        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value + " °C"
        };
    }

    public renderFahrenheitGauge(gauge: IgrLinearGauge) {

        if (!gauge) { return; }

        this.setupGauge(gauge);
        gauge.ranges.clear();
        gauge.scaleBrush   = "transparent";
        gauge.scaleOutline = "transparent";
        gauge.labelExtent = 0.15;
        gauge.tickStartExtent = -0.2;
        gauge.tickEndExtent = 0.0;
        gauge.minorTickStartExtent = -0.2;
        gauge.minorTickEndExtent = -0.1;

        gauge.formatLabel = (s: any, e : any) => {
            e.label = this.covertToFahrenheit(e.value) + " °F"
        };
    }

    public setupGauge(gauge: IgrLinearGauge)  {

        gauge.minimumValue = -40;
        gauge.maximumValue = 100;
        gauge.value = 20;
        gauge.interval = 10;
        gauge.labelInterval = 10;
        gauge.labelExtent = 0.1;
        gauge.transitionDuration = 500;

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = false;
        gauge.needleBrush = "transparent";
        gauge.needleOutline = "transparent";

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";
        gauge.scaleInnerExtent = 0.35;
        gauge.scaleOuterExtent = 1.0;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "gray";
        gauge.minorTickStartExtent = gauge.scaleInnerExtent - 0.1;
        gauge.minorTickEndExtent   = gauge.scaleInnerExtent - 0.0;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickCount = 4;
        gauge.minorTickBrush = "gray";

        // setting segments major ticks
        // gauge.tickStartExtent = 0.25;
        // gauge.tickEndExtent = 0.15;
        gauge.tickStartExtent = gauge.scaleInnerExtent - 0.2;
        gauge.tickEndExtent   = gauge.scaleInnerExtent - 0;
        gauge.tickStrokeThickness = 1;
        gauge.tickBrush = "gray";

        const rangeExtentSpan = gauge.scaleOuterExtent - gauge.scaleInnerExtent;
        const rangeExtentInterval = rangeExtentSpan / 2;

        gauge.ranges.clear();
        // setting fill range
        const range1 = new IgrLinearGraphRange({});
        range1.brush   = "linear-gradient(#ff0000, #c70101)";
        range1.outline = "transparent";
        range1.startValue = gauge.minimumValue;
        range1.endValue   = gauge.value;
        range1.innerStartExtent = gauge.scaleInnerExtent;
        range1.innerEndExtent   = gauge.scaleInnerExtent;
        range1.outerStartExtent = gauge.scaleInnerExtent + rangeExtentInterval;
        range1.outerEndExtent   = gauge.scaleInnerExtent + rangeExtentInterval;
        gauge.ranges.add(range1);

        const range2 = new IgrLinearGraphRange({});
        range2.brush   = "linear-gradient(#fa8f8f, #fa5151)";
        range2.outline = "transparent";
        range2.startValue = gauge.minimumValue;
        range2.endValue   = gauge.value;
        range2.innerStartExtent = gauge.scaleInnerExtent + rangeExtentInterval;
        range2.innerEndExtent   = gauge.scaleInnerExtent + rangeExtentInterval;
        range2.outerStartExtent = gauge.scaleOuterExtent;
        range2.outerEndExtent   = gauge.scaleOuterExtent;
        gauge.ranges.add(range2);

    }

}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/linear-gauge/type-multi-scale-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

