<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Sparkline Markers.
<!-- in the Sparkline component -->
<!-- [Sparkline](https://infragistics.com/Reactsite/components/sparkline.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/markers?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineMarkers.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/markers?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineMarkers.tsx">
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

<iframe
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/markers?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineMarkers.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/SparklineMarkers.tsx` file:

```tsx
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { Visibility } from 'igniteui-react-core';

import * as React from 'react';

import { SparklineSharedData } from './SparklineSharedData';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineMarkers extends React.Component<any, any> {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onMarkerCheckboxChanged = this.onMarkerCheckboxChanged.bind(this);

        this.data = SparklineSharedData.getPaddedDataForMarkers();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <label className="igOptions-item"><input id="High" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />High Markers</label>
                    <label className="igOptions-item"><input id="Low" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />Low Markers</label>
                    <label className="igOptions-item"><input id="First" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />First Markers</label>
                    <label className="igOptions-item"><input id="Last" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />Last Markers</label>
                    <label className="igOptions-item"><input id="Negative" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />Negative Markers</label>
                    <label className="igOptions-item"><input id="All" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />All Markers</label>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.data}
                        valueMemberPath="Value"
                        displayType="Line"
                        minimum={-3}
                        maximum={8}
                        markerVisibility="Visible"
                        highMarkerVisibility="Visible"
                        lowMarkerVisibility="Visible"
                        firstMarkerVisibility="Visible"
                        lastMarkerVisibility="Visible"
                        negativeMarkerVisibility="Visible"
                        markerSize={10}
                        firstMarkerSize={10}
                        lastMarkerSize={10}
                        lowMarkerSize={10}
                        highMarkerSize={10}
                        negativeMarkerSize={10} />
                </div>
            </div >
        );
    }

    public onMarkerCheckboxChanged(e: any) {
        const selection = e.target.checked as boolean;

        let visibility: Visibility;
        if (selection) {
            visibility = Visibility.Visible;
        }
        else {
            visibility = Visibility.Collapsed;
        }

        switch (e.target.id) {
            case "High": {
                this.sparkline.highMarkerVisibility = visibility;
                break;
            }
            case "Low": {
                this.sparkline.lowMarkerVisibility = visibility;
                break;
            }
            case "First": {
                this.sparkline.firstMarkerVisibility = visibility;
                break;
            }
            case "Last": {
                this.sparkline.lastMarkerVisibility = visibility;
                break;
            }
            case "Negative": {
                this.sparkline.negativeMarkerVisibility = visibility;
                break;
            }
            case "All": {
                this.sparkline.markerVisibility = visibility;
                break;
            }
        }
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
cd ./samples/charts/sparkline/markers
npm install
npm start

```

Then open http://localhost:3000/ in your browser

