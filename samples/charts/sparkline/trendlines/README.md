<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Sparkline Trendlines.
<!-- in the Sparkline component -->
<!-- [Sparkline](https://infragistics.com/Reactsite/components/sparkline.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/trendlines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineTrendlines.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/trendlines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineTrendlines.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/trendlines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineTrendlines.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SparklineTrendlines.tsx` file:

```tsx
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

import * as React from 'react';

import { SparklineSharedData } from './SparklineSharedData';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineTrendlines extends React.Component<any, any> {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onTrendlineChanged = this.onTrendlineChanged.bind(this);

        this.data = SparklineSharedData.getSharedData();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <span className="igOptions-item">Trendline Type: </span>
                    <select
                    onChange={this.onTrendlineChanged}
                    defaultValue="ExponentialFit">
                        <option>CubicFit</option>
                        <option>CumulativeAverage</option>
                        <option>ExponentialAverage</option>
                        <option>ExponentialFit</option>
                        <option>LinearFit</option>
                        <option>LogarithmicFit</option>
                        <option>ModifiedAverage</option>
                        <option>None</option>
                        <option>PowerLawFit</option>
                        <option>QuadraticFit</option>
                        <option>QuarticFit</option>
                        <option>QuinticFit</option>
                        <option>SimpleAverage</option>
                        <option>WeightedAverage</option>
                    </select>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="calc(100% - 30px)" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.data}
                        valueMemberPath="Value"
                        displayType="Area"
                        trendLineThickness={3}
                        trendLinePeriod={5}
                        trendLineType="ExponentialFit"
                        trendLineBrush="Red"/>
                </div>
            </div >
        );
    }

    public onTrendlineChanged(e: any) {
        const selection = e.target.value.toString();
        this.sparkline.trendLineType = selection;
    }

    public onSparklineRef(sparkline: IgrSparkline) {
        if (sparkline != null) {
            this.sparkline = sparkline;
        }
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/sparkline/trendlines
npm install
npm start

```

Then open http://localhost:3000/ in your browser

