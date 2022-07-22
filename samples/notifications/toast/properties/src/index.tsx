import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrButton, IgrToast, IgrButtonModule, IgrToastModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
IgrToastModule.register();

export default class ToastProperties extends React.Component<any, any> {

    public toastRef: IgrToast;

    constructor(props: any) {
        super(props);
        this.onToggleButtonClicked = this.onToggleButtonClicked.bind(this);
        this.onKeepOpenButtonClicked = this.onKeepOpenButtonClicked.bind(this);
        this.onDisplayTimeButtonClicked = this.onDisplayTimeButtonClicked.bind(this);
        this.onToastRef = this.onToastRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                    <IgrButton variant="contained" clicked={this.onToggleButtonClicked}>
                        <span>Toggle Toast</span>
                    </IgrButton>
                    <IgrButton variant="contained" clicked={this.onKeepOpenButtonClicked}>
                        <span>Toggle keepOpen Property</span>
                    </IgrButton>
                    <IgrButton variant="contained" clicked={this.onDisplayTimeButtonClicked}>
                        <span>Set DisplayTime to 8000</span>
                    </IgrButton>
                </div>

                <IgrToast ref={this.onToastRef}>
                    <span>Toast Message</span>
                </IgrToast>
            </div>
        );
    }

    public onToastRef(toast: IgrToast){
        if (!toast) { return; }
        this.toastRef = toast;
    }

    public onToggleButtonClicked() {
        if(this.toastRef){
            this.toastRef.toggle();
        }
    }

    public onKeepOpenButtonClicked() {
        if(this.toastRef){
            this.toastRef.keepOpen = !this.toastRef.keepOpen;
        }
    }

    public onDisplayTimeButtonClicked() {
        if(this.toastRef){
            this.toastRef.displayTime = 8000;
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ToastProperties/>, document.getElementById("root"));
