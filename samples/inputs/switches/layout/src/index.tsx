import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

export default function SwitchLayout() {

    return (
        <div className="container sample">
            <div className="variants">
                <div className="variants__item">
                    <span className="variants__label">Label Before</span>
                    <IgrSwitch labelPosition="before" checked={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
                <div className="variants__item">
                    <span className="variants__label">Label After</span>
                    <IgrSwitch labelPosition="after" checked={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchLayout/>);
