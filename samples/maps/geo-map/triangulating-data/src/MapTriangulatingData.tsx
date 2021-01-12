import * as React from 'react';
import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
import { TriangulationSource } from 'igniteui-react-core';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicScatterAreaSeries } from 'igniteui-react-maps';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrShapeDataSource } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingShapefilePoints extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onDataLoaded = this.onDataLoaded.bind(this);        
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">                
                <div className="igComponent" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"                        
                        zoomable="true"/>
                </div>
                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;

        const geoBounds = {
            left: -115,
            top: 25,
            width: 40,
            height: 20
        };

        this.geoMap.zoomToGeographic(geoBounds);
        
        // loading a shapefile with geographic points
        const sds = new IgrShapeDataSource();
        sds.importCompleted = this.onDataLoaded;
        sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/AmericanPrecipitation.shp";
        sds.databaseSource  = "https://static.infragistics.com/xplatform/shapes/AmericanPrecipitation.dbf";
        sds.dataBind();
    }

    public onDataLoaded(sds: IgrShapeDataSource, e: any) {
        const shapeRecords = sds.getPointData();
        console.log("loaded AmericanPrecipitation.shp " + shapeRecords.length);

        let triangulationData: TriangulationSource = TriangulationSource.create(sds.count, (i) => sds.getRecord(i).points[0][0], (i) => sds.getRecord(i).fieldValues["Globvalue"]);
        let triangles: any = triangulationData.triangles;

        const brushes = [
            "green",
            "yellow",
            "orange",
            "red"
        ];

        let colorScale: IgrCustomPaletteColorScale = new IgrCustomPaletteColorScale({});
        colorScale.palette = brushes;
        colorScale.minimumValue = 0.05;
        colorScale.interpolationMode = ColorScaleInterpolationMode.InterpolateRGB; 

        const geoSeries = new IgrGeographicScatterAreaSeries({name: "series"});
        geoSeries.dataSource = triangulationData.points;        
        geoSeries.trianglesSource = triangles;              
        geoSeries.colorMemberPath = "value";
        geoSeries.colorScale = colorScale;
        geoSeries.opacity = 0.75;        
        geoSeries.longitudeMemberPath = "pointX";
        geoSeries.latitudeMemberPath="pointY";
        geoSeries.triangleVertexMemberPath1 = "v1";
        geoSeries.triangleVertexMemberPath1 = "v2";
        geoSeries.triangleVertexMemberPath1 = "v3";
    
        this.geoMap.series.add(geoSeries);
    }
}
