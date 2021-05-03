import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
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

        this.state = { tileSource: "Esri WorldTopographicMap"}
        this.onMapRef = this.onMapRef.bind(this);

        this.ImageryOptions = [];
        this.ImageryOptions.push(this.getOption("OpenStreetMap", "(Default)"));
        this.ImageryOptions.push(this.getOption("BingMaps", "Road"));
        this.ImageryOptions.push(this.getOption("BingMaps", "Aerial Without Labels"));
        this.ImageryOptions.push(this.getOption("BingMaps", "Aerial With Labels"));

        // adding options for selecting public ESRI maps:
        // for (const style of Object.keys(this.EsriMapsImageryServers)) {
        for (const style of Object.keys(EsriStyle)) {
            this.ImageryOptions.push(this.getOption("Esri", style));
        }

        const enums = Object.keys(EsriStyle);
        // console.log("ArcGISOnlineMapServers " + enums.length);
    }

    public getOption(source: string, style: string): JSX.Element {
        const name = source + " " + style;
        return <option id={name} key={name}>{name}</option>
    }

    public render(): JSX.Element {
        return (
            <div className="container sample" >

                <div className="options horizontal" >
                    <label className="options-label">Imagery Tile Source</label>
                    <select value={this.state.tileSource}
                            onChange={this.onTileSourceChanged}
                            style={{width: "15rem"}}>
                            {this.ImageryOptions}
                    </select>
                </div>

                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true"/>

                </div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.zoomToGeographic({ left: -120, top: 30, width: 45, height: 20});

        const tileSource = new IgrArcGISOnlineMapImagery();
        tileSource.mapServerUri = EsriStyle.WorldTopographicMap;
        this.geoMap.backgroundContent = tileSource;
    }

    public onTileSourceChanged = (e: any) =>{
        if (this.geoMap === undefined) return;

        const mode = e.target.value.toString().replace(" ", "");
        // console.log("setting " + mode);

        if (mode.indexOf("OpenStreetMap") === 0) {
            this.geoMap.backgroundContent = new IgrOpenStreetMapImagery();

        } else if (mode.indexOf("BingMaps") === 0) {
            const tileSource = new IgrBingMapsMapImagery();
            tileSource.apiKey = MapUtils.getBingKey();
            if (mode === "BingMapsRoad") {
                tileSource.imageryStyle = BingMapsImageryStyle.Road;
            } else if (mode === "BingMapsAerialWithoutLabels") {
                tileSource.imageryStyle = BingMapsImageryStyle.Aerial;
            } else if (mode === "BingMapsLabelsWithLabels") {
                tileSource.imageryStyle = BingMapsImageryStyle.AerialWithLabels;
            }
            this.geoMap.backgroundContent = tileSource;

        } else if (mode.indexOf("Esri") === 0) {
            let name = mode.replace("Esri","");
            let style = EsriStyle[name] as EsriStyle;
            let uri = EsriUtility.getUri(style);

            // console.log("setting URI " + uri);
            const tileSource = new IgrArcGISOnlineMapImagery();
            tileSource.mapServerUri = uri;
            // or
            // tileSource.mapServerUri = EsriStyle.WorldOceansMap;
            // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer";
            this.geoMap.backgroundContent = tileSource;
        }

        this.setState({ tileSource:  e.target.value});

    }

}

// rendering above class to the React DOM
ReactDOM.render(<MapDisplayImageryTiles />, document.getElementById('root'));
