import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  IgrGeographicMapModule,
  IgrGeographicMap,
  IgrAzureMapsImagery,
  AzureMapsImageryStyle,
  IgrGeographicTileSeries
} from "igniteui-react-maps";
import { IgrButton, IgrDialog, IgrInput, IgrSelect, IgrSelectItem } from "igniteui-react";
import { IgrDataChartInteractivityModule } from "igniteui-react-charts";
import "igniteui-webcomponents/themes/light/bootstrap.css";
import { MapUtils, MapRegion } from './MapUtils';

IgrGeographicMapModule.register();
IgrDataChartInteractivityModule.register();

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
  AzureMapsImageryStyle.TrafficDelayOverlay,
  AzureMapsImageryStyle.TrafficAbsoluteOverlay,
  AzureMapsImageryStyle.TrafficReducedOverlay,
  AzureMapsImageryStyle.TrafficRelativeDarkOverlay,
  AzureMapsImageryStyle.WeatherInfraredOverlay,
  AzureMapsImageryStyle.WeatherRadarOverlay
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

  componentDidMount() {
    this.onDialogShow(); // open dialog on startup
  }

  render(): JSX.Element {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh", // full viewport
        width: "100%",
      }}
    >
      {/* Controls panel */}
      <div
        style={{
          flex: "0 0 auto", // fixed height
          display: "flex",
          gap: "12px",
          alignItems: "center",
          justifyContent: "center",
          padding: "12px",
          zIndex: 2
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

      {/* Placeholder image or map fills the rest */}
      <div
        style={{
          width: "100%",           // fill parent container width
          maxWidth: "960px",       // constrain max width
          aspectRatio: "4 / 3",    // maintain 4:3 ratio
          margin: "0 auto",        // center horizontally
          position: "relative",
          overflow: "hidden",
        }}
      >
        {!this.state.mapVisible ? (
          <img
            src={placeholderImages[this.state.styleName]}
            alt={this.state.styleName}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover"
            }}
          />
        ) : (
          <IgrGeographicMap
            ref={(r) => (this.geoMap = r!)}
            width="100%"
            height="100%"
            zoomable={true}
          />
        )}
      </div>

      {/* Dialog always floats above */}
      <IgrDialog title="Azure Key" ref={this.onDialogRef} className="igr-dialog">
        <IgrInput
          label="An image will remain visible when no key is entered."
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
      case "Satellite": return AzureMapsImageryStyle.Satellite;
      case "Road": return AzureMapsImageryStyle.Road;
      case "DarkGrey": return AzureMapsImageryStyle.DarkGrey;
      case "TerraOverlay": return AzureMapsImageryStyle.TerraOverlay;
      case "HybridRoadOverlay": return AzureMapsImageryStyle.HybridRoadOverlay;
      case "HybridDarkGreyOverlay": return AzureMapsImageryStyle.HybridDarkGreyOverlay;
      case "LabelsRoadOverlay": return AzureMapsImageryStyle.LabelsRoadOverlay;
      case "LabelsDarkGreyOverlay": return AzureMapsImageryStyle.LabelsDarkGreyOverlay;
      case "TrafficDelayOverlay": return AzureMapsImageryStyle.TrafficDelayOverlay;
      case "TrafficAbsoluteOverlay": return AzureMapsImageryStyle.TrafficAbsoluteOverlay;
      case "TrafficReducedOverlay": return AzureMapsImageryStyle.TrafficReducedOverlay;
      case "TrafficRelativeOverlay": return AzureMapsImageryStyle.TrafficRelativeDarkOverlay;
      case "WeatherInfraredOverlay": return AzureMapsImageryStyle.WeatherInfraredOverlay;
      case "WeatherRadarOverlay": return AzureMapsImageryStyle.WeatherRadarOverlay;
      default: return AzureMapsImageryStyle.Satellite;
    }
  }

  private updateAzureMap(style: AzureMapsImageryStyle) {
    if (!this.geoMap || !this.state.apiKey) return;

    this.geoMap.series.clear();
    const tileSource = new IgrAzureMapsImagery();
    tileSource.apiKey = this.state.apiKey;

    const series = new IgrGeographicTileSeries({ name: "AzureTileSeries", tileImagery: tileSource });
    series.tileImagery = tileSource;

    if (trafficWeatherStyles.includes(style)) {
      const bg = new IgrAzureMapsImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.DarkGrey;
      this.geoMap.backgroundContent = bg;

      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);

      if (style === AzureMapsImageryStyle.WeatherInfraredOverlay || style === AzureMapsImageryStyle.WeatherRadarOverlay) {
        MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
      } else {
        this.geoMap.zoomToGeographic({ left: -74.2591, top: 40.9176, width: -73.7004 - (-74.2591), height: 40.4774 - 40.9176 });
      }
    }
    else if (style === AzureMapsImageryStyle.TerraOverlay) {
      const bg = new IgrAzureMapsImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.Satellite;
      this.geoMap.backgroundContent = bg;

      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);
      MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    }
    else {
      tileSource.imageryStyle = style;
      this.geoMap.series.add(series);
      const bg = new IgrAzureMapsImagery();
      bg.apiKey = this.state.apiKey;
      bg.imageryStyle = AzureMapsImageryStyle.Satellite;
      this.geoMap.backgroundContent = bg;
      MapUtils.navigateTo(this.geoMap, MapRegion.UnitedStates);
    }
  }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MapDisplayImageryAzure/>);
