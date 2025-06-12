import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderConstraintsStyle.css';

export default function SliderConstraints() {

    return (
        <div className="container sample">
            <IgrSlider max={1000} min={100} lowerBound={200} upperBound={800} value={400} primaryTicks={2}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderConstraints/>);
