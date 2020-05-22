<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Financial Chart Annotations.
<!-- in the Financial Chart component -->
<!-- [Financial Chart](https://infragistics.com/Reactsite/components/financial-chart.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartAnnotations.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartAnnotations.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/financial-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/FinancialChartAnnotations.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/FinancialChartAnnotations.tsx](./src/FinancialChartAnnotations.tsx) file.

<!-- The following section provides source code from:
`./src/FinancialChartAnnotations.tsx` file: -->

<!-- ```tsx
import { IgrFinancialChart } from 'igniteui-react-charts';
import { IgrFinancialChartModule } from 'igniteui-react-charts';
import * as React from 'react';
import { StocksUtility } from '/StocksUtility';

IgrFinancialChartModule.register();

export default class FinancialChartAnnotations extends React.Component<any, any> {

    public data: any[];
    public excludeProperties: string[] = ["index", "info"];

    constructor(props: any) {
        super(props);
        this.state = {
            calloutsVisible: true,
            crosshairsMode: "Both",
            crosshairsVisible: true,
            finalValuesVisible: true,
            markersTypes: "Circle",
            markersVisible: true,
        };
        this.initData();
    }

    public render() {
        return (
        <div className="igContainer" >
            <div className="igOptions">
                <label className="igOptions-label">Annotations: </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.crosshairsVisible}
                onChange={this.onCrosshairsVisible}/> Crosshair </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.calloutsVisible}
                onChange={this.onCalloutsVisible}/> Callouts </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.finalValuesVisible}
                onChange={this.onFinalValuesVisible}/> Final Values </label>
                <label className="igOptions-item"><input type="checkbox"
                checked={this.state.markersVisible}
                onChange={this.onMarkersVisible}/> Markers </label>
            </div>
            <div className="igComponent" style={{height: "calc(100% - 65px)"}}>
                <IgrFinancialChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    thickness={2}
                    excludedProperties={this.excludeProperties}
                    xAxisMode={this.state.xAxisMode}
                    yAxisMode={this.state.yAxisMode}
                    dataSource={this.data}

                    markerTypes={this.state.markersTypes}

                    calloutsVisible={this.state.calloutsVisible}
                    calloutsXMemberPath="index"
                    calloutsYMemberPath="value"
                    calloutsLabelMemberPath="info"
                    calloutsContentMemberPath="info"

                    crosshairsSnapToData={false}
                    crosshairsDisplayMode={this.state.crosshairsMode}
                    crosshairsAnnotationEnabled={this.state.crosshairsVisible}

                    finalValueAnnotationsVisible={this.state.finalValuesVisible}/>
            </div>
        </div>
        );
    }

    public onCrosshairsVisible = (e: any) =>{
        const isVisible = e.target.checked;
        this.setState( {crosshairsVisible: isVisible} );
        if (isVisible) {
            this.setState( {crosshairsMode: "Both"} );
        }
        else {
            this.setState( {crosshairsMode: "None"} );
        }
    }
    public onCalloutsVisible = (e: any) =>{
        this.setState( {calloutsVisible: e.target.checked} );
    }
    public onFinalValuesVisible = (e: any) =>{
        this.setState( {finalValuesVisible: e.target.checked} );
    }
    public onMarkersVisible = (e: any) =>{
        const visible = e.target.checked;
        const markers = e.target.checked ? "Circle" : "None";
        this.setState( {markersTypes: markers, markersVisible: visible} );
    }

    public initData() {
        const today = new Date();
        const year = today.getFullYear();
        const dateMonth = today.getMonth();
        const dateEnd = new Date(year, dateMonth, 1);
        const dateStart = new Date(year - 1, dateMonth, 1);

        const stockData = StocksUtility.GetStocksBetween(dateStart, dateEnd);

        let minVal: number = Number.MAX_VALUE;
        let maxVal: number = Number.MIN_VALUE;
        let minIndex: number = 0;
        let maxIndex: number = 0;
        let idx: number = 0;
        let currentYear = 0;
        let currentQuarter = 0;

        // adding annotation data for some data item
        for (const item of stockData) {

            if (minVal > item.close) {
                minVal = item.close;
                minIndex = idx;
            }
            if (maxVal < item.close) {
                maxVal = item.close;
                maxIndex = idx;
            }
            const itemYear = StocksUtility.GetYear(item.date);
            if (currentYear !== itemYear) {
                currentYear = itemYear;
                item.info = itemYear;
            }

            const itemQuarter = StocksUtility.GetQuarter(item.date);
            if (currentQuarter !== itemQuarter) {
                currentQuarter = itemQuarter;
                item.info = "Q" + itemQuarter;
            }

            item.index = idx;
            item.value = item.close;
            idx++;
        }

        stockData[100].info = "SPLIT";
        stockData[200].info = "SPLIT";
        stockData[250].info = "SPLIT";

        stockData[130].info = "DIV";
        stockData[270].info = "DIV";
        stockData[320].info = "DIV";

        stockData[minIndex].info = "MIN";
        stockData[maxIndex].info = "MAX";

        this.data = stockData;
    }
}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/financial-chart/annotations
npm install
npm start

```

Then open http://localhost:3000/ in your browser

