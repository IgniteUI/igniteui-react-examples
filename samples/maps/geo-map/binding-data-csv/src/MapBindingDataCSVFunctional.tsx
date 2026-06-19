import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WorldUtils from './WorldUtils';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicHighDensityScatterSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { IgrDataContext } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

function createTooltip(context: any) {
    const dataContext = context.dataContext as IgrDataContext;
    if (!dataContext) return null;

    const series = dataContext.series as any;
    if (!series) return null;

    const dataItem = dataContext.item as any;
    if (!dataItem) return null;

    const lat = WorldUtils.toStringLat(dataItem.latitude);
    const lon = WorldUtils.toStringLon(dataItem.longitude);
    const population = WorldUtils.toStringAbbr(dataItem.population);

    return (
        <div>
            <div className="tooltipTitle">{dataItem.name}</div>
            <div className="tooltipBox">
                <div className="tooltipRow">
                    <div className="tooltipLbl">Latitude:</div>
                    <div className="tooltipVal">{lat}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Longitude:</div>
                    <div className="tooltipVal">{lon}</div>
                </div>
                <div className="tooltipRow">
                    <div className="tooltipLbl">Population: </div>
                    <div className="tooltipVal">{population}</div>
                </div>
            </div>
        </div>
    );
}

export default function MapBindingDataCSV() {
    const geoMapRef = useRef<IgrGeographicMap>(null);

    const onDataLoaded = useCallback((csvData: string) => {
        const geoMap = geoMapRef.current;
        if (!geoMap) return;

        const csvLines = csvData.split('\n');

        const geoLocations: any[] = [];
        for (let i = 1; i < csvLines.length; i++) {
            const columns = csvLines[i].split(',');
            geoLocations.push({
                latitude: Number(columns[1]),
                longitude: Number(columns[2]),
                name: columns[0],
                population: Number(columns[3]),
            });
        }

        const geoSeries = new IgrGeographicHighDensityScatterSeries({ name: 'hdSeries' });
        geoSeries.dataSource = geoLocations;
        geoSeries.latitudeMemberPath = 'latitude';
        geoSeries.longitudeMemberPath = 'longitude';
        geoSeries.heatMaximumColor = 'Red';
        geoSeries.heatMinimumColor = 'Black';
        geoSeries.heatMinimum = 0;
        geoSeries.heatMaximum = 5;
        geoSeries.pointExtent = 1;
        geoSeries.tooltipTemplate = createTooltip;
        geoSeries.mouseOverEnabled = true;

        geoMap.series.add(geoSeries);

        geoMap.zoomToGeographic({
            left: -130,
            top: 15,
            width: Math.abs(-130 + 65),
            height: Math.abs(50 - 15),
        });
    }, []);

    // useEffect replaces componentDidMount for side-effects like data fetching
    useEffect(() => {
        fetch('https://static.infragistics.com/xplatform/data/UsaCitiesPopulation.csv')
            .then(response => response.text())
            .then(data => onDataLoaded(data));
    }, [onDataLoaded]);

    return (
        <div className="container sample">
            <div className="container">
                <IgrGeographicMap
                    ref={geoMapRef}
                    width="100%"
                    height="100%"
                    zoomable="true"
                />
            </div>
            <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapBindingDataCSV/>);
