<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Geographic Map Binding Data CSV.
<!-- in the Geographic Map component -->
<!-- [Geographic Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingDataCSV.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingDataCSV.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingDataCSV.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/MapBindingDataCSV.tsx](./src/MapBindingDataCSV.tsx) file.

<!-- The following section provides source code from:
`./src/MapBindingDataCSV.tsx` file: -->

<!-- ```tsx
import * as React from 'react';
import WorldUtils from "./WorldUtils"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingDataCSV extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent" >
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder

        fetch("https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv")
            .then((response) => response.text())
            .then(data => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);

        // parsing CSV data and creating geographic locations
        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                latitude:  Number(columns[1]),
                longitude: Number(columns[2]),
                name:  columns[0],
                population: Number(columns[3])
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgrGeographicHighDensityScatterSeries( { name: "hdSeries" });
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath  = "latitude";
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.createTooltip;
        geoSeries.mouseOverEnabled = true;

        // adding symbol series to the geographic amp
        this.geoMap.series.add(geoSeries);

        // zooming to bound of lower 48-states
        const geoBounds = {
            left: -130,
            top: 15,
            width: Math.abs(-130 + 65),
            height: Math.abs(50 - 15)
        };
        this.geoMap.zoomToGeographic(geoBounds);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const lat = WorldUtils.toStringLat(dataItem.latitude);
        const lon = WorldUtils.toStringLon(dataItem.longitude);
        const population = WorldUtils.toStringAbbr(dataItem.population);

        return <div>
            <div className="tooltipTitle">{dataItem.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Latitude:</div>
                    <div className="tooltipVal">{lat}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Longitude:</div>
                    <div className="tooltipVal">{lon}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population: </div>
                    <div className="tooltipVal">{population}</div>
                </div>
            </div>
        </div>
    }

}

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/binding-csv-points
npm install
npm start

```

Then open http://localhost:3000/ in your browser

