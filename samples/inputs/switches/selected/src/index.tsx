import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

export default function SwitchSelected() {

    return (
        <div className="container sample">
            <div className="states">
                <span className="states__row">On</span>
                <IgrSwitch labelPosition="before" checked={true}>
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" checked={true} disabled={true}>
                    <span>Power</span>
                </IgrSwitch>

                <span className="states__row">Off</span>
                <IgrSwitch labelPosition="before">
                    <span>Power</span>
                </IgrSwitch>
                <IgrSwitch labelPosition="before" disabled={true}>
                    <span>Power</span>
                </IgrSwitch>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchSelected/>);
