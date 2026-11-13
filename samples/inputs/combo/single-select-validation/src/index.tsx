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

// the combo has a built-in invalid state and no success or warn state: the `success` class draws
// the success state, and the warn combo is an invalid combo that the `warn` class gives the warning color
const states: ValidationState[] = [
    { label: 'Success', className: 'success' },
    { label: 'Warn', className: 'warn', invalid: true, helperText: 'Additional fees might be included' },
    { label: 'Error', className: 'error', invalid: true, helperText: 'Please select a different region' },
];

const types = [
    { label: 'Border Type', outlined: true, className: 'border-type' },
    { label: 'Box Type', outlined: false, className: 'box-type' },
];

export default function ComboSingleSelectValidation() {
    return (
        <div className="sample">
            {/* the combos are display-only, so inert blocks pointer and keyboard interaction */}
            <div className="states" inert>
                <span className="type-label" />
                {states.map((state) => (
                    <span key={state.label} className="state-label state-column">{state.label}</span>
                ))}
                {types.map((type) => (
                    <Fragment key={type.label}>
                        <span className={`state-label type-label ${type.className}`}>{type.label}</span>
                        {states.map((state) => (
                            <IgrCombo
                                key={state.label}
                                className={`state-combo ${state.className} ${type.className}`}
                                singleSelect
                                outlined={type.outlined}
                                invalid={state.invalid ?? false}
                                placeholder="Country"
                                valueKey="id"
                                displayKey="name"
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
