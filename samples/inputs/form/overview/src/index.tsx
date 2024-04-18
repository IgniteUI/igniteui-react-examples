import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrForm, IgrFormModule, IgrCheckbox, IgrCheckboxModule, IgrInput, IgrInputModule, IgrButton, IgrButtonModule } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrFormModule.register();
IgrInputModule.register();
IgrCheckboxModule.register();
IgrButtonModule.register();

export default class FormOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrForm className="form">
                    <div>Subscribe</div>

                    <IgrInput required="true" name="name" type="text" label="Your Name"></IgrInput>
                    <IgrInput required="true" name="email" type="email" label="Your E-mail"></IgrInput>
                    <IgrCheckbox name="agreement"><span>I accept the license agreement</span></IgrCheckbox>
                    <br />
                    <IgrButton type="reset"><span>Reset</span></IgrButton>
                    <IgrButton type="submit"><span>Submit</span></IgrButton>
                </IgrForm>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<FormOverview/>);
