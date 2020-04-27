import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

import * as React from "react";
import "./LinearGaugeSharedStyles.css";

IgrLinearGaugeModule.register();

export default class LinearGaugeTypeStandard extends React.Component {

    constructor(props: any) {
        super(props);

        this.onGaugeCreated = this.onGaugeCreated.bind(this);
    }

    public onGaugeCreated(component: IgrLinearGauge) {
        this.renderGauge(component);
    }

    public render() {
        return (
            <div className="sampleFlexRows">
                <IgrLinearGauge
                    ref={this.onGaugeCreated}
                    height="120px"
                    width="100%"/>
            </div>
        );
    }

    public renderGauge(gauge: IgrLinearGauge) {

        this.setupGauge(gauge);

        // // setting fill range
        // const range = new IgrLinearGraphRange({});
        // range.brush   = "#37c001";
        // range.outline = "#37c001";
        // range.startValue = 0;
        // range.endValue = 70;
        // range.innerStartExtent = gauge.scaleInnerExtent;
        // range.innerEndExtent   = gauge.scaleInnerExtent;
        // range.outerStartExtent = gauge.scaleOuterExtent;
        // range.outerEndExtent   = gauge.scaleOuterExtent;

        // gauge.ranges.add(range);
    }

    public setupGauge(gauge: IgrLinearGauge)  {

        gauge.ranges.clear();
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.value = 80;
        gauge.interval = 10;
        gauge.labelInterval = 10;
        gauge.transitionDuration = 500;

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = true;
    }


}