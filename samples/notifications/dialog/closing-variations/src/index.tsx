import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDialog, IgrSwitch } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class DialogClosingVariations extends React.Component<any, any> {

    public dialogRef: IgrDialog;

    constructor(props: any) {
        super(props);
        this.onDialogRef = this.onDialogRef.bind(this);
        this.onDialogShow = this.onDialogShow.bind(this);
        this.onDialogHide = this.onDialogHide.bind(this);
        this.onSwitchChangeEscape = this.onSwitchChangeEscape.bind(this);
        this.onSwitchChangeClick = this.onSwitchChangeClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrSwitch labelPosition="before" onChange={this.onSwitchChangeEscape}><span>keepOpenOnEscape</span></IgrSwitch>
                <IgrSwitch labelPosition="before" onChange={this.onSwitchChangeClick}><span>closeOnOutsideClick</span></IgrSwitch>

                <IgrButton variant="contained" onClick={this.onDialogShow}>
                    <span>Show Dialog</span>
                </IgrButton>

                <IgrDialog title="Confirmation" ref={this.onDialogRef}>
                    <p>Are you sure you want to delete the Annual_Report_2016.pdf and Annual_Report_2017.pdf files?</p>
                    <div slot="footer">
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>Cancel</span></IgrButton>
                        <IgrButton onClick={this.onDialogHide} variant="flat"><span>OK</span></IgrButton>
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

    public onDialogHide() {
        if(this.dialogRef){
            this.dialogRef.hide();
        }
    }

    public onSwitchChangeEscape(e: any) {
        this.dialogRef.keepOpenOnEscape = e.detail.checked;
    }

    public onSwitchChangeClick(e: any) {
        this.dialogRef.closeOnOutsideClick = e.detail.checked;
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DialogClosingVariations/>);
