import { IgrSparkline } from 'igniteui-react-charts';
import { IgrSparklineModule } from 'igniteui-react-charts';
import { IgrSparklineCoreModule } from 'igniteui-react-charts';
import { Visibility } from 'igniteui-react-core';

import * as React from "react";
import "../styles.css";
import "./SparklineSharedStyles.css";
import { SparklineSharedComponent } from "./SparklineSharedComponent";
import { SharedData } from "./SparklineSharedData";

IgrSparklineCoreModule.register();
IgrSparklineModule.register();

export default class SparklineMarkers extends SparklineSharedComponent {
    public data: any[];

    public sparkline: IgrSparkline;

    constructor(props: any) {
        super(props);

        this.onSparklineRef = this.onSparklineRef.bind(this);
        this.onMarkerCheckboxChanged = this.onMarkerCheckboxChanged.bind(this);

        this.data = SharedData.getPaddedDataForMarkers();
    }

    public render() {
        return (
            <div className="sampleContainer">
                <div className="options">
                    <label className="optionItem"><input id="High" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />High Markers</label>
                    <label className="optionItem"><input id="Low" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />Low Markers</label>
                    <label className="optionItem"><input id="First" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />First Markers</label>
                    <label className="optionItem"><input id="Last" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />Last Markers</label>
                    <label className="optionItem"><input id="Negative" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />Negative Markers</label>
                    <label className="optionItem"><input id="All" defaultChecked={true} type="checkbox" onChange={this.onMarkerCheckboxChanged} />All Markers</label>
                </div>
                <div className="chart">
                    <IgrSparkline height="100%" width="100%"
                        ref={this.onSparklineRef}
                        dataSource={this.data}
                        valueMemberPath="Value"
                        displayType="Line"
                        minimum={-3}
                        maximum={8}
                        markerVisibility="Visible"
                        highMarkerVisibility="Visible"
                        lowMarkerVisibility="Visible"
                        firstMarkerVisibility="Visible"
                        lastMarkerVisibility="Visible"
                        negativeMarkerVisibility="Visible"
                        markerSize={10}
                        firstMarkerSize={10}
                        lastMarkerSize={10}
                        lowMarkerSize={10}
                        highMarkerSize={10}
                        negativeMarkerSize={10} />
                </div>
            </div >
        );
    }

    public onMarkerCheckboxChanged(e: any) {
        const selection = e.target.checked as boolean;

        let visibility: Visibility;
        if (selection) {
            visibility = Visibility.Visible;
        }
        else {
            visibility = Visibility.Collapsed;
        }

        switch (e.target.id) {
            case "High": {
                this.sparkline.highMarkerVisibility = visibility;
                break;
            }
            case "Low": {
                this.sparkline.lowMarkerVisibility = visibility;
                break;
            }
            case "First": {
                this.sparkline.firstMarkerVisibility = visibility;
                break;
            }
            case "Last": {
                this.sparkline.lastMarkerVisibility = visibility;
                break;
            }
            case "Negative": {
                this.sparkline.negativeMarkerVisibility = visibility;
                break;
            }
            case "All": {
                this.sparkline.markerVisibility = visibility;
                break;
            }
        }
    }

    public onSparklineRef(sparkline: IgrSparkline) {
        if (sparkline != null) {
            this.sparkline = sparkline;
        }
    }
}
