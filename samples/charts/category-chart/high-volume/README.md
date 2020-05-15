<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Category Chart component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Category Chart](https://infragistics.com/Reactsite/components/category-chart.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/high-volume?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartHighVolume.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/high-volume?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartHighVolume.tsx">
            <img height="40px" style="border-radius: 0.3rem" alt="View on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/view.png"/>
        </a>
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/high-volume?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartHighVolume.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/CategoryChartHighVolume.tsx` file:

```tsx
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import * as React from 'react';



import { CategoryChartSharedData } from './CategoryChartSharedData';

IgrCategoryChartModule.register();

export default class CategoryChartHighVolume extends React.Component<any, any> {
    public dataPoints: number = 500000;
    public dataSource: any;

    constructor(props: any) {
        super(props);

        this.dataSource = CategoryChartSharedData.generateItems(0, this.dataPoints, true);
        this.state = {
            dataInfo: CategoryChartSharedData.toShortString(this.dataPoints),
            dataPoints: this.dataPoints,
            dataSource: this.dataSource
        }
    }

    public render() {
        return (
        <div className="igContainer">
            <div className="igOptions">
                <label className="igOptions-label">Data Points: </label>
                <label className="igOptions-value">
                    {this.state.dataInfo}
                </label>
                <input className="igOptions-slider" type="range" min="10000" max="1000000" step="1000"
                    value={this.state.dataPoints}
                    onChange={this.onDataPointsChanged}/>
                <button onClick={this.onDataGenerateClick}>Generate Data</button>
            </div>

            <div className="igComponent" style={{height: "calc(100% - 30px)"}} >
                <IgrCategoryChart
                    width="100%"
                    height="100%"
                    chartType="Line"
                    dataSource={this.state.dataSource}/>
            </div>
        </div>
        );
    }

    public onDataPointsChanged = (e: any) => {
        this.dataPoints = e.target.value;
        const info = CategoryChartSharedData.toShortString(this.dataPoints);
        this.setState({ dataPoints: this.dataPoints, dataInfo: info });
    }


    public onDataGenerateClick = (e: any) => {
        if (this.dataPoints === undefined){
            this.dataPoints = 10000;
        }
        this.generateData();
    }

    public generateData() {
        this.dataSource = CategoryChartSharedData.generateItems(0, this.dataPoints, true);
        this.setState({dataSource: this.dataSource});
    }

}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/category-chart/high-volume
npm install
npm start

# Open http://localhost:3000/ in your browser
```

