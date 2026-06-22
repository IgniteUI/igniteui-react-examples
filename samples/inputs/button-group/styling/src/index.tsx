import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrRipple,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupStyling.css';
import './index.css';

export default function ButtonGroupStyling() {
    return (
        <div className="container sample">
            <IgrButtonGroup alignment="vertical">
                <IgrToggleButton value="sofia">
                    Sofia
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="london">
                    London
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="new york">
                    New York
                    <IgrRipple/>
                </IgrToggleButton>
                <IgrToggleButton value="tokyo" disabled={true}>
                    Tokyo
                    <IgrRipple/>
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupStyling/>);
