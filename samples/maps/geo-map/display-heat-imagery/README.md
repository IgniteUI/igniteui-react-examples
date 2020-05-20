<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Geographic Map Display Imagery Heat Tiles.
<!-- in the Geographic Map component -->
<!-- [Geographic Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-heat-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryHeatTiles.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-heat-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryHeatTiles.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-heat-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryHeatTiles.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapDisplayImageryHeatTiles.tsx` file:

```tsx
import * as React from 'react';




import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicTileSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrHeatTileGenerator } from 'igniteui-react-core';
import { IgrTileGeneratorMapImagery } from 'igniteui-react-maps';

// background worker
import Worker from "./heatworker.worker"

IgrDataChartInteractivityModule.register();
IgrGeographicMapModule.register();

export default class MapDisplayImageryHeatTiles extends React.Component {

    public map!: IgrGeographicMap;
    public tileImagery: IgrTileGeneratorMapImagery;

    constructor(props: any) {
        super(props);

        this.tileImagery = new IgrTileGeneratorMapImagery();
        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
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
        this.map = map;
        this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder

        fetch("https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);

        const latitudes: number[] = [];
        const longitudes: number[] = [];
        const populations: number[] = [];

        // parsing CSV data and creating geographic locations
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            latitudes.push(Number(columns[1]));
            longitudes.push(Number(columns[2]));
            populations.push(Number(columns[3]));
        }

        // generating heat map imagery tiles
        const gen = new IgrHeatTileGenerator();
        gen.xValues = longitudes;
        gen.yValues = latitudes;
        gen.values = populations;
        gen.blurRadius = 6;
        gen.maxBlurRadius = 20;
        gen.useBlurRadiusAdjustedForZoom = true;
        gen.minimumColor = "rgba(100, 255, 0, 0.5)";
        gen.maximumColor = "rgba(255, 255, 0, 0.5)";
        gen.useGlobalMinMax = true;
        gen.useGlobalMinMaxAdjustedForZoom = true;
        gen.useLogarithmicScale = true;
        gen.useWebWorkers = true;
        gen.webWorkerInstance = new Worker();

        gen.scaleColors = [
            "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
            "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
            "rgba(255, 0, 0, .7843)"
        ];
        this.tileImagery.tileGenerator = gen;

        // generating heat map series
        const series = new IgrGeographicTileSeries( { name: "heatMapSeries" });
        series.tileImagery = this.tileImagery;

        // add heat map series to the map
        this.map.series.add(series);
    }
}
```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/display-heat-imagery
npm install
npm start

```

Then open http://localhost:3000/ in your browser

