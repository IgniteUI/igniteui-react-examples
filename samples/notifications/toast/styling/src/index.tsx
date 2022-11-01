import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './ToastStyling.css';
import { IgrButton, IgrToast, IgrButtonModule, IgrToastModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
IgrToastModule.register();

export default class ToastStyling extends React.Component<any, any> {

    public toastRef: IgrToast;

    constructor(props: any) {
        super(props);
        this.onShowButtonClicked = this.onShowButtonClicked.bind(this);
        this.onToastRef = this.onToastRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained" clicked={this.onShowButtonClicked}>
                    <span>Show Styled Toast</span>
                </IgrButton>

                <IgrToast ref={this.onToastRef}>
                    <span>Styled Message</span>
                </IgrToast>
            </div>
        );
    }

    public onToastRef(toast: IgrToast){
        if (!toast) { return; }
        this.toastRef = toast;
    }

    public onShowButtonClicked() {
        if(this.toastRef){
            this.toastRef.show();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastStyling/>);
