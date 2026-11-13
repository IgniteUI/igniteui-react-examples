import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Option {
    id: number;
    name: string;
}

interface ItemState {
    label: string;
    className?: string;
}

interface ItemRow {
    label: string;
    value: number[];
    states: ItemState[];
}

const options: Option[] = [{ id: 1, name: 'Item' }];

// hover, focus, and disabled come from the pointer, the keyboard, and the data, so the
// `hover`, `focus`, and `disabled` classes show them on the display-only items
const states: ItemState[] = [
    { label: 'Idle' },
    { label: 'Hover', className: 'hover' },
    { label: 'Focus', className: 'focus' },
    { label: 'Disabled', className: 'disabled' },
];

const rows: ItemRow[] = [
    { label: 'Unselected', value: [], states },
    { label: 'Selected', value: [1], states: states.slice(0, 3) },
];

export default function ComboSingleSelectDropdownItemsStates() {
    // the input fields are hidden, so the dropdowns stay open
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

    return (
        <div className="sample">
            {/* the items are display-only, so inert blocks pointer and keyboard interaction */}
            <div className="items" inert>
                <span />
                {states.map((state) => (
                    <span key={state.label} className="state-label state-column">{state.label}</span>
                ))}
                {rows.map((row) => (
                    <Fragment key={row.label}>
                        <span className="state-label">{row.label}</span>
                        {row.states.map((state) => (
                            <IgrCombo
                                key={state.label}
                                className={`dropdown ${state.className ?? ''}`}
                                singleSelect
                                valueKey="id"
                                displayKey="name"
                                open={true}
                                onClosing={keepOpen}
                                data={options}
                                value={row.value}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectDropdownItemsStates/>);
