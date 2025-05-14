import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrAvatarModule, IgrAvatar, IgrIcon, IgrIconModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();
IgrIconModule.register();

const homeIcon =
        '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default class AvatarShape extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        registerIconFromText("home", homeIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrAvatar shape="rounded">
                    <IgrIcon key="icon" name="home" collection="material" />
                </IgrAvatar>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AvatarShape/>);
