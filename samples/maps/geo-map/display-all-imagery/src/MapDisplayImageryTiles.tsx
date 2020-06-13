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

export default class MapDisplayImageryTiles extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;
    public tileSource: IgrBingMapsMapImagery;

    public bingMapsRoad: IgrBingMapsMapImagery;
    public bingMapsAerial: IgrBingMapsMapImagery;
    public bingMapsLabels: IgrBingMapsMapImagery;

    public ImageryOptions: JSX.Element[];

    constructor(props: any) {
        super(props);

        this.state = { tileSource: "Open Street Map"}
        this.onMapRef = this.onMapRef.bind(this);

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

    public render(): JSX.Element {
        return (
            <div className="igContainer" style={{background: "white"}}>
{/* height: "calc(100% - 60px)",  */}
                <div className="igComponent" style={{background: "white"}}>
                    <IgrGeographicMap
                        ref={this.onMapRef}
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

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
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
