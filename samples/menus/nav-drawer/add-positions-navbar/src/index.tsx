import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavbar, IgrNavDrawer, IgrNavDrawerHeaderItem, IgrNavDrawerItem, IgrIcon, IgrRadioGroup, IgrRadio, registerIconFromText, IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';
const menuIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>';

export default class NavDrawerAddPositionsNavbar extends React.Component<any, any> {

    public navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);

        this.state = { drawerPosition: "start", title: "Home" };

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
        registerIconFromText("menu", menuIcon, "material");

        this.navDrawerRef = this.navDrawerRef.bind(this);
        this.onMenuIconClick = this.onMenuIconClick.bind(this);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.onRadioChange = this.onRadioChange.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer ref={this.navDrawerRef} position={this.state.drawerPosition}>
                        <IgrNavDrawerHeaderItem>
                            <span>Sample Drawer</span>
                        </IgrNavDrawerHeaderItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="home" collection="material" />
                            </div>
                            <span slot="content">Home</span>
                        </IgrNavDrawerItem>

                        <IgrNavDrawerItem>
                            <div slot="icon">
                                <IgrIcon name="search" collection="material" />
                            </div>
                            <span slot="content">Search</span>
                        </IgrNavDrawerItem>
                    </IgrNavDrawer>
                </div>
                <div>
                    <IgrRadioGroup alignment="horizontal" style={{ marginBottom: '10px' }}>
                        <IgrRadio name="position" value="start" labelPosition="after" checked={this.state.drawerPosition === "start"} onChange={this.onRadioChange}>
                            <span>Start</span>
                        </IgrRadio>
                        <IgrRadio name="position" value="end" labelPosition="after" checked={this.state.drawerPosition === "end"} onChange={this.onRadioChange}>
                            <span>End</span>
                        </IgrRadio>
                        <IgrRadio name="position" value="top" labelPosition="after" checked={this.state.drawerPosition === "top"} onChange={this.onRadioChange}>
                            <span>Top</span>
                        </IgrRadio>
                        <IgrRadio name="position" value="bottom" labelPosition="after" checked={this.state.drawerPosition === "bottom"} onChange={this.onRadioChange}>
                            <span>Bottom</span>
                        </IgrRadio>
                    </IgrRadioGroup>
                    <IgrNavbar>
                        <div slot="start" onClick={this.onMenuIconClick}>
                            <IgrIcon name="menu" collection="material" />
                        </div>
                        <h2>{this.state.title}</h2>
                    </IgrNavbar>
                </div>
            </div>
        );
    }

    public onMenuIconClick() {
        if (this.navDrawer) {
            this.navDrawer.show();
        }
    }

    public onNavDrawerClick(e: any) {
        const drawerItem: any = e.target.closest('igc-nav-drawer-item') ??
            (e.target.parentElement?.closest('igc-nav-drawer-item') ??
                null)

        if (!drawerItem) { return; }

        drawerItem.active = true;
        const navDrawer = drawerItem.parentElement;
        Array.from(navDrawer.querySelectorAll('igc-nav-drawer-item'))
            .filter((item: any) => item !== drawerItem)
            .forEach((child: any) => child.active = false);

        this.setState({ title: drawerItem.textContent });
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
    }

    public onRadioChange(e: IgrRadioChangeEventArgs) {
        if (e.detail.checked) {
            this.setState({ drawerPosition: e.detail.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddPositionsNavbar />);
