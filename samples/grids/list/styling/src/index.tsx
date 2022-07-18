import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './ListStyling.css';
import { IgrList, IgrListItem, IgrListHeader, IgrAvatar, IgrButton, IgrListModule, IgrAvatarModule, IgrButtonModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrAvatarModule.register();
IgrButtonModule.register();
IgrListModule.register();

export default class ListStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrList>
                    <IgrListHeader>
                        <span>Contacts</span>
                    </IgrListHeader>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/8.jpg" shape="circle" />
                        </div>                        
                        <h2 slot="title">Terrance Orta</h2>
                        <span slot="subtitle">770-504-2217</span>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/17.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Richard Mahoney</h2>
                        <span slot="subtitle">423-676-2869</span>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                    <IgrListItem>
                        <div slot="start">
                            <IgrAvatar src="https://static.infragistics.com/xplatform/images/avatars/9.jpg" shape="circle" />
                        </div>
                        <h2 slot="title">Donna Price</h2>
                        <span slot="subtitle">859-496-2817</span>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Text</span>
                            </IgrButton>
                        </div>
                        <div slot="end">
                            <IgrButton variant="contained">
                                <span>Call</span>
                            </IgrButton>
                        </div>
                    </IgrListItem>
                </IgrList>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<ListStyling/>, document.getElementById("root"));
