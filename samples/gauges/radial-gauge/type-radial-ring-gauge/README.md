<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Type Ring.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-ring-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeRing.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-ring-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeRing.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-ring-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeRing.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/RadialGaugeTypeRing.tsx` file:

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

export default class RadialGaugeTypeRing extends React.Component {

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
                {/* <div className="igOverlay-center"  >
                     <label style={{color: "#10b401", display: "block"}}>90</label>
                     <label style={{color: "#fdb417", display: "block"}}>80</label>
                     <label style={{color: "#ff0000", display: "block"}}>60</label>
                </div> */}
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.minimumValue = 0;
        gauge.maximumValue = 120;
        gauge.interval = 10;
        gauge.transitionDuration = 500;

        // setting appearance of labels
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.85;
        gauge.font = "15px Verdana,Arial";

        gauge.needleShape = RadialGaugeNeedleShape.None;
        gauge.needlePivotShape = RadialGaugePivotShape.None;

        // setting extent of gauge scale
        gauge.scaleStartAngle = 0;
        gauge.scaleEndAngle = 360;
        // gauge.scaleBrush = "#e0dfdf";
        gauge.scaleBrush = "transparent";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Circular;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.725;
        gauge.scaleStartExtent = 0.6;

        // setting appearance of major/minor ticks
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleEndExtent + 0.0;
        gauge.minorTickEndExtent   = gauge.scaleEndExtent + 0.0125;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = "transparent";
        gauge.tickStartExtent = gauge.scaleEndExtent + 0.0;
        gauge.tickEndExtent   = gauge.scaleEndExtent + 0.025;
        gauge.tickStrokeThickness = 1;
        gauge.tickBrush = "#79797a";

        // setting appearance of backing dial
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.backingShape = RadialGaugeBackingShape.Circular;

        // adding rings using multiple gauge ranges
        this.addRing(gauge, 90, gauge.scaleEndExtent - 0.0, "#10b401");
        this.addRing(gauge, 80, gauge.scaleEndExtent - 0.1, "#fdb417");
        this.addRing(gauge, 60, gauge.scaleEndExtent - 0.2, "#ff0000");


    }

    public addRing(gauge: IgrRadialGauge, value: number, extent: number, color: string) {

        const rangeBG = new IgrRadialGaugeRange({});
        rangeBG.startValue = gauge.minimumValue;
        rangeBG.endValue = gauge.maximumValue;
        rangeBG.brush   = "#e0dfdf";
        rangeBG.outline = "#e0dfdf";
        rangeBG.innerStartExtent = extent - 0.09;
        rangeBG.innerEndExtent   = extent - 0.09;
        rangeBG.outerStartExtent = extent;
        rangeBG.outerEndExtent   = extent;
        gauge.ranges.add(rangeBG);

        const rangeVal = new IgrRadialGaugeRange({});
        rangeVal.startValue = gauge.minimumValue;
        rangeVal.endValue = value;
        rangeVal.brush   = color;
        rangeVal.outline = color;
        rangeVal.innerStartExtent = extent - 0.09;
        rangeVal.innerEndExtent   = extent - 0.09;
        rangeVal.outerStartExtent = extent;
        rangeVal.outerEndExtent   = extent;
        gauge.ranges.add(rangeVal);
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/type-radial-ring-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

