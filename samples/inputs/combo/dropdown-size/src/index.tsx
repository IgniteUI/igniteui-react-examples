import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrComboChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Option {
    id: number;
    name: string;
    group: string;
}

const options: Option[] = [1, 2, 3].map((id) => ({ id, name: `Item ${id}`, group: 'Header' }));

const sizes = [
    { label: 'Small', className: 'small' },
    { label: 'Medium', className: 'medium' },
    { label: 'Large', className: 'large' },
];

export default function ComboDropdownSize() {
    // the `id` values of the selected options, kept for each dropdown
    const [selected, setSelected] = useState<Record<string, number[]>>({});

    // the input fields are hidden, so the dropdowns stay open and each one works on its own
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

    // `onChange` is raised before the selection changes, so the value is read once the combo has updated;
    // the search input of the combo emits its own change event that bubbles out of the combo, so only the
    // events of the combo itself change the selection
    const onChange = async (size: string, e: IgrComboChangeEventArgs) => {
        const combo = e.currentTarget as IgrCombo;

        if (e.composedPath()[0] !== combo) {
            return;
        }

        await combo.updateComplete;
        const value = combo.value as number[];
        setSelected((current) => ({ ...current, [size]: value }));
    };

    return (
        <div className="sample">
            <div className="sizes">
                {sizes.map((size) => (
                    <div key={size.label} className="size">
                        <span className="state-label">{size.label}</span>
                        <IgrCombo
                            className={`dropdown ${size.className}`}
                            placeholderSearch="Search"
                            valueKey="id"
                            displayKey="name"
                            groupKey="group"
                            open={true}
                            onClosing={keepOpen}
                            onChange={(e) => onChange(size.label, e)}
                            data={options}
                        />
                        <div className="selection">
                            <span className="selection-title">Selection</span>
                            {selected[size.label]?.length ? (
                                selected[size.label].map((id) => (
                                    <span key={id}>{options.find((option) => option.id === id)!.name}</span>
                                ))
                            ) : (
                                <span className="selection-empty">No items selected</span>
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
root.render(<ComboDropdownSize/>);
