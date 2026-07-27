import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class BadgeSize extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div className="badge-size">
        <div className="badge-size-item">
          <span>Large</span>
          <IgrBadge variant="primary" className="badge-large" />
        </div>
        <div className="badge-size-item">
          <span>Medium</span>
          <IgrBadge variant="primary" className="badge-medium" />
        </div>
        <div className="badge-size-item">
          <span>Small</span>
          <IgrBadge variant="primary" className="badge-small" />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeSize />);
