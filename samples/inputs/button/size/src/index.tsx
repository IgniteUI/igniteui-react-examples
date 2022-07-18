import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './ButtonSizingStyle.css';
import { IgrButton, IgrRadio, IgrRadioGroup, IgrButtonModule, IgrRadioModule, IgrRadioGroupModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();

export default class ButtonSize extends React.Component<any, any> {

    public outlinedButton: IgrButton;
    public flatButton: IgrButton;
    public containedButton: IgrButton;
    public fabButton: IgrButton;

    constructor(props: any) {
        super(props); 
        this.flatButtonRef = this.flatButtonRef.bind(this);
        this.containedButtonRef = this.containedButtonRef.bind(this);
        this.outlinedButtonRef = this.outlinedButtonRef.bind(this);
        this.fabButtonRef = this.fabButtonRef.bind(this);        
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{display: 'flex', margin: '0 auto', width: '15%'}}>
                    <IgrRadio name="size" value="small" labelPosition="after" checked={true} change={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" change={this.onRadioChange}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" change={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>

                <div className="button-container">
                    <IgrButton ref={this.flatButtonRef}  className="flat-btn" variant="flat"><span>Flat</span></IgrButton>
                    <IgrButton ref={this.containedButtonRef}  className="contained-btn" variant="contained"><span>Contained</span></IgrButton>
                    <IgrButton ref={this.outlinedButtonRef}  className="outlined-btn" variant="outlined"><span>Outlined</span></IgrButton>
                    <IgrButton ref={this.fabButtonRef}  className="fab-btn" variant="fab"><span>Like</span></IgrButton>
                </div>
            </div>
        );
    }

    public flatButtonRef(flatButton: IgrButton){
        this.flatButton = flatButton;
    }
    public containedButtonRef(containedButton: IgrButton){
        this.containedButton = containedButton;
    }
    public outlinedButtonRef(outlinedButton: IgrButton){
        this.outlinedButton = outlinedButton;
    }

    public fabButtonRef(fabButton: IgrButton){
        this.fabButton = fabButton;
    }

    public onRadioChange(e: any) {
        this.flatButton.size = e.value;
        this.containedButton.size = e.value;
        this.outlinedButton.size = e.value;
        this.fabButton.size = e.value;
    }
}


// rendering above class to the React DOM
ReactDOM.render(<ButtonSize />, document.getElementById('root'));
