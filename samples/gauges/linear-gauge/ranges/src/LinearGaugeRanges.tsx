import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrLinearGaugeModule.register();

export default class LinearGaugeRanges extends React.Component {

    public render() {
        return (
            <div className="igContainer">
            <IgrLinearGauge
                 height="80px"
                 width="100%"
                 minimumValue={0} value={50}
                 maximumValue={100} interval={10}

                 rangeBrushes="#a4bd29, #F86232"
                 rangeOutlines="#a4bd29, #F86232"  >
                 <IgrLinearGraphRange name="range1"
                     startValue={0} endValue={50}
                     innerStartExtent={0.075} innerEndExtent={0.075}
                     outerStartExtent={0.25} outerEndExtent={0.4} />
                <IgrLinearGraphRange name="range2"
                    startValue={50} endValue={100}
                    innerStartExtent={0.075} innerEndExtent={0.075}
                    outerStartExtent={0.4} outerEndExtent={0.55} />
            </IgrLinearGauge>
        </div>
        );
    }
}
