import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import * as React from "react";


import { RadialGaugeSharedComponent } from "./RadialGaugeSharedComponent";

IgrRadialGaugeModule.register();

export default class RadialGaugeBacking extends RadialGaugeSharedComponent {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render() {
        return (
            <div className="igContainer">
                <IgrRadialGauge
                    backingShape="Fitted"
                    backingBrush="#fcfcfc"
                    backingOutline="DodgerBlue"
                    backingOversweep={5}
                    backingCornerRadius={10}
                    backingStrokeThickness={5}
                    backingOuterExtent={0.8}
                    backingInnerExtent={0.15}

                    scaleStartAngle={135}
                    scaleEndAngle={45}
                    scaleBrush="#dddddd"

                    height="100%"
                    width="100%"
                    minimumValue={0} value={50}
                    maximumValue={80} interval={10} />
            </div>
        );
    }
}