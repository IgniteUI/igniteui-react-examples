import * as React from 'react';
import { IgrGeographicMapModule, IgrGeographicMap, IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule, MarkerType } from 'igniteui-react-charts';
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from 'igniteui-react-core';
import { WorldLocations } from "./WorldLocations";

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();


export default class MapMarkerLayouts extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;    
    public symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });

    constructor(props: any) {
        super(props);

        this.onSelectionModeChange = this.onSelectionModeChange.bind(this);
        this.onMapReferenced = this.onMapReferenced.bind(this);
        

        this.state = { selectionCollisionType: "Omit" };
       
    }

    public render(): JSX.Element {
        return (
            
            <div className="igContainer">                

                <div className="igOptions">
                <span> Marker Collision Avoidance </span>
                    <select  onChange={this.onSelectionModeChange} value={this.state.selectionCollisionType}>
                        <option>Fade</option>
                        <option>FadeAndShift</option>
                        <option>Omit</option>
                        <option>OmitAndShift</option>
                        <option>None</option>

                    </select>
                </div>

                <div className="igComponent" >
                    <IgrGeographicMap 
                        ref={this.onMapReferenced}                       
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>


                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onSelectionModeChange = (e: any) => {
        this.setState({ selectionCollisionType: e.target.value });
        this.symbolSeries.markerCollisionAvoidance = e.target.value;
    }

    public onMapReferenced(map: IgrGeographicMap) {
        this.geoMap = map;
        
        const geoRect = { left: -150.0, top: -60.0, width: 315.0, height: 140.0 };
        this.geoMap.zoomToGeographic(geoRect);
        
        this.addSeries(WorldLocations.getCapitals(),"rgb(32, 146, 252)");
    }
    
    public addSeries(locations: any[], brush: string)
    {
        
        this.symbolSeries.dataSource = locations;
        this.symbolSeries.markerType = MarkerType.Circle;
        this.symbolSeries.latitudeMemberPath = "lat";
        this.symbolSeries.longitudeMemberPath = "lon";
        this.symbolSeries.markerBrush  = "White";
        this.symbolSeries.markerOutline = brush;
        this.symbolSeries.markerTemplate = this.getMarker();
        this.symbolSeries.markerCollisionAvoidance = this.state.selectionCollisionType;
        this.geoMap.series.add(this.symbolSeries);
    }   

    public getMarker(): any{ 

        let style = { outline: "#7D73E6", fill: "white", text: "black" };
        
        const size = 12;
        const radius = size / 2;
        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                 const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                let item = data.item as any;
                if (item != null) {
                    value = item.name.toString().toUpperCase(); 
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item as any;    
                const value = item.name.toString().toUpperCase(); 

                const ctx = renderInfo.context as CanvasRenderingContext2D;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;
               
                let halfHeight = renderInfo.availableHeight / 2.0;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;
                    ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                } else {
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
                    ctx.fillStyle = style.fill;
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = style.outline;
                    ctx.stroke();
                    ctx.closePath();
                } 

                x = renderInfo.xPosition + 5;
                y = renderInfo.yPosition + 7.5;
                if (y < 0) {
                    y -= renderInfo.availableHeight + 7.5;
                } 

                let bottomEdge = renderInfo.passInfo.viewportTop + renderInfo.passInfo.viewportHeight;
                if (y + renderInfo.availableHeight > bottomEdge) {
                    y -= renderInfo.availableHeight + 5;
                } 

                let rightEdge = renderInfo.passInfo.viewportLeft + renderInfo.passInfo.viewportWidth;
                if (x + renderInfo.availableWidth > rightEdge) {
                    x -= renderInfo.availableWidth + 12;
                } 

                ctx.beginPath();
                ctx.fillStyle = style.outline ;
                ctx.fillRect(x - 2, y - 2, renderInfo.availableWidth + 8, halfHeight + 6);
                ctx.closePath(); 

                ctx.font = '8pt Verdana';
                ctx.textBaseline = "top";
                ctx.fillStyle = style.fill;
                ctx.fillText(value, x + 2, y + 1);
 
            }
        }
    }

}
