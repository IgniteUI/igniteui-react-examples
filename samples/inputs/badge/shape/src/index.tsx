import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';

export default function BadgeShape(): JSX.Element {
    useEffect(() => {
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="badge-shape">
            <div className="badge-shape-row">
                <span className="row-label">Rounded</span>
                <IgrBadge variant="success" shape="rounded">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
                <IgrBadge variant="success" shape="rounded">2</IgrBadge>
                <IgrBadge variant="success" shape="rounded" className="badge-small">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
            <div className="badge-shape-row">
                <span className="row-label">Square</span>
                <IgrBadge variant="info" shape="square" className="badge-info-blue">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
                <IgrBadge variant="info" shape="square" className="badge-info-blue">2</IgrBadge>
                <IgrBadge variant="info" shape="square" className="badge-small badge-info-blue">
                    <IgrIcon name="check" collection="material" />
                </IgrBadge>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeShape/>);
