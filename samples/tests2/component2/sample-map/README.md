<!-- NOTE: do not change this file because it will be auto re-generated from template file: -->
<!-- https://github.com/IgniteUI/igniteui-react-examples/tree/master/templates/sample/ReadMe.md -->

<!-- ## Table of Contents -->
- [Preview](#Preview)
- [Source Code](#Source-Code)
- [Instructions](#Instructions)

This folder contains implementation of React application with example of Component2 Display Imagery OSM.
<!-- in the Component2 component -->
<!-- [Component2](https://infragistics.com/Reactsite/components/component2.html) -->

## Preview

You can preview example of this React application on CodeSandbox by clicking on this sample:

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <body>
        <a target="_blank" href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/tests2/component2/sample-map?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryOSM.tsx" rel="noopener noreferrer">
            <img height="40px" style="border-radius: 0.25rem" alt="Edit on CodeSandbox" src="https://static.infragistics.com/xplatform/images/sandbox/code.png"/>
        </a>
        <!-- <a target="_blank"
href="https://codesandbox.io/s/github/IgniteUI/igniteui-react-examples/tree/master/samples/maps/geo-map/binding-csv-points?fontsize=14&hidenavigation=1&theme=dark&view=preview">
            <img alt="Edit Sample" src="https://codesandbox.io/static/img/play-codesandbox.svg"/>
        </a> -->
        <!-- <a target="_blank" style="margin-left: 0.5rem"
href="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/tests2/component2/sample-map?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryOSM.tsx">
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
  src="https://codesandbox.io/embed/github/IgniteUI/igniteui-react-examples/tree/master/samples/tests2/component2/sample-map?fontsize=14&hidenavigation=1&theme=dark&view=preview&file=/src/MapDisplayImageryOSM.tsx"
  style="width:100%; height:400px; border:0; border-radius: 4px; overflow:hidden;"
  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe> -->

## Source Code

You can find source code for this example in :
[./src/MapDisplayImageryOSM.tsx](./src/MapDisplayImageryOSM.tsx) file.

<!-- The following section provides source code from:
`./src/MapDisplayImageryOSM.tsx` file: -->

<!-- ```tsx
import * as React from 'react';
// for handling of maps events
import { IgrRectChangedEventArgs } from 'igniteui-react-core';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryOSM extends React.Component<any, any> {

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
                        // actualWindowRectChanged={this.onMapWindowRectChanged}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapReferenced(geoMap: IgrGeographicMap) {
        const mapImagery = new IgrOpenStreetMapImagery();
        geoMap.backgroundContent = mapImagery;

        const geoRect = { left: -150.0, top: -60.0, width: 315.0, height: 140.0 };
        geoMap.zoomToGeographic(geoRect);
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

``` -->

## Instructions
To run this sample locally, execute these commands:

```
git clone https://github.com/IgniteUI/igniteui-react-examples.git
cd igniteui-react-examples
cd ./samples/tests2/component2/sample-map
npm install
npm start

```

Then open http://localhost:3000/ in your browser

