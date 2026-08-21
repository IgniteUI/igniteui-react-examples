import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

const variants: any[] = ['contained', 'outlined', 'flat', 'fab'];

export default function ButtonLayout() {
    const [variant, setVariant] = useState('contained');

    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                <label className="variant-selector">
                    <span className="button-label">Button variant</span>
                    <select value={variant} onChange={(event) => setVariant(event.target.value)}>
                        {variants.map((option) => (
                            <option value={option} key={option}>
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </option>
                        ))}
                    </select>
                </label>
                <div className="button-group">
                    <span className="button-label">{variant.charAt(0).toUpperCase() + variant.slice(1)}</span>
                    <div className="button-row">
                        <div className="button-item">
                            <span className="button-sublabel">Left</span>
                            <IgrButton variant={variant}>
                                <IgrIcon slot="prefix" name="add" collection="material" />
                                Add
                            </IgrButton>
                        </div>
                        <div className="button-item">
                            <span className="button-sublabel">Right</span>
                            <IgrButton variant={variant}>
                                Add
                                <IgrIcon slot="suffix" name="add" collection="material" />
                            </IgrButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonLayout />);
