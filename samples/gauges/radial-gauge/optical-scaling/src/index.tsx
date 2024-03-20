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
                    onChange={this.onOpticalScalingChanged}/> Resize Gauge: </label>
                    <input className="options-slider" type="range" min="20" max="100" step="10" value="100"
                        onChange={this.onGaugeSizeChanged} />
                </div>
                
            <IgrRadialGauge
                    height="100%"
                    width="100%"
                    titleDisplaysValue= "true"
                    subtitleText="MPG"       
                    minimumValue="0" value="50"
                    maximumValue="80" interval="10"
                    titleExtent={0.5}
                    subtitleExtent={0.65}
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
        }
        else {
            this.gauge.opticalScalingEnabled = false;
        }
    }

    public onGaugeSizeChanged = (e: any) => {

        let num: number = parseInt(e.target.value);
        this.gauge.width = num.toString() + "%";
        this.gauge.height = num.toString() + "%";
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeOpticalScaling/>);
