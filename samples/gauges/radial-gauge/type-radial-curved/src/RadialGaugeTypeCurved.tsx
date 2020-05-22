
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

export default class RadialGaugeTypeCurved extends React.Component {

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

        if (!gauge) { return; }

        gauge.transitionDuration = 500;

        gauge.minimumValue = 0;
        gauge.maximumValue = 220;
        gauge.value = 120;
        gauge.interval = 20;

        // Label Settings
        gauge.labelExtent = 0.55;
        gauge.labelInterval = gauge.interval;
        gauge.font = "15px Verdana,Arial";

        // Scale Settings
        gauge.scaleStartAngle = 135;
        gauge.scaleEndAngle = 45;
        gauge.scaleBrush = "transparent";
        gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        gauge.scaleSweepDirection = SweepDirection.Clockwise;
        gauge.scaleEndExtent = 0.9;
        gauge.scaleStartExtent = 0.7;

        // Backing Settings
        gauge.backingShape = RadialGaugeBackingShape.Circular;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

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
        gauge.tickBrush = "#494949";
        gauge.tickStartExtent = gauge.scaleStartExtent - 0.05;
        gauge.tickEndExtent   = gauge.scaleStartExtent;
        gauge.tickStrokeThickness = 1;

        gauge.minorTickBrush = "#494949";
        gauge.minorTickCount = 4;
        gauge.minorTickStartExtent = gauge.scaleStartExtent - 0.025;
        gauge.minorTickEndExtent   = gauge.scaleStartExtent;
        gauge.minorTickStrokeThickness = 1;

        // const colors = ['#cacaca', '#10b401', '#fdb417', '#ff0000'];
        // const colors = ['#7ef866', '#a9f782', '#c1f984', '#d7fb85', '#ecfd84', '#fcd727', '#ffaf25', '#ff8424', '#fa5225', '#e9002c'];
        const colors = ['#3ebe2e', '#44d12b', '#62e133', '#8eef46', '#c3f961', '#fbc624', '#f38e1c', '#dc5815', '#b8250c', '#840000'];

        gauge.rangeBrushes  = colors;
        gauge.rangeOutlines = colors;

        const extentSpan = gauge.scaleEndExtent - gauge.scaleStartExtent - 0.025;
        const extentInterval = extentSpan / colors.length;

        const valueSpan = gauge.maximumValue - gauge.minimumValue;
        const valueInterval = valueSpan / colors.length;

        gauge.ranges.clear();

        const rangeRim = new IgrRadialGaugeRange({});
        rangeRim.brush = "#494949";
        rangeRim.outline = "#494949";
        rangeRim.startValue = gauge.minimumValue;
        rangeRim.endValue   = gauge.maximumValue;

        rangeRim.innerStartExtent = gauge.scaleStartExtent;
        rangeRim.innerEndExtent   = gauge.scaleStartExtent;
        rangeRim.outerStartExtent = gauge.scaleStartExtent;
        rangeRim.outerEndExtent   = gauge.scaleStartExtent;

        gauge.ranges.add(rangeRim);

        // generating gauge ranges for each color
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];

            const range = new IgrRadialGaugeRange({});
            range.brush = color;
            range.outline = color;
            range.startValue = gauge.minimumValue + (valueInterval * i);
            range.endValue   = gauge.minimumValue + (valueInterval * (i + 1));

            range.innerStartExtent = gauge.scaleStartExtent + 0.005;
            range.innerEndExtent   = gauge.scaleStartExtent + 0.005;
            range.outerStartExtent = gauge.scaleStartExtent + 0.005 + (extentInterval * i);
            range.outerEndExtent   = gauge.scaleStartExtent + 0.005 + (extentInterval * (i + 1));

            gauge.ranges.add(range);
        }
    }

}