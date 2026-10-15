import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const formats = [
    { value: 'pdf', label: 'PDF Document' },
    { value: 'xls', label: 'XLS Editable spreadsheet' },
    { value: 'csv', label: 'CSV Raw data, no styling' },
];

const radioLabel = 'text-xs font-semibold leading-4 tracking-[0.15px] text-export-ink';

// The base part is styled directly, so the buttons keep the design's look in every theme.
// Without the theme's shadow, the focused button shows an outline instead.
const button =
    '[&::part(base)]:h-[30px] [&::part(base)]:min-w-0 [&::part(base)]:px-3 [&::part(base)]:shadow-none ' +
    '[&::part(base)]:text-sm [&::part(base)]:font-semibold [&::part(base)]:normal-case [&::part(base)]:leading-4 [&::part(base)]:tracking-[0.75px] ' +
    '[&::part(base_focused)]:outline-2 [&::part(base_focused)]:outline-offset-2 [&::part(base_focused)]:outline-export-primary';

const cancelButton =
    button + ' [&::part(base)]:rounded [&::part(base)]:border-transparent [&::part(base)]:bg-transparent ' +
    '[&::part(base)]:text-export-cancel [&::part(base):hover]:bg-export-tint-strong';

const exportButton =
    button + ' [&::part(base)]:rounded-lg [&::part(base)]:border-export-primary [&::part(base)]:bg-export-primary ' +
    '[&::part(base)]:text-white [&::part(base):hover]:border-export-primary-strong [&::part(base):hover]:bg-export-primary-strong';

export default function RadioTailwindStyling(): JSX.Element {
    const [format, setFormat] = useState('csv');

    return (
        <div className="sample flex items-center justify-center">
            <div className="box-border flex w-[280px] flex-col overflow-hidden rounded-2xl border border-export-divider bg-white font-[aktiv-grotesk,sans-serif] [--ig-font-family:aktiv-grotesk,sans-serif] [--ig-radio-empty-color:var(--color-export-empty)] [--ig-radio-fill-color:var(--color-export-primary)]">
                <div className="flex flex-col border-b border-export-divider p-4 font-semibold tracking-[0.15px]">
                    <span id="export-title" className="text-base leading-6 text-export-title">Export report</span>
                    <span className="text-xs leading-4 text-export-muted">Choose a format to export</span>
                </div>
                <IgrRadioGroup className="gap-0 px-6 py-3.5" name="format" aria-labelledby="export-title">
                    {formats.map((option) => (
                        <IgrRadio
                            key={option.value}
                            className="format-option"
                            value={option.value}
                            checked={option.value === format}
                            onChange={(e) => {
                                if (e.detail.checked) {
                                    setFormat(option.value);
                                }
                            }}
                        >
                            <span className={radioLabel}>{option.label}</span>
                        </IgrRadio>
                    ))}
                </IgrRadioGroup>
                <div className="flex justify-end gap-4 bg-export-tint p-4">
                    <IgrButton variant="flat" className={cancelButton}>Cancel</IgrButton>
                    <IgrButton variant="contained" className={exportButton}>Export as {format.toUpperCase()}</IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RadioTailwindStyling/>);
