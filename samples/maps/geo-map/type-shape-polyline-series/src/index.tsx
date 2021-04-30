import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterPolylineSeries extends React.Component {

    public geoMap: IgrGeographicMap;
    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <div className="igComponent" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>
                <LegendOverlay dock="BottomLeft">
                    <LegendItem background="rgb(219, 84, 5)"   text="Canadian Roads"/>
                    <LegendItem background="rgb(32, 146, 252)" text="American Roads"/>
                    <LegendItem background="rgb(14, 194, 14)"  text="Mexican Roads"/>
                </LegendOverlay>
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.windowRect = { left: 0.195, top: 0.325, width: 0.2, height: 0.1 };

        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanRoads.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded AmericanRoads.shp " + shapeRecords.length);

        const roadsUSA: any[] = [];
        const roadsMEX: any[] = [];
        const roadsCAN: any[] = [];

        // filtering records of loaded shapefile
        for (const record of shapeRecords) {
            // reading field values loaded from DBF file
            const type = record.fieldValues.RoadType;
            const road = {
                country: record.fieldValues.Country,
                length: record.fieldValues.RoadLength / 10,
                points: record.points,
                type: type === 1 ? "Highway" : "Road",
            };
            // grouping road items by country names
            if (type === 1 || type === 2) {
                if (road.country === "USA") {
                    roadsUSA.push(road);
                } else if (road.country === "MEX") {
                    roadsMEX.push(road);
                } else if (road.country === "CAN") {
                    roadsCAN.push(road);
                }
            }
        }

        // creating polyline series for roads of each country
        this.addSeriesWith(roadsCAN, "rgba(252, 32, 32, 0.9)");
        this.addSeriesWith(roadsUSA, "rgba(3, 121, 231, 0.9)");
        this.addSeriesWith(roadsMEX, "rgba(14, 194, 14, 0.9)");

        // zooming to bounds of loaded shapefile
        // this.geoMap.zoomToGeographic(sds.worldRect);
    }

    public addSeriesWith(shapeData: any[], shapeBrush: string)
    {
        const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
        lineSeries.dataSource = shapeData;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeFilterResolution = 2.0;
        lineSeries.shapeStrokeThickness = 2;
        lineSeries.shapeStroke = shapeBrush;
        lineSeries.tooltipTemplate = this.createTooltip;

        this.geoMap.series.add(lineSeries);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const series = dataContext.series as any;
        if (!series) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleColor = series.shapeStroke;
        const titleStyle = { color: titleColor, fontWeight: 700 } as React.CSSProperties;

        return <div className="tooltipBox">
            <div style={titleStyle}>{dataItem.country} {dataItem.type}</div>
            <div>Length: {dataItem.length} miles</div>
        </div>
    }
}

// rendering above class to the React DOM
ReactDOM.render(<MapTypeScatterPolylineSeries />, document.getElementById('root'));