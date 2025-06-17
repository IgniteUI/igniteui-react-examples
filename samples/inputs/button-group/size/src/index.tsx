import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrComponentValueChangedEventArgs,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

export default function ButtonGroupSize() {
    const [style, setStyle] = useState({ '--ig-size': 'var(--ig-size-large)' } as React.CSSProperties)

    function onSelect(args: IgrComponentValueChangedEventArgs) {
        setStyle({
            '--ig-size': `var(--ig-size-${args.detail})`
        } as React.CSSProperties)
    }

    return (
        <div className="container sample">
            <IgrButtonGroup onSelect={onSelect} style={style}>
                <IgrToggleButton value="small">
                    <span>Small</span>
                </IgrToggleButton>
                <IgrToggleButton value="medium">
                    <span>Medium</span>
                </IgrToggleButton>
                <IgrToggleButton value="large">
                    <span>Large</span>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize/>);
