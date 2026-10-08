import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const arrowUpwardIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>';

const states = [
    { label: 'Idle', className: '' },
    { label: 'Hover', className: 'state-hover' },
    { label: 'Focused', className: 'state-focused' },
    { label: 'Selected', className: '', selected: true },
];

export default function ChipState(): JSX.Element {
    useEffect(() => {
        registerIconFromText('arrow_upward', arrowUpwardIcon, 'material');
    }, []);

    return (
        <div className="sample chip-state">
            {states.map((state) => (
                <div className="chip-state-item" key={state.label}>
                    <span>{state.label}</span>
                    <IgrChip className={state.className} removable selectable={state.selected} selected={state.selected}>
                        <IgrIcon slot="prefix" name="arrow_upward" collection="material" />
                        Chip
                    </IgrChip>
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipState/>);
