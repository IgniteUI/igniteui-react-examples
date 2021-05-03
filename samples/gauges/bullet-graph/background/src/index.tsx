import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';


IgrBulletGraphModule.register();

export default class BulletGraphBackground extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    backingBrush="#bddcfc"
                    backingOutline="DodgerBlue"
                    backingStrokeThickness={4}
                    backingInnerExtent={0}
                    backingOuterExtent={1} />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<BulletGraphBackground />, document.getElementById('root'));