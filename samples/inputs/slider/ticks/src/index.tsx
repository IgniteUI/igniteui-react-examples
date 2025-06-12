import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SliderTicks() {

    return (
        <div className="container sample">
            <IgrSlider style={{padding: "30px 30px  0px 30px"}}
                primaryTicks={3} 
                secondaryTicks={4} />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderTicks/>);
