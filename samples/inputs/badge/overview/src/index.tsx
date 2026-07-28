import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrAvatar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function BadgeOverview(): JSX.Element {
  return (
    <div className="sample">
      <IgrAvatar initials="JD" />
      <IgrBadge outlined={true} />
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOverview />);
