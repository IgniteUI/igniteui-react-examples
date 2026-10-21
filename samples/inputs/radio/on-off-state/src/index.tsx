import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioOnOffState(): JSX.Element {
    return (
        <div className="sample radio-on-off">
            <div className="age-question">
                <span id="age-title" className="age-title">What is your age?</span>
                <IgrRadioGroup name="age" aria-labelledby="age-title">
                    <IgrRadio value="18-27" checked={true}>18-27</IgrRadio>
                    <IgrRadio value="28-39">28-39</IgrRadio>
                    <IgrRadio value="40-55">40-55</IgrRadio>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioOnOffState/>);
