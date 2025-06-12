import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrSliderLabel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderLabelsStyle.css';

export default function SliderLabels() {

    return (
        <div className="container sample">
            <IgrSlider primaryTicks={3} >
                <IgrSliderLabel><span>Low</span></IgrSliderLabel>
                <IgrSliderLabel><span>Medium</span></IgrSliderLabel>
                <IgrSliderLabel><span>High</span></IgrSliderLabel>
            </IgrSlider>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderLabels/>);
