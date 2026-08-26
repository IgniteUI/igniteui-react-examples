import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

const rows: Array<{ label: string; selected: boolean }> = [
    { label: 'Selected / Off', selected: false },
    { label: 'Selected / On', selected: true }
];

export default function ButtonGroupInteractionStates(): JSX.Element {
    return (
        <article className="states-matrix">
            <header className="states-row">
                <span className="row-label" />
                <span className="column-label">Enabled</span>
                <span className="column-label">Disabled</span>
            </header>
            {rows.map((row) => (
                <section className="states-row" key={row.label}>
                    <span className="row-label">{row.label}</span>
                    <div className="state-cell">
                        <span className="cell-label">Enabled</span>
                        <IgrButtonGroup selection="multiple">
                            <IgrToggleButton
                                value="device"
                                selected={row.selected}
                            >
                                Device
                                <IgrRipple />
                            </IgrToggleButton>
                        </IgrButtonGroup>
                    </div>
                    <div className="state-cell">
                        <span className="cell-label">Disabled</span>
                        <IgrButtonGroup selection="multiple">
                            <IgrToggleButton value="cloud" disabled={true} selected={row.selected}>
                                Cloud
                            </IgrToggleButton>
                        </IgrButtonGroup>
                    </div>
                </section>
            ))}
        </article>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupInteractionStates />);
