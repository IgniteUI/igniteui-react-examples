import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import * as React from "react";



IgrBulletGraphModule.register();

export default class BulletGraphScale extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="igContainer" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    isScaleInverted={false}
                    scaleBackgroundBrush="DodgerBlue"
                    scaleBackgroundOutline="Red"
                    scaleBackgroundThickness={2}
                    scaleStartExtent={0.05}
                    scaleEndExtent={0.95} />
            </div>
        );
    }
}