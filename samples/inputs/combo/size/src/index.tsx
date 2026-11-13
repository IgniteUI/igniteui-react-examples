import { Fragment, useState } from 'react';
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

const sizes = [
    { label: 'Small', className: 'small' },
    { label: 'Medium', className: 'medium' },
    { label: 'Large', className: 'large' },
];

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

export default function ComboSize() {
    // the `id` values of the selected countries, kept for each combo
    const [selected, setSelected] = useState<Record<string, string[]>>({});

    // a click outside a combo moves the focus out of it, and then its dropdown stays open, so each combo opens and closes on its own
    const keepOpenOnOutsideClick = (e: CustomEvent<void>) => {
        if (!(e.target as HTMLElement).matches(':focus-within')) {
            e.preventDefault();
        }
    };

    // `onChange` is raised before the selection changes, so the value is read once the combo has updated;
    // the search input of the combo emits its own change event that bubbles out of the combo, so only the
    // events of the combo itself change the selection
    const onChange = async (key: string, e: IgrComboChangeEventArgs) => {
        const combo = e.currentTarget as IgrCombo;

        if (e.composedPath()[0] !== combo) {
            return;
        }

        await combo.updateComplete;
        const value = combo.value as string[];
        setSelected((current) => ({ ...current, [key]: value }));
    };

    return (
        <div className="sample">
            <div className="sizes">
                <span className="type-label" />
                {sizes.map((size) => (
                    <span key={size.label} className="state-label state-column">{size.label}</span>
                ))}
                {types.map((type) => (
                    <Fragment key={type.label}>
                        <span className={`state-label type-label ${type.className}`}>{type.label}</span>
                        {sizes.map((size) => {
                            const key = `${type.label} ${size.label}`;

                            return (
                                <div key={size.label} className={`${size.className} ${type.className}`}>
                                    <IgrCombo
                                        outlined={type.outlined}
                                        placeholder="Country"
                                        placeholderSearch="Search"
                                        valueKey="id"
                                        displayKey="name"
                                        groupKey="region"
                                        ref={openDropdown}
                                        onClosing={keepOpenOnOutsideClick}
                                        onChange={(e) => onChange(key, e)}
                                        data={countries}
                                    />
                                    <div className="selection">
                                        <span className="selection-title">Selection</span>
                                        {selected[key]?.length ? (
                                            selected[key].map((id) => (
                                                <span key={id}>{countries.find((country) => country.id === id)!.name}</span>
                                            ))
                                        ) : (
                                            <span>No items selected</span>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSize/>);
