import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrAvatarModule, IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();

export default class AvatarInitials extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                   
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrAvatar initials="AZ"/>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<AvatarInitials />, document.getElementById('root'));
