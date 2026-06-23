import React from 'react';
import ReactDOM from 'react-dom/client';
import './ButtonSizingStyle.css';
import { IgrButton, IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class ButtonSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { size: "medium"};     
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{display: 'flex', justifyContent: 'center'}}>
                    <IgrRadio name="size" value="small" labelPosition="after" onChange={this.onRadioChange}>
                        Small
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" onChange={this.onRadioChange} checked={this.state.size === "medium"}>
                        Medium
                    </IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" onChange={this.onRadioChange}>
                        Large
                    </IgrRadio>
                </IgrRadioGroup>

                <div className="button-container">
                    <IgrButton className={'size-' + this.state.size} variant="flat">Flat</IgrButton>
                    <IgrButton className={'size-' + this.state.size} variant="contained">Contained</IgrButton>
                    <IgrButton className={'size-' + this.state.size} variant="outlined">Outlined</IgrButton>
                    <IgrButton className={'size-' + this.state.size} variant="fab">Like</IgrButton>
                </div>
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
root.render(<ButtonSize/>);
