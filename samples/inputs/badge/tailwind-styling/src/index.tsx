import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const personIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
const closeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
const volumeOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z"/></svg>';
const removeIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>';
const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeTailwindStyling(): JSX.Element {
    useEffect(() => {
        registerIconFromText('person', personIcon, 'material');
        registerIconFromText('close', closeIcon, 'material');
        registerIconFromText('volume_off', volumeOffIcon, 'material');
        registerIconFromText('remove', removeIcon, 'material');
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-parent flex items-center justify-center !gap-12">
            <div className="relative flex">
                <IgrAvatar initials="AZ" shape="rounded" size="small" />
                <IgrBadge outlined={true} className="badge-style badge-close">
                    <IgrIcon name="close" collection="material" />
                </IgrBadge>
            </div>
            <div className="relative flex">
                <IgrAvatar shape="rounded" size="small">
                    <IgrIcon name="person" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-style badge-volume">
                    <IgrIcon name="volume_off" collection="material" />
                </IgrBadge>
            </div>
            <div className="relative flex">
                <IgrAvatar initials="AZ" shape="circle" size="small" />
                <IgrBadge outlined={true} className="badge-style badge-remove">
                    <IgrIcon name="remove" collection="material" />
                </IgrBadge>
            </div>
            <div className="relative flex">
                <IgrAvatar shape="square" size="small">
                    <IgrIcon name="person" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-style badge-check">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeTailwindStyling/>);
