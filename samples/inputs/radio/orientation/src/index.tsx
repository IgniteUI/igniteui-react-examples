import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioOrientation(): JSX.Element {
    return (
        <div className="sample radio-orientation">
            <div className="radio-orientation-item billing-cycle">
                <span id="billing-title" className="radio-orientation-title">Billing cycle</span>
                <IgrRadioGroup name="billing" alignment="vertical" aria-labelledby="billing-title">
                    <IgrRadio value="monthly" checked={true}>Monthly</IgrRadio>
                    <IgrRadio value="annual">Annual</IgrRadio>
                    <IgrRadio value="two-year">Two-year</IgrRadio>
                </IgrRadioGroup>
            </div>
            <div className="radio-orientation-item chart-type">
                <span id="chart-title" className="radio-orientation-title">Chart type</span>
                <IgrRadioGroup name="chart" alignment="horizontal" aria-labelledby="chart-title">
                    <IgrRadio value="line" checked={true}>Line</IgrRadio>
                    <IgrRadio value="bar">Bar</IgrRadio>
                    <IgrRadio value="pie">Pie</IgrRadio>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioOrientation/>);
