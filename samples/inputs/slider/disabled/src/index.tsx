import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './SliderDisabledStyle.css';

export default function SliderDisabled() {

    return (
        <div className="container sample">
            <IgrSlider value={40} disabled={true}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderDisabled/>);
