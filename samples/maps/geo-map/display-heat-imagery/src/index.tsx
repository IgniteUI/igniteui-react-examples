import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicTileSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrHeatTileGenerator } from 'igniteui-react-core';
import { IgrTileGeneratorMapImagery } from 'igniteui-react-maps';
// background worker
import Worker from "./heatworker.worker"

IgrDataChartInteractivityModule.register();
IgrGeographicMapModule.register();

export default class MapDisplayImageryHeatTiles extends React.Component {

    public map!: IgrGeographicMap;
    public tileImagery: IgrTileGeneratorMapImagery;

    constructor(props: any) {
        super(props);

        this.tileImagery = new IgrTileGeneratorMapImagery();
        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.map = geoMap;
        this.map.zoomToGeographic({ left: -134.5, top: 16.0, width: 70.0, height: 37.0 });
    }

    public componentDidMount() {
        // fetching JSON data with geographic locations from public folder

        fetch("https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv")
            .then((response) => response.text())
            .then((data) => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded UsaCitiesPopulation.csv " + csvLines.length);

        const latitudes: number[] = [];
        const longitudes: number[] = [];
        const populations: number[] = [];

        // parsing CSV data and creating geographic locations
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            latitudes.push(Number(columns[1]));
            longitudes.push(Number(columns[2]));
            populations.push(Number(columns[3]));
        }

        // generating heat map imagery tiles
        const gen = new IgrHeatTileGenerator();
        gen.xValues = longitudes;
        gen.yValues = latitudes;
        gen.values = populations;
        gen.blurRadius = 6;
        gen.maxBlurRadius = 20;
        gen.useBlurRadiusAdjustedForZoom = true;
        gen.minimumColor = "rgba(100, 255, 0, 0.5)";
        gen.maximumColor = "rgba(255, 255, 0, 0.5)";
        gen.useGlobalMinMax = true;
        gen.useGlobalMinMaxAdjustedForZoom = true;
        gen.useLogarithmicScale = true;
        gen.useWebWorkers = true;
        gen.webWorkerInstance = new Worker();
        gen.scaleColors = [
            "rgba(0, 0, 255, .251)", "rgba(0, 255, 255, .3765)",
            "rgba(50,205,50, .2675)", "rgba(255, 255, 0, .7059)",
            "rgba(255, 0, 0, .7843)"
        ];
        this.tileImagery.tileGenerator = gen;

        // generating heat map series
        const series = new IgrGeographicTileSeries( { name: "heatMapSeries" });
        series.tileImagery = this.tileImagery;
        series.showDefaultTooltip = true;

        // add heat map series to the map
        this.map.series.add(series);
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryHeatTiles/>);
