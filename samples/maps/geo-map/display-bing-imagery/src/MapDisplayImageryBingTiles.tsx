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
