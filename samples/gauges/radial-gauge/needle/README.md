<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Radial Gauge Needle.
<!-- in the Radial Gauge component -->
<!-- [Radial Gauge](https://infragistics.com/Reactsite/components/radial-gauge.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/needle?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeNeedle.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/needle?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeNeedle.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/radial-gauge/needle?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/RadialGaugeNeedle.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/RadialGaugeNeedle.tsx](./src/RadialGaugeNeedle.tsx) file.

<!-- The following section provides source code from:
`./src/RadialGaugeNeedle.tsx` file: -->

<!-- ```tsx
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrRadialGaugeModule.register();

export default class RadialGaugeNeedle extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render() {
        return (
            <div className="igContainer">
            <IgrRadialGauge
                height="100%"
                width="100%"
                isNeedleDraggingEnabled={true}
                isNeedleDraggingConstrained={true}
                needleShape="NeedleWithBulb"
                needleBrush="DodgerBlue"
                needleOutline="DodgerBlue"
                needleEndExtent={0.475}
                needleStrokeThickness={1}

                needlePivotShape="CircleOverlay"
                needlePivotBrush="#9f9fa0"
                needlePivotOutline="#9f9fa0"
                needlePivotWidthRatio={0.2}
                needlePivotStrokeThickness={1}

                value={50}
                minimumValue={0}
                maximumValue={80}
                interval={10} />
            </div>
        );
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/radial-gauge/needle
npm install
npm start

```

Then open http://localhost:3000/ in your browser

