import * as React from 'react';
import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicContourLineSeries } from 'igniteui-react-maps';
import { IgrValueBrushScale } from 'igniteui-react-charts';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterContourSeries extends React.Component<any, any> {

    private geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <IgrGeographicMap
                    ref={this.onMapRef}
                    width="100%"
                    height="100%"
                    zoomable="true" />

                <LegendOverlay dock="BottomLeft"
                text="Source: NOAA" href="https://www.noaa.gov/" />
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>

            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded WorldTemperatures.shp: " + shapeRecords.length);

        const contourPoints: any[] = [];
        for (const record of shapeRecords) {
            const temp = record.fieldValues.Contour;
            // using only major contours (every 10th degrees Celsius)
            if (temp % 10 === 0 && temp >= 0) {
                for (const shapes of record.points) {
                     for (let i = 0; i < shapes.length; i++) {
                        if (i % 5 === 0) {
                            const p = shapes[i];
                            const item = { lon: p.x, lat: p.y, value: temp};
                            contourPoints.push(item);
                        }
                     }
                }
            }
        }

        console.log("loaded contour points: " + contourPoints.length);
        this.createContourSeries(contourPoints);
    }

    public createContourSeries(data: any[])
    {
        const brushes = [
            "rgba(32, 146, 252, 0.5)", // semi-transparent blue
            "rgba(14, 194, 14, 0.5)",  // semi-transparent green
            "rgba(252, 120, 32, 0.5)", // semi-transparent orange
            "rgba(252, 32, 32, 0.5)",  // semi-transparent red
        ];

        const brushScale = new IgrValueBrushScale({});
        brushScale.brushes = brushes;
        brushScale.minimumValue = 0;
        brushScale.maximumValue = 30;

        const contourSeries = new IgrGeographicContourLineSeries( { name: "contourSeries" });
        contourSeries.dataSource = data;
        contourSeries.longitudeMemberPath = "lon";
        contourSeries.latitudeMemberPath = "lat";
        contourSeries.valueMemberPath = "value";
        contourSeries.fillScale = brushScale;
        contourSeries.tooltipTemplate = this.createContourTooltip;
        contourSeries.thickness = 4;

        this.geoMap.series.add(contourSeries);
    }

    public createContourTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        // dataContext.item is always a number for contour series
        const tmp = dataItem.toFixed(1) + "°C";
        return <div className="tooltipBox">
            <div className="tooltipRow">
                <div className="tooltipLbl">Temperature:</div>
                <div className="tooltipVal"> {tmp}</div>
            </div>
        </div>
    }

}
