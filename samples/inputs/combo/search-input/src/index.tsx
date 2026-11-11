import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface SearchState {
    label: string;
    className?: string;
    text?: string;
}

// the search input states come from the pointer and the keyboard, so the `hover`,
// `disabled`, `filled` and `focused` classes show them on the display-only combos
const states: SearchState[] = [
    { label: 'Idle' },
    { label: 'Idle & Hover', className: 'hover' },
    { label: 'Disabled', className: 'disabled' },
    { label: 'Filled', className: 'filled', text: 'Input text' },
    { label: 'Filled & Hover', className: 'filled hover', text: 'Input text' },
    { label: 'Focused', className: 'filled focused', text: 'Input text' },
];

export default function ComboSearchInput() {
    // the display-only dropdowns stay open when the user clicks outside them
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

    return (
        <div className="sample">
            {/* the search inputs are display-only, so inert blocks keyboard interaction */}
            <div className="states" inert>
                {states.map((state) => (
                    <div key={state.label} className="state">
                        <span className="state-label">{state.label}</span>
                        <IgrCombo
                            className={`search ${state.className ?? ''}`}
                            placeholderSearch={state.text ?? 'Search'}
                            open={true}
                            onClosing={keepOpen}
                            data={[]}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSearchInput/>);
