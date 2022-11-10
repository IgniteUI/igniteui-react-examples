import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavbar, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrRadioGroup, IgrRadio, IgrNavDrawerModule, IgrNavbarModule, IgrRadioGroupModule, IgrRadioModule, IgrIconModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrNavDrawerModule.register();
IgrNavbarModule.register();
IgrIconModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();

export default class NavDrawerAddPositionsNavbar extends React.Component<any, any> {

    public navDrawerRef: IgrNavDrawer;

    constructor(props: any) {
        super(props);        

        this.state = { drawerPosition: "start" };

        this.iconRef = this.iconRef.bind(this);
        this.onNavDrawerRef = this.onNavDrawerRef.bind(this);
        this.onMenuIconClick = this.onMenuIconClick.bind(this);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);    
        this.onRadioChange = this.onRadioChange.bind(this);    
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer ref={this.onNavDrawerRef} position={this.state.drawerPosition}>
                        <IgrNavDrawerHeaderItem>
                            <span>Sample Drawer</span>
                        </IgrNavDrawerHeaderItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon ref={this.iconRef} iconName="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon iconName="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>
                    </IgrNavDrawer>
                </div>
                <div>
                    <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
                        <IgrRadio value="start" labelPosition="after" checked={true} change={this.onRadioChange}>
                            <span>Start</span>
                        </IgrRadio>
                        <IgrRadio value="end" labelPosition="after" change={this.onRadioChange}>
                            <span>End</span>
                        </IgrRadio>
                        <IgrRadio value="top" labelPosition="after" change={this.onRadioChange}>
                            <span>Top</span>
                        </IgrRadio>
                        <IgrRadio value="bottom" labelPosition="after" change={this.onRadioChange}>
                            <span>Bottom</span>
                        </IgrRadio>
                    </IgrRadioGroup>
                    
                    <IgrNavbar>
                        <div slot="start" onClick={this.onMenuIconClick}>
                            <IgrIcon iconName="menu" collection="material"/>
                        </div>
                        <h2>Home</h2>
                    </IgrNavbar>
                </div>
            </div>
        );
    }

    public iconRef(icon: IgrIcon){
        if (!icon) { return; }

        const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
        const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
        const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

        icon.registerIconFromText("home", homeIcon, "material");
        icon.registerIconFromText("search", searchIcon, "material");
        icon.registerIconFromText("menu", menuIcon, "material");
    }

    public onMenuIconClick() {
        if (this.navDrawerRef) {
            this.navDrawerRef.show();
        }
    }

    public onNavDrawerClick(e: any){
        const target = e.target as HTMLElement;
        const drawerItem: any = target.closest('igc-nav-drawer-item');

        if(drawerItem){
            drawerItem.active = !drawerItem.active;
        }
    }

    public onNavDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }

        this.navDrawerRef = navDrawer;
    }

    public onRadioChange(e: any) {
        if (e.checked == true) {
            this.setState({ drawerPosition: e.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddPositionsNavbar/>);
