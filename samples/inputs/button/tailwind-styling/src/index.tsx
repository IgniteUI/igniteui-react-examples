import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'send', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
    { name: 'edit', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg>' },
    { name: 'print', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>' },
    { name: 'close', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' }
];

export default function ButtonTailwindStyling(): JSX.Element {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="button-grid flex flex-col items-center justify-center h-full gap-6 p-4">
            <div className="button-row grid grid-cols-4 items-center justify-items-center gap-6">
                <IgrButton variant="contained" className="confirm-button">Confirm</IgrButton>
                <IgrButton variant="outlined" className="send-button">
                    <IgrIcon slot="prefix" name="send" collection="material" />
                    Send
                </IgrButton>
                <IgrButton variant="flat" className="cancel-button">Cancel</IgrButton>
                <IgrButton variant="fab" className="add-button">
                    Add
                    <IgrIcon slot="suffix" name="add" collection="material" />
                </IgrButton>
            </div>

            <div className="button-row grid grid-cols-4 items-center justify-items-center gap-6">
                <IgrIconButton variant="flat" className="edit-icon-button" name="edit" collection="material" />
                <IgrIconButton variant="outlined" className="print-icon-button" name="print" collection="material" />
                <IgrIconButton variant="flat" className="close-icon-button" name="close" collection="material" />
                <IgrButton variant="fab" className="fab-icon-button" aria-label="Add">
                    <IgrIcon name="add" collection="material" />
                </IgrButton>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonTailwindStyling/>);
