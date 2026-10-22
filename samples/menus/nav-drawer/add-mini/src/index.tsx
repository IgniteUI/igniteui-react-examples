import { useRef, type MouseEvent } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrNavDrawer, IgrNavDrawerItem, IgrIcon, IgrButton, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const searchIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>';
const homeIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/></svg>';

registerIconFromText("home", homeIcon, "material");
registerIconFromText("search", searchIcon, "material");

export default function NavDrawerAddMini() {
    const navDrawer = useRef<IgrNavDrawer>(null);

    // Mark the clicked item active and its siblings inactive
    function onNavDrawerClick(e: MouseEvent<HTMLDivElement>) {
        const drawerItem = (e.target as Element).closest<IgrNavDrawerItem>('igc-nav-drawer-item');
        if (!drawerItem) { return; }

        drawerItem.active = true;
        const parent = drawerItem.parentElement!;
        Array.from(parent.querySelectorAll<IgrNavDrawerItem>('igc-nav-drawer-item'))
            .filter(item => item !== drawerItem)
            .forEach(child => child.active = false);

        // Sync the matching item in the other variant (main <-> mini)
        const iconName = drawerItem.querySelector<IgrIcon>('igc-icon')!.name;
        const icons = document.querySelectorAll<IgrIcon>('igc-icon');

        icons.forEach(icon => {
            const parentItem = icon.parentElement!.closest<IgrNavDrawerItem>('igc-nav-drawer-item');
            if (!parentItem) { return; }

            parentItem.active = icon.name === iconName;
        });
    }

    function onButtonClick() {
        navDrawer.current?.toggle();
    }

    return (
        <div className="container sample">
            <div style={{ width: '100%' }}>
                <IgrButton onClick={onButtonClick} style={{ marginLeft: '70px' }}>
                    <span>Toggle</span>
                </IgrButton>
            </div>
            <div onClick={onNavDrawerClick}>
                <IgrNavDrawer ref={navDrawer}>
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

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<NavDrawerAddMini/>);
