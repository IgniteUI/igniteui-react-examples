import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';

import * as React from "react";


IgrBulletGraphModule.register();

export default class BulletGraphTypeSegmented extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrBulletGraph) {
        this.renderGauge(component, 90, 80, "#10b401");
    }
    public onCreateGaugeOrange(component: IgrBulletGraph) {
        this.renderGauge(component, 70, 80, "#fdb417");
    }
    public onCreateGaugeRed(component: IgrBulletGraph) {
        this.renderGauge(component, 50, 80, "#ff0000");
    }

    public render() {
        return (
            <div className="igContainer"  >
                <IgrBulletGraph
                    ref={this.onCreateGaugeGreen}
                    height="120px"
                    width="100%"  />
                <IgrBulletGraph
                    ref={this.onCreateGaugeOrange}
                    height="120px"
                    width="100%" />
                <IgrBulletGraph
                    ref={this.onCreateGaugeRed}
                    height="120px"
                    width="100%"  />
            </div>
        );
    }

    public renderGauge(gauge: IgrBulletGraph, value: number, target: number, color: string) {

        gauge.orientation = LinearScaleOrientation.Horizontal;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.transitionDuration = 500;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = (gauge.maximumValue - gauge.minimumValue) / 10;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.15;
        gauge.formatLabel = (s: any, e : any) => {
            e.label = e.value + "%"
        };

        gauge.scaleBackgroundBrush   = "transparent";
        gauge.scaleBackgroundOutline = "transparent";
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent   = 0.96;

        gauge.value = value;
        gauge.valueBrush = "transparent";
        gauge.valueOutline = "transparent";
        gauge.valueInnerExtent = 0.3;
        gauge.valueOuterExtent = 0.85;

        gauge.targetValue = target;
        gauge.targetValueInnerExtent = gauge.valueInnerExtent - 0.1;
        gauge.targetValueOuterExtent = gauge.valueOuterExtent + 0.1;

        gauge.ranges.clear();
        const rangeBG = new IgrLinearGraphRange({});
        rangeBG.startValue = gauge.minimumValue;
        rangeBG.endValue   = gauge.maximumValue;
        rangeBG.brush   = "#e0dfdf";
        rangeBG.outline = "#e0dfdf";
        rangeBG.innerStartExtent  = gauge.valueInnerExtent;
        rangeBG.innerEndExtent    = gauge.valueInnerExtent;
        rangeBG.outerStartExtent  = gauge.valueOuterExtent;
        rangeBG.outerEndExtent    = gauge.valueOuterExtent;
        gauge.ranges.add(rangeBG);

        const rangeVal = new IgrLinearGraphRange({});
        rangeVal.startValue = gauge.minimumValue;
        rangeVal.endValue   = gauge.value;
        rangeVal.brush   = color;
        rangeVal.outline = color;
        rangeVal.innerStartExtent  = gauge.valueInnerExtent;
        rangeVal.innerEndExtent    = gauge.valueInnerExtent;
        rangeVal.outerStartExtent  = gauge.valueOuterExtent;
        rangeVal.outerEndExtent    = gauge.valueOuterExtent;
        gauge.ranges.add(rangeVal);

        // using major ticks as segment bounds
        gauge.tickBrush = "white";
        gauge.tickStrokeThickness = 2;
        gauge.tickStartExtent = gauge.valueInnerExtent;
        gauge.tickEndExtent   = gauge.valueOuterExtent;

        // using minor ticks as segment bounds
        gauge.minorTickBrush = "white";
        gauge.minorTickStrokeThickness = 2;
        gauge.minorTickStartExtent = gauge.valueInnerExtent;
        gauge.minorTickEndExtent   = gauge.valueOuterExtent;
        gauge.minorTickCount = (gauge.interval / 2) - 1;
    }

}