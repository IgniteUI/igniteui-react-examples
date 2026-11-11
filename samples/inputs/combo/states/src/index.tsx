import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface ComboState {
    label: string;
    className?: string;
    value: string[];
    open?: boolean;
}

const countries: Country[] = [
    { id: 'BY', name: 'Belarus', region: 'Europe' },
    { id: 'BE', name: 'Belgium', region: 'Europe' },
    { id: 'BG', name: 'Bulgaria', region: 'Europe' },
];

// hover and focus come from the pointer and the keyboard, so the `hover` and `focused`
// classes show them on the display-only combos
const states: ComboState[] = [
    { label: 'Idle', value: [] },
    { label: 'Idle & Hover', className: 'hover', value: [] },
    { label: 'Filled', value: ['BY', 'BE'] },
    { label: 'Filled & Hover', className: 'hover', value: ['BY', 'BE'] },
    { label: 'Focused', className: 'focused', value: ['BY', 'BE'] },
    { label: 'Focused (Dropdown On)', className: 'focused', value: ['BY', 'BE'], open: true },
];

export default function ComboStates() {
    // the display-only dropdowns stay open when the user clicks outside them
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

    return (
        <div className="sample">
            {/* the combos are display-only, so inert blocks keyboard interaction */}
            <div className="states" inert>
                {states.map((state) => (
                    <div key={state.label} className="state">
                        <span className="state-label">{state.label}</span>
                        <IgrCombo
                            className={`state-combo ${state.className ?? ''}`}
                            outlined={true}
                            placeholder="Country"
                            placeholderSearch="Search"
                            valueKey="id"
                            displayKey="name"
                            groupKey="region"
                            open={state.open ?? false}
                            onClosing={keepOpen}
                            data={countries}
                            value={state.value}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboStates/>);
