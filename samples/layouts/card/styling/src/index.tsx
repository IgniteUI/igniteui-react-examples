import React from 'react';
import ReactDOM from 'react-dom/client';
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

                        <IgrCardHeader className="header" key="header">
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
                                <IgrIconButton ref={this.iconRef} key="twitterBtn" name="twitter" collection="material">
                                    <IgrRipple key="twitterRipple"/>
                                </IgrIconButton>

                                <IgrIconButton key="fbButton" name="facebook" collection="material">
                                    <IgrRipple key="fbRipple"/>
                                </IgrIconButton>

                                <IgrIconButton key="instaBtn" name="instagram" collection="material">
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

        const twitterIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.13 6v.39a8.61 8.61 0 01-13.25 7.25 5.69 5.69 0 00.72 0 6 6 0 003.76-1.3 3 3 0 01-2.83-2.1 2.75 2.75 0 00.57.05 3 3 0 00.8-.1 3 3 0 01-2.43-3 3.13 3.13 0 001.37.38 3 3 0 01-.93-4 8.57 8.57 0 006.24 3.17 3.1 3.1 0 01-.08-.74 3 3 0 015.24-2A6.38 6.38 0 0019 6.22a3.07 3.07 0 01-1.36 1.68 6.22 6.22 0 001.74-.48A6.09 6.09 0 0117.87 9z'></path></svg>";
        const facebookIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M12 22zm0-20a10 10 0 00-1.727 19.841v-7.6h-2.61v-3.018h2.61V8.995A3.641 3.641 0 0114.16 5a21.367 21.367 0 012.332.119v2.7h-1.6c-1.255 0-1.5.6-1.5 1.471v1.929h2.993L16 14.245h-2.6v7.647A9.994 9.994 0 0012 2z'></path></svg>";
        const instagramIcon = "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'><path d='M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14.64A5.64 5.64 0 1117.64 12 5.65 5.65 0 0112 17.64zm5.86-10.18a1.32 1.32 0 111.32-1.32 1.32 1.32 0 01-1.32 1.32zM15.66 12A3.66 3.66 0 1112 8.34 3.66 3.66 0 0115.66 12z'></path></svg>";

        icon.registerIconFromText("facebook", facebookIcon, "material");
        icon.registerIconFromText("twitter", twitterIcon, "material");
        icon.registerIconFromText("instagram", instagramIcon, "material");        
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CardStyling/>);
