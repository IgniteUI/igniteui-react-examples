import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './CardStyling.css';
import { IgrCard, IgrCardMedia, IgrCardHeader, IgrCardContent, IgrCardActions, IgrIconButton, IgrRipple, IgrCardModule, IgrIconButtonModule, IgrRippleModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCardModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default class CardStyling extends React.Component<any, any> {

    constructor(props: any) {
        super(props);           
        this.iconRef = this.iconRef.bind(this);        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="card-wrapper">
                    <IgrCard>
                        <IgrCardMedia key="media" height="180px">
                            <img key="mediaImg" src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"></img>
                        </IgrCardMedia>

                        <IgrCardHeader key="header">
                            <h3 key="headerTitle" slot="title">Jane Doe</h3>
                            <h5 key="headerSubtitle" slot="subtitle">Professional Photographer</h5>
                        </IgrCardHeader>

                        <IgrCardContent key="content">
                            <p key="contentParagraph">Hi! I am Jane, photographer and filmmaker.
                                Photography is a way of feeling, of touching,
                                of loving. What you have caught on film is captured forever...
                                it remembers little things, long after you have
                                forgotten everything.</p>
                        </IgrCardContent>

                        <IgrCardActions key="actions">
                            <div key="actionsEndSlot" slot="end">
                                <IgrIconButton key="twitterBtn" iconName="twitter">
                                    <IgrRipple key="twitterRipple"/>
                                </IgrIconButton>

                                <IgrIconButton key="fbButton" iconName="facebook">
                                    <IgrRipple key="fbRipple"/>
                                </IgrIconButton>

                                <IgrIconButton key="instaBtn" iconName="instagram">
                                    <IgrRipple key="instaRipple"/>
                                </IgrIconButton>
                            </div>
                        </IgrCardActions>

                    </IgrCard>
                </div>                
            </div>
        );
    }

    public iconRef(icon: IgrIconButton){
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
ReactDOM.render(<CardStyling />, document.getElementById('root'));
