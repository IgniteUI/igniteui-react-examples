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
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-bing-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryBingTiles.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-bing-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryBingTiles.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-bing-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryBingTiles.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapDisplayImageryBingTiles.tsx` file:

```tsx
import * as React from 'react';


import { MapUtils, MapRegion } from './MapUtils';

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrBingMapsMapImagery } from 'igniteui-react-maps';
import { BingMapsImageryStyle } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

// for handling of maps events
import { IgrRectChangedEventArgs } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryBingTiles extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="igContainer-horizontal" >
                <IgrGeographicMap
                    ref={this.onBingMapsLabels}
                    width="100%" height="100%" zoomable="true"/>
                <IgrGeographicMap
                    ref={this.onBingMapsArial}
                    width="100%" height="100%" zoomable="true"/>
                <IgrGeographicMap
                    ref={this.onBingMapsRoad}
                    // actualWindowRectChanged={this.onMapWindowRectChanged}
                    width="100%" height="100%" zoomable="true"/>

                <div className="igOverlay-bottom-right">Imagery Tiles: @Bing Maps</div>
            </div>
        );
    }

    public onBingMapsLabels(geoMap: IgrGeographicMap) {
        const tileSource = new IgrBingMapsMapImagery();
        tileSource.apiKey = MapUtils.getBingKey();
        tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels;
        // resolving BingMaps uri based on HTTP protocol of hosting website
        let tileUri = tileSource.actualBingImageryRestUri;
        let isHttpSecured = window.location.toString().startsWith("https:");
        if (isHttpSecured) {
            tileSource.bingImageryRestUri = tileUri.replace("http:", "https:");
        } else {
            tileSource.bingImageryRestUri = tileUri.replace("https:", "http:");
        }

        geoMap.backgroundContent = tileSource;

        // optional - navigating to a map region
        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onBingMapsArial(geoMap: IgrGeographicMap) {
        const tileSource = new IgrBingMapsMapImagery();
        tileSource.apiKey = MapUtils.getBingKey();
        tileSource.imageryStyle = BingMapsImageryStyle.Aerial;
        // resolving BingMaps uri based on HTTP protocol of hosting website
        let tileUri = tileSource.actualBingImageryRestUri;
        let isHttpSecured = window.location.toString().startsWith("https:");
        if (isHttpSecured) {
            tileSource.bingImageryRestUri = tileUri.replace("http:", "https:");
        } else {
            tileSource.bingImageryRestUri = tileUri.replace("https:", "http:");
        }

        geoMap.backgroundContent = tileSource;

        // optional - navigating to a map region
        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onBingMapsRoad(geoMap: IgrGeographicMap) {
        const tileSource = new IgrBingMapsMapImagery();
        tileSource.apiKey = MapUtils.getBingKey();
        tileSource.imageryStyle = BingMapsImageryStyle.Road;
        // resolving BingMaps uri based on HTTP protocol of hosting website
        let tileUri = tileSource.actualBingImageryRestUri;
        let isHttpSecured = window.location.toString().startsWith("https:");
        if (isHttpSecured) {
            tileSource.bingImageryRestUri = tileUri.replace("http:", "https:");
        } else {
            tileSource.bingImageryRestUri = tileUri.replace("https:", "http:");
        }

        geoMap.backgroundContent = tileSource;

        // optional - navigating to a map region
        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onMapWindowRectChanged(geoMap: IgrGeographicMap, e: IgrRectChangedEventArgs) {
        const rect = e.newRect;
        console.log("win \n left:" + rect.left +
        ", top:" + rect.top + ", width:"  + rect.width + ", height:"  + rect.height);

        const geo = geoMap.getGeographicFromZoom(rect);
        console.log("geo \n left:" + geo.left +
        ", top:" + geo.top + ", width:"  + geo.width + ", height:"  + geo.height);
    }

}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/display-bing-imagery
npm install
npm start

# Open http://localhost:3000/ in your browser
```

