<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Doughnut Chart Selection.
<!-- in the Doughnut Chart component -->
<!-- [Doughnut Chart](https://infragistics.com/Reactsite/components/doughnut-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/slice-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartSelection.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/slice-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartSelection.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/slice-selection?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartSelection.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DoughnutChartSelection.tsx` file:

```tsx
import * as React from 'react';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartSelection extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;

    constructor(props: any) {
        super(props);

        this.initData();
        this.onPieRef = this.onPieRef.bind(this);
        this.onSliceClick = this.onSliceClick.bind(this);
    }

    public render() {
        return (
            <div style={{height: "100%", width: "100%" }}>
                <label >
                   Selected Slice: {this.state.selectedLabel}
                </label>

                <IgrDoughnutChart
                     ref={this.onPieRef}
                     height="calc(100% - 45px)"
                     allowSliceSelection="true"
                     sliceClick={this.onSliceClick}>
                        <IgrRingSeries name="ring1"
                            dataSource={this.state.data}
                            labelMemberPath="Company"
                            valueMemberPath="MarketShare"
                            selectedSliceStroke="white"
                            selectedSliceFill="rgb(143,143,143)"
                            selectedSliceOpacity = "1.0"
                            selectedSliceStrokeThickness= "2"/>
                </IgrDoughnutChart>
            </div>
        );
    }

    public onPieRef(chart: IgrDoughnutChart) {
        this.chart  = chart;
    }

    public onSliceClick = (s: IgrDoughnutChart, e: IgrSliceClickEventArgs) => {

        console.log("onSliceClick")
        let selectedSlices: string = "";

        if (e.i.isOthersSlice) {
            selectedSlices = "Other";
        } else if (e.i.isSelected &&
            e.i.dataContext !== undefined &&
            e.i.dataContext.Company !== undefined) {
            selectedSlices = e.dataContext.Company
        }

        // const series = this.chart.actualSeries;
        // if (series && series.length > 0) {
        //     const ringSeries = series[0] as IgrRingSeries;
        //     for (const i of ringSeries.selectedSlices.toArray()) {
        //         if (this.data[i] !== undefined) {
        //             selectedSlices += this.data[i].Company + " ";
        //         }
        //     }
        // }
        this.setState( {selectedLabel: selectedSlices } );
    }

    public initData() {
        this.data = [
            { MarketShare: 30, Company: "Google",    },
            { MarketShare: 15, Company: "Microsoft", },
            { MarketShare: 30, Company: "Apple",     },
            { MarketShare: 15, Company: "Samsung",   },
            { MarketShare: 10, Company: "Other",     },
        ];
        this.state = { data: this.data };
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/doughnut-chart/slice-selection
npm install
npm start

```

Then open http://localhost:3000/ in your browser

