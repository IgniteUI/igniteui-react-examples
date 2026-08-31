import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const checkIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
const mailIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5z"/></svg>';
const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>';

export default function BadgeOverview(): JSX.Element {
  useEffect(() => {
    registerIconFromText('check', checkIcon, 'material');
    registerIconFromText('mail', mailIcon, 'material');
    registerIconFromText('notifications', notificationsIcon, 'material');
  }, []);

  return (
    <div className="badge-overview">
      <div className="badge-example avatar-example">
        <IgrAvatar
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
          shape="circle"
          size="small"
        />
        <IgrBadge outlined={true} variant="success">
          <IgrIcon name="check" collection="material" />
        </IgrBadge>
      </div>
      <div className="badge-example icon-example">
        <IgrIcon name="mail" collection="material" />
        <IgrBadge outlined={true} variant="danger">
          2
        </IgrBadge>
      </div>
      <div className="badge-example event-example">
        <IgrChip>Events</IgrChip>
        <IgrBadge outlined={true} variant="info">
          new
        </IgrBadge>
      </div>
      <div className="badge-example notification-example">
        <IgrIcon name="notifications" collection="material" />
        <IgrBadge dot={true} outlined={true} variant="danger" />
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOverview />);
