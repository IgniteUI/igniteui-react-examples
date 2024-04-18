import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, IgrDropdownModule, IgrButtonModule, IgrDropdownItemModule, IgrIconModule, IgrDropdownGroup } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDropdownModule.register();
IgrDropdownItemModule.register();
IgrButtonModule.register();
IgrIconModule.register();

export default class DropDownStyling extends React.Component<any, any> {

    public placeIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        this.iconPlaceRef = this.iconPlaceRef.bind(this); 
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Countries</span></IgrButton>
                    </div>
                    <IgrDropdownGroup>
                        <span slot="label">Europe</span>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon ref={this.iconPlaceRef} name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Germany</span>
                            <span slot="suffix">DE</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon ref={this.iconPlaceRef} name="place" collection="material"></IgrIcon>
                            </span>
                            <span>France</span>
                            <span slot="suffix">FR</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem selected>
                            <span slot="prefix">
                                <IgrIcon ref={this.iconPlaceRef} name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Spain</span>
                            <span slot="suffix">ES</span>
                        </IgrDropdownItem>
                    </IgrDropdownGroup>
                    <IgrDropdownGroup>
                        <span slot="label">North America</span>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon ref={this.iconPlaceRef} name="place" collection="material"></IgrIcon>
                            </span>
                            <span>USA</span>
                            <span slot="suffix">USA</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon ref={this.iconPlaceRef} name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Canada</span>
                            <span slot="suffix">CA</span>
                        </IgrDropdownItem>
                        <IgrDropdownItem>
                            <span slot="prefix">
                                <IgrIcon ref={this.iconPlaceRef} name="place" collection="material"></IgrIcon>
                            </span>
                            <span>Mexico</span>
                            <span slot="suffix">MX</span>
                        </IgrDropdownItem>
                    </IgrDropdownGroup>
                </IgrDropdown>
            </div>
        );
    }

    public iconPlaceRef(icon: IgrIcon){
        if (!icon) { return; }
        this.placeIcon = icon;
        const placeIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0z' fill='none'/><path d='M12 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm6-1.8C18 6.57 15.35 4 12 4s-6 2.57-6 6.2c0 2.34 1.95 5.44 6 9.14 4.05-3.7 6-6.8 6-9.14zM12 2c4.2 0 8 3.22 8 8.2 0 3.32-2.67 7.25-8 11.8-5.33-4.55-8-8.48-8-11.8C4 5.22 7.8 2 12 2z'/></svg>";
        this.placeIcon.registerIconFromText("place", placeIconText, "material");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownStyling/>);
