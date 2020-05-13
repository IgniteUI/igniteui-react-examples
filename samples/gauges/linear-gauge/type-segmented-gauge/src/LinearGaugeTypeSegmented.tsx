import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

import * as React from 'react';


IgrLinearGaugeModule.register();

export default class LinearGaugeTypeSegmented extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrLinearGauge) {
        this.renderGauge(component, 80, "green");
    }
    public onCreateGaugeOrange(component: IgrLinearGauge) {
        this.renderGauge(component, 50, "orange");
    }
    public onCreateGaugeRed(component: IgrLinearGauge) {
        this.renderGauge(component, 30, "red");
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLinearGauge
                    ref={this.onCreateGaugeGreen}
                    height="120px" width="100%" />
                <IgrLinearGauge
                    ref={this.onCreateGaugeOrange}
                    height="120px"
                    width="100%" />
                <IgrLinearGauge
                    ref={this.onCreateGaugeRed}
                    height="120px"
                    width="100%" />
            </div>
        );
    }

    public renderGauge(gauge: IgrLinearGauge, value: number, color: string) {

        gauge.value = value;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = 10;
        gauge.transitionDuration = 500;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.15;
        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value + "%"
        };

        // setting scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";
        gauge.scaleInnerExtent = 0.25;
        gauge.scaleOuterExtent = 0.65;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent   = 0.95;

        // setting fill range
        const range = new IgrLinearGraphRange({});
        range.brush   = color;
        range.outline = color;
        range.startValue = gauge.minimumValue;
        range.endValue   = gauge.value;
        range.innerStartExtent = gauge.scaleInnerExtent;
        range.innerEndExtent   = gauge.scaleInnerExtent;
        range.outerStartExtent = gauge.scaleOuterExtent;
        range.outerEndExtent   = gauge.scaleOuterExtent;

        gauge.ranges.clear();
        gauge.ranges.add(range);

        // using major ticks as segment bounds
        gauge.tickBrush = "white";
        gauge.tickStrokeThickness = 2;
        gauge.tickStartExtent = gauge.scaleInnerExtent;
        gauge.tickEndExtent   = gauge.scaleOuterExtent;

        // using minor ticks as segment bounds
        gauge.minorTickBrush = "white";
        gauge.minorTickStrokeThickness = 2;
        gauge.minorTickCount = (gauge.interval / 2) - 1;
        gauge.minorTickStartExtent = gauge.scaleInnerExtent;
        gauge.minorTickEndExtent   = gauge.scaleOuterExtent;

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = false;
        gauge.needleBrush = "transparent";
        gauge.needleOutline = "transparent";

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
    }

}