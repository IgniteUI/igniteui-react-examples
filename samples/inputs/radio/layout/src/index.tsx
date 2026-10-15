import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioLayout(): JSX.Element {
    return (
        <div className="sample radio-layout">
            <div className="radio-layout-item">
                <span>Label After</span>
                <IgrRadioGroup name="color-after">
                    <IgrRadio value="yellow" checked={true}>Yellow</IgrRadio>
                    <IgrRadio value="orange">Orange</IgrRadio>
                    <IgrRadio value="purple">Purple</IgrRadio>
                </IgrRadioGroup>
            </div>
            <div className="radio-layout-item">
                <IgrRadioGroup name="color-before">
                    <IgrRadio value="yellow" labelPosition="before" checked={true}>Yellow</IgrRadio>
                    <IgrRadio value="orange" labelPosition="before">Orange</IgrRadio>
                    <IgrRadio value="purple" labelPosition="before">Purple</IgrRadio>
                </IgrRadioGroup>
                <span>Label Before</span>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioLayout/>);
