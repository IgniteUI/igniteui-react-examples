import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

export default function ButtonIcon() {
    useEffect(() => {
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="button-container">
                <div className="button-item">
                    <span className="button-label">Contained</span>
                    <IgrIconButton name="add" collection="material" variant="contained" />
                </div>
                <div className="button-item">
                    <span className="button-label">Outlined</span>
                    <IgrIconButton name="add" collection="material" variant="outlined" />
                </div>
                <div className="button-item">
                    <span className="button-label">Flat</span>
                    <IgrIconButton name="add" collection="material" variant="flat" />
                </div>
                <div className="button-item">
                    <span className="button-label">Floating Action</span>
                    <IgrButton variant="fab">
                        <IgrIcon name="add" collection="material" />
                    </IgrButton>
                </div>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonIcon/>);
