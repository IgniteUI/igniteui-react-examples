
import { SweepDirection } from 'igniteui-react-core';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { RadialGaugeBackingShape } from 'igniteui-react-gauges';
import { RadialGaugeNeedleShape } from 'igniteui-react-gauges';
import { RadialGaugePivotShape } from 'igniteui-react-gauges';
import { RadialGaugeScaleOversweepShape } from 'igniteui-react-gauges';

import * as React from "react";
import "./RadialGaugeSharedStyles.css";

IgrRadialGaugeModule.register();

export default class RadialGaugeTypeDirection extends React.Component<any, any> {

    public directions: any = {
        "0":   "N",
        "45":  "NE",
        "90":  "E",
        "135": "SE",
        "180": "S",
        "225": "SW",
        "270": "W",
        "315": "NW",
        "360": "N",
    }

    constructor(props: any) {
        super(props);

        this.onCreateDegreesGauge = this.onCreateDegreesGauge.bind(this);
        this.onCreateDirectionGauge = this.onCreateDirectionGauge.bind(this);

        this.state = { degrees: 30 }
    }

    public onCreateDegreesGauge(gauge: IgrRadialGauge) {
        this.renderGauge(gauge);

        gauge.interval      = 15;
        gauge.labelInterval = 15;
        gauge.needleBrush = "red";
        gauge.value = this.state.degrees;
        gauge.font = "11px Verdana,Arial";
        gauge.labelExtent  = gauge.scaleStartExtent - 0.1;
        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value < 360 ? e.value + "°" : "";
        };

        gauge.minorTickStartExtent = gauge.scaleStartExtent - 0.0125;
        gauge.minorTickEndExtent   = gauge.scaleStartExtent - 0.0125 - 0.0125;
        gauge.tickStartExtent = gauge.scaleStartExtent - 0.0125;
        gauge.tickEndExtent   = gauge.scaleStartExtent - 0.0125 - 0.03;
    }

    public onCreateDirectionGauge(gauge: IgrRadialGauge) {
        this.renderGauge(gauge);

        gauge.interval      = 45;
        gauge.labelInterval = 45;
        gauge.needleBrush = "dodgerblue";
        gauge.value = (this.state.degrees + 180) % 360;
        // setting appearance of labels
        gauge.font = "15px Verdana,Arial";
        gauge.labelExtent  = gauge.scaleEndExtent + 0.05;
        gauge.formatLabel = (s: any, e : any) => {
            if (this.directions[e.value] !== undefined) {
                e.label = this.directions[e.value];
            } else {
                e.label = e.value;
            }
        };

        gauge.minorTickBrush = "transparent";
        gauge.tickBrush = "transparent";
    }

    public render() {
        return (
            <div className="sampleOverlays">
                <div className="sampleOverlayItem">
                    <IgrRadialGauge
                        ref={this.onCreateDegreesGauge}
                        height="100%"
                        width="100%"  />
                </div>
                <div className="sampleOverlayItem">
                    <IgrRadialGauge
                        ref={this.onCreateDirectionGauge}
                        height="100%"
                        width="100%"  />
                </div>
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        gauge.minimumValue = 0;
        gauge.maximumValue = 360;
        gauge.value = 270;
        gauge.interval      = 45;
        gauge.labelInterval = 45;
        gauge.transitionDuration = 500;

        // setting extent of gauge scale
        gauge.scaleStartAngle = -90;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = "#e0dfdf";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Circular;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.7;
        gauge.scaleStartExtent = 0.675;

        gauge.isNeedleDraggingConstrained = false;
        gauge.isNeedleDraggingEnabled = false;
        gauge.needlePivotShape = RadialGaugePivotShape.None;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needleBaseFeatureWidthRatio = 0.2;
        gauge.needleEndExtent = gauge.scaleStartExtent - 0.15;

        // setting appearance of major/minor ticks
        gauge.minorTickCount = (gauge.interval / 15) - 1;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = "#79797a";
        gauge.tickStrokeThickness = 1;
        gauge.tickBrush = "#79797a";

        // setting appearance of backing dial
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.backingShape = RadialGaugeBackingShape.Circular;


    }

}