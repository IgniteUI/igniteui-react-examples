import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const mailIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>';
const notificationsIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>';

export default function BadgeVariants(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
        registerIconFromText('close', closeIcon, 'material');
        registerIconFromText('mail', mailIcon, 'material');
        registerIconFromText('notifications', notificationsIcon, 'material');
    }, []);

    return (
        <div className="badge-variants">
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar shape="circle">
                        <IgrIcon name="notifications" collection="material" />
                    </IgrAvatar>
                    <IgrBadge outlined={true} variant="primary" className="badge-primary-blue">2</IgrBadge>
                </div>
                <span>Primary</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar initials="AZ" shape="circle" />
                    <IgrBadge outlined={true} variant="info" className="badge-info-blue">
                        <IgrIcon name="check" collection="material" />
                    </IgrBadge>
                </div>
                <span>Info</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                    />
                    <IgrBadge outlined={true} variant="success">
                        <IgrIcon name="check" collection="material" />
                    </IgrBadge>
                </div>
                <span>Success</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar shape="circle">
                        <IgrIcon name="mail" collection="material" />
                    </IgrAvatar>
                    <IgrBadge outlined={true} variant="warning" className="badge-warning-black">2</IgrBadge>
                </div>
                <span>Warn</span>
            </div>
            <div className="variant-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                    />
                    <IgrBadge outlined={true} variant="danger">
                        <IgrIcon name="close" collection="material" />
                    </IgrBadge>
                </div>
                <span>Error</span>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeVariants />);
