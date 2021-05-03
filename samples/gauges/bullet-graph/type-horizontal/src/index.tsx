import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import { LinearScaleOrientation } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphTypeHorizontal extends React.Component {

    constructor(props: any) {
        super(props);

        this.onCreateGaugeGreen = this.onCreateGaugeGreen.bind(this);
        this.onCreateGaugeOrange = this.onCreateGaugeOrange.bind(this);
        this.onCreateGaugeRed = this.onCreateGaugeRed.bind(this);
    }

    public onCreateGaugeGreen(component: IgrBulletGraph) {
        this.renderGauge(component, 90, 80, ["#008000", "#10b401", "#45ec03", "#97f397"]);
    }
    public onCreateGaugeOrange(component: IgrBulletGraph) {
        this.renderGauge(component, 70, 80, ["#e29b03", "#fdb417", "#fdc957", "#f7d58b"]);
    }
    public onCreateGaugeRed(component: IgrBulletGraph) {
        this.renderGauge(component, 40, 80, ["#cf0000", "#ff0000", "#fd3939", "#f88989"]);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample"  >
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

    public renderGauge(gauge: IgrBulletGraph, value: number, target: number, colors: string[]) {

        if (!gauge) { return; }

        gauge.orientation = LinearScaleOrientation.Horizontal;
        gauge.backingBrush = "transparent";
        gauge.backingOutline = "transparent";
        gauge.transitionDuration = 500;
        gauge.minorTickCount = 4;
        gauge.value = value;
        gauge.targetValue = target;
        gauge.minimumValue = 0;
        gauge.maximumValue = 100;
        gauge.interval = (gauge.maximumValue - gauge.minimumValue) / 20;
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

// rendering above class to the React DOM
ReactDOM.render(<BulletGraphTypeHorizontal />, document.getElementById('root'));
