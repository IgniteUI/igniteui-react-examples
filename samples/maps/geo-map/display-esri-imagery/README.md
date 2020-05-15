<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Map Display Imagery Esri Tiles.
<!-- in the Geo Map component -->
<!-- [Geo Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-esri-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryEsriTiles.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-esri-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryEsriTiles.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-esri-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryEsriTiles.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapDisplayImageryEsriTiles.tsx` file:

```tsx
import * as React from 'react';


import { MapUtils, MapRegion } from './MapUtils';

import { EsriUtility, EsriStyle } from './EsriUtility';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryEsriTiles extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.onEsriMapStreet = this.onEsriMapStreet.bind(this);
        this.onEsriMapOceans = this.onEsriMapOceans.bind(this);
        this.onEsriMapNational = this.onEsriMapNational.bind(this);
        this.onEsriMapTopographic = this.onEsriMapTopographic.bind(this);
    }

    public render() {
        return (
            <div className="igContainer" >
                <div className="igContainer-horizontal">
                    <IgrGeographicMap
                        ref={this.onEsriMapStreet}
                        width="100%" height="100%" zoomable="true"/>
                    <IgrGeographicMap
                        ref={this.onEsriMapTopographic}
                        width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="igContainer-horizontal">
                    <IgrGeographicMap
                        ref={this.onEsriMapOceans}
                        width="100%" height="100%" zoomable="true"/>
                    <IgrGeographicMap
                        ref={this.onEsriMapNational}
                        width="100%" height="100%" zoomable="true"/>
                </div>

                <div className="igOverlay-bottom-right">Imagery Tiles: @ESRI/ArcGIS</div>
            </div>
        );
    }

    public onEsriMapStreet(geoMap: IgrGeographicMap) {
        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldStreetMap);
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onEsriMapOceans(geoMap: IgrGeographicMap) {
        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);
        // or
        // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onEsriMapTopographic(geoMap: IgrGeographicMap) {
        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldTopographicMap);
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }

    public onEsriMapNational(geoMap: IgrGeographicMap) {
        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldNationalGeoMap);
        geoMap.backgroundContent = tileSource;

        MapUtils.navigateTo(geoMap, MapRegion.Caribbean);
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/display-esri-imagery
npm install
npm start

```

Then open http://localhost:3000/ in your browser

