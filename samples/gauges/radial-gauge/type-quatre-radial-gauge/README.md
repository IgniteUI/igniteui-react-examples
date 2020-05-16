<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Type Quatre.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-quatre-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeQuatre.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-quatre-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeQuatre.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-quatre-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeQuatre.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/RadialGaugeTypeQuatre.tsx` file:

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

export default class RadialGaugeTypeQuatre extends React.Component {

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
    }

    public onGaugeRef(component: IgrRadialGauge) {
        this.renderGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">

                <IgrRadialGauge
                    ref={this.onGaugeRef}
                    height="100%"
                    width="100%"   />
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        gauge.transitionDuration = 500;

        gauge.minimumValue = 0;
        gauge.maximumValue = 10;
        gauge.value = 7.5;

        // Scale Settings
        gauge.scaleStartAngle = 180;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = "transparent";
        gauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        gauge.backingOutline = "white";
        gauge.backingBrush = "white";
        gauge.backingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        gauge.needleEndExtent = 0.8;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needlePivotWidthRatio = 0.1;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#79797a";
        gauge.needlePivotBrush = "#79797a";
        gauge.needlePivotOutline = "#79797a";

        // TickMark Settings
        gauge.tickBrush = "transparent";
        gauge.minorTickBrush = "transparent";

        // Label Settings
        gauge.labelInterval = 5;
        gauge.labelExtent = 0.935;
        gauge.font = "15px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 0;
        range1.endValue = 5;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 5;
        range2.endValue = 10;

        gauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        gauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        gauge.ranges.clear();
        gauge.ranges.add(range1);
        gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < gauge.ranges.count; i++) {
            const range = gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }
    }

}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/type-quatre-radial-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

