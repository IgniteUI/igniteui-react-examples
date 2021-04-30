import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import WorldUtils from "./WorldUtils"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { MarkerType } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapCustomTooltips extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.createSymbolTooltip = this.createSymbolTooltip.bind(this);
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

        console.log("onDataLoaded");
        const geoRegion = { height: 170, left: -180, top: -85.0, width: 360 };
        this.geoMap = geoMap;
        this.geoMap.zoomToGeographic(geoRegion);

        const cityQTR = { lat: 25.285, lon:  51.531,  isoCode: "qat", name: "Doha" };
        const cityPAN = { lat:  8.949, lon: -79.400,  isoCode: "pan", name: "Panama" };
        const cityCHL = { lat: -33.475, lon: -70.647, isoCode: "chl", name: "Santiago" };
        const cityJAP = { lat:  35.683, lon: 139.809, isoCode: "jpn", name: "Tokyo" };
        const cityNYC = { lat: 40.750, lon: -74.0999, isoCode: "usa", name: "New York" };
        const citySNG = { lat:  1.229, lon: 104.177,  isoCode: "sgp", name: "Singapore" };
        const cityMOS = { lat: 55.750, lon:  37.700,  isoCode: "rus", name: "Moscow" };
        const cityLAX = { lat: 34.000, lon: -118.25,  isoCode: "usa", name: "Los Angeles" };

        const AmericanCities = [cityCHL, cityPAN, cityNYC, cityLAX, ];
        const AsianCities = [ citySNG, cityMOS, cityJAP, cityQTR, ];

        this.createSymbolSeries(AmericanCities, "Green");
        this.createSymbolSeries(AsianCities, "Red");
    }

    public createSymbolSeries(geoLocations: any[], brush: string)
    {
        const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
        symbolSeries.dataSource = geoLocations;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush  = "White";
        symbolSeries.markerOutline = brush;
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.createSymbolTooltip;

        this.geoMap.series.add(symbolSeries);
    }

    public createSymbolTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const iso = dataItem.isoCode.toUpperCase();
        const lat = WorldUtils.toStringLat(dataItem.lat);
        const lon = WorldUtils.toStringLon(dataItem.lon);
        const svg = dataItem.isoCode.toLowerCase() + '.svg';
        const scr = 'https://static.infragistics.com/xplatform/images/flags/' + svg;

        const seriesStyle = { color: dataContext.series.markerOutline } as React.CSSProperties;
        const contentStyle = { display: "inline-block", marginLeft: 5 } as React.CSSProperties;

        return <div >
            {/* style={imageStyle} style={borderStyle}*/}
            <div className="tooltipFlagBoarder">
                <img className="tooltipFlagImage" src={scr}   />
            </div>
            <div style={contentStyle}>
                <div className="tooltipBox">
                    <div className="tooltipRow">
                        <div className="tooltipLbl">City:</div>
                        <div className="tooltipVal" style={seriesStyle}>{dataItem.name}</div>
                    </div>
                    <div className="tooltipRow">
                        <div className="tooltipLbl">Latitude:</div>
                        <div className="tooltipVal" style={seriesStyle}>{lat} </div>
                    </div>
                    <div className="tooltipRow">
                        <div className="tooltipLbl">Longitude:</div>
                        <div className="tooltipVal" style={seriesStyle}>{lon}</div>
                    </div>
                    <div className="tooltipRow">
                        <div className="tooltipLbl">ISO Code:</div>
                        <div className="tooltipVal" style={seriesStyle}>{iso}</div>
                    </div>
                </div>
            </div>
        </div>
    }

}

// rendering above class to the React DOM
ReactDOM.render(<MapCustomTooltips />, document.getElementById('root'));