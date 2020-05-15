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
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartAnnotations.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartAnnotations.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/charts/category-chart/annotations?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/CategoryChartAnnotations.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/CategoryChartAnnotations.tsx` file:

```tsx
import { IgrCategoryChart } from 'igniteui-react-charts';
import { IgrCategoryChartModule } from 'igniteui-react-charts';
import * as React from 'react';




IgrCategoryChartModule.register();

export default class CategoryChartAnnotations extends React.Component<any, any> {
    public categoryData: any[];
    public categoryProperties: string[] = ["month", "temperature"];

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

                <div className="igComponent" style={{height: "calc(100% - 40px)"}} >
                    <IgrCategoryChart
                        width="100%"
                        height="100%"
                        chartType="Line"
                        markerTypes={this.state.markersTypes}
                        dataSource={this.categoryData}
                        xAxisFormatLabel={this.formatDateLabel}
                        xAxisInterval={1}
                        yAxisMinimumValue={50}
                        yAxisMaximumValue={120}
                        yAxisLabelLocation="OutsideRight"
                        includedProperties={this.categoryProperties}
                        thickness={2}

                        calloutsVisible={this.state.calloutsVisible}
                        calloutsXMemberPath="index"
                        calloutsYMemberPath="value"
                        calloutsLabelMemberPath="info"

                        crosshairsSnapToData={false}
                        crosshairsDisplayMode={this.state.crosshairsMode}
                        crosshairsAnnotationEnabled={this.state.crosshairsVisible}

                        finalValueAnnotationsVisible={this.state.finalValuesVisible}
                        />

                </div>
            </div>
        );
    }

    public formatDateLabel(item: any): string {
        const months = [
            "JAN", "FEB", "MAR", "APR", "MAY", "JUN",
            "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"
        ];
        return months[item.date.getMonth()];
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
        const year: number = new Date().getFullYear();
        this.categoryData = [
            { temperature: 74, date: new Date(year, 0,  1) },
            { temperature: 74, date: new Date(year, 1,  1) },
            { temperature: 76, date: new Date(year, 2,  1) },
            { temperature: 78, date: new Date(year, 3,  1) },
            { temperature: 83, date: new Date(year, 4,  1) },
            { temperature: 87, date: new Date(year, 5,  1) },
            { temperature: 94, date: new Date(year, 6,  1) },
            { temperature: 97, date: new Date(year, 7,  1) },
            { temperature: 93, date: new Date(year, 8,  1) },
            { temperature: 86, date: new Date(year, 9,  1) },
            { temperature: 81, date: new Date(year, 10, 1) },
            { temperature: 79, date: new Date(year, 11, 1) },
        ];

        let minVal: number = Number.MAX_VALUE;
        let maxVal: number = Number.MIN_VALUE;

        let minIndex: number = 0;
        let maxIndex: number = 0;
        let idx: number = 0;

        for (const item of this.categoryData) {

            if (minVal > item.temperature) {
                minVal = item.temperature;
                minIndex = idx;
            }
            if (maxVal < item.temperature) {
                maxVal = item.temperature;
                maxIndex = idx;
            }

            item.index = idx;
            item.value = item.temperature;

            const month = item.date.getMonth();
            if (month >= 11 || month < 3) {
                item.info = "WINTER";
            }
            else if (month >= 3 && month < 5) {
                item.info = "SPRING";
            }
            else if (month >= 5 && month < 8) {
                item.info = "SUMMER";
            }
            else if (month >= 8 && month < 11) {
                item.info = "FALL";
            }
            idx++;
        }

        this.categoryData[minIndex].info = "MIN";
        this.categoryData[maxIndex].info = "MAX";
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/charts/category-chart/annotations
npm install
npm start

# Open http://localhost:3000/ in your browser
```

