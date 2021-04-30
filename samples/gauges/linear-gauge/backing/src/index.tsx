import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';


IgrLinearGaugeModule.register();

export default class LinearGaugeBacking extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="igContainer">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
                backingBrush="#bddcfc"
                backingOutline="DodgerBlue"
                backingStrokeThickness={4}
                backingInnerExtent={0}
                backingOuterExtent={1} />
            </div>

        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<LinearGaugeBacking />, document.getElementById('root'));