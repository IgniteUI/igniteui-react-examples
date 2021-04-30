import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import WorldUtils from "./WorldUtils"
import { LegendOverlay, LegendItem } from "./LegendOverlay"
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTypeScatterDensitySeries extends React.Component {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);
        this.onMapRef = this.onMapRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <div className="igComponent">
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        width="100%"
                        height="100%"
                        zoomable="true" />
                </div>
                <LegendOverlay dock="BottomLeft" text="Source: GeoNames" href="https://www.geonames.org/" />

                <div className="igOverlay-bottom-right">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
    }

    public componentDidMount() {
        // fetching geographic locations from public JSON folder

        fetch("https://static.infragistics.com/xplatform/data/AusPlaces.csv")
            .then((response) => response.text())
            .then(data => this.onDataLoaded(data));
    }

    public onDataLoaded(csvData: string) {
        const csvLines = csvData.split("\n");
        console.log("loaded AusPlaces.csv " + csvLines.length);

        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(",");
            const location = {
                latitude:  Number(columns[2]),
                longitude: Number(columns[1]),
                name:  columns[0]
            };
            geoLocations.push(location);
        }

        // creating HD series with loaded data
        const geoSeries = new IgrGeographicHighDensityScatterSeries( { name: "hdSeries" });
        geoSeries.dataSource = geoLocations;
        geoSeries.longitudeMemberPath = "longitude";
        geoSeries.latitudeMemberPath = "latitude";
        geoSeries.heatMaximumColor = "Red";
        geoSeries.heatMinimumColor = "Black";
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = this.createTooltip;
        geoSeries.mouseOverEnabled = true;

        // adding HD series to the geographic amp
        this.geoMap.series.add(geoSeries);

        // zooming to bound of all geographic locations
        const geoBounds = WorldUtils.getBounds(geoLocations);
        geoBounds.top = 0;
        geoBounds.height = -50;
        this.geoMap.zoomToGeographic(geoBounds);
    }

    public createTooltip(context: any) {
        const dataContext = context.dataContext as IgrDataContext;
        if (!dataContext) return null;

        const dataItem = dataContext.item as any;
        if (!dataItem) return null;

        const latitude = WorldUtils.toStringLat(dataItem.latitude);
        const longitude = WorldUtils.toStringLon(dataItem.longitude);
        const name = dataItem.name;

        return <div className="tooltipBox">
            <div className="tooltipTitle">{name}</div>
            <div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Latitude:</div>
                    <div className="tooltipVal">{latitude}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Longitude:</div>
                    <div className="tooltipVal">{longitude}</div>
                </div>
            </div>
        </div>
    }

}

// rendering above class to the React DOM
ReactDOM.render(<MapTypeScatterDensitySeries />, document.getElementById('root'));