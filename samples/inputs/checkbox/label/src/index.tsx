import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CheckboxLabelStyles.css'
import { IgrCheckbox, IgrCheckboxModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCheckboxModule.register();

export default class CheckboxLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="wrapper">
                    <span id="checkbox-label">Label</span>
                    <IgrCheckbox ariaLabelledby="checkbox-label" labelPosition="before"></IgrCheckbox>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CheckboxLabel />, document.getElementById('root'));
