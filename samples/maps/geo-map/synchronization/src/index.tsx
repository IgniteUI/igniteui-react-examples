import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { MapUtils, MapRegion } from './MapUtils';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule, IgrSeriesViewer } from 'igniteui-react-charts';
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

    public render(): JSX.Element {
        return (
            <div className="container horizontal">
                <IgrGeographicMap subtitle="Geo1"
                    ref={this.onReferenceMap1}
                    actualWindowRectChanged={this.onWindowRectChangedMap1}
                    width="100%" height="100%" zoomable="true"/>
                <IgrGeographicMap subtitle="Geo2"
                    ref={this.onReferenceMap2}
                    actualWindowRectChanged={this.onWindowRectChangedMap2}
                    width="100%" height="100%" zoomable="true"/>

                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onReferenceMap1(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        MapUtils.navigateTo(geoMap, MapRegion.European);

        this.GeoMap1 = geoMap;
    }

    public onReferenceMap2(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        MapUtils.navigateTo(geoMap, MapRegion.European);

        this.GeoMap2 = geoMap;
    }

    public onWindowRectChangedMap1(geoMap: IgrSeriesViewer, e: IgrRectChangedEventArgs) {
        if (this.GeoMapSynchronizing) { return; }

        this.GeoMapSynchronizing = true;
        this.GeoMap2.windowRect = geoMap.actualWindowRect;
        this.GeoMapSynchronizing = false;
    }

    public onWindowRectChangedMap2(geoMap: IgrSeriesViewer, e: IgrRectChangedEventArgs) {
        if (this.GeoMapSynchronizing) { return; }

        this.GeoMapSynchronizing = true;
        this.GeoMap1.windowRect = e.newRect;
        this.GeoMapSynchronizing = false;
    }
}

// rendering above class to the React DOM
ReactDOM.render(<MapSynchronization />, document.getElementById('root'));
