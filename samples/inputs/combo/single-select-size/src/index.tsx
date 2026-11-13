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

const sizes = [
    { label: 'Small', className: 'small' },
    { label: 'Medium', className: 'medium' },
    { label: 'Large', className: 'large' },
];

const types = [
    { label: 'Border Type', outlined: true, className: 'border-type' },
    { label: 'Box Type', outlined: false, className: 'box-type' },
];

export default function ComboSingleSelectSize() {
    // a click outside a combo moves the focus out of it, and then its dropdown stays open, so each combo opens and closes on its own
    const keepOpenOnOutsideClick = (e: CustomEvent<void>) => {
        if (!(e.target as HTMLElement).matches(':focus-within')) {
            e.preventDefault();
        }
    };

    return (
        <div className="sample">
            <div className="sizes">
                <span className="type-label" />
                {sizes.map((size) => (
                    <span key={size.label} className="state-label state-column">{size.label}</span>
                ))}
                {types.map((type) => (
                    <Fragment key={type.label}>
                        <span className={`state-label type-label ${type.className}`}>{type.label}</span>
                        {sizes.map((size) => (
                            <IgrCombo
                                key={size.label}
                                className={`${size.className} ${type.className}`}
                                singleSelect
                                outlined={type.outlined}
                                placeholder="Country"
                                valueKey="id"
                                displayKey="name"
                                groupKey="region"
                                open={true}
                                onClosing={keepOpenOnOutsideClick}
                                data={countries}
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
root.render(<ComboSingleSelectSize/>);
