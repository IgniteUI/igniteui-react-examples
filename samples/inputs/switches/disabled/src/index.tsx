import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchDisabled() {

    return (
        <div className="container sample">
            <div className="states">
                <div className="states__variant">
                    <span className="states__label">Disabled Checked</span>
                    <IgrSwitch labelPosition="before" disabled={true} checked={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
                <div className="states__variant">
                    <span className="states__label">Disabled Unchecked</span>
                    <IgrSwitch labelPosition="before" disabled={true}>
                        <span>Power</span>
                    </IgrSwitch>
                </div>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchDisabled/>);
