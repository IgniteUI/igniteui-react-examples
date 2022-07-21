import React from 'react';
import ReactDOM from 'react-dom';
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
            <div className="container sample">
                <div style={{display: "flex", alignItems: "center"}}>
                    <span id="switch-label">Label</span>
                    <IgrSwitch ariaLabelledby="switchLabel" labelPosition="Before" />
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SwitchLabel />, document.getElementById('root'));
