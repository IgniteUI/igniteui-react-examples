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

import { EsriStyle } from "./EsriUtility";
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

        // ---- OSM + all Azure styles + Esri ----
        this.ImageryOptions = [
            this.getOption("OpenStreetMap", "(Default)"),

            // Azure base styles
            this.getOption("AzureMaps", "Satellite"),
            this.getOption("AzureMaps", "Road"),
            this.getOption("AzureMaps", "DarkGrey"),
            this.getOption("AzureMaps", "TerraOverlay"),

            // Azure label / hybrid overlays
            this.getOption("AzureMaps", "LabelsRoadOverlay"),
            this.getOption("AzureMaps", "LabelsDarkGreyOverlay"),
            this.getOption("AzureMaps", "HybridRoadOverlay"),
            this.getOption("AzureMaps", "HybridDarkGreyOverlay"),

            // Azure traffic overlays
            this.getOption("AzureMaps", "TrafficAbsoluteOverlay"),
            this.getOption("AzureMaps", "TrafficDelayOverlay"),
            this.getOption("AzureMaps", "TrafficReducedOverlay"),
            this.getOption("AzureMaps", "TrafficRelativeOverlay"),
            this.getOption("AzureMaps", "TrafficRelativeDarkOverlay"),

            // Azure weather overlays
            this.getOption("AzureMaps", "WeatherRadarOverlay"),
            this.getOption("AzureMaps", "WeatherInfraredOverlay"),

            // ESRI (all styles stay)
            ...Object.keys(EsriStyle).map(s => this.getOption("Esri", s))
        ];
    }

    public getOption(source: string, style: string): JSX.Element {
        const name = source + " " + style;
        return <option id={name} key={name}>{name}</option>;
    }

    public onMapRef(geoMap: IgrGeographicMap | null) {
        this.geoMap = geoMap;
        if (!geoMap) {
            return;
        }

        // Apply initial imagery when the map is ready
        this.onMapTypeSelectionChange(this.state.tileSource);
    }

    public onTileSourceChanged(e: any) {
        const value = e.target.value.toString();
        this.setState({ tileSource: value });
        this.onMapTypeSelectionChange(value);
    }

    /** Decides OSM / Azure / Esri based on the selected tileSource text */
    private onMapTypeSelectionChange(tileSource: string) {
        if (!this.geoMap) {
            return;
        }

        const parts = tileSource.split(" ");
        const source = parts[0];
        const styleName = parts[1] ?? "";

        // OpenStreetMap
        if (source === "OpenStreetMap") {
            this.geoMap.series.clear();
            this.geoMap.backgroundContent = new IgrOpenStreetMapImagery();
        }

        // Azure Maps
        else if (source === "AzureMaps") {
            // If no key, UI shows placeholder instead of map; just clear the map
            if (!this.state.azureKey) {
                this.geoMap.series.clear();
                this.geoMap.backgroundContent = null;
                return;
            }

            const azureStyle =
                this.mapStyles[styleName]?.azureStyle ?? AzureMapsImageryStyle.Satellite;

            this.updateAzureMap(azureStyle);
        }

        // ESRI
        else {
            this.geoMap.series.clear();

            const esri = new IgrArcGISOnlineMapImagery();
            const uri = EsriStyle[styleName as keyof typeof EsriStyle];

            esri.mapServerUri = uri;
            this.geoMap.backgroundContent = esri;
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

        if (!key) {
            return;
        }

        // Save the key and re-apply the current selection (if Azure)
        this.setState({ azureKey: key }, () => {
            if (this.state.tileSource.startsWith("AzureMaps")) {
                this.onMapTypeSelectionChange(this.state.tileSource);
            }
        });
    }

    // -----------------------------
    // Simplified Azure logic (now works for all styles)
    // -----------------------------
    private updateAzureMap(style: AzureMapsImageryStyle) {
        if (!this.geoMap || !this.state.azureKey) {
            return;
        }

        this.geoMap.series.clear();

        const imagery = new IgrAzureMapsImagery();
        imagery.apiKey = this.state.azureKey;

        const series = new IgrGeographicTileSeries({
            name: "tileSeries",
            tileImagery: imagery
        });
        series.tileImagery = imagery;

        // traffic styles → zoom to NYC
        const isTraffic =
            style === AzureMapsImageryStyle.TrafficAbsoluteOverlay ||
            style === AzureMapsImageryStyle.TrafficDelayOverlay ||
            style === AzureMapsImageryStyle.TrafficReducedOverlay ||
            style === AzureMapsImageryStyle.TrafficRelativeOverlay ||
            style === AzureMapsImageryStyle.TrafficRelativeDarkOverlay;


        // TerraOverlay = satellite background + Terra overlay
        if (style === AzureMapsImageryStyle.TerraOverlay) {
            const background = new IgrAzureMapsImagery();
            background.apiKey = this.state.azureKey;
            background.imageryStyle = AzureMapsImageryStyle.Satellite;

            this.geoMap.backgroundContent = background;
            imagery.imageryStyle = style;
            this.geoMap.series.add(series);
        }
        // All other Azure styles (base + overlays)
        else {
            imagery.imageryStyle = style;
            this.geoMap.backgroundContent = null;
            this.geoMap.series.add(series);
        }

        this.geoMap.zoomToGeographic({ left: -74.2591, top: 40.9176, width: -73.7004 - (-74.2591), height: 40.4774 - 40.9176 });
    }

    // -----------------------------
    // Azure placeholder mapping
    // -----------------------------
    private mapStyles: {
        [style: string]: { placeholder: string; azureStyle: AzureMapsImageryStyle };
    } = {
        Satellite: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_satellite.png",
            azureStyle: AzureMapsImageryStyle.Satellite
        },
        Road: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_road.png",
            azureStyle: AzureMapsImageryStyle.Road
        },
        DarkGrey: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_darkgrey.png",
            azureStyle: AzureMapsImageryStyle.DarkGrey
        },
        TerraOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_terra_overlay.png",
            azureStyle: AzureMapsImageryStyle.TerraOverlay
        },

        LabelsRoadOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsroad.png",
            azureStyle: AzureMapsImageryStyle.LabelsRoadOverlay
        },
        LabelsDarkGreyOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsdarkgrey.png",
            azureStyle: AzureMapsImageryStyle.LabelsDarkGreyOverlay
        },
        HybridRoadOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_hybridroad.png",
            azureStyle: AzureMapsImageryStyle.HybridRoadOverlay
        },
        HybridDarkGreyOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/AzureHybridDarkGrey.png",
            azureStyle: AzureMapsImageryStyle.HybridDarkGreyOverlay
        },

        TrafficAbsoluteOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_absolute.png",
            azureStyle: AzureMapsImageryStyle.TrafficAbsoluteOverlay
        },
        TrafficDelayOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_delay.png",
            azureStyle: AzureMapsImageryStyle.TrafficDelayOverlay
        },
        TrafficReducedOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_light.png",
            azureStyle: AzureMapsImageryStyle.TrafficReducedOverlay
        },
        TrafficRelativeOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_relative.png",
            azureStyle: AzureMapsImageryStyle.TrafficRelativeOverlay
        },
        TrafficRelativeDarkOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_relative_dark.png",
            azureStyle: AzureMapsImageryStyle.TrafficRelativeDarkOverlay
        },

        WeatherRadarOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_radar.png",
            azureStyle: AzureMapsImageryStyle.WeatherRadarOverlay
        },
        WeatherInfraredOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_Infrared_road.png",
            azureStyle: AzureMapsImageryStyle.WeatherInfraredOverlay
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
                        value={tileSource}
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

                    <div
                        slot="footer"
                        style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
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

// ----------- RENDER BLOCK -------------
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<MapDisplayImageryTiles />);
