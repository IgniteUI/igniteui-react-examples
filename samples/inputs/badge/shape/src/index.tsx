import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrBadge, IgrBadgeModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrBadgeModule.register();

export default class BadgeShape extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                 <IgrBadge shape="square" />
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<BadgeShape />, document.getElementById('root'));
