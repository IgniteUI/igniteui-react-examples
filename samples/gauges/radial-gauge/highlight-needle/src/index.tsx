import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadialGauge } from 'igniteui-react-gauges';
import { IgrRadialGaugeModule } from 'igniteui-react-gauges';

IgrRadialGaugeModule.register();

export default class RadialGaugeHighlightNeedle extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = { componentVisible: true }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrRadialGauge                    
                    highlightValueDisplayMode="Overlay"
                    highlightValue="25"
                    isHighlightNeedleDraggingEnabled="true"
                    isNeedleDraggingEnabled="true"
                    titleDisplaysValue="true"
                    label-interval="10"
                    label-extent="0.65"        
                    height="100%"
                    width="100%"
                    minimumValue={0} value={75}
                    maximumValue={80} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeHighlightNeedle/>);
