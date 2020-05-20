
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

export default class RadialGaugeAnimation extends React.Component {
    public gauge: IgrRadialGauge;

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
        this.onAnimateToGauge1 = this.onAnimateToGauge1.bind(this);
        this.onAnimateToGauge2 = this.onAnimateToGauge2.bind(this);
        this.onAnimateToGauge3 = this.onAnimateToGauge3.bind(this);
        this.onAnimateToGauge4 = this.onAnimateToGauge4.bind(this);
    }

    public onGaugeRef(component: IgrRadialGauge) {
        this.gauge = component;
        this.onAnimateToGauge3(null);
    }

    public render() {
        return (
            <div className="igContainer">
                <div className="igOptions">
                    <button onClick={this.onAnimateToGauge1} className="igOptions-button">Gauge Animation #1</button>
                    <button onClick={this.onAnimateToGauge2} className="igOptions-button">Gauge Animation #2</button>
                    <button onClick={this.onAnimateToGauge3} className="igOptions-button">Gauge Animation #3</button>
                    <button onClick={this.onAnimateToGauge4} className="igOptions-button">Gauge Animation #4</button>
                </div>

                <IgrRadialGauge
                    ref={this.onGaugeRef}
                    transitionDuration={1000}
                    height="calc(100% - 50px)"
                    width="100%"
                    value={25}
                    interval={5}
                    minimumValue={0}
                    maximumValue={50}

                    labelInterval={5}
                    labelExtent={0.71}
                    minorTickCount={4}
                    minorTickEndExtent={.625}
                    minorTickStartExtent={.6}
                    minorTickStrokeThickness={1}
                    minorTickBrush = "#79797a"
                    tickStartExtent={.6}
                    tickEndExtent={.65}
                    tickStrokeThickness={2}
                    tickBrush="#79797a"
                    needleShape="Triangle"
                    needleEndWidthRatio={0.03}
                    needleStartWidthRatio={0.05}
                    needlePivotShape="CircleOverlay"
                    needlePivotWidthRatio={0.15}
                    needleBaseFeatureWidthRatio={0.15}
                    needleBrush="#79797a"
                    needleOutline="#79797a"
                    needlePivotBrush="#79797a"
                    needlePivotOutline="#79797a"
                    isNeedleDraggingEnabled={true}
                    backingBrush="#fcfcfc"
                    backingOutline="#d6d6d6"
                    backingStrokeThickness={5}
                    scaleStartAngle={120}
                    scaleEndAngle={60}
                    scaleBrush="#d6d6d6"
                    rangeBrushes="#F86232, #DC3F76, #7446B9"
                    rangeOutlines="#F86232, #DC3F76, #7446B9" />
            </div>
        );
    }

    // full radial gauge
    public onAnimateToGauge4 = (e: any) => {
        if (!this.gauge) { return; }


        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 50;
        this.gauge.value = 25;
        this.gauge.interval = 5;

        // setting appearance of labels
        this.gauge.labelInterval = 5;
        this.gauge.labelExtent = 0.71;
        this.gauge.font = "15px Verdana,Arial";

        // setting custom needle
        this.gauge.isNeedleDraggingEnabled = true;
        this.gauge.needleEndExtent = 0.5;
        this.gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.gauge.needleEndWidthRatio = 0.03;
        this.gauge.needleStartWidthRatio = 0.05;
        this.gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.gauge.needlePivotWidthRatio = 0.15;
        this.gauge.needleBaseFeatureWidthRatio = 0.15;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#79797a";
        this.gauge.needlePivotBrush = "#79797a";
        this.gauge.needlePivotOutline = "#79797a";

        // setting appearance of major/minor ticks
        this.gauge.minorTickCount = 4;
        this.gauge.minorTickEndExtent = 0.625;
        this.gauge.minorTickStartExtent = 0.6;
        this.gauge.minorTickStrokeThickness = 1;
        this.gauge.minorTickBrush = "#79797a";
        this.gauge.tickStartExtent = 0.6;
        this.gauge.tickEndExtent = 0.65;
        this.gauge.tickStrokeThickness = 2;
        this.gauge.tickBrush = "#79797a";

        // setting extent of gauge scale
        this.gauge.scaleStartAngle = 120;
        this.gauge.scaleEndAngle = 60;
        this.gauge.scaleBrush = "#d6d6d6";
        this.gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Fitted;
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.gauge.scaleEndExtent = 0.57;
        this.gauge.scaleStartExtent = 0.5;

        // setting appearance of backing dial
        this.gauge.backingBrush = "#fcfcfc";
        this.gauge.backingOutline = "#d6d6d6";
        this.gauge.backingStrokeThickness = 5;
        this.gauge.backingShape = RadialGaugeBackingShape.Circular;

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 5;
        range1.endValue = 15;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 15;
        range2.endValue = 35;
        const range3 = new IgrRadialGaugeRange({});
        range3.startValue = 35;
        range3.endValue = 45;
        this.gauge.rangeBrushes  = [ "#F86232", "#DC3F76", "#7446B9"];
        this.gauge.rangeOutlines = [ "#F86232", "#DC3F76", "#7446B9"];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);
        this.gauge.ranges.add(range3);
        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.5;
            range.innerEndExtent = 0.5;
            range.outerStartExtent = 0.57;
            range.outerEndExtent = 0.57;
        }
    }

    // semi radial gauge
    public onAnimateToGauge3 = (e: any) => {
        if (!this.gauge) { return; }


        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 80;
        this.gauge.value = 10;
        this.gauge.interval = 10;

        // Label Settings
        this.gauge.labelExtent = 0.6;
        this.gauge.labelInterval = 10;
        this.gauge.font = "15px Verdana,Arial";

        // Scale Settings
        this.gauge.scaleStartAngle = 135;
        this.gauge.scaleEndAngle = 45;
        this.gauge.scaleBrush = "#0b8fed";
        this.gauge.scaleOversweepShape = RadialGaugeScaleOversweepShape.Auto;
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;
        this.gauge.scaleEndExtent = 0.825;
        this.gauge.scaleStartExtent = 0.775;

        this.gauge.minorTickStartExtent = 0.7;
        this.gauge.minorTickEndExtent = 0.75;
        this.gauge.tickStartExtent = 0.675;
        this.gauge.tickEndExtent = 0.75;

        // Backing Settings
        this.gauge.backingShape = RadialGaugeBackingShape.Fitted;
        this.gauge.backingBrush = "#fcfcfc";
        this.gauge.backingOutline = "#d6d6d6";
        this.gauge.backingOversweep = 5;
        this.gauge.backingCornerRadius = 10;
        this.gauge.backingOuterExtent = 0.9;

        // Needle Settings
        this.gauge.needleShape = RadialGaugeNeedleShape.NeedleWithBulb;
        this.gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        this.gauge.needleEndExtent = 0.5;
        this.gauge.needlePointFeatureExtent = 0.3;
        this.gauge.needlePivotWidthRatio = 0.2;
        this.gauge.needleBrush = "#9f9fa0";
        this.gauge.needleOutline = "#9f9fa0";
        this.gauge.needlePivotBrush = "#9f9fa0";
        this.gauge.needlePivotOutline = "#9f9fa0";

        // TickMark Settings
        this.gauge.tickBrush = "rgba(51, 51, 51, 1)";
        this.gauge.minorTickBrush = "rgba(73, 73, 73, 1)";
        this.gauge.minorTickCount = 6;

        this.gauge.ranges.clear();
    }

    // half radial gauge
    public onAnimateToGauge2 = (e: any) => {
        if (!this.gauge) { return; }


        this.gauge.minimumValue = 100;
        this.gauge.maximumValue = 200;
        this.gauge.value = 125;

        // Scale Settings
        this.gauge.scaleStartAngle = 180;
        this.gauge.scaleEndAngle = 0;
        this.gauge.scaleBrush = "transparent";
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.gauge.backingOutline = "white";
        this.gauge.backingBrush = "white";
        this.gauge.backingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        this.gauge.needleEndExtent = 0.8;
        this.gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.gauge.needlePivotShape = RadialGaugePivotShape.Circle;
        this.gauge.needlePivotWidthRatio = 0.1;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#79797a";

        // TickMark Settings
        this.gauge.tickBrush = "transparent";
        this.gauge.minorTickBrush = "transparent";

        // Label Settings
        this.gauge.labelInterval = 50;
        this.gauge.labelExtent = 0.935;
        this.gauge.font = "13px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 100;
        range1.endValue = 150;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 150;
        range2.endValue = 200;

        this.gauge.rangeBrushes  = [ "#32f845", "#bf32f8" ];
        this.gauge.rangeOutlines = [ "#32f845", "#bf32f8" ];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }
    }

    // quatre radial gauge
    public onAnimateToGauge1 = (e: any) => {
        if (!this.gauge) { return; }


        this.gauge.minimumValue = 0;
        this.gauge.maximumValue = 10;
        this.gauge.value = 7.5;

        // Scale Settings
        this.gauge.scaleStartAngle = 180;
        this.gauge.scaleEndAngle = 270;
        this.gauge.scaleBrush = "transparent";
        this.gauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        this.gauge.backingOutline = "white";
        this.gauge.backingBrush = "white";
        this.gauge.backingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        this.gauge.needleEndExtent = 0.8;
        this.gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        this.gauge.needlePivotShape = RadialGaugePivotShape.Circle;
        this.gauge.needlePivotWidthRatio = 0.1;
        this.gauge.needleBrush = "#79797a";
        this.gauge.needleOutline = "#79797a";

        // TickMark Settings
        this.gauge.tickBrush = "transparent";
        this.gauge.minorTickBrush = "transparent";

        // Label Settings
        this.gauge.labelInterval = 5;
        this.gauge.labelExtent = 0.915;
        this.gauge.font = "15px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 0;
        range1.endValue = 5;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 5;
        range2.endValue = 10;

        this.gauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        this.gauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        this.gauge.ranges.clear();
        this.gauge.ranges.add(range1);
        this.gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < this.gauge.ranges.count; i++) {
            const range = this.gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }
    }
}