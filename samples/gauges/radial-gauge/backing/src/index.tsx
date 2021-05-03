import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';


IgrRadialGaugeModule.register();

export default class RadialGaugeBacking extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadialGauge
                    backingShape="Fitted"
                    backingBrush="#fcfcfc"
                    backingOutline="DodgerBlue"
                    backingOversweep={5}
                    backingCornerRadius={10}
                    backingStrokeThickness={5}
                    backingOuterExtent={0.8}
                    backingInnerExtent={0.15}

                    scaleStartAngle={135}
                    scaleEndAngle={45}
                    scaleBrush="#dddddd"

                    height="100%"
                    width="100%"
                    minimumValue={0} value={50}
                    maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<RadialGaugeBacking />, document.getElementById('root'));