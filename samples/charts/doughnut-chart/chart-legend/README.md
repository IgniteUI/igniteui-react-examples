<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Doughnut Chart Legend.
<!-- in the Doughnut Chart component -->
<!-- [Doughnut Chart](https://infragistics.com/Reactsite/components/doughnut-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/chart-legend?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartLegend.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/chart-legend?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartLegend.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/doughnut-chart/chart-legend?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DoughnutChartLegend.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/DoughnutChartLegend.tsx` file:

```tsx
import * as React from 'react';



import { IgrDoughnutChartModule } from 'igniteui-react-charts';
import { IgrDoughnutChart } from 'igniteui-react-charts';
import { IgrItemLegend } from 'igniteui-react-charts';
import { IgrItemLegendModule } from 'igniteui-react-charts';
import { IgrRingSeriesModule } from 'igniteui-react-charts';
import { IgrRingSeries } from 'igniteui-react-charts';

IgrDoughnutChartModule.register();
IgrRingSeriesModule.register();
IgrItemLegendModule.register();

export default class DoughnutChartLegend extends React.Component<any, any> {

    public data: any[];
    public chart: IgrDoughnutChart;
    public legend: IgrItemLegend;

    constructor(props: any) {
        super(props);

        this.onChartRef = this.onChartRef.bind(this);
        this.onLegendRef = this.onLegendRef.bind(this);

        this.state = { componentVisible: true }
        this.initData();
    }

    public onChartRef(chart: IgrDoughnutChart) {
        this.chart = chart;
        if (this.legend) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    public onLegendRef(legend: IgrItemLegend) {
        this.legend = legend;
        if (this.chart) {
            this.chart.actualSeries[0].legend = this.legend;
        }
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igLegend">
                    <IgrItemLegend ref={this.onLegendRef} />
                </div>
                <div className="igComponent">
                    <IgrDoughnutChart ref={this.onChartRef}
                                     width="100%"
                                     height="100%">
                            <IgrRingSeries name="ring1"
                                dataSource={this.state.data}
                                labelMemberPath="Company"
                                valueMemberPath="MarketShare"/>
                    </IgrDoughnutChart>
                </div>
            </div>
        );
    }

    public initData() {
        this.state = {
            data: [
                { MarketShare: 30, Company: "Google",    },
                { MarketShare: 30, Company: "Apple",     },
                { MarketShare: 15, Company: "Microsoft", },
                { MarketShare: 15, Company: "Samsung",   },
                { MarketShare: 10, Company: "Other",     },
        ] };
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/doughnut-chart/chart-legend
npm install
npm start

```

Then open http://localhost:3000/ in your browser

