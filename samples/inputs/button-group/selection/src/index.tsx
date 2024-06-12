import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    ButtonGroupSelection,
    IgrButtonGroup,
    IgrButtonGroupModule,
    IgrIcon,
    IgrIconModule,
    IgrRadio,
    IgrRadioGroup,
    IgrRadioGroupModule,
    IgrRipple,
    IgrRippleModule,
    IgrToggleButton,
  } from 'igniteui-react';
import { registerIconFromText } from 'igniteui-webcomponents'
import 'igniteui-webcomponents/themes/light/material.css';
import './ButtonGroupSelection.css';
import './index.css';

IgrButtonGroupModule.register();
IgrRadioGroupModule.register();
IgrIconModule.register();
IgrRippleModule.register();

const icons = [
    {
        name: 'bold',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.6 10.79c.97-.67 1.65-1.77 1.65-2.79 0-2.26-1.75-4-4-4H7v14h7.04c2.09 0 3.71-1.7 3.71-3.79 0-1.52-.86-2.82-2.15-3.42zM10 6.5h3c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-3v-3zm3.5 9H10v-3h3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z"/></svg>',
    },
    {
        name: 'italic',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z"/></svg>',
    },
    {
        name: 'underlined',
        iconText: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"/></svg>',
    },
];

export default function ButtonGroupSelection() {
    useEffect(() => {
        icons.forEach((icon) => {
            registerIconFromText(icon.name, icon.iconText, 'material');
        });
    }, [])

    const buttonGroupRef = useRef<IgrButtonGroup>(null);

    function onRadioChange(radio: IgrRadio) {
        switch (radio.value) {
            case 'single':
                buttonGroupRef.current.selection = ButtonGroupSelection.Single;
                break;
            case 'single-required':
                buttonGroupRef.current.selection = ButtonGroupSelection.SingleRequired;
                break;
            default:
                buttonGroupRef.current.selection = ButtonGroupSelection.Multiple;
                break;
        }
    }

    return (
        <div className="container sample">
            <div className="radio-group-container">
                <label>Selection Mode</label>
                <IgrRadioGroup alignment="horizontal">
                    <IgrRadio name="mode" value="single" checked change={onRadioChange} key="radio-single">
                        <span key="text-single">Single</span>
                    </IgrRadio>
                    <IgrRadio name="mode" value="single-required" change={onRadioChange} key="radio-single-required">
                        <span key="text-single-required">Single-Required</span>
                    </IgrRadio>
                    <IgrRadio name="mode" value="multiple" change={onRadioChange} key="radio-multiple">
                        <span key="text-multiple">Multiple</span>
                    </IgrRadio>
                </IgrRadioGroup>
            </div>
            <IgrButtonGroup ref={buttonGroupRef}>
                <IgrToggleButton value="bold" key="button-bold">
                    <IgrIcon name="bold" collection="material" key="icon-bold" />
                    <IgrRipple key="ripple-bold" />
                </IgrToggleButton>
                <IgrToggleButton value="italic" key="button-italic">
                    <IgrIcon name="italic" collection="material" key="icon-italic" />
                    <IgrRipple key="ripple-italic" />
                </IgrToggleButton>
                <IgrToggleButton value="underlined" key="button-underlined">
                    <IgrIcon name="underlined" collection="material" key="icon-underlined" />
                    <IgrRipple key="ripple-underlined" />
                </IgrToggleButton>
            </IgrButtonGroup>
      </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ButtonGroupSelection/>);