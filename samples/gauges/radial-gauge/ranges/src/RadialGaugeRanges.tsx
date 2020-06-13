import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeRange } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrRadialGaugeModule.register();

export default class RadialGaugeRanges extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
             <IgrRadialGauge
                height="100%"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={80} interval={10}
                rangeBrushes ="#a4bd29, #F86232"
                rangeOutlines="#a4bd29, #F86232"  >
                <IgrRadialGaugeRange name="range1"
                    startValue={10} endValue={25}
                    innerStartExtent={0.50} innerEndExtent={0.50}
                    outerStartExtent={0.57} outerEndExtent={0.57} />
                <IgrRadialGaugeRange name="range2"
                    startValue={25} endValue={40}
                    innerStartExtent={0.50} innerEndExtent={0.50}
                    outerStartExtent={0.57} outerEndExtent={0.57} />
            </IgrRadialGauge>
        </div>
        );
    }
}
