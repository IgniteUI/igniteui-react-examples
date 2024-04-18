import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCheckbox, IgrCheckboxModule } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCheckboxModule.register();

export default class CheckboxChecked extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="sample">
                <IgrCheckbox checked="true">
                    <span key="checkboxLabel">Label</span>
                </IgrCheckbox>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CheckboxChecked/>);
