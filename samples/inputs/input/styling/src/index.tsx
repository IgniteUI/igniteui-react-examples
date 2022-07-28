import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrInput, IgrInputModule, IgrIcon, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './InputStyling.css';

IgrInputModule.register();
IgrIconModule.register();

export default class InputStyling extends React.Component<any, any> {

    public phoneIcon: IgrIcon;

    constructor(props: any) {
        super(props);     
        this.iconRef = this.iconRef.bind(this);      
    }

    public render(): JSX.Element {
        return (
            <div className="container-center sample">
                <IgrInput displayType="tel" label="Phone">
                    <span slot="prefix">+359</span>
                    <IgrIcon ref={this.iconRef} iconName="phone">
                    </IgrIcon>
                    <span slot="helper-text">Ex.: +359 888 123 456</span>
                </IgrInput>
            </div>
        );
    }

    public iconRef(icon: IgrIcon){
        if (!icon) { return; }
        this.phoneIcon = icon;
        const phoneIconText = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>';
        this.phoneIcon.registerIconFromText("phone", phoneIconText, "material");
    }
}

// rendering above class to the React DOM
ReactDOM.render(<InputStyling />, document.getElementById('root'));
