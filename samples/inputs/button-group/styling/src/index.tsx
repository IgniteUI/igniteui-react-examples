import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupStyling.css';
import './index.css';

const layouts = ['Left', 'Center', 'Right'];

export default function ButtonGroupStyling(): JSX.Element {
    return (
        <div className="button-group-styling">
            <IgrButtonGroup>
                {layouts.map((layout) => (
                    <IgrToggleButton
                        key={layout}
                        value={layout.toLowerCase()}
                        selected={layout === 'Left'}
                    >
                        {layout}
                        <IgrRipple />
                    </IgrToggleButton>
                ))}
            </IgrButtonGroup>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStyling />);
