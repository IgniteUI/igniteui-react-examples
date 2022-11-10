import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphScale extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    minimumValue={0} value={70} interval={10}
                    maximumValue={100} targetValue={90}
                    isScaleInverted={false}
                    scaleBackgroundBrush="DodgerBlue"
                    scaleBackgroundOutline="Red"
                    scaleBackgroundThickness={2}
                    scaleStartExtent={0.05}
                    scaleEndExtent={0.95} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphScale/>);
