import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';


IgrBulletGraphModule.register();

export default class BulletGraphTickmarks extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="igContainer" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}

                    tickBrush="DodgerBlue"
                    ticksPreTerminal={0}
                    ticksPostInitial={0}
                    tickStrokeThickness={2}
                    tickStartExtent={0.2}
                    tickEndExtent={0.075}
                    minorTickCount={4}
                    minorTickBrush="DarkViolet"
                    minorTickEndExtent={0.1}
                    minorTickStartExtent={0.2}
                    minorTickStrokeThickness={1} />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<BulletGraphTickmarks />, document.getElementById('root'));