import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { MapUtils, MapRegion } from './MapUtils';
// for handling of maps events
import { IgrRectChangedEventArgs, IgRect } from 'igniteui-react-core';
import { IgrDataChartInteractivityModule, IgrSeriesViewer } from 'igniteui-react-charts';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrArcGISOnlineMapImagery } from 'igniteui-react-maps';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapNavigation extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    public NavigationOptions: JSX.Element[] = [];
    public NavigationRegions: any = {};

    constructor(props: any) {
        super(props);

        this.onMapRef = this.onMapRef.bind(this);
        this.onMapWindowRectChanged = this.onMapWindowRectChanged.bind(this);
        this.onSelectionChanged = this.onSelectionChanged.bind(this);
        this.onMapMouseMove = this.onMapMouseMove.bind(this);

        // generating navigation regions and options
        const regions =  MapUtils.getRegions();
        for (const key in regions) {
            if (regions.hasOwnProperty(key)) {
                const region = regions[key];
                const name = region.name;
                this.NavigationRegions[name] = region;
                this.NavigationOptions.push(<option id={name} key={name}>{name}</option>);
            }
        }

        this.state = {
            selectedRegion: MapRegion.UnitedStates,
            mapRegion: this.NavigationRegions[MapRegion.UnitedStates],
            mapHoverGeographicCoordinate: { x: 0, y: 0 },
            mapHoverRelativeCoordinate: { x: 0, y: 0 },
            mapHoverWindowCoordinate: { x: 0, y: 0 },

            windowScale: 0,
            windowPositionVertical: 0,
            windowPositionHorizontal: 0,
            getRect: { left: -180, top: -75, height: 170, width: 360 },
            geoT: "",
            geoL: "",
            geoH: "",
            geoW: "",
            winT: "",
            winL: "",
            winH: "",
            winW: "",
        };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample"    >

                <div className="container" id="map" >
                    <IgrGeographicMap
                        ref={this.onMapRef}
                        actualWindowRectChanged={this.onMapWindowRectChanged}
                        width="100%"
                        height="100%"
                        zoomable="true"/>
                </div>

                <div className="overlay-left overlay-border vertical" style={{background: "rgba(217, 217, 217, 0.5)"}} >
                    <label style={{fontWeight: 600}}>Zoom to Map Region</label>
                    <select value={this.state.selectedRegion} onChange={this.onSelectionChanged}>
                            {this.NavigationOptions}
                    </select>
                    <label style={{fontWeight: 600}}>Map Geographic Rect</label>
                    <div className="horizontal" >
                        <div className="vertical"  style={{marginRight: "1rem"}}>
                            <label >{this.state.geoT}</label>
                            <label >{this.state.geoL}</label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.geoH}</label>
                            <label >{this.state.geoW}</label>
                        </div>
                    </div>

                    <label style={{fontWeight: 600}}>Map Window Rect</label>
                    <div className="horizontal" >
                        <div className="vertical"  style={{marginRight: "1rem"}}>
                            <label >{this.state.winT}</label>
                            <label >{this.state.winL}</label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.winH}</label>
                            <label >{this.state.winW}</label>
                        </div>
                    </div>

                    <label style={{fontWeight: 600}}>Map Window Position</label>
                    <div className="horizontal">
                        <div className="vertical"  style={{marginRight: "1rem"}}>
                            <label >Horizontal:</label>
                            <label >Vertical:</label>
                            <label >Scale:</label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.windowPositionHorizontal.toFixed(4)}</label>
                            <label >{this.state.windowPositionVertical.toFixed(4)}</label>
                            <label >{this.state.windowScale.toFixed(4)}</label>
                        </div>
                    </div>

                    <label style={{fontWeight: 600}}>Map Hover Coordinates</label>
                    <div className="horizontal">
                        <div className="vertical" style={{marginRight: "1rem"}}>
                            <label >Window X: </label>
                            <label >Window Y: </label>
                            <label >Longitude: </label>
                            <label >Latitude: </label>
                            <label >Pixel X: </label>
                            <label >Pixel Y: </label>
                        </div>
                        <div className="vertical">
                            <label >{this.state.mapHoverWindowCoordinate.x.toFixed(4)}</label>
                            <label >{this.state.mapHoverWindowCoordinate.y.toFixed(4)}</label>
                            <label >{MapUtils.toLng(this.state.mapHoverGeographicCoordinate.x)}</label>
                            <label >{MapUtils.toLat(this.state.mapHoverGeographicCoordinate.y)}</label>
                            <label >{MapUtils.toPixel(this.state.mapHoverRelativeCoordinate.x)}</label>
                            <label >{MapUtils.toPixel(this.state.mapHoverRelativeCoordinate.y)}</label>
                        </div>
                    </div>
                </div>

                <div className="overlay-bottom-right overlay-border">Imagery Tiles: @ESRI/ArcGIS</div>
            </div>
        );
    }

    public windowPositionHorizontalChanged = (e: any) => {
        this.geoMap.windowPositionHorizontal = e.target.valueAsNumber;
    }

    public windowPositionVerticalChanged = (e: any) => {
        this.geoMap.windowPositionVertical = e.target.valueAsNumber;
    }

    public windowScaleChanged = (e: any) => {
        this.geoMap.windowScale = e.target.valueAsNumber;
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }

        this.geoMap = geoMap;
        this.geoMap.zoomToGeographic({ left:-134.5, top:16.5, width:70.0, height:37.0 });
        this.geoMap.windowPositionHorizontal = 0.1;
        this.geoMap.windowPositionVertical = 0.1;
        this.geoMap.windowScale = 0.1;
    }

    public onMapWindowRectChanged(viewer: IgrSeriesViewer, e: IgrRectChangedEventArgs) {
        let geoMap = viewer as IgrGeographicMap;

        // storing window location and size (values between 0.0 and 1.0)
        const windowRect: IgRect = e.newRect;

        // converting window rect to geographic rect/region:
        const geoRect: any = geoMap.getGeographicFromZoom(windowRect);
        geoRect.bottom = geoRect.top  + geoRect.height;
        geoRect.right  = geoRect.left + geoRect.width;
        // calculating center of geographic region
        geoRect.latitude  = geoRect.top  + (geoRect.height / 2);
        geoRect.longitude = geoRect.left + (geoRect.width / 2);

        this.setState({
            mapRegion: geoRect,
            windowPositionHorizontal: geoMap.actualWindowPositionHorizontal,
            windowPositionVertical: geoMap.actualWindowPositionVertical,
            windowScale: geoMap.actualWindowScale,
            geoT: "T: " + MapUtils.toLat(geoRect.top),
            geoL: "L: " + MapUtils.toLng(geoRect.left),
            geoH: "H: " + MapUtils.toLng(geoRect.height),
            geoW: "W: " + MapUtils.toLng(geoRect.width),
            winT: "T: " + windowRect.top.toFixed(4),
            winL: "L: " + windowRect.left.toFixed(4),
            winH: "H: " + windowRect.height.toFixed(4),
            winW: "W: " + windowRect.width.toFixed(4),
        });
    }

    public onMapMouseMove(e: any) {
        const bounds = e.target.getBoundingClientRect();
        const relativeCoordinate = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        };

        const windowCoordinate = {
            x: (e.clientX - bounds.left) / bounds.width,
            y: (e.clientY - bounds.top) / bounds.height
        };

        // converting mouse pixel coordinate to geographic coordinate:
        const geoCoordinate: any = this.geoMap.getGeographicPoint(relativeCoordinate);

        this.setState({
            mapHoverGeographicCoordinate: geoCoordinate,
            mapHoverRelativeCoordinate: relativeCoordinate,
            mapHoverWindowCoordinate: windowCoordinate
        });
    }

    public componentDidMount() {
        const elem = document.getElementById('map');
        elem.addEventListener('mousemove', this.onMapMouseMove, false);
    }

    public onSelectionChanged = (e: any) =>{
        if (this.geoMap === undefined) return;

        const name = e.target.value.toString();
        const region = this.NavigationRegions[name];

        this.geoMap.zoomToGeographic(region);

        this.setState({ selectedRegion: name});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapNavigation/>);
