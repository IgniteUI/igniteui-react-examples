import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, IgrRangeSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderOverviewStyle.css';

export default function SliderOverview() {

    return (
        <div className="container sample">
            <div className="slider-component">
                <span className="slider-label">Slider</span>
                <IgrSlider value={40} />
                <span className="slider-label">Range Slider</span>
                <IgrRangeSlider lower={20} upper={70}></IgrRangeSlider>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderOverview/>);
