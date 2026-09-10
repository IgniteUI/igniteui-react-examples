import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupInteractionStates.css';
import './index.css';

const rows: Array<{ label: string; selected: boolean }> = [
    { label: 'Selected / Off', selected: false },
    { label: 'Selected / On', selected: true }
];

export default function ButtonGroupInteractionStates(): JSX.Element {
    return (
        <div className="button-group-interaction-states">
            <div className="button-group-interaction-states-row">
                <span className="row-label" />
                <span className="column-label">Enabled</span>
                <span className="column-label">Disabled</span>
            </div>
            {rows.map((row) => (
                <div className="button-group-interaction-states-row" key={row.label}>
                    <span className="row-label">{row.label}</span>
                    <IgrButtonGroup selection="multiple">
                        <IgrToggleButton
                            value="device"
                            selected={row.label === 'Selected / On'}
                        >
                            Device
                            <IgrRipple />
                        </IgrToggleButton>
                    </IgrButtonGroup>
                    <IgrButtonGroup selection="multiple" disabled={true}>
                        <IgrToggleButton value="cloud" selected={row.selected}>
                            Cloud
                        </IgrToggleButton>
                    </IgrButtonGroup>
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupInteractionStates />);
