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

export default class RadialGaugeTypeSegmented extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGauge = this.onCreateGauge.bind(this);
    }

    public onCreateGauge(component: IgrRadialGauge) {
        if (!component) { return; }

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
                    <label className="igOverlay-center-label" style={{color: "#1e90ff"}}>80</label>
                </div>
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.value = 80;
        gauge.interval = 10;
        gauge.transitionDuration = 500;

        // setting appearance of labels
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.8;
        gauge.font = "15px Verdana,Arial";
        gauge.formatLabel = (s: any, e : any) => {
            if (e.value > 0) {
                e.label = e.value + "%"
            } else {
                e.label = "";
            }
        };

        gauge.needleShape = RadialGaugeNeedleShape.None;
        gauge.needlePivotShape = RadialGaugePivotShape.None;

        // setting extent of gauge scale
        gauge.scaleStartAngle = -90;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = "#e0dfdf";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Circular;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent   = 0.7;
        gauge.scaleStartExtent = 0.6;

        // setting appearance of major/minor ticks
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleStartExtent;
        gauge.minorTickEndExtent   = gauge.scaleEndExtent;
        gauge.minorTickStrokeThickness = 2;
        gauge.minorTickBrush = "white";
        gauge.tickStartExtent = gauge.scaleStartExtent;
        gauge.tickEndExtent   = gauge.scaleEndExtent;
        gauge.tickStrokeThickness = 2;
        gauge.tickBrush = "white";

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
