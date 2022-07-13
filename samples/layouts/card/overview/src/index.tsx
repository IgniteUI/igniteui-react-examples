import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { IgrCard, IgrCardMedia, IgrCardHeader, IgrCardContent, IgrCardActions, IgrCardModule, IgrIconButton, IgrIconButtonModule, IgrButton, IgrButtonModule, IgrRipple, IgrRippleModule } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrCardModule.register();
IgrButtonModule.register();
IgrIconButtonModule.register();
IgrRippleModule.register();

export default class CardOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);        
        this.iconRef = this.iconRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <div className="card-wrapper">
                    <IgrCard>
                        <IgrCardMedia>
                            <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=50"></img>
                        </IgrCardMedia>

                        <IgrCardHeader>
                            <h3 slot="title">New York City</h3>
                            <h5 slot="subtitle">City in New York</h5>
                        </IgrCardHeader>

                        <IgrCardContent>
                            <p>New York City comprises 5 boroughs sitting where the
                                Hudson River meets the Atlantic Ocean. At its core is Manhattan,
                                a densely populated borough that’s among the world’s major commercial,
                                financial and cultural centers.</p>
                        </IgrCardContent>

                        <IgrCardActions>
                            <IgrButton>
                                <span>Read more</span>
                                <IgrRipple />
                            </IgrButton>
                            <div slot="end">
                                <IgrIconButton ref={this.iconRef} className="marginIcon" iconName="twitter" collection="material">
                                    <IgrRipple />
                                </IgrIconButton>
                                <IgrIconButton iconName="facebook" collection="material">
                                    <IgrRipple />
                                </IgrIconButton>
                            </div>
                        </IgrCardActions>
                    </IgrCard>
                </div>
            </div>
        );
    }

    public iconRef(icon: IgrIconButton){
        if (!icon) { return; }

        const twitterIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-1.13 6v.39a8.61 8.61 0 01-13.25 7.25 5.69 5.69 0 00.72 0 6 6 0 003.76-1.3 3 3 0 01-2.83-2.1 2.75 2.75 0 00.57.05 3 3 0 00.8-.1 3 3 0 01-2.43-3 3.13 3.13 0 001.37.38 3 3 0 01-.93-4 8.57 8.57 0 006.24 3.17 3.1 3.1 0 01-.08-.74 3 3 0 015.24-2A6.38 6.38 0 0019 6.22a3.07 3.07 0 01-1.36 1.68 6.22 6.22 0 001.74-.48A6.09 6.09 0 0117.87 9z"></path></svg>';
        const facebookIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22zm0-20a10 10 0 00-1.727 19.841v-7.6h-2.61v-3.018h2.61V8.995A3.641 3.641 0 0114.16 5a21.367 21.367 0 012.332.119v2.7h-1.6c-1.255 0-1.5.6-1.5 1.471v1.929h2.993L16 14.245h-2.6v7.647A9.994 9.994 0 0012 2z"></path></svg>';

        icon.registerIconFromText("twitter", twitterIcon, "material");
        icon.registerIconFromText("facebook", facebookIcon, "material");
        
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CardOverview/>, document.getElementById("root"));
