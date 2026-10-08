import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ChipTypes(): JSX.Element {
    return (
        <div className="sample chip-types">
            <div className="chip-types-item">
                <span>Default</span>
                <IgrChip removable>Chip</IgrChip>
            </div>
            <div className="chip-types-item">
                <span>Primary</span>
                <IgrChip removable variant="primary">Chip</IgrChip>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipTypes/>);
