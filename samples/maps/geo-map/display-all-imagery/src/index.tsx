import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
    IgrGeographicMapModule,
    IgrGeographicMap,
    IgrOpenStreetMapImagery,
    IgrArcGISOnlineMapImagery,
    IgrAzureMapsImagery,
    AzureMapsImageryStyle,
    IgrGeographicTileSeries
} from "igniteui-react-maps";

import {
    IgrDialog,
    IgrInput,
    IgrButton
} from "igniteui-react";

import { EsriStyle, EsriUtility } from "./EsriUtility";
import { MapUtils, MapRegion } from "./MapUtils";

import "igniteui-webcomponents/themes/light/bootstrap.css";
import { defineComponents } from "igniteui-webcomponents";

defineComponents();
IgrGeographicMapModule.register();

export default class MapDisplayImageryTiles extends React.Component<any, any> {

    public geoMap: IgrGeographicMap | null = null;
    private dialogRef: IgrDialog | null = null;

    public ImageryOptions: JSX.Element[];

    constructor(props: any) {
        super(props);

        this.state = {
            tileSource: "OpenStreetMap (Default)",
            azureKey: ""
        };

        this.onMapRef = this.onMapRef.bind(this);
        this.onTileSourceChanged = this.onTileSourceChanged.bind(this);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.openAzureDialog = this.openAzureDialog.bind(this);
        this.applyAzureKey = this.applyAzureKey.bind(this);

        // ---- ONLY the 4 primary maps + Terra overlay ----
        this.ImageryOptions = [
            this.getOption("OpenStreetMap", "(Default)"),

            // minimal Azure list
            this.getOption("AzureMaps", "Satellite"),
            this.getOption("AzureMaps", "Road"),
            this.getOption("AzureMaps", "TerraOverlay"),

            // ESRI (all styles stay)
            ...Object.keys(EsriStyle).map(s => this.getOption("Esri", s))
        ];
    }

    public getOption(source: string, style: string): JSX.Element {
        const name = source + " " + style;
        return <option id={name} key={name}>{name}</option>;
    }

    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) return;
        this.geoMap = geoMap;
        this.applyTileSource(this.state.tileSource);
    }

    public onTileSourceChanged(e: any) {
        const value = e.target.value.toString();
        this.setState({ tileSource: value });
        this.applyTileSource(value);
    }

    private applyTileSource(value: string) {
        if (!this.geoMap) return;

        let mode = value.split(" ").join("");

        // -----------------------------
        // OpenStreetMap
        // -----------------------------
        if (mode.startsWith("OpenStreetMap")) {
            this.geoMap.series.clear();
            this.geoMap.backgroundContent = new IgrOpenStreetMapImagery();
            MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
            return;
        }

        // -----------------------------
        // Azure Maps (Satellite, Road, TerraOverlay)
        // -----------------------------
        if (mode.startsWith("AzureMaps")) {
            const styleName = mode.replace("AzureMaps", "");

            if (!this.state.azureKey) {
                this.geoMap.series.clear();
                this.geoMap.backgroundContent = null;
                return;
            }

            const azureStyle = this.mapStyles[styleName]?.azureStyle ?? AzureMapsImageryStyle.Satellite;
            this.updateAzureMap(azureStyle);
            return;
        }

        // -----------------------------
        // ESRI
        // -----------------------------
        if (mode.startsWith("Esri")) {
            const name = mode.replace("Esri", "");
            const style = (EsriStyle as any)[name] as EsriStyle;

            const uri = EsriUtility.getUri(style);

            this.geoMap.series.clear();
            const tileSource = new IgrArcGISOnlineMapImagery();
            tileSource.mapServerUri = uri;

            this.geoMap.backgroundContent = tileSource;
            return;
        }
    }

    private onDialogRef(dialog: IgrDialog) {
        this.dialogRef = dialog;
    }

    private openAzureDialog() {
        this.dialogRef?.show();
    }

    private applyAzureKey() {
        const key = (this.state.azureKey || "").trim();
        this.dialogRef?.hide();
        if (!key) return;

        this.setState({ azureKey: key }, () => {
            const mode = this.state.tileSource.split(" ").join("");
            if (mode.startsWith("AzureMaps") && this.geoMap) {
                const styleName = mode.replace("AzureMaps", "");
                const azureStyle = this.mapStyles[styleName]?.azureStyle ?? AzureMapsImageryStyle.Satellite;
                this.updateAzureMap(azureStyle);
            }
        });
    }

    // -----------------------------
    // Simplified Azure logic
    // -----------------------------
    private updateAzureMap(style: AzureMapsImageryStyle) {
        if (!this.geoMap || !this.state.azureKey) return;

        this.geoMap.series.clear();

        const imagery = new IgrAzureMapsImagery();
        imagery.apiKey = this.state.azureKey;

        const series = new IgrGeographicTileSeries({ tileImagery: imagery });
        series.tileImagery = imagery;

        // TerraOverlay = satellite background + Terra overlay
        if (style === AzureMapsImageryStyle.TerraOverlay) {
            const background = new IgrAzureMapsImagery();
            background.apiKey = this.state.azureKey;
            background.imageryStyle = AzureMapsImageryStyle.Satellite;

            this.geoMap.backgroundContent = background;
            imagery.imageryStyle = style;
            this.geoMap.series.add(series);

            MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
            return;
        }

        // Regular Azure map (Satellite or Road)
        imagery.imageryStyle = style;

        this.geoMap.backgroundContent = null;
        this.geoMap.series.add(series);

        MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    }

    // -----------------------------
    // Azure placeholder mapping
    // -----------------------------
    private mapStyles: any = {
        Satellite: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_satellite.png",
            azureStyle: AzureMapsImageryStyle.Satellite
        },
        Road: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_road.png",
            azureStyle: AzureMapsImageryStyle.Road
        },
        TerraOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_terra_overlay.png",
            azureStyle: AzureMapsImageryStyle.TerraOverlay
        }
    };

    public render(): JSX.Element {
        const { tileSource, azureKey } = this.state;

        const parts = tileSource.split(" ");
        const isAzure = parts[0] === "AzureMaps";
        const styleName = parts[1] ?? "Satellite";

        const showPlaceholder = isAzure && !azureKey;
        const placeholderUrl =
            this.mapStyles[styleName]?.placeholder ??
            this.mapStyles["Satellite"].placeholder;

        return (
            <div className="container sample">

                {/* TOP BAR */}
                <div className="options horizontal">
                    <label className="options-label">Imagery Tile Source</label>
                    <select
                        value={this.state.tileSource}
                        onChange={this.onTileSourceChanged}
                        style={{ width: "18rem" }}
                    >
                        {this.ImageryOptions}
                    </select>

                    {isAzure &&
                        <IgrButton
                            variant="contained"
                            onClick={this.openAzureDialog}
                            style={{ minWidth: "200px" }}
                        >
                            Enter Azure Key
                        </IgrButton>
                    }
                </div>

                {/* MAP OR PLACEHOLDER */}
                <div className="container">
                    {showPlaceholder ? (
                        <img
                            src={placeholderUrl}
                            alt="Azure Maps placeholder"
                            style={{ width: "100%", height: "100%", objectFit: "contain" }}
                        />
                    ) : (
                        <IgrGeographicMap
                            ref={this.onMapRef}
                            width="100%"
                            height="100%"
                            zoomable={true}
                        />
                    )}
                </div>

                {/* DIALOG */}
                <IgrDialog ref={this.onDialogRef} title="Azure Maps Key">
                    <IgrInput
                        placeholder="Enter Azure Maps Key"
                        value={azureKey}
                        onInput={(e: any) =>
                            this.setState({ azureKey: e.detail ?? e.target.value })
                        }
                        style={{ width: "100%", marginBottom: "12px" }}
                    />

                    <div slot="footer" style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                        <IgrButton variant="flat" onClick={() => this.dialogRef?.hide()}>
                            Cancel
                        </IgrButton>
                        <IgrButton variant="flat" onClick={this.applyAzureKey}>
                            Apply
                        </IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }
}

// ----------- FIXED RENDER BLOCK -------------
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryTiles/>);
