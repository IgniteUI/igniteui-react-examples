import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import { LinearGraphNeedleShape } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeTypeMultiRange extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrLinearGauge) {
        this.renderGauge(component, 80, ["#2efa2e", "#45ec03", "#10b401", "#008000"]);
    }
    public onCreateGaugeOrange(component: IgrLinearGauge) {
        this.renderGauge(component, 50, ["#fdd682", "#fdc957", "#fdb417", "#e29b03"]);
    }
    public onCreateGaugeRed(component: IgrLinearGauge) {
        this.renderGauge(component, 30, ["#fa6363", "#fd3939", "#ff0000", "#cf0000"]);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
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

    public renderGauge(gauge: IgrLinearGauge, value: number, colors: string[]) {

        if (!gauge) { return; }

        gauge.value = value;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = 5;
        gauge.labelInterval = 5;
        gauge.labelExtent = 0.15;
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
        const rangeExtentInterval = 0.5 / colors.length;

        gauge.ranges.clear();
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            const range = new IgrLinearGraphRange({});
            range.startValue = rangeValueInterval * i;
            range.endValue   = rangeValueInterval * (i + 1);
            range.brush = color;
            range.outline = color;
            range.innerStartExtent = 0.25;
            range.innerEndExtent   = 0.25;
            range.outerStartExtent = 0.3 + (rangeExtentInterval * i); //  0.65;
            range.outerEndExtent   = 0.3 + (rangeExtentInterval * (i + 1)); // 0.65;
            gauge.ranges.add(range);
        }

        // setting appearance of needle
        gauge.isNeedleDraggingEnabled = true;
        gauge.needleShape = LinearGraphNeedleShape.Triangle;
        gauge.needleBrush = "#494949";
        gauge.needleOutline = "#494949";
        gauge.needleStrokeThickness = 1;
        gauge.needleOuterExtent = 0.9;
        gauge.needleInnerExtent = gauge.scaleInnerExtent + 0.1;
        gauge.needleBreadth = 10;
        // setting appearance of major ticks
        gauge.tickBrush = "gray";
        gauge.tickStartExtent = 0.25;
        gauge.tickEndExtent = 0.15;
        gauge.tickStrokeThickness = 1;

        // setting appearance of minor ticks
        gauge.minorTickBrush = "transparent";
        gauge.minorTickStartExtent = 0.25;
        gauge.minorTickEndExtent = 0.2;
        gauge.minorTickStrokeThickness = 1;
        gauge.minorTickCount = 9;

        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";

        // setting extent of gauge scale
        gauge.scaleStrokeThickness = 0;
        gauge.scaleBrush   = "#e0dfdf";
        gauge.scaleOutline = "#e0dfdf";
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeTypeMultiRange/>);
