<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Linear Gauge Type Filled.
<!-- in the Linear Gauge component -->
<!-- [Linear Gauge](https://infragistics.com/Reactsite/components/linear-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-filled-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeFilled.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-filled-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeFilled.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-filled-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeFilled.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/LinearGaugeTypeFilled.tsx` file:

```tsx
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrLinearGaugeModule.register();

export default class LinearGaugeTypeFilled extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrLinearGauge) {
        this.renderGauge(component, 80, "green");
    }
    public onCreateGaugeOrange(component: IgrLinearGauge) {
        this.renderGauge(component, 50, "orange");
    }
    public onCreateGaugeRed(component: IgrLinearGauge) {
        this.renderGauge(component, 30, "red");
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLinearGauge
                    ref={this.onCreateGaugeGreen}
                    height="120px" width="100%" />
                <IgrLinearGauge
                    ref={this.onCreateGaugeOrange}
                    height="120px"
                    width="100%" />
                <IgrLinearGauge
                    ref={this.onCreateGaugeRed}
                    height="120px"
                    width="100%" />
            </div>
        );
    }

    public renderGauge(gauge: IgrLinearGauge, value: number, color: string) {

        if (!gauge) { return; }

        gauge.value = value;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = 10;
        gauge.transitionDuration = 500;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.1;
        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value + "%"
        };

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = false;
        gauge.needleBrush = "transparent";
        gauge.needleOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";
        gauge.scaleInnerExtent = 0.25;
        gauge.scaleOuterExtent = 0.65;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        // setting appearance of major ticks
        gauge.tickBrush = "gray";
        gauge.tickStartExtent = gauge.scaleInnerExtent;
        gauge.tickEndExtent   = gauge.scaleInnerExtent - 0.1;
        gauge.tickStrokeThickness = 1;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "transparent";

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting fill range
        const range = new IgrLinearGraphRange({});
        range.brush   = color;
        range.outline = color;
        range.startValue = 0;
        range.endValue = gauge.value;
        range.innerStartExtent = gauge.scaleInnerExtent;
        range.innerEndExtent   = gauge.scaleInnerExtent;
        range.outerStartExtent = gauge.scaleOuterExtent;
        range.outerEndExtent   = gauge.scaleOuterExtent;

        gauge.ranges.clear();
        gauge.ranges.add(range);
    }

}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/linear-gauge/type-filled-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

