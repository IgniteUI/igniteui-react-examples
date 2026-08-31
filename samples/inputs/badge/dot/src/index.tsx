import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import './index.css';
import 'igniteui-webcomponents/themes/light/material.css';

const notificationsIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"/></svg>';
const chevronRightIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>';
const homeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const personIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
const facebookMessengerIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.15.26.35.27.57l.05 1.78c.02.57.61.94 1.13.71l1.98-.87c.17-.07.36-.09.54-.04 1 .27 2.05.42 3.14.42 5.64 0 10-4.13 10-9.7S17.64 2 12 2zm6 7.46-2.94 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.94-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75c.21.16.51.16.72 0l3.16-2.4c.42-.32.97.18.69.63z"/></svg>';

const notifications = [
  { title: 'Contract renewal', time: '09:12', unread: true },
  { title: 'Weekly digest', time: 'Yesterday', unread: false }
];

const tabs = [
  { label: 'Home', icon: 'home', active: true, hasUpdates: false },
  { label: 'Chat', icon: 'facebookMessenger', active: false, hasUpdates: true },
  { label: 'Profile', icon: 'person', active: false, hasUpdates: false }
];

export default function BadgeDot(): JSX.Element {
  useEffect(() => {
    registerIconFromText('notifications', notificationsIcon, 'material');
    registerIconFromText('chevron_right', chevronRightIcon, 'material');
    registerIconFromText('home', homeIcon, 'material');
    registerIconFromText('person', personIcon, 'material');
    registerIconFromText('facebookMessenger', facebookMessengerIcon, 'material');
  }, []);

  return (
    <div className="badge-dot">
      <div className="dot-example icon-example">
        <div className="icon-circle">
          <IgrIcon name="notifications" collection="material" />
        </div>
        <IgrBadge dot={true} outlined={true} variant="danger" />
      </div>
      <div className="dot-example notifications-card">
        {notifications.map((item) => (
          <div className="notification-row" key={item.title}>
            <span className="row-indicator">
              {item.unread && <IgrBadge dot={true} variant="info" />}
            </span>
            <span className="row-title">{item.title}</span>
            <span className={item.unread ? 'row-time unread' : 'row-time'}>{item.time}</span>
            <IgrIcon className="row-chevron" name="chevron_right" collection="material" />
          </div>
        ))}
      </div>
      <div className="dot-example avatar-example">
        <IgrAvatar
          src="https://dl.infragistics.com/x/img/avatars/avatar-profile-04.png"
          shape="circle"
          size="small"
        />
        <IgrBadge dot={true} outlined={true} variant="danger" />
      </div>
      <div className="dot-example nav-card">
        {tabs.map((tab) => (
          <div className={tab.active ? 'nav-item active' : 'nav-item'} key={tab.label}>
            <span className="nav-icon">
              <IgrIcon name={tab.icon} collection="material" />
              {tab.hasUpdates && <IgrBadge dot={true} variant="info" />}
            </span>
            <span className="nav-label">{tab.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeDot />);
