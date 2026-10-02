import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';
const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonStates() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                <div className="button-item">
                    <IgrButton variant="contained" disabled={true}>
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                        Contained
                        <IgrIcon slot="suffix" name="notifications" collection="material" />
                    </IgrButton>
                </div>
                <div className="button-item">
                    <IgrButton variant="outlined" disabled={true}>
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                        Outlined
                        <IgrIcon slot="suffix" name="notifications" collection="material" />
                    </IgrButton>
                </div>
                <div className="button-item">
                    <IgrButton variant="flat" disabled={true}>
                        <IgrIcon slot="prefix" name="notifications" collection="material" />
                        Flat
                        <IgrIcon slot="suffix" name="notifications" collection="material" />
                    </IgrButton>
                </div>
                <div className="button-item">
                    <IgrButton variant="fab" disabled={true}>
                        <IgrIcon slot="prefix" name="add" collection="material" />
                        Floating Action
                        <IgrIcon slot="suffix" name="add" collection="material" />
                    </IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonStates/>);
