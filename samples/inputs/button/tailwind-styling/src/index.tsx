import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'send', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>' },
    { name: 'add', text: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
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
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonTailwindStyling/>);
