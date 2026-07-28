import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function BadgeOutlined(): JSX.Element {
  return (
    <section className="wrapper">
      <header>
        <IgrAvatar initials="TO" shape="circle" />
        <IgrBadge outlined={true} variant="danger" />
      </header>
      <span>Terrance Orta</span>
    </section>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOutlined />);
