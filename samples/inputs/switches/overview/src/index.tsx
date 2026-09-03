import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

export default function SwitchOverview() {

    return (
        <div className="container sample">
            <div className="notifications">
                <h6 className="notifications__title">Notifications</h6>
                <div className="notifications__row">
                    <IgrSwitch labelPosition="before" checked={true}>
                        <span className="option">
                            <span className="option__label">Push notifications</span>
                            <span className="option__hint">Deliver alerts to this device</span>
                        </span>
                    </IgrSwitch>
                </div>
                <div className="notifications__row">
                    <IgrSwitch labelPosition="before">
                        <span className="option">
                            <span className="option__label">Weekly digest</span>
                            <span className="option__hint">Summary email every Monday</span>
                        </span>
                    </IgrSwitch>
                </div>
                <div className="notifications__row">
                    <IgrSwitch labelPosition="before" disabled={true}>
                        <span className="option">
                            <span className="option__label">SMS alerts</span>
                            <span className="option__hint">Unavailable on your plan</span>
                        </span>
                    </IgrSwitch>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchOverview/>);
