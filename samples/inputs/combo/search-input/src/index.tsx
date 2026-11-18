import { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrComboClosingEventArgs, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface SearchState {
    label: string;
    // the state that the display-only search input shows: `:hover` or `:focus-within`
    shows?: string;
    disabled?: boolean;
    // the search text of a filled search input
    text?: string;
}

const states: SearchState[] = [
    { label: 'Idle' },
    { label: 'Idle & Hover', shows: ':hover' },
    { label: 'Disabled', disabled: true },
    { label: 'Filled', text: 'Input text' },
    { label: 'Filled & Hover', shows: ':hover', text: 'Input text' },
    { label: 'Focused', shows: ':focus-within', text: 'Input text' },
];

// each state sheet, with the theme sheets that it was copied from
const stateSheets = new WeakMap<CSSStyleSheet, CSSStyleSheet[]>();

// Adds to the element a copy of the rules that its theme has for the state.
function showStateRules(element: IgrCombo | IgrInput, state: string, takesPart: (selector: string) => boolean) {
    const show = () => {
        const root = element.shadowRoot!;
        const themeSheets = root.adoptedStyleSheets.filter((sheet) => !stateSheets.has(sheet));
        const copied = root.adoptedStyleSheets.find((sheet) => stateSheets.has(sheet));
        const copiedFrom = copied && stateSheets.get(copied);
        if (copiedFrom && copiedFrom.length === themeSheets.length
            && copiedFrom.every((sheet, index) => sheet === themeSheets[index])) {
            return;
        }

        const stateSheet = new CSSStyleSheet();
        stateSheets.set(stateSheet, themeSheets);
        for (const sheet of themeSheets) {
            for (const rule of sheet.cssRules) {
                if (rule instanceof CSSStyleRule && rule.selectorText.includes(state)
                    && !rule.selectorText.includes(`:not(${state}`) && takesPart(rule.selectorText)) {
                    stateSheet.insertRule(rule.cssText.split(state).join(`:not(${state})`), stateSheet.cssRules.length);
                }
            }
        }
        root.adoptedStyleSheets = [...themeSheets, stateSheet];
    };

    // a theme change sets the style sheets of the new theme on the shadow root of the element, and may keep
    // the sheet copied from the previous theme, so the rules are copied again each time the style sheets
    // of the shadow root are set
    const adopted = Object.getOwnPropertyDescriptor(ShadowRoot.prototype, 'adoptedStyleSheets')!;
    Object.defineProperty(element.shadowRoot!, 'adoptedStyleSheets', {
        configurable: true,
        get() {
            return adopted.get!.call(this);
        },
        set(sheets: CSSStyleSheet[]) {
            adopted.set!.call(this, sheets);
            queueMicrotask(show);
        },
    });
    show();
}

// The themes draw the hover and the focus of the search input with `:hover` and `:focus-within` rules, and a
// display-only search input is never hovered or focused. This copies those rules of the search input, and of the combo list around it,
// with the condition turned around, so the theme draws the state while the search input is not in it. The
// sample adds no styles of its own.
async function showState(combo: IgrCombo, state: SearchState) {
    await combo.updateComplete;
    const input = combo.renderRoot.querySelector<IgrInput>('[part~="search-input"]')!;
    await input.updateComplete;

    // the search input is an input inside the combo, so its text and its disabled state are set on it
    input.value = state.text ?? '';
    input.disabled = state.disabled ?? false;

    if (state.shows) {
        // of the rules of the combo, only those for its list take part
        showStateRules(combo, state.shows, (selector) => selector.includes('list-wrapper'));
        showStateRules(input, state.shows, () => true);
    }
}

export default function ComboSearchInput() {
    // the display-only dropdowns stay open when the user clicks outside them
    const keepOpen = (e: IgrComboClosingEventArgs) => e.preventDefault();
    const combos = useRef(new Map<IgrCombo, SearchState>());

    useEffect(() => {
        combos.current.forEach((state, combo) => showState(combo, state));
    }, []);

    return (
        <div className="sample">
            {/* the search inputs are display-only, so inert blocks pointer and keyboard interaction */}
            <div className="states" inert>
                {states.map((state) => (
                    <div key={state.label} className="state">
                        <span className="state-label">{state.label}</span>
                        <IgrCombo
                            ref={(combo) => { if (combo) combos.current.set(combo, state); }}
                            className="search"
                            placeholderSearch="Search"
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
