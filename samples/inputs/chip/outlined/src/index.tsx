import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const variants = [
    { label: 'Default', variant: undefined },
    { label: 'Primary', variant: 'primary' },
    { label: 'Info', variant: 'info' },
    { label: 'Success', variant: 'success' },
    { label: 'Warning', variant: 'warning' },
    { label: 'Danger', variant: 'danger' },
] as const;

export default function ChipOutlined(): JSX.Element {
    return (
        <div className="sample chip-outlined">
            {variants.map((item) => (
                <div className="chip-outlined-item" key={item.label}>
                    <span>{item.label}</span>
                    <IgrChip outlined variant={item.variant} selectable removable>Chip</IgrChip>
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipOutlined/>);
