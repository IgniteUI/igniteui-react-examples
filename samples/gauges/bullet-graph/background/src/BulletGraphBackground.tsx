import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrBulletGraphModule.register();

export default class BulletGraphBackground extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    backingBrush="#bddcfc"
                    backingOutline="DodgerBlue"
                    backingStrokeThickness={4}
                    backingInnerExtent={0}
                    backingOuterExtent={1} />
            </div>
        );
    }
}
