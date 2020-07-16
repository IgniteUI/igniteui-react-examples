import * as React from 'react';
import WorldLocations from "./WorldLocations";
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapMarkerTypes extends React.Component {

    public geoMap: IgrGeographicMap;
    private symbolSeries: IgrGeographicSymbolSeries;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);       
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <div className="igOptions">
                    <span className="igOptions-label">Marker Type: </span>
                    <select onChange={this.onMarkerTypeSelected}>
                        <option>Circle</option>
                        <option>Diamond</option>
                        <option>Hexagon</option>
                        <option>Hexagram</option>                        
                        <option>Pentagon</option>
                        <option>Pentagram</option>
                        <option>Pyramid</option>
                        <option>Square</option>
                        <option>Tetragram</option>
                        <option>Triangle</option>             
                    </select>
                    <span className="igOptions-label">Marker Brush: </span>
                    <select onChange={this.onMarkerBrushSelected}>
                        <option>White</option>
                        <option>Green</option>
                        <option>DodgerBlue</option> 
                        <option>Black</option>  
                        <option>Red</option> 
                        <option>Gray</option>                     
                    </select>                
                    <span className="igOptions-label">Marker Outline: </span>
                    <select 
                        onChange={this.onMarkerOutlineSelected}>
                        <option>DodgerBlue</option> 
                        <option>Gray</option> 
                        <option>Red</option>
                        <option>Green</option>           
                        <option>Black</option>  
                        <option>White</option>                                      
                    </select>
                </div>
                <div className="igComponent" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>               
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.windowRect = { left: 0.2, top: 0.1, width: 0.6, height: 0.6 };

        this.symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
        this.symbolSeries.dataSource = WorldLocations.getCapitals();
        this.symbolSeries.markerType = MarkerType.Circle;
        this.symbolSeries.latitudeMemberPath = "lat";
        this.symbolSeries.longitudeMemberPath = "lon";
        this.symbolSeries.markerBrush  = "White";
        this.symbolSeries.markerOutline = "DodgerBlue";  

        this.geoMap.series.add(this.symbolSeries);
    }  
    
    
    public onMarkerTypeSelected = (e: any) => {
        const markerTypeMode = e.target.value.toString();       
        this.symbolSeries.markerType = markerTypeMode; 
    } 
    
    public onMarkerBrushSelected = (e: any) => {
        const markerBrushMode = e.target.value.toString();       
        this.symbolSeries.markerBrush = markerBrushMode;   
    } 
    public onMarkerOutlineSelected = (e: any) => {
        const markerOutlineMode = e.target.value.toString();       
        this.symbolSeries.markerOutline = markerOutlineMode;
       
    } 

}
