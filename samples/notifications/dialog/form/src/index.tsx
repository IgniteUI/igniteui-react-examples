import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog, IgrInput, IgrIcon,registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const usernameIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>';
const passwordIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0151 13.6556C14.8093 14.3587 16.9279 13.9853 18.3777 12.5355C20.3304 10.5829 20.3304 7.41709 18.3777 5.46447C16.4251 3.51184 13.2593 3.51184 11.3067 5.46447C9.85687 6.91426 9.48353 9.03288 10.1866 10.8271M12.9964 13.6742L6.82843 19.8422L4.2357 19.6065L4 17.0138L10.168 10.8458M15.5493 8.31568V8.29289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

const usernameIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z"/></svg>';
const passwordIconText = '<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.0151 13.6556C14.8093 14.3587 16.9279 13.9853 18.3777 12.5355C20.3304 10.5829 20.3304 7.41709 18.3777 5.46447C16.4251 3.51184 13.2593 3.51184 11.3067 5.46447C9.85687 6.91426 9.48353 9.03288 10.1866 10.8271M12.9964 13.6742L6.82843 19.8422L4.2357 19.6065L4 17.0138L10.168 10.8458M15.5493 8.31568V8.29289" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export default class DialogForm extends React.Component<any, any> {

    public dialogRef: IgrDialog;
    public passwordIcon: IgrIcon;
    public usernameIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.onDialogShow = this.onDialogShow.bind(this);
        registerIconFromText("username", usernameIconText, "material");
        registerIconFromText("password", passwordIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Login" ref={this.onDialogRef}>
                    <form>
                        <IgrInput label="Username">
                            <span slot="prefix">
                                <IgrIcon name="username" collection="material"/>
                            </span>
                        </IgrInput>
                        <br />
                        <IgrInput type="password" label="Password">
                            <span slot="prefix">
                                <IgrIcon name="password" collection="material"/>
                            </span>
                        </IgrInput>
                        <br />
                        <div style={{display: "flex", justifyContent: "flex-end"}}>
                            <IgrButton type="reset" variant="flat"><span>Reset</span></IgrButton>
                            <IgrButton type="submit" variant="flat"><span>Submit</span></IgrButton>
                        </div>
                    </form>


                    <div slot="footer">
                        <IgrButton><span>Create an account</span></IgrButton>
                    </div>
                </IgrDialog>
            </div>
        );
    }

    public onDialogRef(dialog: IgrDialog){
        if (!dialog) { return; }
        this.dialogRef = dialog;
    }

    public onDialogShow() {
        if(this.dialogRef){
            this.dialogRef.show();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogForm/>);
