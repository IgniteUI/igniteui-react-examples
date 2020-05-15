<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/sample-template-files/ReadMe.md -->

<!-- ## Table of Contents -->
<!-- - [Sample Preview](#Sample-Preview) -->
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Map Synchronization.
<!-- in the Geo Map component -->
<!-- [Geo Map](https://infragistics.com/Reactsite/components/geo-map.html) -->

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/synchronization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapSynchronization.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/synchronization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapSynchronization.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/synchronization?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapSynchronization.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

The following section provides source code from:
`./src/MapSynchronization.tsx` file:

```tsx
import * as React from 'react';


import { MapUtils, MapRegion } from './MapUtils';

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
// for handling of maps events
import { IgrRectChangedEventArgs } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapSynchronization extends React.Component<any, any> {

    public GeoMap1: IgrGeographicMap;
    public GeoMap2: IgrGeographicMap;
    public GeoMapSynchronizing = false;

    constructor(props: any) {
        super(props);

        this.onReferenceMap2 = this.onReferenceMap2.bind(this);
        this.onReferenceMap1 = this.onReferenceMap1.bind(this);

        this.onWindowRectChangedMap1 = this.onWindowRectChangedMap1.bind(this);
        this.onWindowRectChangedMap2 = this.onWindowRectChangedMap2.bind(this);
    }

    public render() {
        return (
            <div className="igContainer-horizontal">
                <IgrGeographicMap subtitle="Geo1"
                    ref={this.onReferenceMap1}
                    actualWindowRectChanged={this.onWindowRectChangedMap1}
                    width="100%" height="100%" zoomable="true"/>
                <IgrGeographicMap subtitle="Geo2"
                    ref={this.onReferenceMap2}
                    actualWindowRectChanged={this.onWindowRectChangedMap2}
                    width="100%" height="100%" zoomable="true"/>

                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onReferenceMap1(map: IgrGeographicMap) {
        MapUtils.navigateTo(map, MapRegion.European);

        this.GeoMap1 = map;
    }

    public onReferenceMap2(map: IgrGeographicMap) {
        MapUtils.navigateTo(map, MapRegion.European);

        this.GeoMap2 = map;
    }

    public onWindowRectChangedMap1(map: IgrGeographicMap, e: IgrRectChangedEventArgs) {
        if (this.GeoMapSynchronizing) { return; }

        this.GeoMapSynchronizing = true;
        this.GeoMap2.windowRect = map.actualWindowRect;
        this.GeoMapSynchronizing = false;
    }

    public onWindowRectChangedMap2(map: IgrGeographicMap, e: IgrRectChangedEventArgs) {
        if (this.GeoMapSynchronizing) { return; }

        this.GeoMapSynchronizing = true;
        this.GeoMap1.windowRect = e.newRect;
        this.GeoMapSynchronizing = false;
    }
}

```

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/maps/geo-map/synchronization
npm install
npm start

```

Then open http://localhost:3000/ in your browser

