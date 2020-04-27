import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from "react";
import "./LinearGaugeSharedStyles.css";

IgrLinearGaugeModule.register();

export default class LinearGaugeBacking extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="sampleFlexRows">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
                backingBrush="#bddcfc"
                backingOutline="DodgerBlue"
                backingStrokeThickness={4}
                backingInnerExtent={0}
                backingOuterExtent={1} />
            </div>

        );
    }
}