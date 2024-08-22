import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrButtonGroupModule,
    IgrRipple,
    IgrRippleModule,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupAlignment.css';
import './index.css';

IgrButtonGroupModule.register();
IgrRippleModule.register();

export default function ButtonGroupAlignment() {
    return (
        <div className="container sample">
            <IgrButtonGroup alignment="vertical">
                <IgrToggleButton value="sofia" key="button-sofia">
                    <span key="text-sofia">Sofia</span>
                    <IgrRipple key="ripple-sofia" />
                </IgrToggleButton>
                <IgrToggleButton value="london" key="button-london">
                    <span key="text-london">London</span>
                    <IgrRipple key="ripple-london" />
                </IgrToggleButton>
                <IgrToggleButton value="new york" selected={true} key="button-new-york">
                    <span key="text-new-york">New York</span>
                    <IgrRipple key="ripple-new-york" />
                </IgrToggleButton>
                <IgrToggleButton value="tokyo" key="button-tokyo">
                    <span key="text-tokyo">Tokio</span>
                    <IgrRipple key="ripple-tokyo" />
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupAlignment/>);
