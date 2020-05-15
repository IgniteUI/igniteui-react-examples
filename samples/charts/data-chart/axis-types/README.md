<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Data Chart Axis Types.
<!-- in the Data Chart component -->
<!-- [Data Chart](https://infragistics.com/Reactsite/components/data-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisTypes.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisTypes.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/data-chart/axis-types?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/DataChartAxisTypes.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/DataChartAxisTypes.tsx` file:

```tsx
// data chart's elements for category series:
import { IgrNumericYAxis } from 'igniteui-react-charts';
import { IgrNumericXAxis } from 'igniteui-react-charts';
import { IgrTimeXAxis } from 'igniteui-react-charts';
import { IgrScatterSeries } from 'igniteui-react-charts';
import { IgrCategoryXAxis } from 'igniteui-react-charts';
import { IgrCategoryYAxis } from 'igniteui-react-charts';
import { IgrColumnSeries } from 'igniteui-react-charts';
// data chart's modules:
import { IgrDataChart } from 'igniteui-react-charts';
import { IgrDataChartCoreModule } from 'igniteui-react-charts';
import { IgrDataChartCategoryModule } from 'igniteui-react-charts';
import { IgrDataChartScatterCoreModule } from 'igniteui-react-charts';
import { IgrDataChartScatterModule } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrTimeXAxisModule } from 'igniteui-react-charts';

import { SampleCategoryData } from './SampleCategoryData';
import { SampleFinancialData } from './SampleFinancialData';
import { SampleScatterData } from './SampleScatterData';

import * as React from 'react';



import { IgrBarSeries } from 'igniteui-react-charts';
import { IgrFinancialPriceSeries } from 'igniteui-react-charts';

IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartScatterCoreModule.register();
IgrDataChartScatterModule.register();
IgrTimeXAxisModule.register();
IgrDataChartInteractivityModule.register();

export default class DataChartAxisTypes extends React.Component<any, any> {
    public categoryData: any[];
    public financialData: any[];
    public scatterData: any[];

    public chart: IgrDataChart;

    public numericXAxis: IgrNumericXAxis;
    public numericYAxis: IgrNumericYAxis;

    public categoryXAxis: IgrCategoryXAxis;
    public categoryYAxis: IgrCategoryYAxis;

    public timeXAxis: IgrTimeXAxis;

    public columnSeries1: IgrColumnSeries;
    public columnSeries2: IgrColumnSeries;

    public barSeries1: IgrBarSeries;
    public barSeries2: IgrBarSeries;

    public scatterSeries1: IgrScatterSeries;
    public scatterSeries2: IgrScatterSeries;

    public financialSeries: IgrFinancialPriceSeries;

    constructor(props: any) {
        super(props);

        this.onAxisTypeChange = this.onAxisTypeChange.bind(this);

        this.onChartRef = this.onChartRef.bind(this);

        this.initData();

        this.initAxes();
        this.initCategorySeries();
        this.initScatterSeries();
        this.initFinancialSeries();
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <div className="igOptions">
                        <span className="igOptions-item">Series Type:</span>
                        <select onChange={this.onAxisTypeChange}>
                            <option>Column (CategoryXAxis)</option>
                            <option>Bar (CategoryYAxis)</option>
                            <option>Scatter (NumericXAxis)</option>
                            <option>Financial (TimeXAxis)</option>
                        </select>
                    </div>
                    <IgrDataChart
                        ref={this.onChartRef}
                        width="100%"
                        height="calc(100% - 35px)"
                        isHorizontalZoomEnabled={true}
                        isVerticalZoomEnabled={true} />
                </div>
            </div>
        );
    }

    public initCategorySeries() {
        this.columnSeries1 = new IgrColumnSeries({ name: "colSeries1" });
        this.columnSeries1.dataSource = this.categoryData;
        this.columnSeries1.xAxis = this.categoryXAxis;
        this.columnSeries1.yAxis = this.numericYAxis;
        this.columnSeries1.xAxisName = "categoryXAxis";
        this.columnSeries1.yAxisName = "numericYAxis";
        this.columnSeries1.valueMemberPath = "USA";

        this.columnSeries2 = new IgrColumnSeries({ name: "colSeries2" });
        this.columnSeries2.dataSource = this.categoryData;
        this.columnSeries2.xAxis = this.categoryXAxis;
        this.columnSeries2.yAxis = this.numericYAxis;
        this.columnSeries2.xAxisName = "categoryXAxis";
        this.columnSeries2.yAxisName = "numericYAxis";
        this.columnSeries2.valueMemberPath = "RUS";

        this.barSeries1 = new IgrBarSeries({ name: "barSeries1" });
        this.barSeries1.dataSource = this.categoryData;
        this.barSeries1.xAxis = this.numericXAxis;
        this.barSeries1.yAxis = this.categoryYAxis;
        this.barSeries1.xAxisName = "numericXAxis";
        this.barSeries1.yAxisName = "categoryYAxis";
        this.barSeries1.valueMemberPath = "USA";

        this.barSeries2 = new IgrBarSeries({ name: "barSeries2" });
        this.barSeries2.dataSource = this.categoryData;
        this.barSeries2.xAxis = this.numericXAxis;
        this.barSeries2.yAxis = this.categoryYAxis;
        this.barSeries2.xAxisName = "numericXAxis";
        this.barSeries2.yAxisName = "categoryYAxis";
        this.barSeries2.valueMemberPath = "RUS";
    }

    public initAxes() {
        this.categoryXAxis = new IgrCategoryXAxis({ name: "categoryXAxis" });
        this.categoryXAxis.title = "Category X Axis";
        this.categoryXAxis.dataSource = this.categoryData;
        this.categoryXAxis.label = "Year";

        this.categoryYAxis = new IgrCategoryYAxis({ name: "categoryYAxis" });
        this.categoryYAxis.title = "Category Y Axis";
        this.categoryYAxis.dataSource = this.categoryData;
        this.categoryYAxis.label = "Year";

        this.numericXAxis = new IgrNumericXAxis({ name: "numericXAxis" });
        this.numericXAxis.title = "Numeric X Axis";

        this.numericYAxis = new IgrNumericYAxis({ name: "numericYAxis" });
        this.numericYAxis.title = "Numeric Y Axis";

        this.timeXAxis = new IgrTimeXAxis({name: "timeXAxis"});
        this.timeXAxis.title = "Time X Axis";
        this.timeXAxis.dataSource = this.financialData;
        this.timeXAxis.dateTimeMemberPath = "Time";
        this.timeXAxis.label = "Date";
    }

    public initFinancialSeries(){
        this.financialSeries = new IgrFinancialPriceSeries({name: "financialSeries"});
        this.financialSeries.dataSource = this.financialData;
        this.financialSeries.xAxis = this.timeXAxis;
        this.financialSeries.yAxis = this.numericYAxis;
        this.financialSeries.xAxisName = "timeXAxis";
        this.financialSeries.yAxisName = "numericYAxis";
        this.financialSeries.highMemberPath="High"
        this.financialSeries.lowMemberPath="Low"
        this.financialSeries.closeMemberPath="Close"
        this.financialSeries.openMemberPath="Open"
        this.financialSeries.volumeMemberPath="Volume"
    }

    public initScatterSeries(){
        this.scatterSeries1 = new IgrScatterSeries({name: "scatterSeries"});
        this.scatterSeries1.dataSource = this.scatterData;
        this.scatterSeries1.xAxis = this.numericXAxis;
        this.scatterSeries1.yAxis = this.numericYAxis;
        this.scatterSeries1.xAxisName = "numericXAxis";
        this.scatterSeries1.yAxisName = "numericYAxis";
        this.scatterSeries1.xMemberPath = "Index";
        this.scatterSeries1.yMemberPath = "SinValue";

        this.scatterSeries2 = new IgrScatterSeries({name: "scatterSeries2"});
        this.scatterSeries2.dataSource = this.scatterData;
        this.scatterSeries2.xAxis = this.numericXAxis;
        this.scatterSeries2.yAxis = this.numericYAxis;
        this.scatterSeries2.xAxisName = "numericXAxis";
        this.scatterSeries2.yAxisName = "numericYAxis";
        this.scatterSeries2.xMemberPath = "Index";
        this.scatterSeries2.yMemberPath = "CosValue";
    }

    public initData() {
        this.categoryData = SampleCategoryData.create();
        this.scatterData = SampleScatterData.createWaveData();
        this.financialData = SampleFinancialData.create();
    }

    public onAxisTypeChange = (e: any) => {
        this.chart.axes.clear();
        this.chart.series.clear();

        const value: string = e.target.value;

        if(value.includes("Column")){
            this.chart.axes.add(this.categoryXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.columnSeries1);
            this.chart.series.add(this.columnSeries2);
        }
        else if(value.includes("Bar")){
            this.chart.axes.add(this.categoryYAxis);
            this.chart.axes.add(this.numericXAxis);

            this.chart.series.add(this.barSeries1);
            this.chart.series.add(this.barSeries2);
        }
        else if(value.includes("Scatter")){
            this.chart.axes.add(this.numericXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.scatterSeries1);
            this.chart.series.add(this.scatterSeries2);
        }
        else{
            this.chart.axes.add(this.timeXAxis);
            this.chart.axes.add(this.numericYAxis);

            this.chart.series.add(this.financialSeries);
        }

        // this.chart.render();
    }

    public onChartRef(chart: IgrDataChart) {
        this.chart = chart;

        // this.chart.dataSource = this.categoryData;

        this.chart.axes.add(this.categoryXAxis);
        this.chart.axes.add(this.numericYAxis);

        this.chart.series.add(this.columnSeries1);
        this.chart.series.add(this.columnSeries2);
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/data-chart/axis-types
npm install
npm start

```

Then open http://localhost:3000/ in your browser

