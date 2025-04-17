import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrSwitch, IgrSwitchModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrSwitchModule.register();

export default class SwitchLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrSwitch aria-labelledby="switchLabel" labelPosition="before" ><span id="switch-label">Label</span></IgrSwitch>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SwitchLabel/>);
