import { useEffect, useRef } from 'react';
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

export default function ChipState() {
    const sampleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        registerIconFromText('arrow_upward', arrowUpwardIcon, 'material');
    }, []);

    // The chips only show their look, so inert keeps them out of the tab order and ignores pointer input.
    // It also keeps a real hover or focus from changing the hover and focused chips.
    useEffect(() => {
        if (sampleRef.current) {
            sampleRef.current.inert = true;
        }
    }, []);

    return (
        <div className="sample chip-state" ref={sampleRef}>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ChipState/>);
