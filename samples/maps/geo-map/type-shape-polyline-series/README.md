<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Geographic Map Scatter Polyline Series.
<!-- in the Geographic Map component -->
<!-- [Geographic Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/type-shape-polyline-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapTypeScatterPolylineSeries.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/type-shape-polyline-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapTypeScatterPolylineSeries.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/type-shape-polyline-series?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapTypeScatterPolylineSeries.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapTypeScatterPolylineSeries.tsx` file:

```tsx
import * as React from 'react';
import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterPolylineSeries extends React.Component {

    public geoMap: IgrGeographicMap;
    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render() {
        return (
            <div className="igContainer" >
                <div className="igComponent" >
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>
                <LegendOverlay dock="BottomLeft">
                    <LegendItem background="rgb(219, 84, 5)"   text="Canadian Roads"/>
                    <LegendItem background="rgb(32, 146, 252)" text="American Roads"/>
                    <LegendItem background="rgb(14, 194, 14)"  text="Mexican Roads"/>
                </LegendOverlay>
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.windowRect = { left: 0.195, top: 0.325, width: 0.2, height: 0.1 };

        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded AmericanRoads.shp " + shapeRecords.length);

        const roadsUSA: any[] = [];
        const roadsMEX: any[] = [];
        const roadsCAN: any[] = [];

        // filtering records of loaded shapefile
        for (const record of shapeRecords) {
            // reading field values loaded from DBF file
            const type = record.fieldValues.RoadType;
            const road = {
                country: record.fieldValues.Country,
                length: record.fieldValues.RoadLength / 10,
                points: record.points,
                type: type === 1 ? "Highway" : "Road",
            };
            // grouping road items by country names
            if (type === 1 || type === 2) {
                if (road.country === "USA") {
                    roadsUSA.push(road);
                } else if (road.country === "MEX") {
                    roadsMEX.push(road);
                } else if (road.country === "CAN") {
                    roadsCAN.push(road);
                }
            }
        }

        // creating polyline series for roads of each country
        this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
        this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
        this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");

        // zooming to bounds of loaded shapefile
        // this.geoMap.zoomToGeographic(sds.worldRect);
    }

    public addSeriesWith(shapeData: any[], shapeBrush: string)
    {
        const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(lineSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleColor = series.shapeStroke;
        const titleStyle = { color: titleColor, fontWeight: 700 } as React.CSSProperties;

        return <div className="tooltipBox">
            <div style={titleStyle}>{dataItem.country} {dataItem.type}</div>
            <div>Length: {dataItem.length} miles</div>
        </div>
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/type-shape-polyline-series
npm install
npm start

```

Then open http://localhost:3000/ in your browser

