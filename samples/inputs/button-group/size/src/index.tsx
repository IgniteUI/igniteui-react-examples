import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupSize.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const sizes = ['small', 'medium', 'large'];

export default function ButtonGroupSize(): JSX.Element {
    return (
        <div className="button-group-size">
            {sizes.map((size) => (
                <div className="button-group-size-item" key={size}>
                    <span>{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    <IgrButtonGroup
                        style={{ '--ig-size': `var(--ig-size-${size})` } as React.CSSProperties}
                    >
                        {cities.map((city) => (
                            <IgrToggleButton
                                key={city}
                                value={city.toLowerCase()}
                                selected={city === 'New York'}
                            >
                                {city}
                                <IgrRipple />
                            </IgrToggleButton>
                        ))}
                    </IgrButtonGroup>
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize />);
