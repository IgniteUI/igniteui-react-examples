import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeNeedle extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}

                isNeedleDraggingEnabled={true}
                needleShape="Custom"
                needleBrush="DodgerBlue"
                needleOutline="DodgerBlue"
                needleStrokeThickness={1}
                needleBreadth={15}
                needleInnerExtent={0.35}
                needleOuterExtent={0.65}
                needleOuterPointExtent={0.8}
                needleInnerPointExtent={0.325}
                needleInnerPointWidth={0}
                needleOuterPointWidth={0.3}
                needleInnerBaseWidth={0}
                needleOuterBaseWidth={0.07} />
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeNeedle/>);
