import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrIcon, IgrComboChangeEventArgs, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const placeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>';

interface City {
    id: string;
    name: string;
    country: string;
}

const cities: City[] = [
    { id: 'BG01', name: 'Sofia', country: 'Country of Bulgaria' },
    { id: 'BG02', name: 'Plovdiv', country: 'Country of Bulgaria' },
    { id: 'BG03', name: 'Varna', country: 'Country of Bulgaria' },
    { id: 'BG04', name: 'Burgas', country: 'Country of Bulgaria' },
    { id: 'BG05', name: 'Pleven', country: 'Country of Bulgaria' },
];

// the dropdown is opened once, when the combo is created; as a prop, `open` is applied again on each render,
// which opens a dropdown that the user has closed
const openDropdown = (combo: IgrCombo | null) => {
    if (combo) {
        combo.open = true;
    }
};

export default function ComboOverview() {
    // the `id` values of the selected cities
    const [selected, setSelected] = useState<string[]>([]);

    useEffect(() => {
        registerIconFromText('place', placeIcon, 'material');
    }, []);

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
            <div className="locations">
                <IgrCombo
                    outlined={true}
                    label="Locations"
                    placeholder="Cities"
                    placeholderSearch="Search cities"
                    valueKey="id"
                    displayKey="name"
                    groupKey="country"
                    ref={openDropdown}
                    data={cities}
                    onChange={onChange}
                >
                    <IgrIcon slot="prefix" name="place" collection="material" />
                </IgrCombo>
                <div className="selection">
                    <span className="selection-title">Selection</span>
                    {selected.length ? (
                        selected.map((id) => <span key={id}>{cities.find((city) => city.id === id)!.name}</span>)
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
root.render(<ComboOverview/>);
