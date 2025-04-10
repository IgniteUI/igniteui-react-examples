import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrSnackbar, IgrButtonModule, IgrSnackbarModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();
IgrSnackbarModule.register();

export default class SnackbarOverview extends React.Component<any, any> {

    public snackbarRef: IgrSnackbar;

    constructor(props: any) {
        super(props);
        this.onShowButtonClicked = this.onShowButtonClicked.bind(this);
        this.onSnackbarRef = this.onSnackbarRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="contained" onClick={this.onShowButtonClicked}>
                    <span>Show Snackbar</span>
                </IgrButton>

                <IgrSnackbar ref={this.onSnackbarRef}>
                    <span>Snackbar Message</span>
                </IgrSnackbar>
            </div>
        );
    }

    public onSnackbarRef(snackbar: IgrSnackbar){
        if (!snackbar) { return; }
        this.snackbarRef = snackbar;
    }

    public onShowButtonClicked() {
        if(this.snackbarRef){
            this.snackbarRef.show();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnackbarOverview/>);
