import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const views = ['Day', 'Week', 'Month'];

export default function ButtonGroupTailwindStyling(): JSX.Element {
    return (
        <div className="button-group-center box-border h-full min-h-28 w-full bg-violet-50 p-6">
            <IgrButtonGroup className="button-group-style w-[420px] overflow-hidden">
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
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupTailwindStyling />);
