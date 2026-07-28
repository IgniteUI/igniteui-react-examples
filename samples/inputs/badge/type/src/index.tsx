import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function BadgeType(): JSX.Element {
    return (
      <div className="badge-type">
        <div className="badge-type-item">
          <span>Number</span>
          <IgrBadge variant="primary">12</IgrBadge>
        </div>
        <div className="badge-type-item">
          <span>Icon</span>
          <IgrBadge variant="primary">
            <svg className="badge-check" viewBox="0 0 24 24" aria-label="check">
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </IgrBadge>
        </div>
        <div className="badge-type-item">
          <span>Dot</span>
          <IgrBadge dot={true} variant="primary" />
        </div>
      </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeType />);
