import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';

import * as React from 'react';


IgrLinearGaugeModule.register();

export default class LinearGaugeTypeVertical extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrLinearGauge) {
        this.renderGauge(component, 80, ["#008000", "#10b401", "#45ec03", "#2efa2e"]);
    }
    public onCreateGaugeOrange(component: IgrLinearGauge) {
        this.renderGauge(component, 60, ["#e29b03", "#fdb417", "#fdc957", "#fdd682"]);
    }
    public onCreateGaugeRed(component: IgrLinearGauge) {
        this.renderGauge(component, 40, ["#cf0000", "#ff0000", "#fd3939", "#fa6363"]);
    }

    public render() {
        return (
            <div className="igContainer-center"  >
                <IgrLinearGauge
                    ref={this.onCreateGaugeGreen}
                    width="120px"
                    height="100%" />
                <IgrLinearGauge
                    ref={this.onCreateGaugeOrange}
                    width="120px"
                    height="100%" />
                <IgrLinearGauge
                    ref={this.onCreateGaugeRed}
                    width="120px"
                    height="100%" />
            </div>
        );
    }

    public renderGauge(gauge: IgrLinearGauge, value: number, colors: string[]) {

        if (!gauge) { return; }

        gauge.orientation = LinearScaleOrientation.Vertical;
        gauge.value = value;

        gauge.value = value;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = 10;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.0;
        gauge.transitionDuration = 500;

        // setting extent of gauge scale
        gauge.scaleInnerExtent = 0.25;
        gauge.scaleOuterExtent = 0.8;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        gauge.rangeBrushes  = colors;
        gauge.rangeOutlines = colors;

        const rangeSpan = gauge.maximumValue - gauge.minimumValue;
        const rangeValueInterval = rangeSpan / colors.length;

        gauge.ranges.clear();
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const range = new IgrLinearGraphRange({});
            range.startValue = rangeValueInterval * i;
            range.endValue   = rangeValueInterval * (i + 1);
            range.brush = color;
            range.outline = color;
            range.innerStartExtent = gauge.scaleInnerExtent;
            range.innerEndExtent   = gauge.scaleInnerExtent;
            range.outerStartExtent = gauge.scaleOuterExtent;
            range.outerEndExtent   = gauge.scaleOuterExtent;
            gauge.ranges.add(range);
        }

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.Needle;
        gauge.needleBrush = "#494949";
        gauge.needleOutline = "#494949";
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = gauge.scaleInnerExtent + 0.1;
        gauge.needleBreadth = 10;

        // setting appearance of major ticks
        gauge.tickBrush = "gray";
        gauge.tickStartExtent = gauge.scaleInnerExtent - 0.15;
        gauge.tickEndExtent   = gauge.scaleInnerExtent;
        gauge.tickStrokeThickness = 1;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "gray";
        gauge.minorTickStartExtent = gauge.scaleInnerExtent - 0.075;
        gauge.minorTickEndExtent   = gauge.scaleInnerExtent;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickCount = (gauge.interval / 2) - 1;

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";

    }


}