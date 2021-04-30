import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';


IgrLinearGaugeModule.register();

export default class LinearGaugeTypeFilled extends React.Component {

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

    public render(): JSX.Element {
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

        if (!gauge) { return; }

        gauge.value = value;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = 10;
        gauge.transitionDuration = 500;
        gauge.labelInterval = gauge.interval;
        gauge.labelExtent = 0.1;
        gauge.formatLabel = (s: any, e: any) => {
            e.label = e.value + "%"
        };

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = false;
        gauge.needleBrush = "transparent";
        gauge.needleOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";
        gauge.scaleInnerExtent = 0.25;
        gauge.scaleOuterExtent = 0.65;
        gauge.scaleStartExtent = 0.05;
        gauge.scaleEndExtent = 0.95;

        // setting appearance of major ticks
        gauge.tickBrush = "gray";
        gauge.tickStartExtent = gauge.scaleInnerExtent;
        gauge.tickEndExtent   = gauge.scaleInnerExtent - 0.1;
        gauge.tickStrokeThickness = 1;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "transparent";

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting fill range
        const range = new IgrLinearGraphRange({});
        range.brush   = color;
        range.outline = color;
        range.startValue = 0;
        range.endValue = gauge.value;
        range.innerStartExtent = gauge.scaleInnerExtent;
        range.innerEndExtent   = gauge.scaleInnerExtent;
        range.outerStartExtent = gauge.scaleOuterExtent;
        range.outerEndExtent   = gauge.scaleOuterExtent;

        gauge.ranges.clear();
        gauge.ranges.add(range);
    }

}

// rendering above class to the React DOM
ReactDOM.render(<LinearGaugeTypeFilled />, document.getElementById('root'));