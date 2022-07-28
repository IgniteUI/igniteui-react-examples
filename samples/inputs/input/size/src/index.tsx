import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrInput, IgrInputModule, IgrRadio, IgrRadioModule, IgrRadioGroup, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrInputModule.register();
IgrRadioModule.register();

export default class InputSize extends React.Component<any, any> {

    public inputRequired: IgrInput;
    public inputDisabled: IgrInput;
    public inputReadonly: IgrInput;

    constructor(props: any) {
        super(props);  
        this.inputRequiredRef = this.inputRequiredRef.bind(this);
        this.inputDisabledRef = this.inputDisabledRef.bind(this);
        this.inputReadonlyRef = this.inputReadonlyRef.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrRadioGroup alignment="horizontal">
                    <IgrRadio name="size" value="small" labelPosition="after" change={this.onRadioChange}><span>Small</span></IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" checked="true" change={this.onRadioChange}><span>Medium</span></IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" change={this.onRadioChange}><span>Large</span></IgrRadio>
                </IgrRadioGroup>
                <IgrInput ref={this.inputRequiredRef} displayType="text" label="Required" value="This input is required" required="true">
                </IgrInput>
                <IgrInput ref={this.inputDisabledRef} displayType="text" label="Disabled" value="This input is disabled" disabled="true">
                </IgrInput>
                <IgrInput ref={this.inputReadonlyRef} displayType="text" label="Readonly" value="This input is readonly" readonly="true">
                </IgrInput>
            </div>
        );
    }

    public inputRequiredRef(input: IgrInput){
        if(!input) { return; }
        this.inputRequired = input;
    }
    public inputDisabledRef(input: IgrInput){
        if(!input) { return; }
        this.inputDisabled = input;
    }
    public inputReadonlyRef(input: IgrInput){
        if(!input) { return; }
        this.inputReadonly = input;
    }

    public onRadioChange(e: any) {
        this.inputRequired.size = e.value;
        this.inputDisabled.size = e.value;
        this.inputReadonly.size = e.value;
    }

}

// rendering above class to the React DOM
ReactDOM.render(<InputSize />, document.getElementById('root'));
