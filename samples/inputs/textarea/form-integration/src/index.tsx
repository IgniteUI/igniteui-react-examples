import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea, IgrTextareaModule, IgrButton, IgrButtonModule, IgrToast, IgrToastModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrTextareaModule.register();
IgrButtonModule.register();
IgrToastModule.register();

export default class TextAreaFormIntegration extends React.Component<any, any> {

    public toastRef: IgrToast;

    constructor(props: any) {
        super(props);     
        this.onSubmitButtonClicked = this.onSubmitButtonClicked.bind(this);
        this.onToastRef = this.onToastRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="sample">               
                <form id="form" onSubmit={this.onSubmitButtonClicked}>
                <IgrTextarea rows="3"  name="user_feedback" label="Your review" required>
                </IgrTextarea>                
                <div className="controls">
                    <IgrButton type="submit"><span>Submit review</span></IgrButton>
                    <IgrButton type="reset" variant="outlined"><span>Reset</span></IgrButton>                    
                </div>
                <IgrToast id="submitted" position="top" display-time="1e3" ref={this.onToastRef}><span>Your review was submitted</span></IgrToast>
                </form>
            </div>            
        );
    }

    public onToastRef(toast: IgrToast){
        if (!toast) { return; }
        this.toastRef = toast;
    }

    public onSubmitButtonClicked(e:React.FormEvent<HTMLFormElement>) {
        if(this.toastRef){
            e.preventDefault();
            this.toastRef.show();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaFormIntegration/>);
