import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const methods = [
    { value: 'standard', name: 'Standard', detail: '(2-4 business days)', checked: true },
    { value: 'express', name: 'Express', detail: '(next day by 6 pm)' },
    { value: 'pickup', name: 'Pickup point', detail: '(400 + locations)' },
    { value: 'same-day', name: 'Same-day', detail: '(not available)', disabled: true },
];

export default function RadioStyling(): JSX.Element {
    return (
        <div className="sample radio-styling">
            <div className="shipping-card">
                <div className="shipping-header">
                    <span id="shipping-title" className="shipping-title">Shipping method</span>
                </div>
                <IgrRadioGroup className="shipping-methods" name="shipping" aria-labelledby="shipping-title">
                    {methods.map((method) => (
                        <IgrRadio
                            key={method.value}
                            className="shipping-method"
                            value={method.value}
                            checked={method.checked}
                            disabled={method.disabled}
                        >
                            {method.name} <span className="shipping-detail">{method.detail}</span>
                        </IgrRadio>
                    ))}
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioStyling/>);
