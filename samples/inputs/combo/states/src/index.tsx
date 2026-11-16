import { useEffect, useRef } from 'react';
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
    // the state that the display-only combo shows: `:hover` or `:focus-within`
    shows?: string;
    value: string[];
    open?: boolean;
}

const countries: Country[] = [
    { id: 'BY', name: 'Belarus', region: 'Europe' },
    { id: 'BE', name: 'Belgium', region: 'Europe' },
    { id: 'BG', name: 'Bulgaria', region: 'Europe' },
];

const states: ComboState[] = [
    { label: 'Idle', value: [] },
    { label: 'Idle & Hover', shows: ':hover', value: [] },
    { label: 'Filled', value: ['BY', 'BE'] },
    { label: 'Filled & Hover', shows: ':hover', value: ['BY', 'BE'] },
    { label: 'Focused', shows: ':focus-within', value: ['BY', 'BE'] },
    { label: 'Focused (Dropdown On)', shows: ':focus-within', value: ['BY', 'BE'], open: true },
];

const stateSheets = new WeakSet<CSSStyleSheet>();

// The themes draw the hover and the focus of the combo with `:hover` and `:focus-within` rules, and a
// display-only combo is never hovered or focused. This copies those rules of the combo and of its input
// with the condition turned around, so the theme draws the state while the combo is not in it. The
// sample adds no styles of its own.
async function showState(combo: IgrCombo, state: string) {
    await combo.updateComplete;
    const input = combo.renderRoot.querySelector('igc-input')!;
    await input.updateComplete;

    for (const root of [combo.shadowRoot!, input.shadowRoot!]) {
        const themeSheets = root.adoptedStyleSheets.filter((sheet) => !stateSheets.has(sheet));
        const stateSheet = new CSSStyleSheet();
        stateSheets.add(stateSheet);

        for (const sheet of themeSheets) {
            for (const rule of sheet.cssRules) {
                // the rules for the state of the search input in the list are left out
                if (rule instanceof CSSStyleRule && rule.selectorText.includes(state)
                    && !rule.selectorText.includes(`:not(${state}`) && !rule.selectorText.includes('list-wrapper')) {
                    stateSheet.insertRule(rule.cssText.replaceAll(state, `:not(${state})`), stateSheet.cssRules.length);
                }
            }
        }
        root.adoptedStyleSheets = [...themeSheets, stateSheet];
    }
}

export default function ComboStates() {
    // the display-only dropdowns stay open when the user clicks outside them
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();
    const combos = useRef(new Map<IgrCombo, string>());

    useEffect(() => {
        const showStates = () => combos.current.forEach((state, combo) => showState(combo, state));

        // a theme change gives the combos the style sheets of the new theme, so the states are shown again
        window.addEventListener('igc-change-theme', showStates);
        showStates();
        return () => window.removeEventListener('igc-change-theme', showStates);
    }, []);

    return (
        <div className="sample">
            {/* the combos are display-only, so inert blocks pointer and keyboard interaction */}
            <div className="states" inert>
                {states.map((state) => (
                    <div key={state.label} className="state">
                        <span className="state-label">{state.label}</span>
                        <IgrCombo
                            ref={(combo) => { if (combo && state.shows) combos.current.set(combo, state.shows); }}
                            className="state-combo"
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
