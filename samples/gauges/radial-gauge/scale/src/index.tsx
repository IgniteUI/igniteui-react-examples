import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';


IgrRadialGaugeModule.register();

export default class RadialGaugeScale extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge
                scaleStartAngle={135}
                scaleEndAngle={45}
                scaleBrush="DodgerBlue"
                scaleSweepDirection="Clockwise"
                scaleOversweep={1}
                scaleOversweepShape="Fitted"
                scaleStartExtent={0.45}
                scaleEndExtent={0.575}

                height="100%"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<RadialGaugeScale />, document.getElementById('root'));