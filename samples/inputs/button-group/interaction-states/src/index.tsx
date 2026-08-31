import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrIcon,
    IgrRipple,
    IgrToggleButton,
    registerIconFromText
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

const rows: Array<{ label: string; selected: boolean }> = [
    { label: 'Selected / Off', selected: false },
    { label: 'Selected / On', selected: true }
];

const states = ['idle', 'hover', 'focused'];

registerIconFromText(
    'notifications',
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22Zm7-6v-5a7 7 0 0 0-5.5-6.84V3a1.5 1.5 0 0 0-3 0v1.16A7 7 0 0 0 5 11v5l-2 2v1h18v-1l-2-2Z"/></svg>',
    'material'
);

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
        <article className="states-matrix">
            <header className="states-row">
                <span className="row-label" />
                {states.map((state) => (
                    <span className="column-label" key={state}>
                        {state.charAt(0).toUpperCase() + state.slice(1)}
                    </span>
                ))}
            </header>
            {rows.map((row) => (
                <section className="states-row" key={row.label}>
                    <span className="row-label">{row.label}</span>
                    {states.map((state) => (
                        <div className="state-cell" key={state}>
                            <span className="cell-label">{state.charAt(0).toUpperCase() + state.slice(1)}</span>
                            <IgrButtonGroup>
                                <StateButton selected={row.selected} state={state} />
                            </IgrButtonGroup>
                        </div>
                    ))}
                </section>
            ))}
        </article>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStates />);
