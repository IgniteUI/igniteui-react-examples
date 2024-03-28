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

        this.state = { componentVisible: true, 
            toggleOpticalScaling: true,
            gaugeSize: "100%",
            sliderVal: "100"}
    }

    public onGaugeRef(component: IgrRadialGauge) {
        if (!component) { return; }

        this.gauge = component;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
            <div className="options horizontal">
                <label className="options-label">Optical Scaling: </label>
                <label className="options-label"><input type="checkbox"
                checked={this.state.toggleOpticalScaling}
                onChange={this.onOpticalScalingChanged}/> Resize Gauge: </label>
                <input className="options-slider" type="range" min={25} max={100} step={5} value={this.state.sliderVal}
                    onChange={this.onGaugeSizeChanged} />
            </div>
                
            <IgrRadialGauge
                    ref={this.onGaugeRef}
                    height={this.state.gaugeSize}
                    width={this.state.gaugeSize}
                    titleDisplaysValue="true"
                    subtitleText="MPG"       
                    minimumValue="0" value="50"
                    maximumValue="80" interval="10"
                    titleExtent={0.5}
                    subtitleExtent={0.65}
                    opticalScalingEnabled={this.state.toggleOpticalScaling} 
                    opticalScalingSize="500" />
            </div>
        );
    }

    public onOpticalScalingChanged = (e: any) => {
        const isEnabled = e.target.checked;
        this.setState( {crosshairsVisible: isEnabled} );

        if (isEnabled) {
            this.setState({toggleOpticalScaling: true})
        }
        else {
            this.setState({toggleOpticalScaling: false})
        }
    }

    public onGaugeSizeChanged = (e: any) => {
        let num: number = parseInt(e.target.value);
        this.setState({sliderVal: num.toString(), gaugeSize: num.toString() + "%"});
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeOpticalScaling/>);
