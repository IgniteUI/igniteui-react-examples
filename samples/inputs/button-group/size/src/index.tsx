import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const sizes = ['small', 'medium', 'large'];

export default function ButtonGroupSize(): JSX.Element {
    return (
        <article className="button-group-size">
            {sizes.map((size) => (
                <React.Fragment key={size}>
                    <span className="sample-label">{size.charAt(0).toUpperCase() + size.slice(1)}</span>
                    <IgrButtonGroup>
                        {cities.map((city) => (
                            <IgrToggleButton
                                key={city}
                                value={city.toLowerCase()}
                            >
                                {city}
                                <IgrRipple />
                            </IgrToggleButton>
                        ))}
                    </IgrButtonGroup>
                </React.Fragment>
            ))}
        </article>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize />);
