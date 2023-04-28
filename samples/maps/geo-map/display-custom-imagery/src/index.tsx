import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrOpenStreetMapImagery } from 'igniteui-react-maps';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayCustomImagery extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onMapRef = this.onMapRef.bind(this);
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        // website hosting imagery tiles
        const imageryProvider = "https://api.mapbox.com/styles/v1/mapbox/streets-v11";
        // most imagery tiles are provided using deep-zoom format, where 256 is tile size and Z iz zoom level, X is row tile and Y is column tile
        const imageryFormat = "/tiles/256/{Z}/{X}/{Y}";
        // some imagery providers require developers to generate their own token or your app will have limits on provided imagery tiles
        const imageryToken = "?access_token=pk.eyJ1IjoiamFzb25iZXJlcyIsImEiOiJjazFzN2RqeHowMGRxM2dwcnFyNDh4aHJuIn0.UHlVpcnm58aSqBkMRkZpCw";
        // re-using existing OpenStreetMap imagery class for custom imagery source
        let imageryTiles = new IgrOpenStreetMapImagery();
        // setting tile path with above values: https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{Z}/{X}/{Y}?access_token=pk.eyJ1IjoiamFzb25iZXJlcyIsImEiOiJjazFzN2RqeHowMGRxM2dwcnFyNDh4aHJuIn0.UHlVpcnm58aSqBkMRkZpCw
        imageryTiles.tilePath = imageryProvider + imageryFormat + imageryToken;
        // setting custom imagery tiles as background of the geographic map
        geoMap.backgroundContent = imageryTiles;
        // example of tile path that the GeoMap will use
        // https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/0/0/0?access_token=pk.eyJ1IjoiamFzb25iZXJlcyIsImEiOiJjazFzN2RqeHowMGRxM2dwcnFyNDh4aHJuIn0.UHlVpcnm58aSqBkMRkZpCw
    }

    public render(): JSX.Element {
        return (
            <div className="container vertical" >
               <div className="container fill" >
                    <IgrGeographicMap ref={this.onMapRef}
                     width="100%" height="100%" zoomable="true"/>
                </div>
                <div className="overlay-bottom-center overlay-border">Imagery Source: MapBox</div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayCustomImagery/>);
