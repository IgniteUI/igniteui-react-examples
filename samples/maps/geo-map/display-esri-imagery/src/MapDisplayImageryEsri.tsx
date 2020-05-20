import * as React from 'react';


import { MapUtils, MapRegion } from './MapUtils';

import { EsriUtility, EsriStyle } from './EsriUtility';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapDisplayImageryEsri extends React.Component<any, any> {

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
