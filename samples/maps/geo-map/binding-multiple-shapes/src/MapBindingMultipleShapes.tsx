import * as React from "react";

import "./GeoMapSharedStyles.css";
import DataUtils from "./DataUtils"
import WorldUtils from "./WorldUtils"
import { IgrGeographicMapImagery } from 'igniteui-react-maps';

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';

import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingMultipleShapes extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onPointsLoaded = this.onPointsLoaded.bind(this);
        this.onPolylinesLoaded = this.onPolylinesLoaded.bind(this);
        this.onPolygonsLoaded = this.onPolygonsLoaded.bind(this);

        this.state = { locations: [], polylines: [], polygons: []}
    }

    public render() {
        const mapStyle = { background: "rgb(212, 212, 212)" } as React.CSSProperties;

        return (
            <div className="igContainer">
                <div className="igComponent" style={mapStyle} >
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        width="100%"
                        height="100%"
                        zoomable="true" >
                        <IgrGeographicShapeSeries
                            name="polygonSeries"
                        //    tooltipTemplate={this.getPolygonTooltip}
                            dataSource={this.state.polygons}
                            shapeMemberPath="points"
                            shapeFill="rgb(150, 150, 150)"
                            shapeStroke="Black"
                            shapeStrokeThickness={1.0} />
                        <IgrGeographicPolylineSeries
                              name="lineSeries"
                           //    tooltipTemplate={this.getPolygonTooltip}
                             dataSource={this.state.polylines}
                             shapeMemberPath="points"
                             shapeStroke="rgba(147, 15, 180, 0.5)"
                             thickness={3.0}  />
                        <IgrGeographicSymbolSeries
                            name="symbolSeries"
                        //    tooltipTemplate={this.getSymbolTooltip}
                            dataSource={this.state.locations}
                            longitudeMemberPath="longitude"
                            latitudeMemberPath="latitude"
                            markerType="Circle"
                            markerOutline="rgb(2, 102, 196)"
                            markerBrush="White" />
                   </IgrGeographicMap>
                </div>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        this.geoMap.backgroundContent = undefined;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        console.log("series.count " + this.geoMap.series.count);
        console.log("actualSeries.length " + this.geoMap.actualSeries.length);

        this.geoMap.actualSeries[0].tooltipTemplate = this.getPolygonsTooltip;
        this.geoMap.actualSeries[1].tooltipTemplate = this.getPolylinesTooltip;
        this.geoMap.actualSeries[2].tooltipTemplate = this.getPointTooltip;

        const url = DataUtils.getPublicURL();
        // loading a shapefile with geographic polygons
        const sdsPolygons = new IgrShapeDataSource();
        sdsPolygons.importCompleted = this.onPolygonsLoaded;
        sdsPolygons.shapefileSource = url + "/shapes/WorldCountries.shp";
        sdsPolygons.databaseSource  = url + "/shapes/WorldCountries.dbf";
        sdsPolygons.dataBind();

        const sdsPolylines = new IgrShapeDataSource();
        sdsPolylines.importCompleted = this.onPolylinesLoaded;
        sdsPolylines.shapefileSource = url + "/shapes/WorldCableRoutes.shp";
        sdsPolylines.databaseSource  = url + "/shapes/WorldCableRoutes.dbf";
        sdsPolylines.dataBind();

        // loading a shapefile with geographic points
        const sdsPoints = new IgrShapeDataSource();
        sdsPoints.importCompleted = this.onPointsLoaded;
        sdsPoints.shapefileSource = url + "/Shapes/WorldCities.shp";
        sdsPoints.databaseSource  = url + "/Shapes/WorldCities.dbf";
        sdsPoints.dataBind();
    }

    public onPointsLoaded(sds: IgrShapeDataSource, e: any) {
        console.log("onPoints");

        const geoLocations: any[] = [];
        // parsing shapefile data and creating geo-locations
        for (const record of sds.getPointData()) {
            const pop = record.fieldValues.POPULATION;
            // each shapefile record has just one point
            const location = {
                latitude: record.points[0][0].y,
                longitude: record.points[0][0].x,
                city: record.fieldValues.NAME,
                population: pop
            };
            geoLocations.push(location);
        }
        this.setState({ locations: geoLocations });
    }

    public onPolylinesLoaded(sds: IgrShapeDataSource, e: any) {
        console.log("onPolylines");

        const geoPolylines: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach(record => {
            // using field/column names from .DBF file
            const route = {
                points: record.points,
                name: record.fieldValues.Name,
                capacity: record.fieldValues.CapacityG,
                distance: record.fieldValues.DistanceKM
            };
            geoPolylines.push(route);
        });

        this.setState({ polylines: geoPolylines });
    }

    public onPolygonsLoaded(sds: IgrShapeDataSource, e: any) {
        console.log("onPolygons ");

        const geoPolygons: any[] = [];
        // parsing shapefile data and creating geo-polygons
        sds.getPointData().forEach(record => {
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                gdp: record.fieldValues.GDP,
                population: record.fieldValues.POPULATION
            };
            geoPolygons.push(country);
        });

        this.setState({ polygons: geoPolygons });
    }

    public getPolygonsTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const pop = WorldUtils.toStringAbbr(dataItem.population);
        const gdp = WorldUtils.toStringAbbr(dataItem.gdp * 1000000 / dataItem.population);
        const brush = series.shapeStroke;

        return <div className="tooltipBox">
            <div className="tooltipTitle" style={{ color: brush }}>{dataItem.name}</div>
            <div className="tooltipTable">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population</div>
                    <div className="tooltipVal">{pop}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">GDP</div>
                    <div className="tooltipVal">{gdp}</div>
                </div>
            </div>
        </div>
    }

    public getPointTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const brush = series.markerOutline;
        const pop = WorldUtils.toStringAbbr(dataItem.population);
        const lat = WorldUtils.toStringLat(dataItem.latitude);
        const lon = WorldUtils.toStringLon(dataItem.longitude);

        return <div className="tooltipBox">
            <div className="tooltipTitle" style={{ color: brush }}>{dataItem.city}</div>
            <div className="tooltipTable">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Latitude:</div>
                    <div className="tooltipVal">{lat}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Longitude:</div>
                    <div className="tooltipVal">{lon}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population:</div>
                    <div className="tooltipVal">{pop}</div>
                </div>
            </div>
        </div>
    }

    public getPolylinesTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        // console.log("getPolylinesTooltip.series " );
        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const capacity = dataItem.capacity + " GB/s";
        const distance = dataItem.distance + " KM";

        return <div className="tooltipBox">
            <div className="tooltipTitle" style={{ color: "Purple" }}>{dataItem.name}</div>
            <div className="tooltipTable">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Distance</div>
                    <div className="tooltipVal">{distance}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Capacity</div>
                    <div className="tooltipVal">{capacity}</div>
                </div>
            </div>
        </div>
    }

}
