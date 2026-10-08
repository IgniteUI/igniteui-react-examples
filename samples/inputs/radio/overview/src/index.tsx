import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioOverview(): JSX.Element {
    return (
        <div className="sample radio-overview">
            <form className="feedback-form" onSubmit={(e) => e.preventDefault()}>
                <span id="feedback-title" className="feedback-title">Does our app meet your expectations?*</span>
                <IgrRadioGroup name="expectations" aria-labelledby="feedback-title">
                    <IgrRadio value="exceeds" checked={true}>Exceeds expectations</IgrRadio>
                    <IgrRadio value="meets">Meets expectations</IgrRadio>
                    <IgrRadio value="below">Below expectations</IgrRadio>
                </IgrRadioGroup>
                <IgrButton type="submit" className="feedback-send">Send</IgrButton>
            </form>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioOverview/>);
