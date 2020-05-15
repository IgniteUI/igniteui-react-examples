<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Map Binding Multiple Sources.
<!-- in the Geo Map component -->
<!-- [Geo Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <!-- <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-multiple-sources?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingMultipleSources.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.5rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a> -->
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-multiple-sources?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingMultipleSources.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-multiple-sources?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapBindingMultipleSources.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

## Source Code

The following section provides source code from:
`./src/MapBindingMultipleSources.tsx` file:

```tsx
import * as React from 'react';


import WorldConnections from "./WorldConnections";

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingMultipleSources extends React.Component {

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
                        zoomable="true" />
                </div>
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
                <span className="igOverlay-bottom-left">Data Source: IG</span>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        const worldFlights = WorldConnections.getFlights();
        const worldAirports = WorldConnections.getAirports();
        const worldGridlines = WorldConnections.getGridlines();

        this.addPolylineSeriesWith(worldFlights);
        this.addGridlineSeriesWith(worldGridlines);
        this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data : any[])
    {
        const gridSeries = new IgrGeographicPolylineSeries( { name: "gridSeries" });
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        gridSeries.tooltipTemplate = this.createGridlineTooltip;
        this.geoMap.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data : any[])
    {
        const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.createPolylineTooltip;
        this.geoMap.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data : any[])
    {
        const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.createSymbolTooltip;
        this.geoMap.series.add(symbolSeries);
    }

    public createSymbolTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleColor = dataContext.series.brush;
        const titleStyle = { color: titleColor } as React.CSSProperties;

        return <div  >
            <div className="tooltipTitle" style={titleStyle}>City: {dataItem.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Country:</div>
                    <div className="tooltipVal">{dataItem.country}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population:</div>
                    <div className="tooltipVal">{dataItem.pop.toFixed(1)} M</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Flights:</div>
                    <div className="tooltipVal">{dataItem.flights}</div>
                </div>
            </div>
        </div>
    }

    public createGridlineTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleStyle = { color: dataContext.series.brush, fontWeight: 700 } as React.CSSProperties;

        const deg = Math.abs(dataItem.degree).toFixed(1);
        const info = deg + "°" + dataItem.direction;

        return <div>
            <div style={titleStyle}>{info}</div>
        </div>
    }

    public createPolylineTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleStyle = { color: "rgb(151, 7, 7)" } as React.CSSProperties;

        return <div>
            <div className="tooltipTitle" style={titleStyle}>{dataItem.origin.name} - {dataItem.dest.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Distance:</div>
                    <div className="tooltipVal">{dataItem.distance.toFixed(0)} km</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Duration:</div>
                    <div className="tooltipVal">{dataItem.time.toFixed(1)} h</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Passengers:</div>
                    <div className="tooltipVal">{dataItem.passengers}</div>
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
cd ./samples/maps/geo-map/binding-multiple-sources
npm install
npm start

```

Then open http://localhost:3000/ in your browser

