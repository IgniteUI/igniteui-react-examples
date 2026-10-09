import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRadio } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const states = [
    { caption: 'Hover', label: 'Daily Updates', className: 'hover' },
    { caption: 'Focused', label: 'Weekly Updates', className: 'focused' },
    { caption: 'Focused & Hover', label: 'Monthly Updates', className: 'focused-hover' },
];

const groups = [
    {
        name: 'enabled',
        invalid: false,
        rows: [
            { caption: 'Enabled / On', checked: true },
            { caption: 'Enabled / Off', checked: false },
        ],
    },
    {
        name: 'invalid',
        invalid: true,
        rows: [
            { caption: 'Invalid / On', checked: true },
            { caption: 'Invalid / Off', checked: false },
        ],
    },
];

export default function RadioInteractionState(): JSX.Element {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const grid = gridRef.current;
        // The radios only show their states, so they take no pointer or keyboard input.
        grid.setAttribute('inert', '');
        // A keyup is what turns on a radio's keyboard focus ring, so dispatching one
        // shows the focused state without moving focus to the radio.
        grid.querySelectorAll('.focused, .focused-hover').forEach((radio) => {
            radio.dispatchEvent(new KeyboardEvent('keyup'));
        });
    }, []);

    return (
        <div className="sample radio-states">
            <div className="radio-states-grid" ref={gridRef}>
                <span />
                {states.map((state) => (
                    <span key={state.caption} className="column-caption">{state.caption}</span>
                ))}
                {groups.map((group) => (
                    <div key={group.name} className="radio-states-group">
                        {group.rows.map((row) => (
                            <React.Fragment key={row.caption}>
                                <span className="row-caption">{row.caption}</span>
                                {states.map((state) => (
                                    <IgrRadio
                                        key={state.caption}
                                        className={state.className}
                                        checked={row.checked}
                                        invalid={group.invalid}
                                    >
                                        {state.label}
                                    </IgrRadio>
                                ))}
                            </React.Fragment>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioInteractionState/>);
