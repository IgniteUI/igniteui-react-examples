import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrLinearGraphRange } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import * as React from 'react';



IgrBulletGraphModule.register();

export default class BulletGraphRanges extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="igContainer" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={80} interval={10}
                    maximumValue={100} targetValue={90}
                    rangeBrushes ="#C62828, #F96232, #FF9800"
                    rangeOutlines="#C62828, #F96232, #FF9800">
                    <IgrLinearGraphRange name="range1"
                        startValue={0} endValue={40}
                        innerStartExtent={0.075} innerEndExtent={0.075}
                        outerStartExtent={0.95} outerEndExtent={0.95} />
                    <IgrLinearGraphRange name="range2"
                        startValue={40} endValue={70}
                        innerStartExtent={0.075} innerEndExtent={0.075}
                        outerStartExtent={0.95} outerEndExtent={0.95} />
                    <IgrLinearGraphRange name="range3"
                        startValue={70} endValue={100}
                        innerStartExtent={0.075} innerEndExtent={0.075}
                        outerStartExtent={0.95} outerEndExtent={0.95} />
                </IgrBulletGraph>
            </div>
        );
    }
}