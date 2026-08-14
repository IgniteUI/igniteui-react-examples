import React from 'react';
import ReactDOM from 'react-dom/client';
import { IgrAvatar, IgrButton, IgrInput } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonOverviewStyle.css';
import './index.css';

export default function ButtonOverview() {
    return (
        <div className="container sample">
            <div className="form">
                <IgrAvatar
                    shape="circle"
                    src="https://dl.infragistics.com/x/img/avatars/14.jpg"
                    alt="profile picture" />
                <div className="fields">
                    <IgrInput placeholder="First Name" />
                    <IgrInput placeholder="Last Name" />
                    <div className="actions">
                        <IgrButton variant="flat">Cancel</IgrButton>
                        <IgrButton variant="contained">Save</IgrButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonOverview/>);
