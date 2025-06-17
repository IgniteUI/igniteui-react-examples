import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupAlignment.css';
import './index.css';


export default function ButtonGroupAlignment() {
    return (
        <div className="container sample">
            <IgrButtonGroup alignment="vertical">
                <IgrToggleButton value="sofia">
                    <span>Sofia</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="london">
                    <span>London</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="new york" selected={true}>
                    <span>New York</span>
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="tokyo" >
                    <span >Tokio</span>
                    <IgrRipple />
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupAlignment/>);
