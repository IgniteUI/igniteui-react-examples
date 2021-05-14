import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeTickmarks extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
             <IgrRadialGauge
                tickStartExtent={0.5}
                tickEndExtent={0.57}
                tickStrokeThickness={2}
                tickBrush="DodgerBlue"

                minorTickCount={4}
                minorTickEndExtent={0.520}
                minorTickStartExtent={0.57}
                minorTickStrokeThickness={1}
                minorTickBrush="DarkViolet"

                height="100%"
                width="100%"
                minimumValue={0} value={50}
                maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<RadialGaugeTickmarks />, document.getElementById('root'));
