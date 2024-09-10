import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeLabels extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge
                    titleDisplaysValue="true"
                    subtitleText="MPH"
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
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeLabels/>);
