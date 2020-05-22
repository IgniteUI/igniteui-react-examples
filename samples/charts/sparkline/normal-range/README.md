<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Sparkline Normal Range.
<!-- in the Sparkline component -->
<!-- [Sparkline](https://infragistics.com/Reactsite/components/sparkline.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/normal-range?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineNormalRange.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/normal-range?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineNormalRange.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/normal-range?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineNormalRange.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/SparklineNormalRange.tsx](./src/SparklineNormalRange.tsx) file.

<!-- The following section provides source code from:
`./src/SparklineNormalRange.tsx` file: -->

<!-- ```tsx
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { Visibility } from 'igniteui-react-core';
import * as React from 'react';
import { SparklineSharedData } from './SparklineSharedData';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineNormalRange extends React.Component<any, any> {
    public sparkline : IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onMinSliderChanged = this.onMinSliderChanged.bind(this);
        this.onMaxSliderChanged = this.onMaxSliderChanged.bind(this);
        this.onRangeVisibilityChanged = this.onRangeVisibilityChanged.bind(this);

        this.state = {
            normalRangeMinimum: 1,
            normalRangeMaximum: 4,
            data: SparklineSharedData.getSharedData()
        }
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <label className="igOptions-item"><input defaultChecked={true} type="checkbox" onChange={this.onRangeVisibilityChanged}/>Range Visibility</label>
                    <label className="igOptions-item"><input type="range"
                    min={-2} max={7} step="0.5"
                    value={this.state.normalRangeMinimum}
                    onChange={this.onMinSliderChanged}/>Min Range {this.state.normalRangeMinimum} </label>
                    <label className="igOptions-item"><input type="range"
                    min={-2} max={7} step="0.5"
                    value={this.state.normalRangeMaximum}
                    onChange={this.onMaxSliderChanged}/>Max Range {this.state.normalRangeMaximum} </label>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="calc(100% - 30px)" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.state.data}
                        valueMemberPath="Value"
                        displayType="Area"
                        normalRangeVisibility="Visible"
                        normalRangeMinimum={1}
                        normalRangeMaximum={4}
                        normalRangeFill="rgba(255, 0, 0, 0.4)"
                        displayNormalRangeInFront="true" />
                </div>
            </div >
        );
    }

    public onRangeVisibilityChanged(e: any) {
        const selection = e.target.checked as boolean;

        if (selection) {
            this.sparkline.normalRangeVisibility = Visibility.Visible;
        }
        else {
            this.sparkline.normalRangeVisibility = Visibility.Collapsed;
        }
    }

    public onMinSliderChanged(e: any) {
        const value: number = parseFloat(e.target.value);
        this.sparkline.normalRangeMinimum = value;
        this.setState({ normalRangeMinimum: value.toFixed(1) });
    }

    public onMaxSliderChanged(e: any) {
        const value: number = parseFloat(e.target.value);
        this.sparkline.normalRangeMaximum = value;
        this.setState({ normalRangeMaximum: value.toFixed(1) });
    }

    public onSparklineRef(sparkline: IgrSparkline) {
        if (sparkline != null) {
            this.sparkline = sparkline;
        }
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/sparkline/normal-range
npm install
npm start

```

Then open http://localhost:3000/ in your browser

