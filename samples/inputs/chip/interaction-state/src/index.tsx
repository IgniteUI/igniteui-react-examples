import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipInteractionState(): JSX.Element {
    return (
        <div className="sample chip-states">
            <div className="chip-states-item">
                <span>Enabled</span>
                <IgrChip removable>Chip</IgrChip>
            </div>
            <div className="chip-states-item">
                <span>Disabled</span>
                <IgrChip removable disabled>Chip</IgrChip>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipInteractionState/>);
