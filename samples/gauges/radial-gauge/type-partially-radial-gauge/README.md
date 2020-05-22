<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Type Semi.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-partially-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeSemi.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-partially-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeSemi.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-partially-radial-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeSemi.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/RadialGaugeTypeSemi.tsx` file:

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

export default class RadialGaugeTypeSemi extends React.Component {

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
                    width="100%"  />
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.transitionDuration = 500;

        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 10;
        gauge.interval = 10;

        // Label Settings
        gauge.labelExtent = 0.6;
        gauge.labelInterval = 10;
        gauge.font = "15px Verdana,Arial";

        // Scale Settings
        gauge.scaleStartAngle = 135;
        gauge.scaleEndAngle = 45;
        gauge.scaleBrush = "#0b8fed";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.825;
        gauge.scaleStartExtent = 0.775;

        // Backing Settings
        gauge.backingShape = RadialGaugeBackingShape.Fitted;
        gauge.backingBrush = "#fcfcfc";
        gauge.backingOutline = "#d6d6d6";
        gauge.backingOversweep = 5;
        gauge.backingCornerRadius = 10;
        gauge.backingOuterExtent = 0.9;
        gauge.backingStrokeThickness = 4;

        // Needle Settings
        gauge.needleShape = RadialGaugeNeedleShape.Needle;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needleEndExtent = 0.5;
        gauge.needlePointFeatureExtent = 0.2;
        gauge.needlePivotWidthRatio = 0.1;
        gauge.needleBrush = "#9f9fa0";
        gauge.needleOutline = "#9f9fa0";
        gauge.needlePivotBrush = "#9f9fa0";
        gauge.needlePivotOutline = "#9f9fa0";

        // TickMark Settings
        gauge.tickBrush = "rgba(51, 51, 51, 1)";
        gauge.tickStartExtent = gauge.scaleStartExtent - 0.10;
        gauge.tickEndExtent   = gauge.scaleStartExtent - 0.025;
        gauge.tickStrokeThickness = 1;

        gauge.minorTickBrush = "rgba(73, 73, 73, 1)";
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleStartExtent - 0.05;
        gauge.minorTickEndExtent   = gauge.scaleStartExtent - 0.025;
        gauge.minorTickStrokeThickness = 1;

        gauge.ranges.clear();
    }

}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/type-partially-radial-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

