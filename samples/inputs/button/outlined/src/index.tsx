import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrButton, IgrButtonModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();

export default class ButtonOutlined extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrButton variant="outlined"><span>Outlined</span></IgrButton>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ButtonOutlined />, document.getElementById('root'));