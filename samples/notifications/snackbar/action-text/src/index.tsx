import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrButton, IgrSnackbar, IgrButtonModule, IgrSnackbarModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
IgrSnackbarModule.register();

export default class SnackbarActionText extends React.Component<any, any> {

    public snackbarRef: IgrSnackbar;

    constructor(props: any) {
        super(props);                
        this.onShowButtonClicked = this.onShowButtonClicked.bind(this);
        this.onSnackbarRef = this.onSnackbarRef.bind(this);
        this.onSnackbarActionClicked = this.onSnackbarActionClicked.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained" clicked={this.onShowButtonClicked}>
                    <span>Show Snackbar</span>
                </IgrButton>

                <IgrSnackbar ref={this.onSnackbarRef} keepOpen={true} actionText="Close" action={this.onSnackbarActionClicked}>
                    <span>Snackbar with enabled keep-open option</span>
                </IgrSnackbar>
            </div>
        );
    }

    public onSnackbarRef(snackbar: IgrSnackbar){
        if (!snackbar) { return; }
        this.snackbarRef = snackbar;
    }

    public onSnackbarActionClicked() {
        if (this.snackbarRef) {
            this.snackbarRef.hide();
        }
    }

    public onShowButtonClicked() {
        if(this.snackbarRef){
            this.snackbarRef.show();
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<SnackbarActionText/>, document.getElementById("root"));
