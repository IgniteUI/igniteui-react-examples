import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingDataGeoJsonShapes extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;
    public shapeMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.geoMapRef = this.geoMapRef.bind(this);

        // loading Geo JSON files
        let geoJsonFiles: any[] = [
            'https://static.infragistics.com/xplatform/json/countries/fra.geo.json', // france
            'https://static.infragistics.com/xplatform/json/countries/deu.geo.json', // germany
            'https://static.infragistics.com/xplatform/json/countries/pol.geo.json', // poland
            'https://static.infragistics.com/xplatform/json/countries/ukr.geo.json', // ukraine
        ];
        for (const url of geoJsonFiles) {
            fetch(url)
            .then((response) => response.json())
            .then(data => this.geoJsonLoaded(data, url));
        }
    }

    // loading Geo JSON data that requires conversion to shape data for the GeoMap
    public geoJsonLoaded(jsonData: any, url: string) {
        let shapePoints: any[] = [];
        let jsonGeometry = jsonData.features[0].geometry;

        // GeoJson file format stores geographic coordinates in different structures
        // and we need to flatten them and convert to shape points with x/y values for the GeoMap
        if (jsonGeometry.type === "Polygon") {
            // coordinates nested in 3 arrays of arrays
            for (const coordinate of  jsonGeometry.coordinates) {
                let arrayPoints: any[] = [];
                for (const point of coordinate) {
                    arrayPoints.push({ x: point[0], y: point[1]});
                }
                shapePoints.push(arrayPoints);
            }
        }
        else if (jsonGeometry.type === "MultiPolygon") {
            // coordinates nested in 4 arrays of arrays
            for (const multipleItems of  jsonGeometry.coordinates) {
                for (const coordinate of multipleItems) {
                    let arrayPoints: any[] = [];
                    for (const point of coordinate) {
                        arrayPoints.push({ x: point[0], y: point[1]});
                    }
                    shapePoints.push(arrayPoints);
                }
            }
        }

        let countryName: string = jsonData.features[0].properties.cca2.toUpperCase();
        let countryDataItem = { label: name, points: shapePoints};

        // creating geographic series for each country data converted from GeoJSOn data
        // optionally multiple data items for countries could be stored in an array
        // and they bound to single geographic series
        let seriesName = "series" +  this.geoMap.actualSeries.length;
        const series = new IgrGeographicShapeSeries( { name: seriesName });
        series.dataSource =  [ countryDataItem ];
        series.shapeMemberPath = "points";
        series.title = countryName;
        series.outline = "rgba(0, 0, 0, 0.9)";
        series.tooltipTemplate = this.createTooltip;
        series.thickness = 1;
        series.shapeOpacity = 0.75;

        this.geoMap.series.add(series);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample vertical" style={{ padding: "0.5rem"}}>
                <IgrGeographicMap
                    ref={this.geoMapRef}
                    width="100%"
                    height="100%"
                    zoomable="true">
                </IgrGeographicMap>
            </div>
        );
    }

    public geoMapRef(map: IgrGeographicMap) {
        if (!map) { return; }

        this.geoMap = map;
        this.geoMap.updateZoomWindow({ left: 0.4, top: 0.25, width: 0.2, height: 0.2 });
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        return <div>
            <div className="tooltipTitle">Country: {series.title}</div>
        </div>
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapBindingDataGeoJsonShapes/>);
