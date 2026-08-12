import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupAlignment.css';
import './index.css';

const cities = ['Sofia', 'London', 'New York'];

const alignments: Array<'horizontal' | 'vertical'> = ['horizontal', 'vertical'];

export default function ButtonGroupAlignment(): JSX.Element {
    return (
        <div className="button-group-alignment">
            {alignments.map((alignment) => (
                <div className="button-group-alignment-item" key={alignment}>
                    <span>{alignment.charAt(0).toUpperCase() + alignment.slice(1)}</span>
                    <IgrButtonGroup alignment={alignment}>
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
                </div>
            ))}
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupAlignment />);
