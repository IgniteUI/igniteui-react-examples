import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  IgrButtonGroup,
  IgrIcon,
  IgrToggleButton,
  registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

const icons = [
  ['border_top', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3h18v2H3V3zm0 4h2v14H3V7zm4 0h2v14H7V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7zm4 0h2v14h-2V7z"/></svg>'],
  ['border_right', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 3h2v18h-2V3zM3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zM3 7h2v2H3V7zm4 0h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM3 11h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 15h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM3 19h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>'],
  ['border_bottom', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 19h18v2H3v-2zM3 3h2v14H3V3zm4 0h2v14H7V3zm4 0h2v14h-2V3zm4 0h2v14h-2V3zm4 0h2v14h-2V3z"/></svg>'],
  ['border_left', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 3h2v18H3V3zM7 3h2v2H7V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zm4 0h2v2h-2V3zM7 7h2v2H7V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zm4 0h2v2h-2V7zM7 11h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 15h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 19h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2z"/></svg>'],
];

icons.forEach(([name, text]) => registerIconFromText(name, text, 'material'));

export default function ButtonGroupCustomToggle() {
  return (
    <div className="container sample">
      <IgrButtonGroup selectionMode="multi">
        <IgrToggleButton selected={true}><IgrIcon name="border_top" collection="material" /></IgrToggleButton>
        <IgrToggleButton><IgrIcon name="border_right" collection="material" /></IgrToggleButton>
        <IgrToggleButton><IgrIcon name="border_bottom" collection="material" /></IgrToggleButton>
        <IgrToggleButton><IgrIcon name="border_left" collection="material" /></IgrToggleButton>
      </IgrButtonGroup>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupCustomToggle />);
