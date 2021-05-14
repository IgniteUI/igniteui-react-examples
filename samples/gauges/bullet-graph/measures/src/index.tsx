import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphMeasures extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                     height="80px"
                     width="100%"
                     minimumValue={0}
                     maximumValue={100}

                     value={50}
                     valueBrush="DodgerBlue"
                     valueStrokeThickness={1}
                     valueInnerExtent={0.5}
                     valueOuterExtent={0.65}

                     targetValue={80}
                     targetValueBreadth={10}
                     targetValueBrush="LimeGreen"
                     targetValueOutline="LimeGreen"
                     targetValueStrokeThickness={1}
                     targetValueInnerExtent={0.3}
                     targetValueOuterExtent={0.85}

                     scaleBackgroundBrush = "#e5e5e5"
                     scaleBackgroundOutline = "#e5e5e5"
                     backingBrush = "#f7f7f7"
                     backingOutline = "#bfbfbf"
                     tickStrokeThickness = {1.5} />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<BulletGraphMeasures />, document.getElementById('root'));
