import * as React from "react";

import "./GeoMapSharedStyles.css";
import { MapUtils, MapRegion } from "./MapUtils";

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
