<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Linear Gauge Animation.
<!-- in the Linear Gauge component -->
<!-- [Linear Gauge](https://infragistics.com/Reactsite/components/linear-gauge.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeAnimation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeAnimation.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/gauges/linear-gauge/animation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/LinearGaugeAnimation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/LinearGaugeAnimation.tsx](./src/LinearGaugeAnimation.tsx) file.

<!-- The following section provides source code from:
`./src/LinearGaugeAnimation.tsx` file: -->

<!-- ```tsx
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrLinearGaugeModule.register();

export default class LinearGaugeAnimation extends React.Component {
    public gauge: IgrLinearGauge;

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
        this.onAnimateToGauge1 = this.onAnimateToGauge1.bind(this);
        this.onAnimateToGauge2 = this.onAnimateToGauge2.bind(this);
        this.onAnimateToGauge3 = this.onAnimateToGauge3.bind(this);
    }

    public onGaugeRef(component: IgrLinearGauge) {
        this.gauge = component;
        this.onAnimateToGauge3(null);
    }

    public render() {
        return (
            <div className="igContainer">

                <div className="igOptions">
                    <button onClick={this.onAnimateToGauge1} className="igOptions-button">Gauge Animation #1</button>
                    <button onClick={this.onAnimateToGauge2} className="igOptions-button">Gauge Animation #2</button>
                    <button onClick={this.onAnimateToGauge3} className="igOptions-button">Gauge Animation #3</button>
                </div>

                <IgrLinearGauge
                    ref={this.onGaugeRef}
                    transitionDuration={1000}
                    height="80px"
                    width="100%"
                    minimumValue={0}
                    maximumValue={100}
                    value={50}
                    interval={10}
                    labelInterval={10}
                    labelExtent={0.0}

                    minorTickEndExtent={0.10}
                    minorTickStartExtent={0.20}
                    tickStartExtent={0.25}
                    tickEndExtent={0.05}
                    tickStrokeThickness={2}

                    needleShape="Needle"
                    needleBrush="#79797a"
                    needleOutline="#79797a"
                    scaleStrokeThickness={0}
                    scaleBrush="#ffffff"
                    scaleOutline="#d3d3d3"
                    backingBrush="#ffffff"
                    backingOutline="#d1d1d1"
                    backingStrokeThickness={0} />
            </div>
        );
    }

    public onAnimateToGauge1 = (e: any) => {
        if (!this.gauge) { return; }

        // linear gauge requires settings for these properties:
        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 80;
        this.gauge.value = 60;
        this.gauge.interval = 20;

        // setting custom appearance of labels
        this.gauge.labelInterval = 20;
        this.gauge.labelExtent = 0.0;

        // setting custom appearance of needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleShape = LinearGraphNeedleShape.Trapezoid;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#ffffffff";
        this.gauge.needleStrokeThickness = 1;
        this.gauge.needleOuterExtent = 0.9;
        this.gauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.gauge.minorTickCount = 5;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.tickStartExtent = 0.25;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 0;
        range1.endValue = 40;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 40;
        range2.endValue = 80;

        this.gauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.gauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.gauge.scaleStrokeThickness = 0;
        this.gauge.scaleBrush = "#ffffff";
        this.gauge.scaleOutline = "#dbdbdb";
        this.gauge.scaleInnerExtent = 0.075;
        this.gauge.scaleOuterExtent = 0.85;
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#ffffff";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;
    }

    public onAnimateToGauge2 = (e: any) => {
        if (!this.gauge) { return; }

        // linear gauge requires settings for these properties:
        this.gauge.minimumValue = 100;
        this.gauge.maximumValue = 200;
        this.gauge.value = 150;
        this.gauge.interval = 20;

        // setting custom appearance of labels
        this.gauge.labelInterval = 20;
        this.gauge.labelExtent = 0.0;

        // setting custom appearance of needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleShape = LinearGraphNeedleShape.Triangle;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#ffffffff";
        this.gauge.needleStrokeThickness = 1;
        this.gauge.needleOuterExtent = 0.9;
        this.gauge.needleInnerExtent = 0.3;

        // setting custom appearance of major/minor ticks
        this.gauge.minorTickCount = 4;
        this.gauge.minorTickEndExtent = 0.10;
        this.gauge.minorTickStartExtent = 0.20;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.tickStartExtent = 0.25;
        this.gauge.tickEndExtent = 0.05;
        this.gauge.tickStrokeThickness = 2;

        // setting custom gauge ranges
        const range1 = new IgrLinearGraphRange({});
        range1.startValue = 100;
        range1.endValue = 125;
        const range2 = new IgrLinearGraphRange({});
        range2.startValue = 125;
        range2.endValue = 150;
        const range3 = new IgrLinearGraphRange({});
        range3.startValue = 150;
        range3.endValue = 175;
        const range4 = new IgrLinearGraphRange({});
        range4.startValue = 175;
        range4.endValue = 200;

        this.gauge.rangeBrushes  = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.gauge.rangeOutlines = [ "#0078C8", "#0099FF", "#21A7FF", "#4FB9FF"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);
        this.gauge.ranges.add(range4);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.075;
            range.innerEndExtent = 0.075;
            range.outerStartExtent = 0.65;
            range.outerEndExtent = 0.65;
        }

        // setting extent of gauge scale
        this.gauge.scaleStrokeThickness = 0;
        this.gauge.scaleBrush = "#ffffff";
        this.gauge.scaleOutline = "#dbdbdb";
        this.gauge.scaleInnerExtent = 0.075;
        this.gauge.scaleOuterExtent = 0.85;
        this.gauge.scaleStartExtent = 0.05;
        this.gauge.scaleEndExtent = 0.95;

        // setting appearance of backing fill and outline
        this.gauge.backingBrush = "#ffffff";
        this.gauge.backingOutline = "#d1d1d1";
        this.gauge.backingStrokeThickness = 0;
    }

    public onAnimateToGauge3 = (e: any) => {
        if (!this.gauge) { return; }

          // linear gauge requires settings for these properties:
          this.gauge.minimumValue = 0;
          this.gauge.maximumValue = 100;
          this.gauge.value = 50;
          this.gauge.interval = 10;

          // setting custom appearance of labels
          this.gauge.labelInterval = 10;
          this.gauge.labelExtent = 0.0;

          // setting custom appearance of needle
          this.gauge.isNeedleDraggingEnabled = true;
          this.gauge.needleShape = LinearGraphNeedleShape.Needle;
          this.gauge.needleBrush = "#79797a";
          this.gauge.needleOutline = "#ffffffff";
          this.gauge.needleStrokeThickness = 1;
          this.gauge.needleOuterExtent = 0.9;
          this.gauge.needleInnerExtent = 0.3;

          // setting custom appearance of major/minor ticks
          this.gauge.minorTickCount = 5;
          this.gauge.minorTickEndExtent = 0.10;
          this.gauge.minorTickStartExtent = 0.20;
          this.gauge.minorTickStrokeThickness = 1;
          this.gauge.tickStartExtent = 0.25;
          this.gauge.tickEndExtent = 0.05;
          this.gauge.tickStrokeThickness = 2;

          // setting custom gauge ranges
          const range1 = new IgrLinearGraphRange({});
          range1.startValue = 0;
          range1.endValue = 30;
          const range2 = new IgrLinearGraphRange({});
          range2.startValue = 30;
          range2.endValue = 70;
          const range3 = new IgrLinearGraphRange({});
          range3.startValue = 70;
          range3.endValue = 100;

          this.gauge.rangeBrushes  = [ "#9FB328", "#438C47", "#3F51B5"];
          this.gauge.rangeOutlines = [ "#9FB328", "#438C47", "#3F51B5"];
          this.gauge.ranges.clear();
          this.gauge.ranges.add(range1);
          this.gauge.ranges.add(range2);
          this.gauge.ranges.add(range3);

          // setting extent of all gauge ranges
          for (let i = 0; i < this.gauge.ranges.count; i++) {
              const range = this.gauge.ranges.item(i);
              range.innerStartExtent = 0.075;
              range.innerEndExtent = 0.075;
              range.outerStartExtent = 0.65;
              range.outerEndExtent = 0.65;
          }

          // setting extent of gauge scale
          this.gauge.scaleStrokeThickness = 0;
          this.gauge.scaleBrush = "#ffffff";
          this.gauge.scaleOutline = "#dbdbdb";
          this.gauge.scaleInnerExtent = 0.075;
          this.gauge.scaleOuterExtent = 0.85;
          this.gauge.scaleStartExtent = 0.05;
          this.gauge.scaleEndExtent = 0.95;

          // setting appearance of backing fill and outline
          this.gauge.backingBrush = "#ffffff";
          this.gauge.backingOutline = "#d1d1d1";
          this.gauge.backingStrokeThickness = 0;
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/gauges/linear-gauge/animation
npm install
npm start

```

Then open http://localhost:3000/ in your browser

