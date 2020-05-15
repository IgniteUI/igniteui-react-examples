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
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/custom-tooltips?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapCustomTooltips.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.3rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/edit.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/custom-tooltips?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapCustomTooltips.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/custom-tooltips?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapCustomTooltips.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapCustomTooltips.tsx` file:

```tsx

import * as React from 'react';


import WorldUtils from "./WorldUtils"

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapCustomTooltips extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.createSymbolTooltip = this.createSymbolTooltip.bind(this);
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
        console.log("onDataLoaded");
        const geoRegion = { height: 170, left: -180, top: -85.0, width: 360 };
        this.geoMap = map;
        this.geoMap.zoomToGeographic(geoRegion);

        const cityQTR = { lat: 25.285, lon:  51.531,  isoCode: "qat", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  isoCode: "pan", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, isoCode: "chl", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, isoCode: "jpn", name: "Tokyo" };
        const cityNYC = { lat: 40.750, lon: -74.0999, isoCode: "usa", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  isoCode: "sgp", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  isoCode: "rus", name: "Moscow" };
        const cityLAX = { lat: 34.000, lon: -118.25,  isoCode: "usa", name: "Los Angeles" };

        const AmericanCities = [cityCHL, cityPAN, cityNYC, cityLAX, ];
        const AsianCities = [ citySNG, cityMOS, cityJAP, cityQTR, ];

        this.createSymbolSeries(AmericanCities, "Green");
        this.createSymbolSeries(AsianCities, "Red");
    }

    public createSymbolSeries(geoLocations: any[], brush: string)
    {
        const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.createSymbolTooltip;

        this.geoMap.series.add(symbolSeries);
    }

    public createSymbolTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const iso = dataItem.isoCode.toUpperCase();
        const lat = WorldUtils.toStringLat(dataItem.lat);
        const lon = WorldUtils.toStringLon(dataItem.lon);
        const svg = dataItem.isoCode.toLowerCase() + '.svg';
        const scr = 'https://static.infragistics.com/xplatform/images/flags/' + svg;

        const seriesStyle = { color: dataContext.series.markerOutline } as React.CSSProperties;
        const contentStyle = { display: "inline-block", marginLeft: 5 } as React.CSSProperties;

        return <div >
            {/* style={imageStyle} style={borderStyle}*/}
            <div className="tooltipFlagBoarder">
                <img className="tooltipFlagImage" src={scr}   />
            </div>
            <div style={contentStyle}>
                <div className="tooltipBox">
                    <div className="tooltipRow">
                        <div className="tooltipLbl">City:</div>
                        <div className="tooltipVal" style={seriesStyle}>{dataItem.name}</div>
                    </div>
                    <div className="tooltipRow">
                        <div className="tooltipLbl">Latitude:</div>
                        <div className="tooltipVal" style={seriesStyle}>{lat} </div>
                    </div>
                    <div className="tooltipRow">
                        <div className="tooltipLbl">Longitude:</div>
                        <div className="tooltipVal" style={seriesStyle}>{lon}</div>
                    </div>
                    <div className="tooltipRow">
                        <div className="tooltipLbl">ISO Code:</div>
                        <div className="tooltipVal" style={seriesStyle}>{iso}</div>
                    </div>
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
cd ./samples/maps/geo-map/custom-tooltips
npm install
npm start

# Open http://localhost:3000/ in your browser
```

