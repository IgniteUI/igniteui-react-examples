import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeOpticalScaling extends React.Component<any, any> {

    public gauge: IgrRadialGauge;

    constructor(props: any) {
        super(props);
        this.onGaugeRef = this.onGaugeRef.bind(this);

        this.state = { componentVisible: true }
    }

    public onGaugeRef(component: IgrRadialGauge) {
        if (!component) { return; }

        this.gauge = component;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">

<div className="options horizontal">
                    <label className="options-label">Optical Scaling: </label>
                    <label className="options-label"><input type="checkbox"
                    checked={this.state.crosshairsVisible}
                    onChange={this.onOpticalScalingChanged}/> Scaling Size: </label>
                    <input className="options-slider" type="range" min="100" max="2000" step="100"
                        value={this.state.dataPoints}
                        onChange={this.onOpticalSizeChanged} />
                </div>
                
            <IgrRadialGauge
                    height="100%"
                    width="100%"
                    titleText="Optical Scaling"
                    subtitleText="Enabled"       
                    minimumValue="0" value="50"
                    maximumValue="80" interval="10"
                    opticalScalingEnabled="true" 
                    opticalScalingSize="400" />
            </div>
        );
    }

    public onOpticalScalingChanged = (e: any) => {
        const isEnabled = e.target.checked;
        this.gauge.opticalScalingEnabled = isEnabled;

        if (isEnabled) {
            this.gauge.opticalScalingEnabled = true;
            this.gauge.subtitleText = "Enabled";
        }
        else {
            this.gauge.opticalScalingEnabled = false;
            this.gauge.subtitleText = "Disabled";
        }
    }

    public onOpticalSizeChanged = (e: any) => {

        let num: number = parseInt(e.target.value, 10);

        this.gauge.opticalScalingSize = num;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeOpticalScaling/>);
