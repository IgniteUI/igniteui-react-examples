import { Fragment, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrComboClosingEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Option {
    id: number;
    name: string;
}

interface ItemState {
    label: string;
    // the state that the display-only item shows: `:hover`, or the `active` or `disabled` attribute
    shows?: string;
}

// the item element of the combo list: it updates itself and takes controllers, as the combo does
type ComboItem = HTMLElement & {
    updateComplete: Promise<boolean>;
    addController(controller: { hostUpdated(): void }): void;
};

interface ItemRow {
    label: string;
    value: number[];
    states: ItemState[];
}

const options: Option[] = [{ id: 1, name: 'Item' }];

// an item that has the keyboard focus is the active item of the list
const states: ItemState[] = [
    { label: 'Idle' },
    { label: 'Hover', shows: ':hover' },
    { label: 'Focus', shows: '[active]' },
    { label: 'Disabled', shows: '[disabled]' },
];

const rows: ItemRow[] = [
    { label: 'Unselected', value: [], states },
    { label: 'Selected', value: [1], states: states.slice(0, 3) },
];

// each state sheet, with the theme sheets that it was copied from
const stateSheets = new WeakMap<CSSStyleSheet, CSSStyleSheet[]>();

// the list renders its item after the combo itself, so the list is watched until the item is there
function itemOf(combo: IgrCombo) {
    return new Promise<ComboItem>((resolve) => {
        const item = combo.renderRoot.querySelector<ComboItem>('igc-combo-item');
        if (item) {
            resolve(item);
            return;
        }

        const observer = new MutationObserver(() => {
            const rendered = combo.renderRoot.querySelector<ComboItem>('igc-combo-item');
            if (rendered) {
                observer.disconnect();
                resolve(rendered);
            }
        });
        observer.observe(combo.renderRoot, { childList: true, subtree: true });
    });
}

// The themes draw the hover of an item with `:hover` rules, and its focus and its disabled state with
// rules for the `active` and the `disabled` attribute, and a display-only item is in none of these
// states. This copies those rules of the item with the condition turned around, so the theme draws
// the state while the item is not in it. The sample adds no styles of its own.
async function showState(combo: IgrCombo, state: string) {
    await combo.updateComplete;
    const item = await itemOf(combo);
    await item.updateComplete;

    const show = () => {
        const root = item.shadowRoot!;
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
                    && !rule.selectorText.includes(`:not(${state}`)) {
                    stateSheet.insertRule(rule.cssText.split(state).join(`:not(${state})`), stateSheet.cssRules.length);
                }
            }
        }
        root.adoptedStyleSheets = [...themeSheets, stateSheet];
    };

    // a theme change sets the style sheets of the new theme on the shadow root of the item, and may keep
    // the sheet copied from the previous theme, so the rules are copied again each time the style sheets
    // of the shadow root are set
    const adopted = Object.getOwnPropertyDescriptor(ShadowRoot.prototype, 'adoptedStyleSheets')!;
    Object.defineProperty(item.shadowRoot!, 'adoptedStyleSheets', {
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

export default function ComboSingleSelectDropdownItemsStates() {
    // the input fields are hidden, so the dropdowns stay open
    const keepOpen = (e: IgrComboClosingEventArgs) => e.preventDefault();
    const combos = useRef(new Map<IgrCombo, string>());

    useEffect(() => {
        combos.current.forEach((state, combo) => showState(combo, state));
    }, []);

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
                                ref={(combo) => { if (combo && state.shows) combos.current.set(combo, state.shows); }}
                                className="dropdown"
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
