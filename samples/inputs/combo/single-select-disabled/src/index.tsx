import { Fragment } from 'react';
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

const rows = [
    { label: 'Idle', outlined: true, className: 'border-type', value: [] as string[] },
    { label: 'Filled', outlined: true, className: 'border-type', value: ['BY'] },
    { label: 'Idle', outlined: false, className: 'box-type group-start', value: [] as string[] },
    { label: 'Filled', outlined: false, className: 'box-type', value: ['BY'] },
];

export default function ComboSingleSelectDisabled() {
    const combo = (outlined: boolean, value: string[], disabled: boolean) => (
        <IgrCombo
            singleSelect
            outlined={outlined}
            disabled={disabled}
            placeholder="Country"
            valueKey="id"
            displayKey="name"
            groupKey="region"
            data={countries}
            value={value}
        />
    );

    return (
        <div className="sample">
            <div className="states">
                <span />
                <span className="state-label state-column">Enabled</span>
                <span className="state-label state-column">Disabled</span>
                {rows.map((row, index) => (
                    <Fragment key={index}>
                        <span className={`state-label ${row.className}`}>{row.label}</span>
                        <div className={row.className}>{combo(row.outlined, row.value, false)}</div>
                        <div className={row.className}>{combo(row.outlined, row.value, true)}</div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectDisabled/>);
