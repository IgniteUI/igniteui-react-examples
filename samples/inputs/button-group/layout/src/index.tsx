import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButtonGroup, IgrIcon, IgrRipple, IgrToggleButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './index.css';

const alignLeftIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>';
const alignCenterIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>';
const alignRightIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>';

const layouts = [
    { value: 'left', label: 'Left', icon: 'align-left' },
    { value: 'center', label: 'Center', icon: 'align-center' },
    { value: 'right', label: 'Right', icon: 'align-right' }
];

export default function ButtonGroupLayout(): JSX.Element {
    useEffect(() => {
        registerIconFromText('align-left', alignLeftIcon, 'material');
        registerIconFromText('align-center', alignCenterIcon, 'material');
        registerIconFromText('align-right', alignRightIcon, 'material');
    }, []);

    return (
        <div className="sample-layout">
            <IgrButtonGroup>
                {layouts.map((layout) => (
                    <IgrToggleButton key={layout.value} value={layout.value}>
                        {layout.label}
                        <IgrRipple />
                    </IgrToggleButton>
                ))}
            </IgrButtonGroup>
            <IgrButtonGroup>
                {layouts.map((layout) => (
                    <IgrToggleButton key={layout.value} value={layout.value}>
                        <IgrIcon name={layout.icon} collection="material" />
                        <IgrRipple />
                    </IgrToggleButton>
                ))}
            </IgrButtonGroup>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupLayout />);
