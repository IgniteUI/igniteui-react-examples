import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const personIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
const photoCameraIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.2"/><path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/></svg>';
const starBorderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28z"/></svg>';
const favoriteBorderIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';

export default function BadgeStyling(): JSX.Element {
    useEffect(() => {
        registerIconFromText('person', personIcon, 'material');
        registerIconFromText('photo_camera', photoCameraIcon, 'material');
        registerIconFromText('star_border', starBorderIcon, 'material');
        registerIconFromText('favorite_border', favoriteBorderIcon, 'material');
    }, []);

    return (
        <div className="badge-styling">
            <div className="styling-item green">
                <IgrAvatar shape="circle">
                    <IgrIcon name="person" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-teal">
                    <IgrIcon name="photo_camera" collection="material" />
                </IgrBadge>
            </div>
            <div className="styling-item">
                <IgrAvatar
                    src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                    shape="circle"
                />
                <IgrBadge outlined={true} className="badge-amber">
                    <IgrIcon name="star_border" collection="material" />
                </IgrBadge>
            </div>
            <div className="styling-item pink">
                <IgrAvatar shape="circle">
                    <IgrIcon name="favorite_border" collection="material" />
                </IgrAvatar>
                <IgrBadge outlined={true} className="badge-magenta">2</IgrBadge>
            </div>
            <div className="styling-item">
                <IgrAvatar
                    src="https://dl.infragistics.com/x/img/avatars/avatar6.png"
                    shape="rounded"
                />
                <IgrBadge dot={true} outlined={true} className="badge-lime" />
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeStyling/>);
