import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';

import * as React from 'react';


IgrBulletGraphModule.register();

export default class BulletGraphTypeReversed extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrBulletGraph) {
        this.renderGauge(component, 70, 80, ["#008000", "#10b401", "#45ec03", "#97f397"]);
    }
    public onCreateGaugeRed(component: IgrBulletGraph) {
        this.renderGauge(component, 30, 20, ["#cf0000", "#ff0000", "#fd3939", "#fa6363"]);
        // this.renderGauge(component, 30, 20, ["#f88989", "#fd3939", "#ff0000", "#cf0000"]);
    }

    public render() {
        return (
            <div className="igContainer"  >
                <label className="igTitle">Company Expanse ($ Billions)</label>
                <IgrBulletGraph
                    ref={this.onCreateGaugeRed} isScaleInverted={true}
                    height="120px"
                    width="100%" />
                <label className="igTitle">Company Revenue ($ Billions)</label>
                <IgrBulletGraph
                    ref={this.onCreateGaugeGreen}
                    height="120px"
                    width="100%"/>
            </div>
        );
    }

    public renderGauge(gauge: IgrBulletGraph, value: number, target: number, colors: string[]) {

        if (!gauge) { return; }

        gauge.orientation = LinearScaleOrientation.Horizontal;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.transitionDuration = 500;
        gauge.value = value;
        gauge.targetValue = target;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = (gauge.maximumValue - gauge.minimumValue) / 10;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.0;

        gauge.rangeBrushes = colors;
        gauge.rangeOutlines = colors;
        const rangeSpan = gauge.maximumValue - gauge.minimumValue;
        const rangeValueInterval = rangeSpan / colors.length;

        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const range = new IgrLinearGraphRange({});
            range.startValue = rangeValueInterval * i;
            range.endValue   = rangeValueInterval * (i + 1);
            range.brush = color;
            range.outline = color;
            range.innerStartExtent  = 0.2;
            range.innerEndExtent    = 0.2;
            range.outerStartExtent  = 0.95;
            range.outerEndExtent    = 0.95;
            gauge.ranges.add(range);
        }
    }

}