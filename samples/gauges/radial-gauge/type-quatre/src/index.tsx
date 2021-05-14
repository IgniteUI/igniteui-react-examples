import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { SweepDirection } from 'igniteui-react-core';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { RadialGaugeBackingShape } from 'igniteui-react-gauges';
import { RadialGaugeNeedleShape } from 'igniteui-react-gauges';
import { RadialGaugePivotShape } from 'igniteui-react-gauges';
import { RadialGaugeScaleOversweepShape } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeTypeQuatre extends React.Component {

    constructor(props: any) {
        super(props);

        this.onGaugeRef = this.onGaugeRef.bind(this);
    }

    public onGaugeRef(component: IgrRadialGauge) {
        if (!component) { return; }

        this.renderGauge(component);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

                <IgrRadialGauge
                    ref={this.onGaugeRef}
                    height="100%"
                    width="100%"   />
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.transitionDuration = 500;

        gauge.minimumValue = 0;
        gauge.maximumValue = 10;
        gauge.value = 7.5;

        // Scale Settings
        gauge.scaleStartAngle = 180;
        gauge.scaleEndAngle = 270;
        gauge.scaleBrush = "transparent";
        gauge.scaleSweepDirection = SweepDirection.Clockwise;

        // Backing Settings
        gauge.backingOutline = "white";
        gauge.backingBrush = "white";
        gauge.backingShape = RadialGaugeBackingShape.Fitted;

        // Needle Settings
        gauge.needleEndExtent = 0.8;
        gauge.needleShape = RadialGaugeNeedleShape.Triangle;
        gauge.needlePivotShape = RadialGaugePivotShape.CircleOverlay;
        gauge.needlePivotWidthRatio = 0.1;
        gauge.needleBrush = "#79797a";
        gauge.needleOutline = "#79797a";
        gauge.needlePivotBrush = "#79797a";
        gauge.needlePivotOutline = "#79797a";

        // TickMark Settings
        gauge.tickBrush = "transparent";
        gauge.minorTickBrush = "transparent";

        // Label Settings
        gauge.labelInterval = 5;
        gauge.labelExtent = 0.935;
        gauge.font = "15px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 0;
        range1.endValue = 5;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 5;
        range2.endValue = 10;

        gauge.rangeBrushes  = [ "#a4bd29", "#F86232" ];
        gauge.rangeOutlines = [ "#a4bd29", "#F86232" ];
        gauge.ranges.clear();
        gauge.ranges.add(range1);
        gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < gauge.ranges.count; i++) {
            const range = gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.9;
            range.outerEndExtent = 0.9;
        }
    }

}

// rendering above class to the React DOM
ReactDOM.render(<RadialGaugeTypeQuatre />, document.getElementById('root'));
