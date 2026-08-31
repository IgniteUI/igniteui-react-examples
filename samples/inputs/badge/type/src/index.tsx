import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeType(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-type">
            <div className="badge-type-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                        size="small"
                    />
                    <IgrBadge dot={true} outlined={true} variant="success" className="dot-badge" />
                </div>
                <span>Dot</span>
            </div>
            <div className="badge-type-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                        size="small"
                    />
                    <IgrBadge outlined={true} variant="success">
                        <IgrIcon name="check" collection="material" />
                    </IgrBadge>
                </div>
                <span>Icon</span>
            </div>
            <div className="badge-type-item">
                <div className="avatar-wrapper">
                    <IgrAvatar
                        src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
                        shape="circle"
                        size="small"
                    />
                    <IgrBadge outlined={true} variant="success">
                        2
                    </IgrBadge>
                </div>
                <span>Text</span>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeType />);
