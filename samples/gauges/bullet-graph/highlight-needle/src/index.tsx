import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBulletGraph } from 'igniteui-react-gauges';
import { IgrBulletGraphModule } from 'igniteui-react-gauges';

IgrBulletGraphModule.register();

export default class BulletGraphHighlightNeedle extends React.Component {

    public render(): JSX.Element {
        return (
            <div className="container sample" >
                <IgrBulletGraph
                    height="80px"
                    width="100%"
                    value={70} 
                    targetValue={90}
                    interval={10}
                    minimumValue={0} 
                    maximumValue={100} 
                    labelInterval={10}
                    labelExtent={0.025}
                    labelsPreTerminal={0}
                    labelsPostInitial={0}
                    highlightValueDisplayMode="Overlay"
                    highlightValue={25} />
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BulletGraphHighlightNeedle/>);
