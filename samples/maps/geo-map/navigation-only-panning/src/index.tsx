import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrGeographicMapModule } from 'igniteui-react-maps';
import { IgrGeographicMap } from 'igniteui-react-maps';
import { IgrSeriesViewer } from 'igniteui-react-charts';
import { IgrRectChangedEventArgs, IgRect } from 'igniteui-react-core';
import { IgrDataChartInteractivityModule } from 'igniteui-react-charts';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

export default class MapNavigationLimits extends React.Component<any, any> {

    public geoMap: IgrGeographicMap;

    constructor(props: any) {
        super(props);

        this.geoMapRef = this.geoMapRef.bind(this);
        this.geoMapWindowRectChanged = this.geoMapWindowRectChanged.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample vertical">
                <div className="container" >
                    <IgrGeographicMap
                        ref={this.geoMapRef}
                        actualWindowRectChanged={this.geoMapWindowRectChanged}
                        width="100%"
                        height="100%"
                        zoomable="true">
                    </IgrGeographicMap>
                </div>
            </div>
        );
    }

    public geoMapRef(map: IgrGeographicMap) {
        if (!map) { return; }

        this.geoMap = map;

        this.initialZooming = true;
        // initial zooming in to USA so that we can test that user can performs only panning
        this.geoMap.zoomToGeographic({ left: -134.5, top: 16.5, width: 70.0, height: 37.0 });

        this.initialZooming = false;
    }

    public previousWindowRect: IgRect;
    public initialZooming: boolean = true;
    public undoZooming: boolean = false;
    public geoMapWindowRectChanged(viewer: IgrSeriesViewer, e: IgrRectChangedEventArgs) {

        const currentWindowRect: IgRect = e.newRect;
        if (this.undoZooming) {
            return;
        }

        if (this.initialZooming ||
            this.previousWindowRect === undefined ||
            Math.abs(this.previousWindowRect.height - currentWindowRect.height) < 0.001 ||
            Math.abs(this.previousWindowRect.width - currentWindowRect.width) < 0.001) {
            // keep track of current window while we allow map panning
            this.previousWindowRect = currentWindowRect;
        } else {
            this.undoZooming = true;
            // undoing zooming that was made by the user
            this.geoMap.updateZoomWindow(this.previousWindowRect);
            this.undoZooming = false;
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapNavigationLimits/>);
