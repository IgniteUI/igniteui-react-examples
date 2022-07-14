import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { IgrNavDrawer, IgrNavDrawerItem, IgrIcon, IgrButton, IgrNavDrawerModule, IgrIconModule, IgrButtonModule } from "igniteui-react";
import "igniteui-webcomponents/themes/light/bootstrap.css";

IgrNavDrawerModule.register();
IgrIconModule.register();
IgrButtonModule.register();

export default class NavDrawerAddMini extends React.Component<any, any> {

    public navDrawerRef: IgrNavDrawer;

    constructor(props: any) {
        super(props);        
        this.iconRef = this.iconRef.bind(this);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.onNavDrawerRef = this.onNavDrawerRef.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer ref={this.onNavDrawerRef}>
                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon ref={this.iconRef} iconName="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon iconName="search" collection="material"/>
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>

                        <div slot="mini">
                            <IgrNavDrawerItem>
                                <div slot="icon">
                                    <IgrIcon iconName="home" collection="material"/>
                                </div>                                
                            </IgrNavDrawerItem>

                            <IgrNavDrawerItem>
                                <div slot="icon">
                                    <IgrIcon iconName="search" collection="material" />
                                </div>                                
                            </IgrNavDrawerItem>
                        </div>
                    </IgrNavDrawer>

                    <div style={{width: '100%'}}>
                        <IgrButton clicked={this.onButtonClick} style={{ marginLeft: '70px' }}>
                            <span>Toggle</span>
                        </IgrButton>
                    </div>
                </div>
            </div>
        );
    }

    public iconRef(icon: IgrIcon){
        if (!icon) { return; }

        const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
        const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

        icon.registerIconFromText("home", homeIcon, "material");
        icon.registerIconFromText("search", searchIcon, "material");        
    }

    public onNavDrawerRef(navDrawer: IgrNavDrawer){
        if (!navDrawer) { return; }

        this.navDrawerRef = navDrawer;
    }

    public onNavDrawerClick(e: any){
        const target = e.target as HTMLElement;
        const drawerItem: any = target.closest('igc-nav-drawer-item');

        if(drawerItem){
            drawerItem.active = !drawerItem.active;
        }
    }

    public onButtonClick() {
        if (this.navDrawerRef) {
            this.navDrawerRef.toggle();
        }
    }
}

// rendering above class to the React DOM
ReactDOM.render(<NavDrawerAddMini/>, document.getElementById("root"));
