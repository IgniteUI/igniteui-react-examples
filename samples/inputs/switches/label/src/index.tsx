import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './SwitchLabelStyles.css';
import { IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SwitchLabel() {

    return (
        <div className="sample">
            <div className="wrapper">
                <IgrSwitch aria-labelledby="switchLabel" labelPosition="before"><span id="switch-label">Label</span></IgrSwitch>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchLabel/>);
