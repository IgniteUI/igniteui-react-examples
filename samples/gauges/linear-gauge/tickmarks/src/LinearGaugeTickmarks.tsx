import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';


IgrLinearGaugeModule.register();

export default class LinearGaugeTickmarks extends React.Component {

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

                 tickBrush="DodgerBlue"
                 ticksPreTerminal={0}
                 ticksPostInitial={0}
                 tickStrokeThickness={2}
                 tickStartExtent={0.25}
                 tickEndExtent={0.05}

                 minorTickCount={4}
                 minorTickBrush="DarkViolet"
                 minorTickEndExtent={0.05}
                 minorTickStartExtent={0.15}
                 minorTickStrokeThickness={1} />
        </div>
        );
    }
}