import * as React from "react";
import "../styles.css";
import "./GeoMapSharedStyles.css";
import DataUtils from "../../utilities/DataUtils"
import WorldUtils from "../../utilities/WorldUtils"
import LegendItem from "../../components/LegendItem"
import LegendOverlay from "../../components/LegendOverlay"

import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicShapeSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterPolygonSeries extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapReferenced = this.onMapReferenced.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render() {
        return (
            <div className="sampleRoot">
                <div className="map" >
                    <IgrGeographicMap
                        ref={this.onMapReferenced}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>

                <LegendOverlay dock="BottomLeft" >
                    <LegendItem background="rgb(14, 194, 14)"  text="Arab League Organization"/>
                    <LegendItem background="rgb(32, 146, 252)" text="North Atlantic Treaty Organization"/>
                    <LegendItem background="rgb(219, 84, 5)"   text="Shanghai Cooperation Organization"/>
                </LegendOverlay>

                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        // hiding OpenStreetMap
        this.geoMap.backgroundContent = undefined;
        // zooming map to region of North America
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        const url = DataUtils.getPublicURL();
        // loading a shapefile with geographic shapes
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = url + "/shapes/WorldCountries.shp";
        sds.databaseSource  = url + "/shapes/WorldCountries.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldCountries.shp " + shapeRecords.length);

        const countriesNATO: any[] = [];
        const countriesSCO: any[] = [];
        const countriesARAB: any[] = [];
        const countriesOther: any[] = [];

        for (const record of shapeRecords) {
            // using field/column names from .DBF file
            const country = {
                points: record.points,
                name: record.fieldValues.NAME,
                org: record.fieldValues.ALLIANCE,
                pop: record.fieldValues.POPULATION
            };

            const group = record.fieldValues.ALLIANCE;
            if (group === "NATO") {
                countriesNATO.push(country);
            } else if (group === "SCO") {
                countriesSCO.push(country);
            } else if (group === "ARAB LEAGUE") {
                countriesARAB.push(country);
            } else {
                countriesOther.push(country);
            }
        }

        this.createSeries(countriesNATO, "rgb(32, 146, 252)", "NATO");
        this.createSeries(countriesSCO, "rgb(252, 32, 32)", "SCO");
        this.createSeries(countriesARAB, "rgb(14, 194, 14)", "AL");
        this.createSeries(countriesOther, "rgb(146, 146, 146)", "Other");
    }

    public createSeries(shapeData: any[], shapeBrush: string, shapeTitle: string)
    {
        const seriesName = shapeTitle + "series";
        const geoSeries = new IgrGeographicShapeSeries( { name: seriesName });
        geoSeries.dataSource = shapeData;
        geoSeries.shapeMemberPath = "points";
        geoSeries.brush = shapeBrush;
        geoSeries.outline = "Black";
        geoSeries.tooltipTemplate = this.createTooltip;
        geoSeries.thickness = 1;
        geoSeries.title = shapeTitle;

        this.geoMap.series.add(geoSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const pop = WorldUtils.toStringAbbr(dataItem.pop);
        const titleColor = series.brush;
        const titleStyle = { color: titleColor} as React.CSSProperties;

        return <div>
            <div className="tooltipTitle" style={titleStyle}>{dataItem.org}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">{dataItem.name}</div>
                    <div className="tooltipVal">{pop}</div>
                </div>
            </div>
        </div>
    }


}
