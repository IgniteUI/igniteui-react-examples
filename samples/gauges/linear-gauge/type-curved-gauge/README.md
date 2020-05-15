<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Linear Gauge Type Curve.
<!-- in the Linear Gauge component -->
<!-- [Linear Gauge](https://infragistics.com/Reactsite/components/linear-gauge.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-curved-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeCurve.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-curved-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeCurve.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/type-curved-gauge?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeTypeCurve.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/LinearGaugeTypeCurve.tsx` file:

```tsx
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

import * as React from 'react';


IgrLinearGaugeModule.register();

export default class LinearGaugeTypeCurve extends React.Component {

    constructor(props: any) {
        super(props);

        this.onGaugeCreated = this.onGaugeCreated.bind(this);
    }

    public onGaugeCreated(component: IgrLinearGauge) {
        this.renderGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLinearGauge
                    ref={this.onGaugeCreated}
                    height="120px"
                    width="100%"/>
            </div>
        );
    }

    public renderGauge(gauge: IgrLinearGauge) {
        this.setupGauge(gauge);

        gauge.labelExtent = 0.0;
        gauge.fontBrush = "black";
        gauge.needleInnerExtent = 0.6;
        gauge.needleBreadth = 20;

        // setting extent of gauge scale
        gauge.scaleInnerExtent = 0.1;
        gauge.scaleOuterExtent = 0.95;

        const colors = ['#009f00', '#16a316', '#23a724', '#2eab2f', '#36af39', '#3eb342', '#46b74a', '#4dbb52', '#54bf5a', '#5bc361', '#62c768', '#69cb6e', '#70cf74', '#77d37a', '#7fd77f', '#86db83', '#8edf87', '#97e38a', '#9fe78d', '#a8eb8e', '#b2ef8e', '#bcf28b', '#c7f686', '#d3f97d', '#e0fd6a', '#f5f732', '#f7ef37', '#f9e73b', '#fbdf3e', '#fcd741', '#fdcf44', '#fec746', '#ffbe48', '#ffb649', '#ffae4b', '#ffa64c', '#ff9d4c', '#ff944d', '#ff8b4d', '#ff824d', '#fe794d', '#fd6f4c', '#fc654b', '#fb5b4a', '#f95048', '#f74445', '#f53742', '#f2273e', '#ef1438', '#e9002c'];
        gauge.rangeBrushes  = colors;
        gauge.rangeOutlines = colors;
        const rangeSpan = gauge.maximumValue - gauge.minimumValue;
        const rangeValueInterval = rangeSpan / colors.length;
        const curveInterval = 180 / colors.length;

        // generating gauge ranges for each color
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];

            // calculating curve of range segments
            const start = 0.75 * Math.sin(i * curveInterval * Math.PI / 180);
            const end   = 0.75 * Math.sin((i + 1) * curveInterval * Math.PI / 180);

            const upperCurve = new IgrLinearGraphRange({});
            upperCurve.startValue = rangeValueInterval * i;
            upperCurve.endValue   = rangeValueInterval * (i + 1);
            upperCurve.brush = color;
            upperCurve.outline = color;
            // upperCurve.innerStartExtent = 0.6;
            // upperCurve.innerEndExtent   = 0.6;
            upperCurve.innerStartExtent = 0.1;
            upperCurve.innerEndExtent   = 0.1;
            upperCurve.outerStartExtent = 0.95 - start;
            upperCurve.outerEndExtent   = 0.95 - end;

            // const lowerCurve = new IgrLinearGraphRange({});
            // lowerCurve.startValue = rangeValueInterval * i;
            // lowerCurve.endValue   = rangeValueInterval * (i + 1);
            // lowerCurve.brush = color;
            // lowerCurve.outline = color;
            // lowerCurve.innerStartExtent = 0.1 + start;
            // lowerCurve.innerEndExtent   = 0.1 + end;
            // lowerCurve.outerStartExtent = 0.6;
            // lowerCurve.outerEndExtent   = 0.6;

            gauge.ranges.add(upperCurve);
            // gauge.ranges.add(lowerCurve);
        }
    }

    public setupGauge(gauge: IgrLinearGauge)  {

        gauge.ranges.clear();
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.value = 80;
        gauge.interval = 10;
        gauge.labelInterval = 10;
        gauge.transitionDuration = 500;

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.Triangle;
        gauge.needleBrush = "#494949";
        gauge.needleOutline = "#494949";
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = 0.7;
        gauge.needleBreadth = 15;

        // setting appearance of major/minor ticks
        gauge.tickBrush = "gray";
        gauge.tickStartExtent = 0.1;
        gauge.tickEndExtent = 0.0;
        gauge.tickStrokeThickness = 1;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "gray";
        gauge.minorTickStartExtent = 0.1;
        gauge.minorTickEndExtent = 0.05;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickCount = 9;

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";

    }


}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/linear-gauge/type-curved-gauge
npm install
npm start

```

Then open http://localhost:3000/ in your browser

