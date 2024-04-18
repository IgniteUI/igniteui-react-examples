import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { SweepDirection } from "@infragistics/igniteui-react-core";
import { IgrRadialGauge } from "@infragistics/igniteui-react-gauges";
import { IgrRadialGaugeModule } from "@infragistics/igniteui-react-gauges";
import { IgrRadialGaugeRange } from "@infragistics/igniteui-react-gauges";
import { RadialGaugeBackingShape } from "@infragistics/igniteui-react-gauges";
import { RadialGaugeNeedleShape } from "@infragistics/igniteui-react-gauges";
import { RadialGaugePivotShape } from "@infragistics/igniteui-react-gauges";
import { RadialGaugeScaleOversweepShape } from "@infragistics/igniteui-react-gauges";

IgrRadialGaugeModule.register();

export default class RadialGaugeTypeHalf extends React.Component {

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
                    width="100%" />
            </div>
        );
    }

    public renderGauge(gauge: IgrRadialGauge) {

        if (!gauge) { return; }

        gauge.transitionDuration = 500;

        gauge.minimumValue = 100;
        gauge.maximumValue = 200;
        gauge.value = 125;

        // Scale Settings
        gauge.scaleStartAngle = 180;
        gauge.scaleEndAngle = 0;
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
        gauge.labelInterval = 20;
        gauge.labelExtent = 0.935;
        gauge.font = "13px Verdana,Arial";

        // setting custom gauge ranges
        const range1 = new IgrRadialGaugeRange({});
        range1.startValue = 100;
        range1.endValue = 150;
        const range2 = new IgrRadialGaugeRange({});
        range2.startValue = 150;
        range2.endValue = 200;

        gauge.rangeBrushes  = [ "#32f845", "#bf32f8" ];
        gauge.rangeOutlines = [ "#32f845", "#bf32f8" ];
        gauge.ranges.clear();
        gauge.ranges.add(range1);
        gauge.ranges.add(range2);

        // setting extent of all gauge ranges
        for (let i = 0; i < gauge.ranges.count; i++) {
            const range = gauge.ranges.item(i);
            range.innerStartExtent = 0.3;
            range.innerEndExtent = 0.3;
            range.outerStartExtent = 0.875;
            range.outerEndExtent = 0.875;
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeTypeHalf/>);
