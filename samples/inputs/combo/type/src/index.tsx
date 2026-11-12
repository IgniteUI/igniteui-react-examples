import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrIcon, IgrComboChangeEventArgs, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const languageIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"/></svg>';

interface Option {
    id: number;
    name: string;
    group: string;
}

const options: Option[] = [1, 2, 3, 4, 5].map((id) => ({ id, name: 'Item', group: 'Header' }));

const types = [
    { label: 'Border Type', outlined: true, className: 'border-type' },
    { label: 'Box Type', outlined: false, className: 'box-type' },
];

// the dropdown is opened once, when the combo is created; as a prop, `open` is applied again on each render,
// which opens a dropdown that the user has closed
const openDropdown = (combo: IgrCombo | null) => {
    if (combo) {
        combo.open = true;
    }
};

export default function ComboType() {
    // the `id` values of the selected options, kept for each combo
    const [selected, setSelected] = useState<Record<string, number[]>>({});

    useEffect(() => {
        registerIconFromText('language', languageIcon, 'material');
    }, []);

    // a click outside a combo moves the focus out of it, and then its dropdown stays open, so each combo opens and closes on its own
    const keepOpenOnOutsideClick = (e: CustomEvent<void>) => {
        if (!(e.target as HTMLElement).matches(':focus-within')) {
            e.preventDefault();
        }
    };

    // `onChange` is raised before the selection changes, so the value is read once the combo has updated;
    // the search input of the combo emits its own change event that bubbles out of the combo, so only the
    // events of the combo itself change the selection
    const onChange = async (type: string, e: IgrComboChangeEventArgs) => {
        const combo = e.currentTarget as IgrCombo;

        if (e.composedPath()[0] !== combo) {
            return;
        }

        await combo.updateComplete;
        const value = combo.value as number[];
        setSelected((current) => ({ ...current, [type]: value }));
    };

    return (
        <div className="sample">
            <div className="types">
                {types.map((type) => (
                    <div key={type.label} className={`type ${type.className}`}>
                        <span className="type-label">{type.label}</span>
                        <IgrCombo
                            outlined={type.outlined}
                            label="Label"
                            placeholder="Select a value"
                            placeholderSearch="Search"
                            valueKey="id"
                            displayKey="name"
                            groupKey="group"
                            ref={openDropdown}
                            onClosing={keepOpenOnOutsideClick}
                            onChange={(e) => onChange(type.label, e)}
                            data={options}
                        >
                            <IgrIcon slot="prefix" name="language" collection="material" />
                        </IgrCombo>
                        <div className="selection">
                            <span className="selection-title">Selection</span>
                            {selected[type.label]?.length ? (
                                selected[type.label].map((id) => (
                                    <span key={id}>{options.find((option) => option.id === id)!.name}</span>
                                ))
                            ) : (
                                <span>No items selected</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboType/>);
