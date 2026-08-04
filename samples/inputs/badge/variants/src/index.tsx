import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatar, IgrBadge, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const personIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-5 0-9 2.5-9 6v2h18v-2c0-3.5-4-6-9-6z"/></svg>';
const checkIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

export default function BadgeVariants(): JSX.Element {
    useEffect(() => {
        registerIconFromText('person', personIcon, 'material');
        registerIconFromText('check', checkIcon, 'material');
    }, []);

    return (
        <div className="wrapper">
            <IgrAvatar shape="circle" size="small">
                <IgrIcon name="person" collection="material" />
            </IgrAvatar>
            <IgrBadge variant="success" shape="square">
                <IgrIcon name="check" collection="material" />
            </IgrBadge>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeVariants />);
