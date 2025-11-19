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

        this.ImageryOptions = [];

        // OpenStreetMap option (same as original)
        this.ImageryOptions.push(this.getOption("OpenStreetMap", "(Default)"));

        // Azure options (replacing the old BingMaps entries)
        this.ImageryOptions.push(this.getOption("AzureMaps", "Satellite"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "Road"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "DarkGrey"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "TerraOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "HybridRoadOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "HybridDarkGreyOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "LabelsRoadOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "LabelsDarkGreyOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "TrafficDelayOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "TrafficAbsoluteOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "TrafficReducedOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "TrafficRelativeOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "TrafficRelativeDarkOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "WeatherInfraredOverlay"));
        this.ImageryOptions.push(this.getOption("AzureMaps", "WeatherRadarOverlay"));

        // ESRI options – unchanged pattern (Esri + style)
        for (const style of Object.keys(EsriStyle)) {
            this.ImageryOptions.push(this.getOption("Esri", style));
        }
    }

    // helper to build option text in original naming format
    public getOption(source: string, style: string): JSX.Element {
        const name = source + " " + style;
        return <option id={name} key={name}>{name}</option>;
    }

    // map ref – apply current selection
    public onMapRef(geoMap: IgrGeographicMap) {
        if (!geoMap) { return; }
        this.geoMap = geoMap;
        this.applyTileSource(this.state.tileSource);
    }

    // selection changed from dropdown
    public onTileSourceChanged(e: any) {
        const value = e.target.value.toString();
        this.setState({ tileSource: value });
        this.applyTileSource(value);
    }

    // core logic for switching imagery
    private applyTileSource(value: string) {
        if (!this.geoMap) return;

        let mode: string = value;
        const splitString = mode.split(" ");
        mode = "";
        for (let i = 0; i < splitString.length; i++) {
            mode += splitString[i];
        }
        // mode examples:
        // "OpenStreetMap(Default)"
        // "AzureMapsSatellite"
        // "EsriWorldTopographicMap"

        // -----------------------------
        // OpenStreetMap (original)
        // -----------------------------
        if (mode.indexOf("OpenStreetMap") === 0) {
            this.geoMap.series.clear();
            this.geoMap.backgroundContent = new IgrOpenStreetMapImagery();
            // optional zoom
            MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
            return;
        }

        // -----------------------------
        // Azure Maps (new)
        // -----------------------------
        if (mode.indexOf("AzureMaps") === 0) {
            const styleName = mode.replace("AzureMaps", ""); // e.g. "Satellite"

            // No key → let render() show a placeholder image instead of map content
            if (!this.state.azureKey) {
                this.geoMap.series.clear();
                this.geoMap.backgroundContent = null;
                return;
            }

            const styleInfo = this.mapStyles[styleName] || this.mapStyles["Satellite"];
            this.updateAzureMap(styleInfo.azureStyle);
            return;
        }

        // -----------------------------
        // ESRI (original logic)
        // -----------------------------
        if (mode.indexOf("Esri") === 0) {
            const name = mode.replace("Esri", ""); // e.g. "WorldTopographicMap"
            const style = (EsriStyle as any)[name] as EsriStyle;
            const uri = EsriUtility.getUri(style);

            this.geoMap.series.clear();

            const tileSource = new IgrArcGISOnlineMapImagery();
            tileSource.mapServerUri = uri;
            this.geoMap.backgroundContent = tileSource;
            return;
        }
    }

    // -----------------------------
    // Azure dialog wiring
    // -----------------------------
    private onDialogRef(dialog: IgrDialog) {
        this.dialogRef = dialog;
    }

    private openAzureDialog() {
        this.dialogRef?.show();
    }

    private applyAzureKey() {
        const key = (this.state.azureKey || "").trim();

        // just close dialog if key is empty – placeholder will stay visible for Azure
        this.dialogRef?.hide();
        if (!key) {
            return;
        }

        // store key, then if current selection is Azure -> update map
        this.setState({ azureKey: key }, () => {
            const current = this.state.tileSource;
            let mode: string = current;
            const splitString = mode.split(" ");
            mode = "";
            for (let i = 0; i < splitString.length; i++) {
                mode += splitString[i];
            }

            if (mode.indexOf("AzureMaps") === 0 && this.geoMap) {
                const styleName = mode.replace("AzureMaps", "");
                const styleInfo = this.mapStyles[styleName] || this.mapStyles["Satellite"];
                this.updateAzureMap(styleInfo.azureStyle);
            }
        });
    }

    // -----------------------------
    // Azure map logic (copied from MapDisplayImageryAzure)
    // -----------------------------
    private trafficWeatherStyles: AzureMapsImageryStyle[] = [
        AzureMapsImageryStyle.TrafficDelayOverlay,
        AzureMapsImageryStyle.TrafficAbsoluteOverlay,
        AzureMapsImageryStyle.TrafficReducedOverlay,
        AzureMapsImageryStyle.TrafficRelativeDarkOverlay,
        AzureMapsImageryStyle.WeatherInfraredOverlay,
        AzureMapsImageryStyle.WeatherRadarOverlay
    ];

    private updateAzureMap(style: AzureMapsImageryStyle) {
        if (!this.geoMap || !this.state.azureKey) return;

        this.geoMap.series.clear();

        const tileSource = new IgrAzureMapsImagery();
        tileSource.apiKey = this.state.azureKey;

        const series = new IgrGeographicTileSeries({ name: "AzureTileSeries", tileImagery: tileSource });
        series.tileImagery = tileSource;

        if (this.trafficWeatherStyles.includes(style)) {
            // overlays: DarkGrey background + overlay
            const bg = new IgrAzureMapsImagery();
            bg.apiKey = this.state.azureKey;
            bg.imageryStyle = AzureMapsImageryStyle.DarkGrey;
            this.geoMap.backgroundContent = bg;

            tileSource.imageryStyle = style;
            this.geoMap.series.add(series);

            if (style === AzureMapsImageryStyle.WeatherInfraredOverlay ||
                style === AzureMapsImageryStyle.WeatherRadarOverlay) {

                MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
            } else {
                // NYC area for traffic overlays
                this.geoMap.zoomToGeographic({
                    left: -74.2591,
                    top: 40.9176,
                    width: -73.7004 - (-74.2591),
                    height: 40.4774 - 40.9176
                });
            }

        } else if (style === AzureMapsImageryStyle.TerraOverlay) {
            // TerraOverlay: satellite background + Terra overlay
            const bg = new IgrAzureMapsImagery();
            bg.apiKey = this.state.azureKey;
            bg.imageryStyle = AzureMapsImageryStyle.Satellite;
            this.geoMap.backgroundContent = bg;

            tileSource.imageryStyle = style;
            this.geoMap.series.add(series);
            MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);

        } else {
            // base imagery: Satellite/Road/DarkGrey/Hybrid/etc
            tileSource.imageryStyle = style;
            this.geoMap.series.add(series);

            const bg = new IgrAzureMapsImagery();
            bg.apiKey = this.state.azureKey;
            bg.imageryStyle = AzureMapsImageryStyle.Satellite;
            this.geoMap.backgroundContent = bg;

            MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
        }
    }

    // -----------------------------
    // Azure placeholders (same URLs as Azure sample)
    // -----------------------------
    private mapStyles: Record<string, { placeholder: string; azureStyle: AzureMapsImageryStyle }> = {
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
        HybridRoadOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/AzureHybridRoad.png",
            azureStyle: AzureMapsImageryStyle.HybridRoadOverlay
        },
        HybridDarkGreyOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_hybriddarkgrey.png",
            azureStyle: AzureMapsImageryStyle.HybridDarkGreyOverlay
        },
        LabelsRoadOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsroad.png",
            azureStyle: AzureMapsImageryStyle.LabelsRoadOverlay
        },
        LabelsDarkGreyOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsdarkgrey.png",
            azureStyle: AzureMapsImageryStyle.LabelsDarkGreyOverlay
        },
        TrafficDelayOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_trafficdelay.png",
            azureStyle: AzureMapsImageryStyle.TrafficDelayOverlay
        },
        TrafficAbsoluteOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_absolute.png",
            azureStyle: AzureMapsImageryStyle.TrafficAbsoluteOverlay
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
        WeatherInfraredOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_Infrared_road.png",
            azureStyle: AzureMapsImageryStyle.WeatherInfraredOverlay
        },
        WeatherRadarOverlay: {
            placeholder: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_radar.png",
            azureStyle: AzureMapsImageryStyle.WeatherRadarOverlay
        }
    };

    public render(): JSX.Element {
        const { tileSource, azureKey } = this.state;

        // figure out if current selection is Azure + which style
        let isAzure = false;
        let azureStyleName = "Satellite";

        const parts = tileSource.split(" ");
        if (parts.length >= 2 && parts[0] === "AzureMaps") {
            isAzure = true;
            azureStyleName = parts[1];
        }

        const showPlaceholder = isAzure && !azureKey;
        const placeholderUrl =
            (this.mapStyles[azureStyleName] && this.mapStyles[azureStyleName].placeholder) ||
            this.mapStyles["Satellite"].placeholder;

        return (
            <div className="container sample">

                {/* TOP BAR: dropdown + Azure Key button */}
                <div className="options horizontal">
                    <label className="options-label">Imagery Tile Source</label>
                    <select
                        value={this.state.tileSource}
                        onChange={this.onTileSourceChanged}
                        style={{ width: "18rem" }}
                    >
                        {this.ImageryOptions}
                    </select>

                    <IgrButton
                        variant="contained"
                        onClick={this.openAzureDialog}
                        style={{ minWidth: "200px" }}
                    >
                        Enter Azure Key
                    </IgrButton>
                </div>

                {/* MAP AREA or Azure placeholder */}
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

                {/* AZURE KEY DIALOG */}
                <IgrDialog
                    ref={this.onDialogRef}
                    title="Azure Maps Key"
                >
                    <IgrInput
                        placeholder="Enter Azure Maps Key"
                        value={this.state.azureKey}
                        onInput={(e: any) =>
                            this.setState({ azureKey: e.detail ?? e.target.value })
                        }
                        style={{ width: "100%", marginBottom: "12px" }}
                    />

                    <div
                        slot="footer"
                        style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}
                    >
                        <IgrButton
                            variant="flat"
                            onClick={() => this.dialogRef && this.dialogRef.hide()}
                        >
                            Cancel
                        </IgrButton>
                        <IgrButton
                            variant="flat"
                            onClick={this.applyAzureKey}
                        >
                            Apply
                        </IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<MapDisplayImageryTiles />);
