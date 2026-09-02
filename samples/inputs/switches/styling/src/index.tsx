import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

export default function SwitchStyling() {

    return (
        <div className="container sample">
            <div className="security">
                <div className="security__header">
                    <IgrSwitch labelPosition="before" checked={true}>
                        <span className="option">
                            <span className="option__label">Two-factor authentication</span>
                            <span className="option__hint">Extra sign-in verification</span>
                        </span>
                    </IgrSwitch>
                </div>
                <div className="security__body">
                    <IgrRadioGroup alignment="vertical">
                        <IgrRadio name="method" value="app" checked={true}>Authenticator app</IgrRadio>
                        <IgrRadio name="method" value="key">Security key</IgrRadio>
                        <IgrRadio name="method" value="codes">Backup codes</IgrRadio>
                    </IgrRadioGroup>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchStyling/>);
