<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Type Full.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-full-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeFull.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-full-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeFull.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-full-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeFull.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/RadialGaugeTypeFull.tsx` file:

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

export default class RadialGaugeTypeFull extends React.Component {

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

        if (!gauge) { return; }

        gauge.minimumValue = 0;
        gauge.maximumValue = 50;
        gauge.value = 25;
        gauge.interval = 5;

        // setting appearance of labels
        gauge.labelInterval = 5;
        gauge.labelExtent = 0.71;
        gauge.font = "15px Verdana,Arial";

        // setting custom needle
        gauge.isNeedleDraggingEnabled = true;
        gauge.needleEndExtent = 0.5;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needleEndWidthRatio = 0.03;
        gauge.needleStartWidthRatio = 0.05;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needlePivotWidthRatio = 0.15;
        gauge.needleBaseFeatureWidthRatio = 0.15;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#79797a";
        gauge.needlePivotBrush = "#79797a";
        gauge.needlePivotOutline = "#79797a";

        // setting appearance of major/minor ticks
        gauge.minorTickCount = 4;
        gauge.minorTickEndExtent = 0.625;
        gauge.minorTickStartExtent = 0.6;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = "#79797a";
        gauge.tickStartExtent = 0.6;
        gauge.tickEndExtent = 0.65;
        gauge.tickStrokeThickness = 2;
        gauge.tickBrush = "#79797a";

        // setting extent of gauge scale
        gauge.scaleStartAngle = 120;
        gauge.scaleEndAngle = 60;
        gauge.scaleBrush = "#d6d6d6";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.57;
        gauge.scaleStartExtent = 0.5;

        // setting appearance of backing dial
        gauge.backingBrush = "#fcfcfc";
        gauge.backingOutline = "#d6d6d6";
        gauge.backingStrokeThickness = 5;
        gauge.backingShape = RadialGaugeBackingShape.Circular;

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 5;
        range1.endValue = 15;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 15;
        range2.endValue = 35;
        const range3 = new IgrRadialGaugeRange({});
        range3.startValue = 35;
        range3.endValue = 45;
        gauge.rangeBrushes  = [ "#F86232", "#DC3F76", "#7446B9"];
        gauge.rangeOutlines = [ "#F86232", "#DC3F76", "#7446B9"];
        gauge.ranges.clear();
        gauge.ranges.add(range1);
        gauge.ranges.add(range2);
        gauge.ranges.add(range3);
        // setting extent of all gauge ranges
        for (let i = 0; i < gauge.ranges.count; i++) {
            const range = gauge.ranges.item(i);
            range.innerStartExtent = 0.5;
            range.innerEndExtent = 0.5;
            range.outerStartExtent = 0.57;
            range.outerEndExtent = 0.57;
        }
    }

}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/type-full-radial-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

