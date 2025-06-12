import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AvatarSize() {

    return (
        <div className="container sample">
            <IgrAvatar initials='L' className='size-large'/>
            <IgrAvatar initials='M' className='size-medium'/>
            <IgrAvatar initials='S' className='size-small'/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarSize/>);
