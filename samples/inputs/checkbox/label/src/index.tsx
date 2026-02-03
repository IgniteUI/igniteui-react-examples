import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './CheckboxLabelStyles.css'
import { IgrCheckbox } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CheckboxLabel extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox labelPosition="before">Label</IgrCheckbox>
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
