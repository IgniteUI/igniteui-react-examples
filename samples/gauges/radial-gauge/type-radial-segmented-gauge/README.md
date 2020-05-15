<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Type Segmented.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-segmented-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeSegmented.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-segmented-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeSegmented.tsx">
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

<iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-segmented-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeSegmented.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/RadialGaugeTypeSegmented.tsx` file:

```tsx

import { SweepDirection } from 'igniteui-react-core';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { RadialGaugeBackingShape } from 'igniteui-react-gauges';
import { RadialGaugeNeedleShape } from 'igniteui-react-gauges';
import { RadialGaugePivotShape } from 'igniteui-react-gauges';
import { RadialGaugeScaleOversweepShape } from 'igniteui-react-gauges';

import * as React from 'react';


IgrRadialGaugeModule.register();

export default class RadialGaugeTypeSegmented extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGauge = this.onCreateGauge.bind(this);
    }

    public onCreateGauge(component: IgrRadialGauge) {
        this.renderGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <IgrRadialGauge
                        ref={this.onCreateGauge}
                        height="100%"
                        width="100%"  />
                </div>
                <div className="igOverlay-center">
                    <label className="igOverlay-center-label" style={{color: "#1e90ff"}}>80</label>
                </div>
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.value = 80;
        gauge.interval = 10;
        gauge.transitionDuration = 500;

        // setting appearance of labels
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.8;
        gauge.font = "15px Verdana,Arial";
        gauge.formatLabel = (s: any, e : any) => {
            if (e.value > 0) {
                e.label = e.value + "%"
            } else {
                e.label = "";
            }
        };

        gauge.needleShape = RadialGaugeNeedleShape.None;
        gauge.needlePivotShape = RadialGaugePivotShape.None;

        // setting extent of gauge scale
        gauge.scaleStartAngle = -90;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = "#e0dfdf";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Circular;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent   = 0.7;
        gauge.scaleStartExtent = 0.6;

        // setting appearance of major/minor ticks
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleStartExtent;
        gauge.minorTickEndExtent   = gauge.scaleEndExtent;
        gauge.minorTickStrokeThickness = 2;
        gauge.minorTickBrush = "white";
        gauge.tickStartExtent = gauge.scaleStartExtent;
        gauge.tickEndExtent   = gauge.scaleEndExtent;
        gauge.tickStrokeThickness = 2;
        gauge.tickBrush = "white";

        // setting appearance of backing dial
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.backingShape = RadialGaugeBackingShape.Circular;

        // setting custom gauge ranges
        const range = new IgrRadialGaugeRange({});
        range.startValue = 0;
        range.endValue = gauge.value;
        range.brush   = "#1e90ff";
        range.outline = "#1e90ff";
        range.innerStartExtent = gauge.scaleStartExtent;
        range.innerEndExtent   = gauge.scaleStartExtent;
        range.outerStartExtent = gauge.scaleEndExtent;
        range.outerEndExtent   = gauge.scaleEndExtent;

        gauge.ranges.add(range);

    }

}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/type-radial-segmented-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

