import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const views = ['Day', 'Week', 'Month'];

export default function ButtonGroupTailwindStyling(): JSX.Element {
    return (
        <IgrButtonGroup className="![--elevation:0] ![--item-text-color:#6d28d9] ![--item-background:#ffffff] ![--item-border-color:#c4b5fd] ![--item-hover-text-color:#6d28d9] ![--item-hover-background:#fae8ff] ![--item-hover-border-color:#c4b5fd] ![--item-selected-text-color:#ffffff] ![--item-selected-background:#7c3aed] ![--item-selected-border-color:#c4b5fd] ![--item-selected-hover-text-color:#ffffff] ![--item-selected-hover-background:#7c3aed]">
            {views.map((view) => (
                <IgrToggleButton
                    key={view}
                    value={view.toLowerCase()}
                    selected={view === 'Week'}
                >
                    {view}
                    <IgrRipple />
                </IgrToggleButton>
            ))}
        </IgrButtonGroup>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupTailwindStyling />);
