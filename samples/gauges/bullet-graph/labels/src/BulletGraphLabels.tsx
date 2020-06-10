import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import * as React from 'react';

IgrBulletGraphModule.register();

export default class BulletGraphLabels extends React.Component {

    public render() {
        return (
            <div className="igContainer" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
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
