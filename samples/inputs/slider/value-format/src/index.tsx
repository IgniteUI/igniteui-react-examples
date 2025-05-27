import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSlider, NumberFormatOptions } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SliderValueFormat() {

    const formatOptions1: NumberFormatOptions = {
        style: "currency",
        currency: "USD"
    };
    const formatOptions2 = { minimumFractionDigits: 1};

    return (
        <div className="container sample">
            <IgrSlider 
                style={{padding: "30px 50px"}}
                primaryTicks={2}
                secondaryTicks={4}
                valueFormatOptions={formatOptions1}>
            </IgrSlider>
            <IgrSlider 
                style={{padding: "30px 50px"}}
                valueFormat="Storage {0} GB"
                valueFormatOptions={formatOptions2}>
            </IgrSlider>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SliderValueFormat/>);
