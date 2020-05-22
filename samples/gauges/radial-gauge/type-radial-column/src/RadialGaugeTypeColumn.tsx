import { SweepDirection } from 'igniteui-react-core';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { RadialGaugeBackingShape } from 'igniteui-react-gauges';
import { RadialGaugeNeedleShape } from 'igniteui-react-gauges';
import { RadialGaugePivotShape } from 'igniteui-react-gauges';
import { RadialGaugeScaleOversweepShape } from 'igniteui-react-gauges';
import * as React from 'react';

IgrRadialGaugeModule.register();

export default class RadialGaugeTypeColumn extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGauge = this.onCreateGauge.bind(this);
    }

    public onCreateGauge(component: IgrRadialGauge) {
        this.renderGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igComponent">
                    <IgrRadialGauge
                        ref={this.onCreateGauge}
                        height="100%"
                        width="100%"  />
                </div>
                <div className="igOverlay-center">
                     <label className="igOverlay-center-label" style={{color: "#1e90ff"}}>270</label>
                </div>
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.minimumValue = 0;
        gauge.maximumValue = 360;
        gauge.value = 270;
        gauge.interval = 30;
        gauge.transitionDuration = 500;

        // setting appearance of labels
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.85;
        gauge.font = "15px Verdana,Arial";

        gauge.needleShape = RadialGaugeNeedleShape.None;
        gauge.needlePivotShape = RadialGaugePivotShape.None;

        // setting extent of gauge scale
        gauge.scaleStartAngle = 0;
        gauge.scaleEndAngle = 360;
        gauge.scaleBrush = "#e0dfdf";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Circular;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.7;
        gauge.scaleStartExtent = 0.6;

        // setting appearance of major/minor ticks
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleEndExtent + 0.0;
        gauge.minorTickEndExtent   = gauge.scaleEndExtent + 0.025;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickBrush = "transparent";
        gauge.tickStartExtent = gauge.scaleEndExtent + 0.0;
        gauge.tickEndExtent   = gauge.scaleEndExtent + 0.05;
        gauge.tickStrokeThickness = 1;
        gauge.tickBrush = "#79797a";

        // setting appearance of backing dial
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.backingShape = RadialGaugeBackingShape.Circular;

        // setting custom gauge ranges
        const range = new IgrRadialGaugeRange({});
        range.startValue = 0;
        range.endValue = gauge.value;
        range.brush   = "#1e90ff";
        range.outline = "#1e90ff";
        range.innerStartExtent = gauge.scaleStartExtent;
        range.innerEndExtent   = gauge.scaleStartExtent;
        range.outerStartExtent = gauge.scaleEndExtent;
        range.outerEndExtent   = gauge.scaleEndExtent;

        gauge.ranges.add(range);

    }

}
