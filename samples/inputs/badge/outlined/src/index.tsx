import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrAvatar, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const favoriteBorderIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"/></svg>';
const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

const steps = [
  { index: 1, label: 'Orders', current: false, pending: false },
  { index: 2, label: 'Payment', current: true, pending: false },
  { index: 3, label: 'Shipping', current: false, pending: true }
];

export default function BadgeOutlined(): JSX.Element {
  useEffect(() => {
    registerIconFromText('favorite_border', favoriteBorderIcon, 'material');
    registerIconFromText('close', closeIcon, 'material');
  }, []);

  return (
    <div className="badge-outlined">
      <div className="outlined-example">
        <div className="icon-circle">
          <IgrIcon name="favorite_border" collection="material" />
        </div>
        <IgrBadge variant="info" outlined={true}>23</IgrBadge>
      </div>
      <div className="outlined-example">
        <IgrAvatar initials="AZ" shape="rounded" />
        <IgrBadge variant="danger" outlined={true}>
          <IgrIcon name="close" collection="material" />
        </IgrBadge>
      </div>
      <div className="steps">
        {steps.map((step, i) => (
          <React.Fragment key={step.label}>
            {i > 0 && (
              <span className={step.pending ? 'step-connector pending' : 'step-connector'} />
            )}
            <div className="step">
              <div className="step-marker">
                <span className={step.pending ? 'step-circle pending' : 'step-circle'}>
                  {step.index}
                </span>
                {step.current && (
                  <IgrBadge dot={true} variant="info" outlined={true} />
                )}
              </div>
              <span className="step-label">{step.label}</span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeOutlined />);
