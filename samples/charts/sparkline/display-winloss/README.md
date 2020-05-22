<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Sparkline Display Win Loss.
<!-- in the Sparkline component -->
<!-- [Sparkline](https://infragistics.com/Reactsite/components/sparkline.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/display-winloss?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineDisplayWinLoss.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/display-winloss?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineDisplayWinLoss.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/sparkline/display-winloss?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/SparklineDisplayWinLoss.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/SparklineDisplayWinLoss.tsx` file:

```tsx
import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import * as React from 'react';

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineDisplayWinLoss extends React.Component {
    public data1: any[];
    public data2: any[];

    public sparkline : IgrSparkline;

    constructor(props: any) {
        super(props);
        this.data1 = this.createData2(720 * 1);
        this.data2 = this.createData2(720 * 2);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data1}
                        valueMemberPath="Value1"/>
                </div>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data1}
                        valueMemberPath="Value2" />
                </div>
                <div className="igComponent">
                    <IgrSparkline height="100%" width="100%" displayType="WinLoss"
                        dataSource={this.data2}
                        valueMemberPath="Value1"/>
                </div>
            </div >
        );
    }

    public createData1(itemsCount: number): any[] {
        const data: any[] = [];
        let v1 = 0;
        let v2 = 5;
        for (let i = 0; i <= itemsCount; i++) {
            v1 += (Math.random() - 0.5) * 4;
            v1 = this.clamp(v1, -10, 10);
            v2 += (Math.random() - 0.5) * 4;
            v2 = this.clamp(v2, -10, 10);
            let l = i.toString();
            data.push({ Label: l, Value1: v1, Value2: v2 });
        }
        return data;
    }

    public createData2(itemsCount: number): any[] {
        const data: any[] = [];
        let index = 0;
        for (let angle = 0; angle <= itemsCount; angle += 10)
        {
            const r1 = Math.random() - 0.1;
            const r2 = Math.random() - 0.2;
            const v1 = Math.sin(angle * r1 * Math.PI / 180);
            const v2 = Math.cos(angle * r2 * Math.PI / 180);
            data.push({
                "Index": index++,
                "Angle": angle,
                "Value1": v1,
                "Value2": v2,
            });
        }
        return data;
    }

    public clamp(v: number, min: number, max: number): number {
        if (v > max) {
            v = max;
        }
        else if (v < min) {
            v = min;
        }
        return v;
    }

}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/sparkline/display-winloss
npm install
npm start

```

Then open http://localhost:3000/ in your browser

