import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from "react";


IgrLinearGaugeModule.register();

export default class LinearGaugeLabels extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="igContainer">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
                labelInterval={10}
                labelExtent={0.025}
                labelsPreTerminal={0}
                labelsPostInitial={0}
                fontBrush="DodgerBlue"
                font="11px Verdana" />
        </div>
        );
    }
}