import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from 'igniteui-react-gauges';
import { IgrLinearGaugeModule } from 'igniteui-react-gauges';

IgrLinearGaugeModule.register();

export default class LinearGaugeLabels extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                height="80px"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={100} interval={10}
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

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeLabels/>);
