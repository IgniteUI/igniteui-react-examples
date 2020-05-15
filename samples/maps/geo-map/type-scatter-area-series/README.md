<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Map Type Scatter Area Series.
<!-- in the Geo Map component -->
<!-- [Geo Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/type-scatter-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapTypeScatterAreaSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/type-scatter-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapTypeScatterAreaSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/type-scatter-area-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapTypeScatterAreaSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/MapTypeScatterAreaSeries.tsx` file:

```tsx
import * as React from 'react';


import WorldUtils from "./WorldUtils"
import LegendOverlay from "./LegendOverlay"

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicScatterAreaSeries } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';

import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterAreaSeries extends React.Component<any, any> {

    private geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render() {
        return (
            <div className="igContainer" >
                <IgrGeographicMap
                    ref={this.onMapReferenced}
                    width="100%"
                    height="100%"
                    zoomable="true" />
                <LegendOverlay dock="BottomLeft"
                text="Source: NOAA" href="https://www.noaa.gov/" />
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };


        // loading a shapefile with geographic shapes
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldTemperatures.shp: " + shapeRecords.length);

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                     for (let i = 0; i < shapes.length; i++) {
                        if (i % 5 === 0) {
                            const point = shapes[i];
                            const item = { lon: point.x, lat: point.y, value: temp};
                            contourPoints.push(item);
                        }
                     }
                }
            }
        }

        console.log("loaded contour points: " + contourPoints.length);
        this.createAreaSeries(contourPoints);
    }

    public createAreaSeries(data: any[])
    {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)",  // semi-transparent red
        ];

        const colorScale = new IgrCustomPaletteColorScale({});
        colorScale.palette = brushes;
        colorScale.minimumValue = 0;
        colorScale.maximumValue = 30;

        const areaSeries = new IgrGeographicScatterAreaSeries( { name: "areaSeries" });
        areaSeries.dataSource = data;
        areaSeries.longitudeMemberPath = "lon";
        areaSeries.latitudeMemberPath = "lat";
        areaSeries.colorMemberPath = "value";
        areaSeries.colorScale = colorScale;
        areaSeries.tooltipTemplate = this.createAreaTooltip;

        this.geoMap.series.add(areaSeries);
    }

    public createAreaTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const lat = WorldUtils.toStringLat(dataItem.lat);
        const lon = WorldUtils.toStringLon(dataItem.lon);
        const tmp = dataItem.value.toFixed(1) + "°C";
        return <div className="tooltipBox">
            <div className="tooltipRow">
                <div className="tooltipLbl">Temperature:</div>
                <div className="tooltipVal"> {tmp}</div>
            </div>
            <div className="tooltipRow">
                <div className="tooltipLbl">Latitude:</div>
                <div className="tooltipVal"> {lat}</div>
            </div>
            <div className="tooltipRow">
                <div className="tooltipLbl">Longitude:</div>
                <div className="tooltipVal"> {lon}</div>
            </div>
        </div>
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/type-scatter-area-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

