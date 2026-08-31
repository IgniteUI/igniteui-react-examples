import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeSize(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-size">
            <div className="badge-size-row badge-small">
                <span className="row-label">Small</span>
                <IgrBadge dot={true} variant="danger" />
                <IgrBadge variant="info">2</IgrBadge>
                <IgrBadge variant="success">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
            <div className="badge-size-row badge-medium">
                <span className="row-label">Medium</span>
                <IgrBadge dot={true} variant="danger" />
                <IgrBadge variant="info">2</IgrBadge>
                <IgrBadge variant="success">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
            <div className="badge-size-row badge-large">
                <span className="row-label">Large</span>
                <IgrBadge dot={true} variant="danger" />
                <IgrBadge variant="info">2</IgrBadge>
                <IgrBadge variant="success">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeSize />);
