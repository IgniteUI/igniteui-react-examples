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
                    highlightValue="50"                   
                    highlightValueDisplayMode="Overlay"
                    highlightLabelDisplaysValue="true"
                    highlightLabelSnapsToNeedlePivot="true"
                    isHighlightNeedleDraggingEnabled="true"
                    label-interval="10"
                    label-extent="0.65"        
                    height="100%"
                    width="100%"
                    minimumValue={0} value={30}
                    maximumValue={100} interval={10} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadialGaugeHighlightNeedle/>);
