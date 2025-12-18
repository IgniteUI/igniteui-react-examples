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
    IgrInput,
    IgrButton
} from "igniteui-react";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import { defineComponents } from "igniteui-webcomponents";
defineComponents(); // required for igc-dialog to work

import { MapUtils, MapRegion } from "./MapUtils";

IgrGeographicMapModule.register();

export default class MapDisplayImageryBing extends React.Component<any, any> {

    private map!: IgrGeographicMap;
    private dialogRef!: IgrDialog;

    constructor(props: any) {
        super(props);
        this.state = { bingKey: "" };
    }

    componentDidMount() {
        // Optional auto-open — remove it if you want manual ONLY
        setTimeout(() => this.dialogRef?.show(), 100);
    }

    private onDialogRef = (dlg: IgrDialog) => {
        this.dialogRef = dlg;
    };

    private openDialog = () => {
        this.dialogRef?.show();
    };

    private onApplyKey = () => {
        const key = this.state.bingKey.trim();
        if (key) {
            this.applyImagery(key);
        }
        this.dialogRef.hide();
    };

    private applyImagery(key: string) {
        if (!this.map) return;

        const imagery = new IgrBingMapsMapImagery();
        imagery.apiKey = key;
        imagery.imageryStyle = BingMapsImageryStyle.AerialWithLabels;

        // Fix HTTPS mismatch
        const uri = imagery.actualBingImageryRestUri;
        const https = window.location.toString().startsWith("https:");
        imagery.bingImageryRestUri = https
            ? uri.replace("http:", "https:")
            : uri.replace("https:", "http:");

        this.map.backgroundContent = imagery;

        MapUtils.navigateTo(this.map, MapRegion.Caribbean);
    }

    render() {
        return (
            <div className="container" style={{ position: "relative", padding: "12px" }}>

                {/* Centered Button Like Angular */}
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "12px"
                }}>
                    <IgrButton
                        variant="contained"
                        onClick={this.openDialog}
                        style={{
                            width: "auto",
                            minWidth: "220px",
                            padding: "8px 16px",
                            textAlign: "center"
                        }}
                    >
                        Enter Bing Maps Enterprise Key
                    </IgrButton>
                </div>

                {/* Dialog */}
                <IgrDialog title="Bing Maps Enterprise Key" ref={this.onDialogRef}>
                    <IgrInput
                        placeholder="Enter Bing Maps Key"
                        value={this.state.bingKey}
                        style={{ width: "100%", marginBottom: "12px" }}
                        onInput={(e: any) =>
                            this.setState({ bingKey: e.detail ?? e.target.value })
                        }
                    />

                    <div slot="footer"
                        style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                        <IgrButton variant="flat" onClick={() => this.dialogRef.hide()}>
                            Cancel
                        </IgrButton>
                        <IgrButton variant="flat" onClick={this.onApplyKey}>
                            Apply
                        </IgrButton>
                    </div>
                </IgrDialog>

                {/* Map */}
                <IgrGeographicMap
                    ref={m => (this.map = m!)}
                    width="100%"
                    height="100%"
                    zoomable={true}
                />
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryBing/>);
