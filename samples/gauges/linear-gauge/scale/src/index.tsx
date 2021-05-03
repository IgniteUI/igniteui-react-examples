import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';


IgrLinearGaugeModule.register();

export default class LinearGaugeScale extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
                isScaleInverted={false}
                scaleBrush="DodgerBlue"
                scaleOutline="Red"
                scaleStrokeThickness={2}
                scaleInnerExtent={0.05}
                scaleOuterExtent={0.65}
                scaleStartExtent={0.05}
                scaleEndExtent={0.95} />
        </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<LinearGaugeScale />, document.getElementById('root'));