import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo, IgrIcon, registerIconFromText } from 'igniteui-react';
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

export default function ComboOverview() {
    useEffect(() => {
        registerIconFromText('place', placeIcon, 'material');
    }, []);

    return (
        <div className="sample">
            <IgrCombo
                className="locations"
                outlined={true}
                label="Locations"
                placeholder="Cities"
                placeholderSearch="Search cities"
                valueKey="id"
                displayKey="name"
                groupKey="country"
                open={true}
                data={cities}
            >
                <IgrIcon slot="prefix" name="place" collection="material" />
            </IgrCombo>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboOverview/>);
