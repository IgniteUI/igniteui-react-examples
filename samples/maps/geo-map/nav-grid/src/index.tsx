import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicSymbolSeries } from 'igniteui-react-maps';
import { IgrGeographicPolylineSeries } from 'igniteui-react-maps';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';
import { DataTemplateMeasureInfo, DataTemplateRenderInfo } from 'igniteui-react-core';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapNavGrid extends React.Component {

    public geoMap: IgrGeographicMap;
    public geoNavigationLines: any[];
    public geoNavigationLabels: any[];

    constructor(props: any) {
        super(props);

        this.getNavigationData();
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
                        zoomable="true" >

                        <IgrGeographicPolylineSeries
                        name="geoLineSeries"
                        shapeMemberPath="points"
                        shapeStroke = "Gray"
                        shapeStrokeThickness="2"
                        dataSource={this.geoNavigationLines}>
                        </IgrGeographicPolylineSeries>

                        <IgrGeographicSymbolSeries
                        name="geoLabelSeries"
                        latitudeMemberPath="y"
                        longitudeMemberPath="x"
                        markerTemplate={this.getNavigationMarker()}
                        thickness="1"
                        dataSource={this.geoNavigationLabels}>
                        </IgrGeographicSymbolSeries>
                    </IgrGeographicMap>
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.updateZoomWindow({ left: 0.2, top: 0.1, width: 0.6, height: 0.6 });
    }

    public getNavigationData()
    {
        let navigationLines = [];
        let navigationLabels = [];

        // longitude lines and labels from west to east
        for (let lon = -180; lon <= 180; lon += 30) {

            let coordinates: any[] = [{x: lon, y: -90}, {x: lon, y: 90}];
            let points: any[] = [coordinates];

            let label = {x: lon, y: 0, isLatitude: false, degree: Math.abs(lon) + "" + (lon > 0 ? "E" : "W") };
            let line = {points: points, degree: lon, label: label };

            if (lon !== 0) {
                navigationLabels.push(label);
            }
            navigationLines.push(line);
        }
        // latitude lines and labels from north to south
        for (let lat = -90; lat <= 90; lat += 15) {

            let coordinates: any[] = [{x: -180, y: lat}, {x: 180, y: lat}];
            let points: any[] = [coordinates];

            let label = {x: 0, y: lat, isLatitude: true, degree: Math.abs(lat) + "" + (lat > 0 ? "N" : "S") };
            let line = {points: points, degree: lat, label: label };

            if (lat === 0) {
                label.degree = "0"
            }
            navigationLabels.push(label);
            navigationLines.push(line);
        }

        this.geoNavigationLines = navigationLines;
        this.geoNavigationLabels = navigationLabels;
    }

    public getNavigationMarker(): any
    {
        const size = 12;
        const radius = size / 2;
        return {
            measure: function (measureInfo: DataTemplateMeasureInfo) {
                const data = measureInfo.data;
                const context = measureInfo.context;
                let value = "0.00";
                let item = data.item as any;
                if (item != null) {
                    value = item.degree.toString();
                }
                const height = context.measureText("M").width;
                const width = context.measureText(value).width;
                measureInfo.width = width;
                measureInfo.height = height + size;
            },
            render: function (renderInfo: DataTemplateRenderInfo) {
                const item = renderInfo.data.item as any;

                const ctx = renderInfo.context as CanvasRenderingContext2D;
                let x = renderInfo.xPosition;
                let y = renderInfo.yPosition;

                if (renderInfo.isHitTestRender) {
                    ctx.fillStyle = renderInfo.data.actualItemBrush.fill;
                    ctx.fillRect(x, y, renderInfo.availableWidth, renderInfo.availableHeight);
                    return;
                } else {
                    // rendering marker shape
                    ctx.beginPath();
                    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);

                    ctx.strokeStyle = "black";
                    ctx.fillStyle = "white";
                    ctx.fill();
                    ctx.lineWidth = 2;
                    ctx.stroke();
                    ctx.closePath();
                }

                x = renderInfo.xPosition + 5;
                y = renderInfo.yPosition + 7.5;

                // rendering marker label
                const value = item.degree.toString();
                ctx.font = '12pt Verdana';
                ctx.textBaseline = "top";
                ctx.fillStyle = "black";

                if (item.isLatitude) {
                    // placing latitude labels below lines
                    ctx.fillText(value, x + 2, y + 1);
                } else {
                    // placing longitude labels above lines
                    ctx.fillText(value, x + 2, y - 25);
                }
            }
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapNavGrid/>);
