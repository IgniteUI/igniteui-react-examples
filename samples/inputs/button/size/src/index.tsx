import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './ButtonSizingStyle.css';
import { IgrButton, IgrIcon, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';

const notificationsIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/></svg>';
const addIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>';

const sizes = ['large', 'medium', 'small'];
const variants: any[] = ['contained', 'outlined', 'flat'];

export default function ButtonSize() {
    useEffect(() => {
        registerIconFromText('notifications', notificationsIcon, 'material');
        registerIconFromText('add', addIcon, 'material');
    }, []);

    return (
        <div className="container sample">
            <div className="size-grid">
                <div className="size-header">
                    <span></span>
                    <span>Contained</span>
                    <span>Outlined</span>
                    <span>Flat</span>
                    <span>Fab</span>
                </div>
                {sizes.map((size) => (
                    <div className="size-row" key={size}>
                        <span className={'size-label size-' + size}>{size[0].toUpperCase() + size.slice(1)}</span>
                        {variants.map((variant) => (
                            <IgrButton key={variant} className={'size-' + size} variant={variant}>
                                <IgrIcon slot="prefix" name="notifications" collection="material" />
                                {variant}
                                <IgrIcon slot="suffix" name="notifications" collection="material" />
                            </IgrButton>
                        ))}
                        <IgrButton className={'size-' + size} variant="fab">
                            <IgrIcon slot="prefix" name="add" collection="material" />
                            Floating Action
                            <IgrIcon slot="suffix" name="add" collection="material" />
                        </IgrButton>
                    </div>
                ))}

            </div>
        </div>
    );
}


// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonSize/>);
