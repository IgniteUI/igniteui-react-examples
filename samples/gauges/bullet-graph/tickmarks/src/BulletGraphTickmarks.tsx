import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import * as React from "react";

import "./BulletGraphSharedStyles.css";

IgrBulletGraphModule.register();

export default class BulletGraphTickmarks extends React.Component {

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

                    tickBrush="DodgerBlue"
                    ticksPreTerminal={0}
                    ticksPostInitial={0}
                    tickStrokeThickness={2}
                    tickStartExtent={0.2}
                    tickEndExtent={0.075}
                    minorTickCount={4}
                    minorTickBrush="DarkViolet"
                    minorTickEndExtent={0.1}
                    minorTickStartExtent={0.2}
                    minorTickStrokeThickness={1} />
            </div>
        );
    }
}