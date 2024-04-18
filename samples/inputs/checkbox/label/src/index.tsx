import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CheckboxLabelStyles.css'
import { IgrCheckbox, IgrCheckboxModule } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCheckboxModule.register();

export default class CheckboxLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <div className="wrapper">
                    <span id="checkbox-label">Label</span>
                    <IgrCheckbox aria-labelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxLabel/>);
