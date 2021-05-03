import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';


import { ColorScaleInterpolationMode } from 'igniteui-react-charts';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrGeographicScatterAreaSeries } from 'igniteui-react-maps';
import { IgrCustomPaletteColorScale } from 'igniteui-react-charts';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapTriangulatingData extends React.Component {

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
                        zoomable="true"/>
                </div>
                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @OpenStreetMap</div>
            </div>
        );
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;

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
        geoSeries.colorScale = colorScale;
        geoSeries.opacity = 0.75;
        geoSeries.triangulationDataSource = "https://static.infragistics.com/xplatform/shapes/weather/nws_precip_2011091820.itf";
        geoSeries.triangleVertexMemberPath1 = "v1";
        geoSeries.triangleVertexMemberPath1 = "v2";
        geoSeries.triangleVertexMemberPath1 = "v3";

        this.geoMap.series.add(geoSeries);

        const geoBounds = {
            left: -115,
            top: 25,
            width: 40,
            height: 20
        };

        this.geoMap.zoomToGeographic(geoBounds);
    }
}

// rendering above class to the React DOM
ReactDOM.render(<MapTriangulatingData />, document.getElementById('root'));