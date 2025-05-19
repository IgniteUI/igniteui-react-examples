import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDropdown, IgrButton, IgrDropdownItem, IgrIcon, IgrDropdownModule, IgrButtonModule, IgrDropdownItemModule, IgrIconModule, IgrDropdownHeader, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDropdownModule.register();
IgrDropdownItemModule.register();
IgrButtonModule.register();
IgrIconModule.register();

const ringIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zM7.58 4.08L6.15 2.65C3.75 4.48 2.17 7.3 2.03 10.5h2c.15-2.65 1.51-4.97 3.55-6.42zm12.39 6.42h2c-.15-3.2-1.73-6.02-4.12-7.85l-1.42 1.43c2.02 1.45 3.39 3.77 3.54 6.42z'/></svg>";
const vibrateIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14z'/></svg>";
const silentIconText = "<svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'><path d='M0 0h24v24H0V0z' fill='none'/><path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm0-15.5c2.49 0 4 2.02 4 4.5v.1l2 2V11c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68c-.24.06-.47.15-.69.23l1.64 1.64c.18-.02.36-.05.55-.05zM5.41 3.35L4 4.76l2.81 2.81C6.29 8.57 6 9.74 6 11v5l-2 2v1h14.24l1.74 1.74 1.41-1.41L5.41 3.35zM16 17H8v-6c0-.68.12-1.32.34-1.9L16 16.76V17z'/></svg>";

export default class DropDownHeader extends React.Component<any, any> {

    public ringIcon: IgrIcon;
    public vibrateIcon: IgrIcon;
    public silentIcon: IgrIcon;

    constructor(props: any) {
        super(props);
        registerIconFromText("ring", ringIconText, "material");
        registerIconFromText("vibrate", vibrateIconText, "material");
        registerIconFromText("silent", silentIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrDropdown>
                    <div slot="target">
                        <IgrButton><span>Sound</span></IgrButton>
                    </div>
                    <IgrDropdownHeader><span>Mode</span></IgrDropdownHeader>
                    <IgrDropdownItem selected>
                        <span slot="prefix">
                            <IgrIcon name="ring" collection="material"></IgrIcon>
                        </span>
                        <span>Ring</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem>
                        <span slot="prefix">
                            <IgrIcon name="vibrate" collection="material"></IgrIcon>
                        </span>
                        <span>Vibrate</span>
                    </IgrDropdownItem>
                    <IgrDropdownItem>
                        <span slot="prefix">
                            <IgrIcon name="silent" collection="material"></IgrIcon>
                        </span>
                        <span>Silent</span>
                    </IgrDropdownItem>
                </IgrDropdown>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DropDownHeader/>);
