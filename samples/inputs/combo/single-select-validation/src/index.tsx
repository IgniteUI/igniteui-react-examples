import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface ValidationState {
    label: string;
    className: string;
    invalid?: boolean;
    helperText?: string;
}

const countries: Country[] = [
    { id: 'BY', name: 'Belarus', region: 'Europe' },
    { id: 'BE', name: 'Belgium', region: 'Europe' },
    { id: 'BG', name: 'Bulgaria', region: 'Europe' },
];

// the combo has a built-in invalid state, so the `success` and `warn` classes show
// the other two states on the display-only combos
const states: ValidationState[] = [
    { label: 'Success', className: 'success' },
    { label: 'Warn', className: 'warn', helperText: 'Additional fees might be included' },
    { label: 'Error', className: 'error', invalid: true, helperText: 'Please select a different region' },
];

const types = [
    { label: 'Border Type', outlined: true },
    { label: 'Box Type', outlined: false },
];

export default function ComboSingleSelectValidation() {
    return (
        <div className="sample">
            {/* the combos are display-only, so inert blocks keyboard interaction */}
            <div className="states" inert>
                <span />
                {states.map((state) => (
                    <span key={state.label} className="state-label state-column">{state.label}</span>
                ))}
                {types.map((type) => (
                    <Fragment key={type.label}>
                        <span className="state-label type-label">{type.label}</span>
                        {states.map((state) => (
                            <IgrCombo
                                key={state.label}
                                className={`state-combo ${state.className}`}
                                singleSelect
                                outlined={type.outlined}
                                invalid={state.invalid ?? false}
                                placeholder="Country"
                                valueKey="id"
                                displayKey="name"
                                groupKey="region"
                                data={countries}
                                value={['BY']}
                            >
                                {state.helperText && <span slot="helper-text">{state.helperText}</span>}
                            </IgrCombo>
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectValidation/>);
