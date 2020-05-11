
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

export default class RadialGaugeTypeSemi extends React.Component {

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
    }

    public onGaugeRef(component: IgrRadialGauge) {
        this.renderGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">

                <IgrRadialGauge
                    ref={this.onGaugeRef}
                    height="100%"
                    width="100%"  />
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        gauge.transitionDuration = 500;

        gauge.minimumValue = 0;
        gauge.maximumValue = 80;
        gauge.value = 10;
        gauge.interval = 10;

        // Label Settings
        gauge.labelExtent = 0.6;
        gauge.labelInterval = 10;
        gauge.font = "15px Verdana,Arial";

        // Scale Settings
        gauge.scaleStartAngle = 135;
        gauge.scaleEndAngle = 45;
        gauge.scaleBrush = "#0b8fed";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.825;
        gauge.scaleStartExtent = 0.775;

        // Backing Settings
        gauge.backingShape = RadialGaugeBackingShape.Fitted;
        gauge.backingBrush = "#fcfcfc";
        gauge.backingOutline = "#d6d6d6";
        gauge.backingOversweep = 5;
        gauge.backingCornerRadius = 10;
        gauge.backingOuterExtent = 0.9;
        gauge.backingStrokeThickness = 4;

        // Needle Settings
        gauge.needleShape = RadialGaugeNeedleShape.Needle;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needleEndExtent = 0.5;
        gauge.needlePointFeatureExtent = 0.2;
        gauge.needlePivotWidthRatio = 0.1;
        gauge.needleBrush = "#9f9fa0";
        gauge.needleOutline = "#9f9fa0";
        gauge.needlePivotBrush = "#9f9fa0";
        gauge.needlePivotOutline = "#9f9fa0";

        // TickMark Settings
        gauge.tickBrush = "rgba(51, 51, 51, 1)";
        gauge.tickStartExtent = gauge.scaleStartExtent - 0.10;
        gauge.tickEndExtent   = gauge.scaleStartExtent - 0.025;
        gauge.tickStrokeThickness = 1;

        gauge.minorTickBrush = "rgba(73, 73, 73, 1)";
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleStartExtent - 0.05;
        gauge.minorTickEndExtent   = gauge.scaleStartExtent - 0.025;
        gauge.minorTickStrokeThickness = 1;

        gauge.ranges.clear();
    }

}