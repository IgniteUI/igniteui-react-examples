import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './ButtonOverviewStyle.css';
import { IgrButton, IgrButtonModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrButtonModule.register();

export default class ButtonOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="button-container">
                    <IgrButton variant="flat"><span>Flat</span></IgrButton>
                    <IgrButton variant="contained"><span>Contained</span></IgrButton>
                    <IgrButton variant="outlined"><span>Outlined</span></IgrButton>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ButtonOverview />, document.getElementById('root'));
