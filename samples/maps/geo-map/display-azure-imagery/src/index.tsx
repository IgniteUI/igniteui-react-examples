import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  IgrGeographicMapModule,
  IgrGeographicMap,
  IgrAzureMapsMapImagery,
  AzureMapsImageryStyle,
  IgrGeographicTileSeries
} from "igniteui-react-maps";
import { IgrButton, IgrDialog, IgrInput, IgrSelect, IgrSelectItem } from "igniteui-react";
import { IgrDataChartInteractivityModule } from "igniteui-react-charts";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

enum MapRegion { UnitedStates }

class MapUtils {
  public static navigateTo(geoMap: IgrGeographicMap | undefined, region: MapRegion) {
    if (!geoMap) return;
    if (region === MapRegion.UnitedStates)
      geoMap.zoomToGeographic({ left: -125, top: 50, width: 60, height: 25 });
  }

  public static zoomToNYC(geoMap: IgrGeographicMap | undefined) {
    if (!geoMap) return;
    geoMap.zoomToGeographic({ left: -74.2591, top: 40.9176, width: -73.7004 - (-74.2591), height: 40.4774 - 40.9176 });
  }
}

const placeholderImages: Record<string, string> = {
  Satellite: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_satellite.png",
  Road: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_road.png",
  DarkGrey: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_darkgrey.png",
  TerraOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_terra_overlay.png",
  HybridRoadOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/AzureHybridRoad.png",
  HybridDarkGreyOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_hybriddarkgrey.png",
  LabelsRoadOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsroad.png",
  LabelsDarkGreyOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_labelsdarkgrey.png",
  TrafficDelayOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_trafficdelay.png",
  TrafficAbsoluteOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_absolute.png",
  TrafficReducedOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_light.png",
  TrafficRelativeOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_traffic_relative.png",
  WeatherInfraredOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_Infrared_road.png",
  WeatherRadarOverlay: "https://static.infragistics.com/xplatform/images/browsers/azure-maps/azure_weather_radar.png"
};

const trafficWeatherStyles = [
  AzureMapsImageryStyle.TrafficDelay,
  AzureMapsImageryStyle.TrafficAbsolute,
  AzureMapsImageryStyle.TrafficReduced,
  AzureMapsImageryStyle.TrafficRelativeDark,
  AzureMapsImageryStyle.WeatherInfrared,
  AzureMapsImageryStyle.WeatherRadar
];

export default class MapDisplayImageryAzure extends React.Component<any, any> {
  private geoMap?: IgrGeographicMap;
  private dialogRef?: IgrDialog;

  constructor(props: any) {
    super(props);
    this.state = { apiKey: "", styleName: "Satellite", mapVisible: false };

    this.onDialogRef = this.onDialogRef.bind(this);
    this.onDialogShow = this.onDialogShow.bind(this);
    this.onDialogHide = this.onDialogHide.bind(this);
    this.onApiKeyChange = this.onApiKeyChange.bind(this);
    this.onApplyKey = this.onApplyKey.bind(this);
    this.onResetKey = this.onResetKey.bind(this);
    this.onStyleChange = this.onStyleChange.bind(this);
  }

  render(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "16px",
        width: "100%",
        padding: "16px",
        boxSizing: "border-box"
      }}
    >
      {/* Controls panel */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap"
        }}
      >
        <IgrButton variant="contained" onClick={this.onDialogShow}>
          Enter Azure Maps API Key
        </IgrButton>

        <IgrSelect
          value={this.state.styleName}
          onChange={this.onStyleChange}
          style={{ minWidth: "220px" }}
        >
          {Object.keys(placeholderImages).map((key) => (
            <IgrSelectItem key={key} value={key}>
              {key}
            </IgrSelectItem>
          ))}
        </IgrSelect>
      </div>

      {/* Placeholder image */}
      {!this.state.mapVisible && (
        <div
          style={{
            width: "640px",
            height: "480px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #ccc",
            borderRadius: "6px",
            overflow: "hidden",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)"
          }}
        >
          <img
            src={placeholderImages[this.state.styleName]}
            alt={this.state.styleName}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      )}

      {/* Map container */}
      <div
        style={{
          width: "100%",
          maxWidth: "100%",
          height: "1000px",
          overflow: "hidden",
          display: this.state.mapVisible ? "block" : "none"
        }}
      >
        <IgrGeographicMap
          ref={(r) => (this.geoMap = r!)}
          width="100%"
          height="100%"
          zoomable={true}
        />
      </div>

      {/* Dialog for API key */}
      <IgrDialog title="Azure Key" ref={this.onDialogRef}>
        <IgrInput
          label="Azure Key"
          value={this.state.apiKey}
          inputMode="text"
          onInput={this.onApiKeyChange}
        />
        <div
          slot="footer"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "8px"
          }}
        >
          <IgrButton variant="flat" onClick={this.onResetKey}>
            Reset
          </IgrButton>
          <IgrButton variant="flat" onClick={this.onApplyKey}>
            Submit
          </IgrButton>
        </div>
      </IgrDialog>
    </div>
  );
}

  private onDialogRef(dialog: IgrDialog) { this.dialogRef = dialog; }
  private onDialogShow() { this.dialogRef?.show(); }
  private onDialogHide() { this.dialogRef?.hide(); }
  private onApiKeyChange(e: any) { this.setState({ apiKey: e.detail ?? e.target?.value ?? "" }); }
  private onResetKey() { this.setState({ apiKey: "", mapVisible: false }); this.onDialogHide(); }

  private onApplyKey() {
    if (!this.state.apiKey) { this.onDialogHide(); return; }
    this.setState({ mapVisible: true }, () => this.updateAzureMap(this.mapStyleFromName(this.state.styleName)));
    this.onDialogHide();
  }

  private onStyleChange(e: CustomEvent) {
    const selected = e.detail.value as string;
    this.setState({ styleName: selected }, () => {
      if (this.state.apiKey) this.updateAzureMap(this.mapStyleFromName(selected));
    });
  }

  private mapStyleFromName(name: string): AzureMapsImageryStyle {
    switch (name) {
      case "Satellite": return AzureMapsImageryStyle.Imagery;
      case "Road": return AzureMapsImageryStyle.Road;
      case "DarkGrey": return AzureMapsImageryStyle.DarkGrey;
      case "TerraOverlay": return AzureMapsImageryStyle.Terra;
      case "HybridRoadOverlay": return AzureMapsImageryStyle.HybridRoad;
      case "HybridDarkGreyOverlay": return AzureMapsImageryStyle.HybridDarkGrey;
      case "LabelsRoadOverlay": return AzureMapsImageryStyle.LabelsRoad;
      case "LabelsDarkGreyOverlay": return AzureMapsImageryStyle.LabelsDarkGrey;
      case "TrafficDelayOverlay": return AzureMapsImageryStyle.TrafficDelay;
      case "TrafficAbsoluteOverlay": return AzureMapsImageryStyle.TrafficAbsolute;
      case "TrafficReducedOverlay": return AzureMapsImageryStyle.TrafficReduced;
      case "TrafficRelativeOverlay": return AzureMapsImageryStyle.TrafficRelativeDark;
      case "WeatherInfraredOverlay": return AzureMapsImageryStyle.WeatherInfrared;
      case "WeatherRadarOverlay": return AzureMapsImageryStyle.WeatherRadar;
      default: return AzureMapsImageryStyle.Imagery;
    }
  }

  private updateAzureMap(style: AzureMapsImageryStyle) {
    if (!this.geoMap || !this.state.apiKey) return;

    this.geoMap.series.clear();
    const tileSource = new IgrAzureMapsMapImagery();
    tileSource.apiKey = this.state.apiKey;

    const series = new IgrGeographicTileSeries({ name: "AzureTileSeries", tileImagery: tileSource });
    series.tileImagery = tileSource;

    if (trafficWeatherStyles.includes(style)) {
      const bg = new IgrAzureMapsMapImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.DarkGrey;
      this.geoMap.backgroundContent = bg;

      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);

      if (style === AzureMapsImageryStyle.WeatherInfrared || style === AzureMapsImageryStyle.WeatherRadar) {
        MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
      } else {
        MapUtils.zoomToNYC(this.geoMap);
      }
    }
    else if (style === AzureMapsImageryStyle.Terra) {
      const bg = new IgrAzureMapsMapImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.Imagery;
      this.geoMap.backgroundContent = bg;

      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);
      MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    }
    else {
      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);
      const bg = new IgrAzureMapsMapImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.Imagery;
      this.geoMap.backgroundContent = bg;
      MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    }
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryAzure/>);
