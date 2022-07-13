import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrIcon, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrIconModule.register();

export default class IconSizing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        this.iconRef = this.iconRef.bind(this);        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="horizontal-border-container">
                    <IgrIcon ref={this.iconRef} size="small" iconName="build" collection="material" />
                    <IgrIcon size="medium" iconName="build" collection="material" />
                    <IgrIcon size="large" iconName="build" collection="material" />
                </div>
            </div>
        );
    }

    public iconRef(icon: IgrIcon){
        if(!icon){
            return;
        }

        const buildIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/></svg>';

        // icon.registerIcon("home", "https://unpkg.com/material-design-icons@3.0.1/action/svg/production/ic_home_24px.svg", "material");        
        icon.registerIconFromText("build", buildIcon, "material");
    }
}

// rendering above class to the React DOM
ReactDOM.render(<IconSizing />, document.getElementById('root'));
