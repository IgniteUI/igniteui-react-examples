import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import { IgrFormatLinearGraphLabelEventArgs } from 'igniteui-react-gauges';

import * as React from "react";
import "./LinearGaugeSharedStyles.css";

IgrLinearGaugeModule.register();

export default class LinearGaugeTypeMultiScale extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateCelsiusGauge = this.onCreateCelsiusGauge.bind(this);
        this.onCreateFahrenheitGauge = this.onCreateFahrenheitGauge.bind(this);
    }

    public onCreateCelsiusGauge(component: IgrLinearGauge) {
        this.renderCelsiusGauge(component);
    }

    public onCreateFahrenheitGauge(component: IgrLinearGauge) {
        this.renderFahrenheitGauge(component);
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrLinearGauge
                    ref={this.onCreateFahrenheitGauge}
                    width="100%"
                    height="100px"/>
                <IgrLinearGauge
                    ref={this.onCreateCelsiusGauge}
                    width="100%"
                    height="100px"/>
            </div>
        );
    }

    public covertToFahrenheit(celsius: number): number {
        return (celsius * 9 / 5) + 32;
    }

    public renderCelsiusGauge(gauge: IgrLinearGauge) {

        this.setupGauge(gauge);

        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value + " °C"
        };
    }

    public renderFahrenheitGauge(gauge: IgrLinearGauge) {

        this.setupGauge(gauge);
        gauge.ranges.clear();
        gauge.scaleBrush   = "transparent";
        gauge.scaleOutline = "transparent";
        gauge.labelExtent = 0.15;
        gauge.tickStartExtent = -0.2;
        gauge.tickEndExtent = 0.0;
        gauge.minorTickStartExtent = -0.2;
        gauge.minorTickEndExtent = -0.1;

        gauge.formatLabel = (s: any, e : any) => {
            e.label = this.covertToFahrenheit(e.value) + " °F"
        };
    }

    public setupGauge(gauge: IgrLinearGauge)  {

        gauge.minimumValue = -40;
        gauge.maximumValue = 100;
        gauge.value = 20;
        gauge.interval = 10;
        gauge.labelInterval = 10;
        gauge.labelExtent = 0.1;
        gauge.transitionDuration = 500;

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = false;
        gauge.needleBrush = "transparent";
        gauge.needleOutline = "transparent";

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";
        gauge.scaleInnerExtent = 0.35;
        gauge.scaleOuterExtent = 1.0;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "gray";
        gauge.minorTickStartExtent = gauge.scaleInnerExtent - 0.1;
        gauge.minorTickEndExtent   = gauge.scaleInnerExtent - 0.0;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickCount = 4;
        gauge.minorTickBrush = "gray";

        // setting segments major ticks
        // gauge.tickStartExtent = 0.25;
        // gauge.tickEndExtent = 0.15;
        gauge.tickStartExtent = gauge.scaleInnerExtent - 0.2;
        gauge.tickEndExtent   = gauge.scaleInnerExtent - 0;
        gauge.tickStrokeThickness = 1;
        gauge.tickBrush = "gray";


        const rangeExtentSpan = gauge.scaleOuterExtent - gauge.scaleInnerExtent;
        const rangeExtentInterval = rangeExtentSpan / 2;

        gauge.ranges.clear();
        // setting fill range
        const range1 = new IgrLinearGraphRange({});
        range1.brush   = "linear-gradient(#ff0000, #c70101)";
        range1.outline = "transparent";
        range1.startValue = gauge.minimumValue;
        range1.endValue   = gauge.value;
        range1.innerStartExtent = gauge.scaleInnerExtent;
        range1.innerEndExtent   = gauge.scaleInnerExtent;
        range1.outerStartExtent = gauge.scaleInnerExtent + rangeExtentInterval;
        range1.outerEndExtent   = gauge.scaleInnerExtent + rangeExtentInterval;
        gauge.ranges.add(range1);

        const range2 = new IgrLinearGraphRange({});
        range2.brush   = "linear-gradient(#fa8f8f, #fa5151)";
        range2.outline = "transparent";
        range2.startValue = gauge.minimumValue;
        range2.endValue   = gauge.value;
        range2.innerStartExtent = gauge.scaleInnerExtent + rangeExtentInterval;
        range2.innerEndExtent   = gauge.scaleInnerExtent + rangeExtentInterval;
        range2.outerStartExtent = gauge.scaleOuterExtent;
        range2.outerEndExtent   = gauge.scaleOuterExtent;
        gauge.ranges.add(range2);

    }


}