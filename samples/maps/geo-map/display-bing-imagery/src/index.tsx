import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {
    IgrGeographicMapModule,
    IgrGeographicMap,
    IgrBingMapsMapImagery,
    BingMapsImageryStyle
} from 'igniteui-react-maps';

import {
    IgrDialog,
    IgrDialogModule,
    IgrInput,
    IgrInputModule,
    IgrButton,
    IgrButtonModule
} from 'igniteui-react';

import { MapUtils, MapRegion } from './MapUtils';

IgrGeographicMapModule.register();
IgrDialogModule.register();
IgrInputModule.register();
IgrButtonModule.register();

export default class MapDisplayImageryBing extends React.Component<any, any> {

    private map!: IgrGeographicMap;
    private dialog!: IgrDialog;

    constructor(props: any) {
        super(props);

        this.state = {
            bingKey: "",
            imageryApplied: false
        };
    }

    componentDidMount() {
        // Auto-open dialog, like Angular + Blazor
        setTimeout(() => {
            if (this.dialog) this.dialog.open();
        }, 300);
    }

    private onDialogClosed = () => {
        const key = this.state.bingKey.trim();

        if (!key) {
            // user closed dialog with empty key → do nothing
            return;
        }

        this.applyImagery(key);
    };

    private applyImagery(key: string) {
        if (!this.map) return;

        const imagery = new IgrBingMapsMapImagery();
        imagery.apiKey = key;
        imagery.imageryStyle = BingMapsImageryStyle.AerialWithLabels;

        // handle protocol mismatch
        const uri = imagery.actualBingImageryRestUri;
        const https = window.location.toString().startsWith("https:");
        imagery.bingImageryRestUri = https ?
            uri.replace("http:", "https:") :
            uri.replace("https:", "http:");

        // apply imagery
        this.map.backgroundContent = imagery;

        // zoom to region (same as Angular)
        MapUtils.navigateTo(this.map, MapRegion.Caribbean);
    }

    public render(): JSX.Element {
        return (
            <div className="container">

                {/* -------- ENTERPRISE KEY DIALOG ---------- */}
                <IgrDialog
                    ref={d => this.dialog = d!}
                    title="Bing Maps"
                    onClosed={this.onDialogClosed}
                >
                    <div style={{ padding: 16 }}>
                        <p style={{ fontSize: "0.9rem", marginBottom: 8 }}>
                            Bing Maps Basic has been retired.<br />
                            Please enter your <b>Bing Maps Enterprise Key</b>.
                        </p>

                        <IgrInput
                            placeholder="Enter key"
                            value={this.state.bingKey}
                            style={{ width: "100%", marginBottom: 12 }}
                            onInput={(e: any) =>
                                this.setState({ bingKey: e.target.value })
                            }
                        />

                        <IgrButton variant="flat" onClick={() => this.dialog.close()}>
                            OK
                        </IgrButton>
                    </div>
                </IgrDialog>

                {/* ------------- MAP ------------- */}
                <IgrGeographicMap
                    ref={m => this.map = m!}
                    width="100%"
                    height="100%"
                    zoomable="true"
                />
            </div>
        );
    }
}

// ---------- Render ---------- //
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<DisplayBingImagery />);
