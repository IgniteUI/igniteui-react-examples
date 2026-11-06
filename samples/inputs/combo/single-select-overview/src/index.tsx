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
    { id: 'HR', name: 'Croatia', region: 'Europe' },
    { id: 'CZ', name: 'Czechia', region: 'Europe' },
    { id: 'DK', name: 'Denmark', region: 'Europe' },
];

export default function ComboSingleSelectOverview() {
    return (
        <div className="sample">
            <IgrCombo
                className="country"
                singleSelect
                outlined={true}
                label="Country"
                placeholder="Select a country"
                valueKey="id"
                displayKey="name"
                groupKey="region"
                open={true}
                data={countries}
            />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectOverview/>);
