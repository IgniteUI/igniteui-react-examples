import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupButtonsAmount.css';
import './index.css';

const names = ['Doc', 'Happy', 'Sneezy', 'Sleepy', 'Bashful', 'Grumpy', 'Dopey'];

export default function ButtonGroupButtonsAmount(): JSX.Element {
    return (
        <div className="button-group-buttons-amount">
            <div className="button-group-buttons-amount-item">
                <IgrButtonGroup>
                    {names.map((name) => (
                        <IgrToggleButton key={name} value={name.toLowerCase()}>
                            {name}
                            <IgrRipple />
                        </IgrToggleButton>
                    ))}
                </IgrButtonGroup>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupButtonsAmount />);
