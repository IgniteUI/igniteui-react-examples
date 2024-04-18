import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorldConnections from "./WorldConnections";
import { IgrGeographicMapModule } from "@infragistics/igniteui-react-maps";
import { IgrGeographicMap } from "@infragistics/igniteui-react-maps";
import { IgrGeographicSymbolSeries } from "@infragistics/igniteui-react-maps";
import { IgrGeographicPolylineSeries } from "@infragistics/igniteui-react-maps";
import { IgrDataChartInteractivityModule } from "@infragistics/igniteui-react-charts";
import { MarkerType } from "@infragistics/igniteui-react-charts";
import { IgrDataContext } from "@infragistics/igniteui-react-core";

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapBindingMultipleSources extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
                <label>Data Source: IG</label>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });

        const worldFlights = WorldConnections.getFlights();
        const worldAirports = WorldConnections.getAirports();
        const worldGridlines = WorldConnections.getGridlines();

        this.addPolylineSeriesWith(worldFlights);
        this.addGridlineSeriesWith(worldGridlines);
        this.addSymbolSeriesWith(worldAirports);
    }

    public addGridlineSeriesWith(data: any[])
    {
        const gridSeries = new IgrGeographicPolylineSeries( { name: "gridSeries" });
        gridSeries.dataSource = data;
        gridSeries.shapeMemberPath = "points";
        gridSeries.shapeStroke = "Gray";
        gridSeries.shapeStrokeThickness = 1;
        gridSeries.tooltipTemplate = this.createGridlineTooltip;
        this.geoMap.series.add(gridSeries);
    }

    public addPolylineSeriesWith(data: any[])
    {
        const lineSeries = new IgrGeographicPolylineSeries ( { name: "lineSeries" });
        lineSeries.dataSource = data;
        lineSeries.shapeMemberPath = "points";
        lineSeries.shapeStroke = "rgba(196, 14, 14,0.05)";
        lineSeries.shapeStrokeThickness = 4;
        lineSeries.tooltipTemplate = this.createPolylineTooltip;
        this.geoMap.series.add(lineSeries);
    }

    public addSymbolSeriesWith(data: any[])
    {
        const symbolSeries = new IgrGeographicSymbolSeries ( { name: "symbolSeries" });
        symbolSeries.dataSource = data;
        symbolSeries.markerType = MarkerType.Circle;
        symbolSeries.latitudeMemberPath = "lat";
        symbolSeries.longitudeMemberPath = "lon";
        symbolSeries.markerBrush = "#aad3df";
        symbolSeries.markerOutline = "rgb(73, 73, 73)";
        symbolSeries.thickness = 1;
        symbolSeries.tooltipTemplate = this.createSymbolTooltip;
        this.geoMap.series.add(symbolSeries);
    }

    public createSymbolTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleColor = dataContext.series.brush;
        const titleStyle = { color: titleColor } as React.CSSProperties;

        return <div  >
            <div className="tooltipTitle" style={titleStyle}>City: {dataItem.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Country:</div>
                    <div className="tooltipVal">{dataItem.country}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population:</div>
                    <div className="tooltipVal">{dataItem.pop.toFixed(1)} M</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Flights:</div>
                    <div className="tooltipVal">{dataItem.flights}</div>
                </div>
            </div>
        </div>
    }

    public createGridlineTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleStyle = { color: dataContext.series.brush, fontWeight: 700 } as React.CSSProperties;

        const deg = Math.abs(dataItem.degree).toFixed(1);
        const info = deg + "°" + dataItem.direction;

        return <div>
            <div style={titleStyle}>{info}</div>
        </div>
    }

    public createPolylineTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const titleStyle = { color: "rgb(151, 7, 7)" } as React.CSSProperties;

        return <div>
            <div className="tooltipTitle" style={titleStyle}>{dataItem.origin.name} - {dataItem.dest.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Distance:</div>
                    <div className="tooltipVal">{dataItem.distance.toFixed(0)} km</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Duration:</div>
                    <div className="tooltipVal">{dataItem.time.toFixed(1)} h</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Passengers:</div>
                    <div className="tooltipVal">{dataItem.passengers}</div>
                </div>
            </div>
        </div>
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapBindingMultipleSources/>);
