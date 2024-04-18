import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrLinearGauge } from "@infragistics/igniteui-react-gauges";
import { IgrLinearGraphRange } from "@infragistics/igniteui-react-gauges";
import { IgrLinearGaugeModule } from "@infragistics/igniteui-react-gauges";

IgrLinearGaugeModule.register();

export default class LinearGaugeRanges extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <IgrLinearGauge
                 height="80px"
                 width="100%"
                 minimumValue={0} value={50}
                 maximumValue={100} interval={10}

                 rangeBrushes="#a4bd29, #F86232"
                 rangeOutlines="#a4bd29, #F86232"  >
                 <IgrLinearGraphRange name="range1"
                     startValue={0} endValue={50}
                     innerStartExtent={0.075} innerEndExtent={0.075}
                     outerStartExtent={0.25} outerEndExtent={0.4} />
                <IgrLinearGraphRange name="range2"
                    startValue={50} endValue={100}
                    innerStartExtent={0.075} innerEndExtent={0.075}
                    outerStartExtent={0.4} outerEndExtent={0.55} />
            </IgrLinearGauge>
        </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<LinearGaugeRanges/>);
