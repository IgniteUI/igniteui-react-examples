import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './InputSizeStyling.css';
import { IgrInput, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class InputSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { size: "medium" };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div id="radioGroup">
                    <IgrRadioGroup alignment="horizontal">
                        <IgrRadio name="size" value="small" labelPosition="after" checked={this.state.size === "small"} onChange={this.onRadioChange}><span>Small</span></IgrRadio>
                        <IgrRadio name="size" value="medium" labelPosition="after" checked={this.state.size === "medium"} onChange={this.onRadioChange}><span>Medium</span></IgrRadio>
                        <IgrRadio name="size" value="large" labelPosition="after" checked={this.state.size === "large"} onChange={this.onRadioChange}><span>Large</span></IgrRadio>
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
            this.setState({ size: e.detail.value });
        }
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<InputSize />);
