<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Type Direction.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-direction?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeDirection.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-direction?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeDirection.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/type-radial-direction?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeTypeDirection.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/RadialGaugeTypeDirection.tsx` file:

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

export default class RadialGaugeTypeDirection extends React.Component<any, any> {

    public directions: any = {
        "0":   "N",
        "45":  "NE",
        "90":  "E",
        "135": "SE",
        "180": "S",
        "225": "SW",
        "270": "W",
        "315": "NW",
        "360": "N",
    }

    constructor(props: any) {
        super(props);

        this.onCreateDegreesGauge = this.onCreateDegreesGauge.bind(this);
        this.onCreateDirectionGauge = this.onCreateDirectionGauge.bind(this);

        this.state = { degrees: 30 }
    }

    public onCreateDegreesGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        this.renderGauge(gauge);

        gauge.interval      = 15;
        gauge.labelInterval = 15;
        gauge.needleBrush = "red";
        gauge.value = this.state.degrees;
        gauge.font = "11px Verdana,Arial";
        gauge.labelExtent  = gauge.scaleStartExtent - 0.1;
        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value < 360 ? e.value + "°" : "";
        };

        gauge.minorTickStartExtent = gauge.scaleStartExtent - 0.0125;
        gauge.minorTickEndExtent   = gauge.scaleStartExtent - 0.0125 - 0.0125;
        gauge.tickStartExtent = gauge.scaleStartExtent - 0.0125;
        gauge.tickEndExtent   = gauge.scaleStartExtent - 0.0125 - 0.03;
    }

    public onCreateDirectionGauge(gauge: IgrRadialGauge) {
        if (!gauge) { return; }

        this.renderGauge(gauge);

        gauge.interval      = 45;
        gauge.labelInterval = 45;
        gauge.needleBrush = "dodgerblue";
        gauge.value = (this.state.degrees + 180) % 360;
        // setting appearance of labels
        gauge.font = "15px Verdana,Arial";
        gauge.labelExtent  = gauge.scaleEndExtent + 0.05;
        gauge.formatLabel = (s: any, e : any) => {
            if (this.directions[e.value] !== undefined) {
                e.label = this.directions[e.value];
            } else {
                e.label = e.value;
            }
        };

        gauge.minorTickBrush = "transparent";
        gauge.tickBrush = "transparent";
    }

    public render() {
        return (
            <div className="igContainer-relative">
                <div className="igContainer-relative-overlay">
                    <IgrRadialGauge
                        ref={this.onCreateDegreesGauge}
                        height="100%"
                        width="100%"  />
                </div>
                <div className="igContainer-relative-overlay">
                    <IgrRadialGauge
                        ref={this.onCreateDirectionGauge}
                        height="100%"
                        width="100%"  />
                </div>
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.minimumValue = 0;
        gauge.maximumValue = 360;
        gauge.value = 270;
        gauge.interval      = 45;
        gauge.labelInterval = 45;
        gauge.transitionDuration = 500;

        // setting extent of gauge scale
        gauge.scaleStartAngle = -90;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = "#e0dfdf";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Circular;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.7;
        gauge.scaleStartExtent = 0.675;

        gauge.isNeedleDraggingConstrained = false;
        gauge.isNeedleDraggingEnabled = false;
        gauge.needlePivotShape = RadialGaugePivotShape.None;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needleBaseFeatureWidthRatio = 0.2;
        gauge.needleEndExtent = gauge.scaleStartExtent - 0.15;

        // setting appearance of major/minor ticks
        gauge.minorTickCount = (gauge.interval / 15) - 1;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = "#79797a";
        gauge.tickStrokeThickness = 1;
        gauge.tickBrush = "#79797a";

        // setting appearance of backing dial
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.backingShape = RadialGaugeBackingShape.Circular;

    }

}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/type-radial-direction
npm install
npm start

```

Then open http://localhost:3000/ in your browser

