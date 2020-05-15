<!-- WARNING Do not change this file because it wil be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of the Geo Map component. Use the following buttons to open or edit this sample on CodeSandbox website:

<!-- [Geo Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/navigation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapNavigation.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/navigation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapNavigation.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/navigation?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapNavigation.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapNavigation.tsx` file:

```tsx
import * as React from 'react';


import { MapUtils, MapRegion } from './MapUtils';

// for handling of maps events
import { IgrRectChangedEventArgs } from 'igniteui-react-core';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapNavigation extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    public NavigationOptions: JSX.Element[] = [];
    public NavigationRegions: any = {};

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onMapWindowRectChanged = this.onMapWindowRectChanged.bind(this);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.onMapMouseMove = this.onMapMouseMove.bind(this);

        // generating navigation regions and options
        const regions =  MapUtils.getRegions();
        for (const key in regions) {
            if (regions.hasOwnProperty(key)) {
                const region = regions[key];
                const name = region.name;
                this.NavigationRegions[name] = region;
                this.NavigationOptions.push(<option id={name} key={name}>{name}</option>);
            }
        }

        this.state = {
            selectedRegion: MapRegion.UnitedStates,
            mapRegion: this.NavigationRegions[MapRegion.UnitedStates],
            mapHoverGeographicCoordinate: { x: 0, y: 0 },
            mapHoverRelativeCoordinate: { x: 0, y: 0 },
            mapHoverWindowCoordinate: { x: 0, y: 0 },

            windowRect: { left: 0, top: 0, height: 1, width: 1 },
            windowScale: 0,
            windowPositionVertical: 0,
            windowPositionHorizontal: 0,
        };
    }

    public render() {
        return (
            <div className="igContainer"    >

                <div className="igComponent" id="map" >
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        actualWindowRectChanged={this.onMapWindowRectChanged}

                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>

                <div className="igOverlay-top-left" style={{color: "black", padding: "10px"}} >
                    <label className="igOverlay-label">Select Map Region</label>
                    <select value={this.state.selectedRegion}
                            onChange={this.onSelectionChanged}>
                            {this.NavigationOptions}
                    </select>
                    <label className="igOverlay-label">Map Geographic Rect</label>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Top:</label>
                        <label className="igOverlay-value">{MapUtils.toLat(this.state.mapRegion.top)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Left:</label>
                        <label className="igOverlay-value">{MapUtils.toLng(this.state.mapRegion.left)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Height:</label>
                        <label className="igOverlay-value">{MapUtils.toLat(this.state.mapRegion.height)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Width:</label>
                        <label className="igOverlay-value">{MapUtils.toLng(this.state.mapRegion.width)}</label>
                    </div>
                    <label className="igOverlay-label">Map Window Rect</label>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Top:</label>
                        <label className="igOverlay-value">{this.state.windowRect.top.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Left:</label>
                        <label className="igOverlay-value">{this.state.windowRect.left.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Height:</label>
                        <label className="igOverlay-value">{this.state.windowRect.height.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Width:</label>
                        <label className="igOverlay-value">{this.state.windowRect.width.toFixed(4)}</label>
                    </div>
                    <label className="igOverlay-label">Map Window Position</label>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Horizontal:</label>
                        <label className="igOverlay-value">{this.state.windowPositionHorizontal.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Vertical:</label>
                        <label className="igOverlay-value">{this.state.windowPositionVertical.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Scale:</label>
                        <label className="igOverlay-value">{this.state.windowScale.toFixed(4)}</label>
                    </div>
                    <label className="igOverlay-label">Map Hover Coordinates</label>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Longitude:</label>
                        <label className="igOverlay-value">{MapUtils.toLng(this.state.mapHoverGeographicCoordinate.x)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Latitude:</label>
                        <label className="igOverlay-value">{MapUtils.toLat(this.state.mapHoverGeographicCoordinate.y)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Window X:</label>
                        <label className="igOverlay-value">{this.state.mapHoverWindowCoordinate.x.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Window Y:</label>
                        <label className="igOverlay-value">{this.state.mapHoverWindowCoordinate.y.toFixed(4)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Pixel X:</label>
                        <label className="igOverlay-value">{MapUtils.toPixel(this.state.mapHoverRelativeCoordinate.x)}</label>
                    </div>
                    <div className="igOverlay-row">
                        <label className="igOverlay-field">Pixel Y:</label>
                        <label className="igOverlay-value">{MapUtils.toPixel(this.state.mapHoverRelativeCoordinate.y)}</label>
                    </div>
                </div>

                <div className="igOverlay-bottom-right">Imagery Tiles: @ESRI/ArcGIS</div>
            </div>
        );
    }

    public windowPositionHorizontalChanged = (e: any) => {
        this.geoMap.windowPositionHorizontal = e.target.valueAsNumber;
    }

    public windowPositionVerticalChanged = (e: any) => {
        this.geoMap.windowPositionVertical = e.target.valueAsNumber;
    }

    public windowScaleChanged = (e: any) => {
        this.geoMap.windowScale = e.target.valueAsNumber;
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.zoomToGeographic({ left:-134.5, top:16.5, width:70.0, height:37.0 });

        // optional
        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);
        this.geoMap.backgroundContent = tileSource;

        this.geoMap.windowPositionHorizontal = 0.1;
        this.geoMap.windowPositionVertical = 0.1;
        this.geoMap.windowScale = 0.1;
    }

    public onMapWindowRectChanged(geoMap: IgrGeographicMap, e: IgrRectChangedEventArgs) {

        // converting window rect to geographic rect/region:
        const geoRect: any = geoMap.getGeographicFromZoom(e.newRect);
        geoRect.bottom = geoRect.top + geoRect.height;
        geoRect.right = geoRect.left + geoRect.width;
        // calculating center of geographic region
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);

        const h = geoMap.actualWindowPositionHorizontal;
        const v = geoMap.actualWindowPositionVertical;
        const s = geoMap.actualWindowScale;

        this.setState({
            mapRegion: geoRect,
            windowRect: e.newRect,
            windowPositionHorizontal: h,
            windowPositionVertical: v,
            windowScale: s
        });

        // console.log("{ " +
        // "left: " + geoRect.left.toFixed(1) + ", " +
        // "top: " + geoRect.top.toFixed(1) + ", " +
        // "width: "  + geoRect.width.toFixed(1) + ", " +
        // "height: "  + geoRect.height.toFixed(1) + " " +
        // "}");
    }

    public onMapMouseMove(e: any) {
        const bounds = e.target.getBoundingClientRect();
        const relativeCoordinate = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        };

        const windowCoordinate = {
            x: (e.clientX - bounds.left) / bounds.width,
            y: (e.clientY - bounds.top) / bounds.height
        };

        // converting mouse pixel coordinate to geographic coordinate:
        const geoCoordinate: any = this.geoMap.getGeographicPoint(relativeCoordinate);

        this.setState({
            mapHoverGeographicCoordinate: geoCoordinate,
            mapHoverRelativeCoordinate: relativeCoordinate,
            mapHoverWindowCoordinate: windowCoordinate
        });

        // console.log(
        //     " win: " + winPoint.x.toFixed(3) + ", "  + winPoint.y.toFixed(3) + " >>" +
        //     " geo: " + mapPoint.x.toFixed(0) + ", "  + mapPoint.y.toFixed(0));
    }

    public componentDidMount() {
        const elem = document.getElementById('map');
        elem.addEventListener('mousemove', this.onMapMouseMove, false);
    }

    public onSelectionChanged = (e: any) =>{
        if (this.geoMap === undefined) return;

        const name = e.target.value.toString();
        const region = this.NavigationRegions[name];

        this.geoMap.zoomToGeographic(region);

        this.setState({ selectedRegion: name});
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/navigation
npm install
npm start

# Open http://localhost:3000/ in your browser
```

