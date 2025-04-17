import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './InputSizeStyling.css';
import { IgrInput, IgrInputModule, IgrRadio, IgrRadioModule, IgrRadioGroup, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrInputModule.register();
IgrRadioModule.register();

export default class InputSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);  
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { size: "medium"};        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div id="radioGroup">
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="size" value="small" labelPosition="after" onChange={this.onRadioChange}><span>Small</span></IgrRadio>
                        <IgrRadio name="size" value="medium" labelPosition="after" checked={true} onChange={this.onRadioChange}><span>Medium</span></IgrRadio>
                        <IgrRadio name="size" value="large" labelPosition="after" onChange={this.onRadioChange}><span>Large</span></IgrRadio>
                    </IgrRadioGroup>
                </div>
                <IgrInput className={'size-' + this.state.size} type="text" label="Required" value="This input is required" required={true} />                
                <IgrInput className={'size-' + this.state.size} type="text" label="Disabled" value="This input is disabled" disabled={true} />                
                <IgrInput className={'size-' + this.state.size} type="text" label="Readonly" value="This input is readonly" readOnly={true} />                
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.detail.checked == true) {
            this.setState({ calendarSize: e.value });
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputSize/>);
