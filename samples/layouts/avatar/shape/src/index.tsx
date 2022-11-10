import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatarModule, IgrAvatar, IgrIcon, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();
IgrIconModule.register();

export default class AvatarShape extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        this.iconRef = this.iconRef.bind(this);        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrAvatar shape="rounded">
                    <IgrIcon key="icon" ref={this.iconRef} iconName="home" collection="material" />
                </IgrAvatar>
            </div>
        );
    }

    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }

        const homeIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

        // icon.registerIcon("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");        
        icon.registerIconFromText("home", homeIcon, "material");
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarShape/>);
