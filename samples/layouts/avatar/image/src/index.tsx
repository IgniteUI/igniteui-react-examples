import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function AvatarImage() {

    return (
        <div className="container sample">
            <IgrAvatar src="https://static.infragistics.com/xplatform/images/people/men/1.jpg" alt="A photo of a man." />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarImage/>);
