import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIconButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const iconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"/></svg>';

export default class IconButtonSize extends React.Component<any, any> {

    public smallIcon: IgrIconButton;
    public mediumIcon: IgrIconButton;
    public largeIcon: IgrIconButton;

    constructor(props: any) {
        super(props); 
        registerIconFromText("thumb-up", iconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options horizontal">
                    <IgrIconButton className="size-small"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton className="size-medium"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                    <IgrIconButton className="size-large"
                        name="thumb-up"
                        collection="material"
                        variant="contained">
                    </IgrIconButton>
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<IconButtonSize/>);
