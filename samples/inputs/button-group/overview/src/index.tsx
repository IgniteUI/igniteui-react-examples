import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrButtonGroup,
    IgrButtonGroupModule,
    IgrIcon,
    IgrIconModule,
    IgrRipple,
    IgrRippleModule,
    IgrToggleButton,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupOverview.css';
import './index.css';
import { registerIconFromText } from 'igniteui-webcomponents'

IgrButtonGroupModule.register();
IgrIconModule.register();
IgrRippleModule.register();

const icons = [
    {
        name: 'format_align_left',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 15H3v2h12v-2zm0-8H3v2h12V7zM3 13h18v-2H3v2zm0 8h18v-2H3v2zM3 3v2h18V3H3z"/></svg>',
    },
    {
        name: 'format_align_center',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 15v2h10v-2H7zm-4 6h18v-2H3v2zm0-8h18v-2H3v2zm4-6v2h10V7H7zM3 3v2h18V3H3z"/></svg>',
    },
    {
        name: 'format_align_right',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm6-4h12v-2H9v2zm-6-4h18v-2H3v2zm6-4h12V7H9v2zM3 3v2h18V3H3z"/></svg>',
    },
    {
        name: 'format_align_justify',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 21h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18v-2H3v2zm0-4h18V7H3v2zm0-6v2h18V3H3z"/></svg>',
    },
];

export default function ButtonGroupOverview() {
    useEffect(() => {
        icons.forEach((icon) => {
            registerIconFromText(icon.name, icon.iconText, 'material');
        });
    }, [])

    return (
        <div className="container sample">
            <IgrButtonGroup>
                <IgrToggleButton value="left" key="button-left">
                    <IgrIcon name="format_align_left" collection="material" key="icon-left" />
                    <IgrRipple key="ripple-left" />
                </IgrToggleButton>
                <IgrToggleButton value="center" key="button-center">
                    <IgrIcon name="format_align_center" collection="material" key="icon-center" />
                    <IgrRipple key="ripple-center" />
                </IgrToggleButton>
                <IgrToggleButton value="right" key="button-right">
                    <IgrIcon name="format_align_right" collection="material" key="icon-right" />
                    <IgrRipple key="ripple-right" />
                </IgrToggleButton>
                <IgrToggleButton value="justify" selected={true} key="button-justify">
                    <IgrIcon name="format_align_justify" collection="material" key="icon-justify" />
                    <IgrRipple key="ripple-justify" />
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupOverview/>);
