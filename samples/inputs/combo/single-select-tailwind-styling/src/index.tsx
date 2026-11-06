import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
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

export default function ComboSingleSelectTailwindStyling() {
    return (
        <div className="sample flex h-full items-start justify-center">
            <IgrCombo
                singleSelect
                outlined={true}
                placeholder="Country"
                valueKey="id"
                displayKey="name"
                groupKey="region"
                open={true}
                data={countries}
                value={['BY']}
                className="w-[279px] [--item-count:4] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-input-group-border-color:var(--color-combo-border)] [--ig-input-group-hover-border-color:var(--color-combo-border)] [--ig-input-group-focused-border-color:var(--color-combo-border)] [--ig-input-group-filled-text-color:var(--color-combo-ink)] [--ig-input-group-focused-bottom-line-color:var(--color-combo-accent)] [--ig-combo-toggle-button-background:var(--color-combo-toggle)] [--ig-combo-toggle-button-background-focus:var(--color-combo-toggle)] [--ig-combo-toggle-button-background-focus--border:var(--color-combo-toggle)] [--ig-combo-toggle-button-foreground:var(--color-combo-ink)] [--ig-combo-toggle-button-foreground-focus:var(--color-combo-ink)] [--ig-combo-toggle-button-foreground-filled:var(--color-combo-ink)] [--ig-drop-down-elevation:none] [--ig-drop-down-background-color:var(--color-combo-surface)] [--ig-drop-down-header-text-color:var(--color-combo-header)] [--ig-drop-down-item-text-color:var(--color-combo-ink)] [--ig-drop-down-hover-item-background:var(--color-combo-toggle)] [--ig-drop-down-focused-item-background:var(--color-combo-toggle)] [--ig-drop-down-selected-item-background:var(--color-combo-selected)] [--ig-drop-down-selected-item-text-color:#000] [--ig-drop-down-selected-hover-item-background:var(--color-combo-selected)] [--ig-drop-down-selected-hover-item-text-color:#000] [--ig-drop-down-selected-focus-item-background:var(--color-combo-selected)] [--ig-drop-down-selected-focus-item-text-color:#000] [&::part(input)]:text-sm [&::part(input)]:font-medium [&::part(list-wrapper)]:rounded-t-none [&::part(list-wrapper)]:border [&::part(list-wrapper)]:border-t-0 [&::part(list-wrapper)]:border-combo-border [&::part(list-wrapper)]:pb-4 [&::part(item)]:font-medium"
            />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectTailwindStyling/>);
