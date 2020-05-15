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
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-all-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapImagerySources.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-all-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapImagerySources.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/display-all-imagery?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapImagerySources.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapImagerySources.tsx` file:

```tsx
import * as React from 'react';



import { BingMapsImageryStyle } from 'igniteui-react-maps';
import { IgrBingMapsMapImagery } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { EsriUtility, EsriStyle } from './EsriUtility';
import { MapUtils } from './MapUtils';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapImagerySources extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;
    public tileSource: IgrBingMapsMapImagery;

    public bingMapsRoad: IgrBingMapsMapImagery;
    public bingMapsAerial: IgrBingMapsMapImagery;
    public bingMapsLabels: IgrBingMapsMapImagery;

    public ImageryOptions: JSX.Element[];

    constructor(props: any) {
        super(props);

        this.state = { tileSource: "Open Street Map"}
        this.onMapReferenced = this.onMapReferenced.bind(this);

        this.ImageryOptions = [];
        this.ImageryOptions.push(this.getOption("OpenStreetMap", "(Default)"));
        this.ImageryOptions.push(this.getOption("BingMaps", "Road"));
        this.ImageryOptions.push(this.getOption("BingMaps", "Aerial"));
        this.ImageryOptions.push(this.getOption("BingMaps", "Labels"));

        // adding options for selecting public ESRI maps:
        // for (const style of Object.keys(this.EsriMapsImageryServers)) {
        for (const style of Object.keys(EsriStyle)) {
            this.ImageryOptions.push(this.getOption("Esri", style));
        }

        const enums = Object.keys(EsriStyle);
        console.log("ArcGISOnlineMapServers " + enums.length);
    }

    public getOption(source: string, style: string): JSX.Element {
        const key = source + "_" + style;
        const name = source + " " + style;
        return <option id={key} key={key}>{name}</option>
    }

    public render() {
        return (
            <div className="igContainer" style={{background: "white"}}>
{/* height: "calc(100% - 60px)",  */}
                <div className="igComponent" style={{background: "white"}}>
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                    <div className="igOptions">
                        <span className="igOptions-label">Imagery Source: </span>
                        <select value={this.state.tileSource}
                                onChange={this.onTileSourceChanged}>
                                {this.ImageryOptions}
                        </select>
                    </div>
                </div>
                {/*  style={{width: "calc(100% - 70px)"}} */}
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.zoomToGeographic({ left: -120, top: 30, width: 45, height: 20});
    }

    public onTileSourceChanged = (e: any) =>{
        if (this.geoMap === undefined) return;

        const mode = e.target.value.toString().replace(" ", "");
        console.log("setting " + mode);

        if (mode.indexOf("OpenStreetMap") === 0) {
            this.geoMap.backgroundContent = new IgrOpenStreetMapImagery();

        } else if (mode.indexOf("BingMaps") === 0) {
            const tileSource = new IgrBingMapsMapImagery();
            tileSource.apiKey = MapUtils.getBingKey();
            if (mode === "BingMapsRoad") {
                tileSource.imageryStyle = BingMapsImageryStyle.Road;
            } else if (mode === "BingMapsAerial") {
                tileSource.imageryStyle = BingMapsImageryStyle.Aerial;
            } else if (mode === "BingMapsLabels") {
                tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels;
            }
            this.geoMap.backgroundContent = tileSource;

        } else if (mode.indexOf("Esri") === 0) {
            let name = mode.replace("Esri","");
            let style = EsriStyle[name] as EsriStyle;
            let uri = EsriUtility.getUri(style);

            console.log("setting URI " + uri);
            const tileSource = new IgrArcGISOnlineMapImagery();
            // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";
            // tileSource.mapServerUri = EsriStyle.WorldOceansMap;
            tileSource.mapServerUri = uri;
            this.geoMap.backgroundContent = tileSource;
        }

        this.setState({ tileSource:  e.target.value});

    }




}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/display-all-imagery
npm install
npm start

# Open http://localhost:3000/ in your browser
```

