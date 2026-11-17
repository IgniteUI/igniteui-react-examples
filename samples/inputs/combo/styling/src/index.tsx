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

export default function ComboStyling() {
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
        <div className="sample">
            <div>
                <IgrCombo
                    className="styled-combo"
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
                />
                <div className="selection">
                    <span className="selection-title">Selection</span>
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
root.render(<ComboStyling/>);
