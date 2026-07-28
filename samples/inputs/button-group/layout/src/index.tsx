import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrRipple, IgrToggleButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

export default function ButtonGroupLayout() {
  return (
    <div className="container sample">
      <IgrButtonGroup>
        <IgrToggleButton>
          Left
          <IgrRipple />
        </IgrToggleButton>
        <IgrToggleButton>
          Center
          <IgrRipple />
        </IgrToggleButton>
        <IgrToggleButton>
          Right
          <IgrRipple />
        </IgrToggleButton>
        <IgrToggleButton selected={true}>
          Justify
          <IgrRipple />
        </IgrToggleButton>
      </IgrButtonGroup>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupLayout />);
