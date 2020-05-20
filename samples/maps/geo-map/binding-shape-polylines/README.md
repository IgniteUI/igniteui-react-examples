<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Geographic Map Binding Shapefile Polylines.
<!-- in the Geographic Map component -->
<!-- [Geographic Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-shape-polylines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingShapefilePolylines.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-shape-polylines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingShapefilePolylines.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-shape-polylines?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingShapefilePolylines.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapBindingShapefilePolylines.tsx` file:

```tsx
import * as React from 'react';




import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingShapefilePolylines extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

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
        this.geoMap = map;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };


        // loading a shapefile with geographic polygons
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldCableRoutes.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldCities.shp " + shapeRecords.length);

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM
            };
            geoPolylines.push(route);
        }

        const geoSeries = new IgrGeographicPolylineSeries( { name: "series" });
        geoSeries.dataSource = geoPolylines;
        geoSeries.shapeMemberPath = "points";
        geoSeries.shapeFilterResolution = 0.0;
        geoSeries.shapeStrokeThickness = 3;
        geoSeries.shapeStroke = "rgb(82, 82, 82, 0.4)";
        geoSeries.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(geoSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const capacity = dataItem.capacity + " GB/s";
        const distance = dataItem.distance + " KM";

        return <div>
            {/* <div className="tooltipTitle">{dataItem.name}</div> */}
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Name</div>
                    <div className="tooltipVal">{dataItem.name}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Distance</div>
                    <div className="tooltipVal">{distance}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Capacity</div>
                    <div className="tooltipVal">{capacity}</div>
                </div>
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
cd ./samples/maps/geo-map/binding-shape-polylines
npm install
npm start

```

Then open http://localhost:3000/ in your browser

