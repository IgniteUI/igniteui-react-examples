import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch, IgrRadio, IgrRadioGroup, IgrExpansionPanel } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

export default function SwitchStyling() {
    const [open, setOpen] = useState(true);

    return (
        <div className="container sample">
            {/* a click on the switch bubbles up to the panel header, so only the open state has to be mirrored back */}
            <IgrExpansionPanel
                className="security"
                indicatorPosition="end"
                open={open}
                onOpened={() => setOpen(true)}
                onClosed={() => setOpen(false)}>
                <div slot="title" className="option">
                    <span className="option__label">Two-factor authentication</span>
                    <span className="option__hint">Extra sign-in verification</span>
                </div>
                <IgrSwitch slot="indicator" checked={open}></IgrSwitch>
                <IgrRadioGroup alignment="vertical">
                    <IgrRadio name="method" value="app" checked={true}>Authenticator app</IgrRadio>
                    <IgrRadio name="method" value="key">Security key</IgrRadio>
                    <IgrRadio name="method" value="codes">Backup codes</IgrRadio>
                </IgrRadioGroup>
            </IgrExpansionPanel>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchStyling/>);
