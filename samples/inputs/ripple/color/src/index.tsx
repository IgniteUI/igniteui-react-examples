import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrRipple, IgrRippleModule, IgrButton, IgrButtonModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrRippleModule.register();
IgrButtonModule.register();

export default class RippleColor extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrButton>
                    <IgrRipple></IgrRipple>
                    <span>Ripple Button</span>
                </IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<RippleColor />, document.getElementById('root'));
