<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Category Chart Tooltip Types.
<!-- in the Category Chart component -->
<!-- [Category Chart](https://infragistics.com/Reactsite/components/category-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/tooltip-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartTooltipTypes.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/tooltip-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartTooltipTypes.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/tooltip-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartTooltipTypes.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/CategoryChartTooltipTypes.tsx` file:

```tsx
import { IgrChartSeriesEventArgs } from 'igniteui-react-charts';
import { IgrDomainChart } from 'igniteui-react-charts';
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import * as React from 'react';




IgrCategoryChartModule.register();

export default class CategoryChartTooltipTypes extends React.Component<any, any> {
    public data: any[];

    constructor(props: any) {
        super(props);
        this.state = { toolTipType: "Default" }
        this.initData();
    }

    public render() {
        return (
        <div className="igContainer" >
            <div className="igOptions">
                <span className="igOptions-label">Tooltip Type: </span>
                <select value={this.state.toolTipType}
                    onChange={this.onToolTipTypeChanged}>
                    <option>Default</option>
                    <option>Item</option>
                    <option>Category</option>
                    {/* <option>None</option> */}
                </select>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 50px)"}} >
                <IgrCategoryChart
                    width="100%"
                    height="100%"
                    chartTitle="Olympic Medals By Country"
                    chartType="column"
                    dataSource={this.data}
                    toolTipType={this.state.toolTipType}
                    yAxisMinimumValue={0}
                    yAxisMaximumValue={200}
                    xAxisInterval={1}
                    seriesAdded={this.onSeriesAdded}/>
            </div>

        </div>
        );
    }

    public onToolTipTypeChanged = (e: any) => {
        this.setState({toolTipType: e.target.value});
    }

    public onSeriesAdded = (s: IgrDomainChart, e: IgrChartSeriesEventArgs) => {
        console.log("onSeriesAdded " + e.series);
        if (e.series.isAnnotationLayer) {
            e.series.transitionDuration = 100;
        }
    }

    public initData() {
        const usaMedals: any = [
            { Year: "1996 Atlanta", UnitedStates: 148 },
            { Year: "2000 Sydney",  UnitedStates: 142 },
            { Year: "2004 Athens",  UnitedStates: 134 },
            { Year: "2008 Beijing", UnitedStates: 131 },
            { Year: "2012 London",  UnitedStates: 135 },
            { Year: "2016 Rio",     UnitedStates: 146 },
        ];
        const chinaMedals: any = [
            { Year: "1996 Atlanta", China: 110 },
            { Year: "2000 Sydney",  China: 115 },
            { Year: "2004 Athens",  China: 121 },
            { Year: "2008 Beijing", China: 129 },
            { Year: "2012 London",  China: 115 },
            { Year: "2016 Rio",     China: 112 },
        ];
        const russiaMedals: any = [
            { Year: "1996 Atlanta", Russia: 95 },
            { Year: "2000 Sydney",  Russia: 91 },
            { Year: "2004 Athens",  Russia: 86 },
            { Year: "2008 Beijing", Russia: 65 },
            { Year: "2012 London",  Russia: 77 },
            { Year: "2016 Rio",     Russia: 88 },
        ];
        this.data = [ usaMedals, chinaMedals, russiaMedals ];
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/category-chart/tooltip-types
npm install
npm start

```

Then open http://localhost:3000/ in your browser

