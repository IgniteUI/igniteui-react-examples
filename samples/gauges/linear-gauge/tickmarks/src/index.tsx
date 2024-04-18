import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from "@infragistics/igniteui-react-gauges";
import { IgrLinearGaugeModule } from "@infragistics/igniteui-react-gauges";

IgrLinearGaugeModule.register();

export default class LinearGaugeTickmarks extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                 height="80px"
                 width="100%"
                 minimumValue={0} value={50}
                 maximumValue={100} interval={10}

                 tickBrush="DodgerBlue"
                 ticksPreTerminal={0}
                 ticksPostInitial={0}
                 tickStrokeThickness={2}
                 tickStartExtent={0.25}
                 tickEndExtent={0.05}

                 minorTickCount={4}
                 minorTickBrush="DarkViolet"
                 minorTickEndExtent={0.05}
                 minorTickStartExtent={0.15}
                 minorTickStrokeThickness={1} />
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeTickmarks/>);
