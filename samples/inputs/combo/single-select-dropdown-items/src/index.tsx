import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Option {
    id: number;
    name: string;
    group?: string;
}

interface ItemRow {
    label: string;
    className: string;
    groupKey?: string;
    data: Option[];
}

const sizes = [
    { label: 'Small', className: 'small' },
    { label: 'Medium', className: 'medium' },
    { label: 'Large', className: 'large' },
];

// the header row hides its option, so only the group header shows
const rows: ItemRow[] = [
    { label: 'Header', className: 'header-only', groupKey: 'group', data: [{ id: 1, name: 'Item', group: 'Header' }] },
    { label: 'Item', className: 'item-only', data: [{ id: 1, name: 'Item' }] },
];

export default function ComboSingleSelectDropdownItems() {
    // the input fields are hidden, so the dropdowns stay open and each one works on its own
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

    return (
        <div className="sample">
            <div className="items">
                <span />
                {sizes.map((size) => (
                    <span key={size.label} className="state-label state-column">{size.label}</span>
                ))}
                {rows.map((row) => (
                    <Fragment key={row.label}>
                        <span className="state-label">{row.label}</span>
                        {sizes.map((size) => (
                            <IgrCombo
                                key={size.label}
                                className={`dropdown ${row.className} ${size.className}`}
                                singleSelect
                                valueKey="id"
                                displayKey="name"
                                groupKey={row.groupKey}
                                open={true}
                                onClosing={keepOpen}
                                data={row.data}
                            />
                        ))}
                    </Fragment>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectDropdownItems/>);
