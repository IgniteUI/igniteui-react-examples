import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrComboChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Country {
    id: string;
    name: string;
    region: string;
}

const countries: Country[] = [
    { id: 'BY', name: 'Belarus', region: 'Europe' },
    { id: 'BE', name: 'Belgium', region: 'Europe' },
    { id: 'BG', name: 'Bulgaria', region: 'Europe' },
];

// the dropdown is opened once, when the combo is created; as a prop, `open` is applied again on each render,
// which opens a dropdown that the user has closed
const openDropdown = (combo: IgrCombo | null) => {
    if (combo) {
        combo.open = true;
    }
};

export default function ComboTailwindStyling() {
    // the `id` values of the selected countries
    const [selected, setSelected] = useState(['BY']);

    // `onChange` is raised before the selection changes, so the value is read once the combo has updated;
    // the search input of the combo emits its own change event that bubbles out of the combo, so only the
    // events of the combo itself change the selection
    const onChange = async (e: IgrComboChangeEventArgs) => {
        const combo = e.currentTarget as IgrCombo;

        if (e.composedPath()[0] !== combo) {
            return;
        }

        await combo.updateComplete;
        setSelected(combo.value as string[]);
    };

    return (
        <div className="sample flex h-full items-start justify-center">
            <div>
                <IgrCombo
                    outlined={true}
                    placeholder="Country"
                    placeholderSearch="Search"
                    valueKey="id"
                    displayKey="name"
                    groupKey="region"
                    ref={openDropdown}
                    data={countries}
                    value={selected}
                    onChange={onChange}
                    className="w-[279px] [--item-count:4] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-input-group-border-color:var(--color-combo-border)] [--ig-input-group-hover-border-color:var(--color-combo-border)] [--ig-input-group-focused-border-color:var(--color-combo-border)] [--ig-input-group-filled-text-color:var(--color-combo-ink)] [--ig-input-group-focused-bottom-line-color:var(--color-combo-accent)] [--ig-combo-toggle-button-background:var(--color-combo-toggle)] [--ig-combo-toggle-button-background-focus:var(--color-combo-toggle)] [--ig-combo-toggle-button-background-focus--border:var(--color-combo-toggle)] [--ig-combo-toggle-button-foreground:var(--color-combo-ink)] [--ig-combo-toggle-button-foreground-focus:var(--color-combo-ink)] [--ig-combo-toggle-button-foreground-filled:var(--color-combo-ink)] [--ig-drop-down-elevation:none] [--ig-drop-down-background-color:var(--color-combo-surface)] [--ig-drop-down-header-text-color:var(--color-combo-header)] [--ig-drop-down-item-text-color:var(--color-combo-ink)] [--ig-drop-down-hover-item-background:var(--color-combo-toggle)] [--ig-drop-down-focused-item-background:var(--color-combo-toggle)] [--ig-drop-down-selected-item-background:var(--color-combo-selected)] [--ig-drop-down-selected-item-text-color:#000] [--ig-drop-down-selected-hover-item-background:var(--color-combo-selected)] [--ig-drop-down-selected-hover-item-text-color:#000] [--ig-drop-down-selected-focus-item-background:var(--color-combo-selected)] [--ig-drop-down-selected-focus-item-text-color:#000] [--ig-checkbox-empty-color:var(--color-combo-accent)] [--ig-checkbox-fill-color:var(--color-combo-accent)] [&::part(input)]:text-sm [&::part(input)]:font-medium [&::part(list-wrapper)]:rounded-t-none [&::part(list-wrapper)]:border [&::part(list-wrapper)]:border-t-0 [&::part(list-wrapper)]:border-combo-border [&::part(list-wrapper)]:pb-4 [&::part(item)]:font-medium [&::part(search-input)]:font-semibold"
                />
                <div className="mt-[26px] flex flex-col gap-1.5 px-4 py-3 font-[family-name:aktiv-grotesk,sans-serif] text-[13px] leading-5 tracking-[0.3px] text-[color:var(--ig-gray-600)]">
                    <span className="text-[color:var(--ig-gray-900)]">Selection</span>
                    {selected.length ? (
                        selected.map((id) => <span key={id}>{countries.find((country) => country.id === id)!.name}</span>)
                    ) : (
                        <span>No items selected</span>
                    )}
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboTailwindStyling/>);
