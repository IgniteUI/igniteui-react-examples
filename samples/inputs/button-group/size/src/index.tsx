import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrButtonGroupModule,
    IgrComponentValueChangedEventArgs,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

IgrButtonGroupModule.register();

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
                <IgrToggleButton value="small" key="button-small">
                    <span key="text-small">Small</span>
                </IgrToggleButton>
                <IgrToggleButton value="medium" key="button-medium">
                    <span key="text-medium">Medium</span>
                </IgrToggleButton>
                <IgrToggleButton value="large" selected={true} key="button-large">
                    <span key="text-large">Large</span>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSize/>);
