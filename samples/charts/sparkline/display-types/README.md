<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Sparkline Display Types.
<!-- in the Sparkline component -->
<!-- [Sparkline](https://infragistics.com/Reactsite/components/sparkline.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/display-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineDisplayTypes.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/display-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineDisplayTypes.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/display-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineDisplayTypes.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SparklineDisplayTypes.tsx` file:

```tsx
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';

import * as React from 'react';



IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayTypes extends React.Component {
    public data: any[];

    public sparkline : IgrSparkline;

    constructor(props: any) {
        super(props);

        this.data = this.createData(360 * 1.5);
    }

    public render() {
        return (
            <div className="igContainer">
                <label className="igOptions-label">Area Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="Area"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value"/>
                </div>
                <label className="igOptions-label">Line Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="Line"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" />
                </div>
                <label className="igOptions-label">Column Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="Column"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value"/>
                </div>
                <label className="igOptions-label">WinLoss Sparkline</label>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data} minimum={-1} maximum={1}
                        valueMemberPath="Value" />
                </div>
            </div >
        );
    }

    public createData(itemsCount: number): any[] {
        const data: any[] = [];
        let index = 0;
        let min = 1000;
        let max =-1000
        for (let angle = 0; angle <= itemsCount; angle += 10)
        {
            const v1 = Math.sin(angle * Math.PI / 180);
            const v2 = Math.sin(3 * angle * Math.PI / 180) / 3;
            data.push({
                "Index": index++,
                "Angle": angle,
                "Value": v1 + v2
            });
            min = Math.min(min, v1+v2);
            max = Math.max(max, v1+v2);
        }

        console.log(min);
        console.log(max);
        return data;
    }



}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/sparkline/display-types
npm install
npm start

```

Then open http://localhost:3000/ in your browser

