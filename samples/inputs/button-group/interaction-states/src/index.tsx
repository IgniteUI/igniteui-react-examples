import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrIcon, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupStates.css';
import './index.css';

const rows: Array<{ label: string; selected: boolean }> = [
    { label: 'Selected / Off', selected: false },
    { label: 'Selected / On', selected: true }
];

const states = ['idle', 'hover', 'focused'];

function StateButton({ selected, state }: { selected: boolean; state: string }): JSX.Element {
    return (
        <IgrToggleButton className={`state-${state}`} selected={selected} value="button">
            <IgrIcon name="notifications" collection="material" />
            Button
            <IgrIcon name="notifications" collection="material" />
            <IgrRipple />
        </IgrToggleButton>
    );
}

export default function ButtonGroupStates(): JSX.Element {
    return (
        <div className="button-group-states">
            <div className="button-group-states-row">
                <span className="row-label" />
                {states.map((state) => (
                    <span className="column-label" key={state}>
                        {state.charAt(0).toUpperCase() + state.slice(1)}
                    </span>
                ))}
            </div>
            {rows.map((row) => (
                <div className="button-group-states-row" key={row.label}>
                    <span className="row-label">{row.label}</span>
                    {states.map((state) => <IgrButtonGroup key={state}><StateButton selected={row.selected} state={state} /></IgrButtonGroup>)}
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStates />);
