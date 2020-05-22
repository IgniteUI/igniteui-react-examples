<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Pie Chart Selection.
<!-- in the Pie Chart component -->
<!-- [Pie Chart](https://infragistics.com/Reactsite/components/pie-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/pie-chart/slice-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/PieChartSelection.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/pie-chart/slice-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/PieChartSelection.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/pie-chart/slice-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/PieChartSelection.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/PieChartSelection.tsx` file:

```tsx
import { IgrPieChart } from 'igniteui-react-charts';
import { IgrPieChartModule } from 'igniteui-react-charts';
import { IgrPieChartBase } from 'igniteui-react-charts';
import { IIgrPieChartBaseProps } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import * as React from 'react';

IgrPieChartModule.register();

export default class PieChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrPieChart;

    constructor(props: any) {
       super(props);

        this.initData();
        this.onPieRef = this.onPieRef.bind(this);
        this.onSliceClick = this.onSliceClick.bind(this);
    }

    public render() {
        return (
            <div style={{height: "100%", width: "100%", background: "white" }}>
                <label >
                   Selected Slices: {this.state.selectedLabel}
                </label>

                <IgrPieChart dataSource={this.state.data}
                            labelMemberPath="Company"
                            valueMemberPath="MarketShare"
                            width="100%"
                            height="calc(100% - 45px)"
                            ref={this.onPieRef}
                            selectionMode="multiple"
                            sliceClick={this.onSliceClick}
                            selectedSliceStroke="white"
                            selectedSliceFill="rgb(143,143,143)"
                            selectedSliceOpacity = "1.0"
                            selectedSliceStrokeThickness= "2"/>
            </div>
        );
    }

    public onPieRef(chart: IgrPieChart) {
        this.chart  = chart;
    }

    public onSliceClick = (s: IgrPieChartBase<IIgrPieChartBaseProps>, e: IgrSliceClickEventArgs) => {

        let selectedSlices: string = "";
        const selectedItems = this.chart.selectedItems.toArray();

        for (const item of selectedItems) {
            selectedSlices += item.Company + ", ";
        }

        this.setState( {selectedLabel: selectedSlices } );
    }

    public initData() {
        this.state = { data: [
            { MarketShare: 30, Company: "Google",    },
            { MarketShare: 30, Company: "Apple",     },
            { MarketShare: 15, Company: "Microsoft", },
            { MarketShare: 15, Company: "Samsung",   },
            { MarketShare: 10, Company: "Other",     },
       ] }
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/pie-chart/slice-selection
npm install
npm start

```

Then open http://localhost:3000/ in your browser

