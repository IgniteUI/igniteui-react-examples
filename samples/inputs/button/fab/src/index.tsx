import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrButtonModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();

export default class ButtonFab extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="fab">
                    <span slot="prefix">+</span>
                    <span>Add</span>
                </IgrButton>                    
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonFab/>);
