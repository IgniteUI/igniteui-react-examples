<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Doughnut Chart Rings.
<!-- in the Doughnut Chart component -->
<!-- [Doughnut Chart](https://infragistics.com/Reactsite/components/doughnut-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/chart-rings?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartRings.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/chart-rings?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartRings.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/chart-rings?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartRings.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DoughnutChartRings.tsx` file:

```tsx
import * as React from 'react';
import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';
import { IgrSliceClickEventArgs } from 'igniteui-react-charts';
import { LabelsPosition } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();

export default class DoughnutChartRings extends React.Component<any, any> {

    public Months: any[];
    public Seasons: any[];
    private chart: IgrDoughnutChart;

    constructor(props: any) {
        super(props);
        this.initData();

        this.onChartRef = this.onChartRef.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrDoughnutChart
                    ref={this.onChartRef}
                    height="100%"
                    width="100%"
                    allowSliceSelection="true"
                    allowSliceExplosion="false" />
            </div>
        );
    }

    public onChartRef(chart: IgrDoughnutChart) {

        this.chart = chart;

        let ringSeries1 = new IgrRingSeries({ name: "ringSeries2"});
        ringSeries1.labelMemberPath = "Label";
        ringSeries1.valueMemberPath = "Value";
        ringSeries1.labelsPosition = LabelsPosition.Center;
        ringSeries1.othersCategoryThreshold = 0;
        ringSeries1.radiusFactor = 0.9;
        ringSeries1.outlines = ["white"];
        ringSeries1.dataSource = this.Seasons; // with 4 items
        ringSeries1.brushes = ["#3cbdc9", "#9fb328", "#f96232", "#8a58d6"];

        let ringSeries2 = new IgrRingSeries({ name: "ringSeries2"});
        ringSeries2.labelMemberPath = "Label";
        ringSeries2.valueMemberPath = "Value";
        ringSeries2.labelsPosition = LabelsPosition.Center;
        ringSeries2.othersCategoryThreshold = 0;
        ringSeries2.radiusFactor = 0.9;;
        ringSeries2.outlines = ["white"];
        ringSeries2.dataSource = this.Months; // with 12 items
        ringSeries2.brushes = [
            "#3cbdc9", "#3cbdc9", "#3cbdc9",  // same colors for 3 months of winter
            "#9fb328", "#9fb328", "#9fb328",  // same colors for 3 months of spring
            "#f96232", "#f96232", "#f96232",  // same colors for 3 months of summer
            "#8a58d6", "#8a58d6", "#8a58d6"]; // same colors for 3 months of fall

        this.chart.series.add(ringSeries1);
        this.chart.series.add(ringSeries2);
        this.chart.allowSliceSelection = true;
    }

    public initData() {

        this.Months = [
            { Value: 1, Label: "December" },
            { Value: 1, Label: "January" },
            { Value: 1, Label: "February" },
            { Value: 1, Label: "March" },
            { Value: 1, Label: "April" },
            { Value: 1, Label: "May" },
            { Value: 1, Label: "June" },
            { Value: 1, Label: "July" },
            { Value: 1, Label: "August" },
            { Value: 1, Label: "September" },
            { Value: 1, Label: "October" },
            { Value: 1, Label: "November" },
        ];
        this.Seasons = [
            { Value: 4, Label: "Winter" },
            { Value: 4, Label: "Spring" },
            { Value: 4, Label: "Summer" },
            { Value: 4, Label: "Fall" },
        ];
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/doughnut-chart/chart-rings
npm install
npm start

```

Then open http://localhost:3000/ in your browser

