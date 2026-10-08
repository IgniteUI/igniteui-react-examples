import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrChip, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const icons = [
    { name: 'arrow_upward', text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/></svg>' },
    { name: 'account_circle', text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88C7.55 15.8 9.68 15 12 15s4.45.8 6.14 2.12C16.43 19.18 14.03 20 12 20z"/></svg>' },
];

export default function ChipLayout(): JSX.Element {
    useEffect(() => {
        icons.forEach((icon) => registerIconFromText(icon.name, icon.text, 'material'));
    }, []);

    return (
        <div className="sample chip-layout">
            <div className="chip-layout-item">
                <span>Text</span>
                <IgrChip>Chip</IgrChip>
            </div>
            <div className="chip-layout-item">
                <span>Prefix</span>
                <IgrChip>
                    <IgrIcon slot="prefix" name="arrow_upward" collection="material" />
                    Chip
                </IgrChip>
            </div>
            <div className="chip-layout-item">
                <span>Prefix+Suffix</span>
                <IgrChip>
                    <IgrIcon slot="prefix" name="arrow_upward" collection="material" />
                    Chip
                    <IgrIcon slot="suffix" name="account_circle" collection="material" />
                </IgrChip>
            </div>
            <div className="chip-layout-item">
                <span>Suffix</span>
                <IgrChip>
                    Chip
                    <IgrIcon slot="suffix" name="account_circle" collection="material" />
                </IgrChip>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ChipLayout/>);
