import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCombo } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

interface Option {
    id: number;
    name: string;
    group: string;
}

const options: Option[] = [1, 2, 3].map((id) => ({ id, name: 'Item', group: 'Header' }));

const sizes = [
    { label: 'Small', className: 'small' },
    { label: 'Medium', className: 'medium' },
    { label: 'Large', className: 'large' },
];

export default function ComboSingleSelectDropdownSize() {
    // the display-only dropdowns stay open when the user clicks outside them
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

    return (
        <div className="sample">
            {/* the dropdowns are display-only, so inert blocks pointer and keyboard interaction */}
            <div className="sizes" inert>
                {sizes.map((size) => (
                    <div key={size.label} className="size">
                        <span className="state-label">{size.label}</span>
                        <IgrCombo
                            className={`dropdown ${size.className}`}
                            singleSelect
                            valueKey="id"
                            displayKey="name"
                            groupKey="group"
                            open={true}
                            onClosing={keepOpen}
                            data={options}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<ComboSingleSelectDropdownSize/>);
