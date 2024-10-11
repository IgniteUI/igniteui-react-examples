import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatarModule, IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();

export default class AvatarSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                   
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrAvatar initials='L' className='size-large'/>
                <IgrAvatar initials='M' className='size-medium'/>
                <IgrAvatar initials='S' className='size-small'/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarSize/>);
