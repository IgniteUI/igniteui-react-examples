import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonFab() {
    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <IgrButton variant="fab">
                <IgrIcon slot="prefix" name="add" collection="material" />
                Floating Action
                <IgrIcon slot="suffix" name="add" collection="material" />
            </IgrButton>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonFab/>);
