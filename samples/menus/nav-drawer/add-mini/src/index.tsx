import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerItem, IgrIcon, IgrButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

export default class NavDrawerAddMini extends React.Component<any, any> {
    public navDrawer: IgrNavDrawer;

    constructor(props: any) {
        super(props);
        this.onNavDrawerClick = this.onNavDrawerClick.bind(this);
        this.navDrawerRef = this.navDrawerRef.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);

        registerIconFromText("home", homeIcon, "material");
        registerIconFromText("search", searchIcon, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div style={{ width: '100%' }}>
                    <IgrButton onClick={this.onButtonClick} style={{ marginLeft: '70px' }}>
                        <span>Toggle</span>
                    </IgrButton>
                </div>
                <div onClick={this.onNavDrawerClick}>
                    <IgrNavDrawer ref={this.navDrawerRef}>
                        <IgrNavDrawerItem >
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

                        <div slot="mini">
                            <IgrNavDrawerItem>
                                <div slot="icon">
                                    <IgrIcon name="home" collection="material" />
                                </div>
                            </IgrNavDrawerItem>

                            <IgrNavDrawerItem>
                                <div slot="icon">
                                    <IgrIcon name="search" collection="material" />
                                </div>
                            </IgrNavDrawerItem>
                        </div>
                    </IgrNavDrawer>
                </div>
            </div>
        );
    }

    public navDrawerRef(navDrawer: IgrNavDrawer) {
        if (!navDrawer) { return; }
        this.navDrawer = navDrawer;
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

        const iconName = drawerItem.querySelector('igc-icon')!.name;
        const icons = document.querySelectorAll(`igc-icon`);

        icons.forEach((icon: any) => {
            const parentItem = icon.parentElement!.closest('igc-nav-drawer-item') as IgrNavDrawerItem;
            if (!parentItem) { return; }

            if (icon.name === iconName) {
                parentItem.active = true;
            } else {
                parentItem.active = false;
            }
        });
    }

    public onButtonClick() {
        if (this.navDrawer) {
            this.navDrawer.toggle();
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NavDrawerAddMini />);
