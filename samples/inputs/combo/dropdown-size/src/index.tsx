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

export default function ComboDropdownSize() {
    // the input fields are hidden, so the dropdowns stay open and each one works on its own
    const keepOpen = (e: CustomEvent<void>) => e.preventDefault();

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
root.render(<ComboDropdownSize/>);
