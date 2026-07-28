import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButton, IgrButtonGroup, IgrRipple } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

export default function ButtonGroupLayout() {
  return (
    <article className="sample-column">
      <IgrButtonGroup>
        <IgrButton>
          Left
          <IgrRipple />
        </IgrButton>
        <IgrButton>
          Center
          <IgrRipple />
        </IgrButton>
        <IgrButton>
          Right
          <IgrRipple />
        </IgrButton>
        <IgrButton selected={true}>
          Justify
          <IgrRipple />
        </IgrButton>
      </IgrButtonGroup>
    </article>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupLayout />);
