import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDiscreteStyle.css';

export default function SliderDiscrete() {

    return (
        <div className="container sample">
            <IgrSlider step={10} discreteTrack={true}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderDiscrete/>);
