<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Bullet Graph Type Segmented.
<!-- in the Bullet Graph component -->
<!-- [Bullet Graph](https://infragistics.com/Reactsite/components/bullet-graph.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/bullet-graph/type-segmented-graph?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/BulletGraphTypeSegmented.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/bullet-graph/type-segmented-graph?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/BulletGraphTypeSegmented.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/bullet-graph/type-segmented-graph?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/BulletGraphTypeSegmented.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/BulletGraphTypeSegmented.tsx](./src/BulletGraphTypeSegmented.tsx) file.

<!-- The following section provides source code from:
`./src/BulletGraphTypeSegmented.tsx` file: -->

<!-- ```tsx
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';
import * as React from 'react';

IgrBulletGraphModule.register();

export default class BulletGraphTypeSegmented extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrBulletGraph) {
        this.renderGauge(component, 90, 80, "#10b401");
    }
    public onCreateGaugeOrange(component: IgrBulletGraph) {
        this.renderGauge(component, 70, 80, "#fdb417");
    }
    public onCreateGaugeRed(component: IgrBulletGraph) {
        this.renderGauge(component, 50, 80, "#ff0000");
    }

    public render() {
        return (
            <div className="igContainer"  >
                <IgrBulletGraph
                    ref={this.onCreateGaugeGreen}
                    height="120px"
                    width="100%"  />
                <IgrBulletGraph
                    ref={this.onCreateGaugeOrange}
                    height="120px"
                    width="100%" />
                <IgrBulletGraph
                    ref={this.onCreateGaugeRed}
                    height="120px"
                    width="100%"  />
            </div>
        );
    }

    public renderGauge(gauge: IgrBulletGraph, value: number, target: number, color: string) {

        if (!gauge) { return; }

        gauge.orientation = LinearScaleOrientation.Horizontal;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.transitionDuration = 500;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = (gauge.maximumValue - gauge.minimumValue) / 10;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.15;
        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value + "%"
        };

        gauge.scaleBackgroundBrush   = "transparent";
        gauge.scaleBackgroundOutline = "transparent";
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent   = 0.96;

        gauge.value = value;
        gauge.valueBrush = "transparent";
        gauge.valueOutline = "transparent";
        gauge.valueInnerExtent = 0.3;
        gauge.valueOuterExtent = 0.85;

        gauge.targetValue = target;
        gauge.targetValueInnerExtent = gauge.valueInnerExtent - 0.1;
        gauge.targetValueOuterExtent = gauge.valueOuterExtent + 0.1;

        gauge.ranges.clear();
        const rangeBG = new IgrLinearGraphRange({});
        rangeBG.startValue = gauge.minimumValue;
        rangeBG.endValue   = gauge.maximumValue;
        rangeBG.brush   = "#e0dfdf";
        rangeBG.outline = "#e0dfdf";
        rangeBG.innerStartExtent  = gauge.valueInnerExtent;
        rangeBG.innerEndExtent    = gauge.valueInnerExtent;
        rangeBG.outerStartExtent  = gauge.valueOuterExtent;
        rangeBG.outerEndExtent    = gauge.valueOuterExtent;
        gauge.ranges.add(rangeBG);

        const rangeVal = new IgrLinearGraphRange({});
        rangeVal.startValue = gauge.minimumValue;
        rangeVal.endValue   = gauge.value;
        rangeVal.brush   = color;
        rangeVal.outline = color;
        rangeVal.innerStartExtent  = gauge.valueInnerExtent;
        rangeVal.innerEndExtent    = gauge.valueInnerExtent;
        rangeVal.outerStartExtent  = gauge.valueOuterExtent;
        rangeVal.outerEndExtent    = gauge.valueOuterExtent;
        gauge.ranges.add(rangeVal);

        // using major ticks as segment bounds
        gauge.tickBrush = "white";
        gauge.tickStrokeThickness = 2;
        gauge.tickStartExtent = gauge.valueInnerExtent;
        gauge.tickEndExtent   = gauge.valueOuterExtent;

        // using minor ticks as segment bounds
        gauge.minorTickBrush = "white";
        gauge.minorTickStrokeThickness = 2;
        gauge.minorTickStartExtent = gauge.valueInnerExtent;
        gauge.minorTickEndExtent   = gauge.valueOuterExtent;
        gauge.minorTickCount = (gauge.interval / 2) - 1;
    }

}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/bullet-graph/type-segmented-graph
npm install
npm start

```

Then open http://localhost:3000/ in your browser

