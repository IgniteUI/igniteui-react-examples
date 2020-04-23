import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';
import * as React from "react";
import "../styles.css";
import "./BulletGraphSharedStyles.css";

IgrBulletGraphModule.register();

export default class BulletGraphBackground extends React.Component {

    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div className="sampleFlexRows" >
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