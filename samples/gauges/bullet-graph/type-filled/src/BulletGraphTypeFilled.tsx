import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';
import * as React from 'react';

IgrBulletGraphModule.register();

export default class BulletGraphTypeFilled extends React.Component {

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

    public render(): JSX.Element {
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

        if (!gauge) { return; }

        gauge.orientation = LinearScaleOrientation.Horizontal;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.transitionDuration = 500;
        gauge.minorTickCount = 4;
        gauge.value = value;
        gauge.valueBrush = color;
        gauge.valueOutline = color;
        gauge.targetValue = target;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = (gauge.maximumValue - gauge.minimumValue) / 20;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.1;
        gauge.formatLabel = (s: any, e: any) => {
            e.label = e.value + "%"
        };

        gauge.scaleBackgroundBrush   = "transparent";
        gauge.scaleBackgroundOutline = "transparent";
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent   = 0.96;
        gauge.valueInnerExtent = 0.3;
        gauge.valueOuterExtent = 0.85;

        gauge.ranges.clear();
        const range = new IgrLinearGraphRange({});
        range.startValue = gauge.minimumValue;
        range.endValue   = gauge.maximumValue;
        range.brush   = "#e0dfdf";
        range.outline = "#e0dfdf";
        range.innerStartExtent  = gauge.valueInnerExtent;
        range.innerEndExtent    = gauge.valueInnerExtent;
        range.outerStartExtent  = gauge.valueOuterExtent;
        range.outerEndExtent    = gauge.valueOuterExtent;
        gauge.ranges.add(range);

        gauge.minorTickBrush = "transparent";
        gauge.tickBrush = "gray";
        gauge.tickStartExtent = gauge.valueInnerExtent;
        gauge.tickEndExtent   = gauge.valueInnerExtent - 0.1;
        gauge.tickStrokeThickness = 1;
    }

}
