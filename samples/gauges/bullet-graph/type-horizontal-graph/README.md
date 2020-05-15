<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Bullet Graph component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Bullet Graph](https://infragistics.com/Reactsite/components/bullet-graph.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/bullet-graph/type-horizontal-graph?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/BulletGraphTypeHorizontal.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/bullet-graph/type-horizontal-graph?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/BulletGraphTypeHorizontal.tsx">
            <img height="40px" style="border-radius: 0.3rem" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/bullet-graph/type-horizontal-graph?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/BulletGraphTypeHorizontal.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/BulletGraphTypeHorizontal.tsx` file:

```tsx
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';

import * as React from 'react';


IgrBulletGraphModule.register();

export default class BulletGraphTypeHorizontal extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrBulletGraph) {
        this.renderGauge(component, 90, 80, ["#008000", "#10b401", "#45ec03", "#97f397"]);
    }
    public onCreateGaugeOrange(component: IgrBulletGraph) {
        this.renderGauge(component, 70, 80, ["#e29b03", "#fdb417", "#fdc957", "#f7d58b"]);
    }
    public onCreateGaugeRed(component: IgrBulletGraph) {
        this.renderGauge(component, 40, 80, ["#cf0000", "#ff0000", "#fd3939", "#f88989"]);
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

    public renderGauge(gauge: IgrBulletGraph, value: number, target: number, colors: string[]) {

        gauge.orientation = LinearScaleOrientation.Horizontal;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.transitionDuration = 500;
        gauge.minorTickCount = 4;
        gauge.value = value;
        gauge.targetValue = target;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = (gauge.maximumValue - gauge.minimumValue) / 20;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.0;

        gauge.rangeBrushes = colors;
        gauge.rangeOutlines = colors;
        const rangeSpan = gauge.maximumValue - gauge.minimumValue;
        const rangeValueInterval = rangeSpan / colors.length;

        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const range = new IgrLinearGraphRange({});
            range.startValue = rangeValueInterval * i;
            range.endValue   = rangeValueInterval * (i + 1);
            range.brush = color;
            range.outline = color;
            range.innerStartExtent  = 0.2;
            range.innerEndExtent    = 0.2;
            range.outerStartExtent  = 0.95;
            range.outerEndExtent    = 0.95;
            gauge.ranges.add(range);
        }
    }

}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/bullet-graph/type-horizontal-graph
npm install
npm start

# Open http://localhost:3000/ in your browser
```

