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

export default function ComboStyling() {
    return (
        <div className="sample">
            <IgrCombo
                className="styled-combo"
                outlined={true}
                placeholder="Country"
                placeholderSearch="Search"
                valueKey="id"
                displayKey="name"
                groupKey="region"
                open={true}
                data={countries}
                value={['BY']}
            />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboStyling/>);
