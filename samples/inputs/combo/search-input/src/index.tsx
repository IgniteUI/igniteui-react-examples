import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface SearchState {
    label: string;
    className?: string;
    // the state that the display-only search input shows: `:hover` or `:focus-within`
    shows?: string;
    text?: string;
}

// the search input has no disabled or filled state of its own to set, so the `disabled` and
// `filled` classes draw them
const states: SearchState[] = [
    { label: 'Idle' },
    { label: 'Idle & Hover', shows: ':hover' },
    { label: 'Disabled', className: 'disabled' },
    { label: 'Filled', className: 'filled', text: 'Input text' },
    { label: 'Filled & Hover', className: 'filled', shows: ':hover', text: 'Input text' },
    { label: 'Focused', className: 'filled', shows: ':focus-within', text: 'Input text' },
];

const stateSheets = new WeakSet<CSSStyleSheet>();

// The themes draw the hover and the focus of the search input with `:hover` and `:focus-within` rules,
// and a display-only search input is never hovered or focused. This copies those rules of the search
// input, and of the combo list around it, with the condition turned around, so the theme draws the
// state while the search input is not in it. The sample adds no styles of its own.
async function showState(combo: IgrCombo, state: string) {
    await combo.updateComplete;
    const input = combo.renderRoot.querySelector<IgrInput>('[part~="search-input"]')!;
    await input.updateComplete;

    for (const root of [combo.shadowRoot!, input.shadowRoot!]) {
        const themeSheets = root.adoptedStyleSheets.filter((sheet) => !stateSheets.has(sheet));
        const stateSheet = new CSSStyleSheet();
        stateSheets.add(stateSheet);

        for (const sheet of themeSheets) {
            for (const rule of sheet.cssRules) {
                // of the rules of the combo, only those for its list take part
                if (rule instanceof CSSStyleRule && rule.selectorText.includes(state)
                    && !rule.selectorText.includes(`:not(${state}`)
                    && (root === input.shadowRoot || rule.selectorText.includes('list-wrapper'))) {
                    stateSheet.insertRule(rule.cssText.replaceAll(state, `:not(${state})`), stateSheet.cssRules.length);
                }
            }
        }
        root.adoptedStyleSheets = [...themeSheets, stateSheet];
    }
}

export default function ComboSearchInput() {
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
            {/* the search inputs are display-only, so inert blocks pointer and keyboard interaction */}
            <div className="states" inert>
                {states.map((state) => (
                    <div key={state.label} className="state">
                        <span className="state-label">{state.label}</span>
                        <IgrCombo
                            ref={(combo) => { if (combo && state.shows) combos.current.set(combo, state.shows); }}
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
