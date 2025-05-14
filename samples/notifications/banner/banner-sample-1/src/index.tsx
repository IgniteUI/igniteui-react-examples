import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrBannerModule,
    IgrCard,
    IgrCardModule,
    IgrIcon,
    IgrIconModule,
    IgrNavbar,
    IgrNavbarModule,
    registerIconFromText,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerSample1.css';
import './index.css';

IgrBannerModule.register();
IgrNavbarModule.register();
IgrIconModule.register();
IgrCardModule.register();

const refreshIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';

export default function BannerSample1() {
    const bannerRef = useRef<IgrBanner>(null);

    useEffect(() => {
        registerIconFromText('refresh', refreshIcon);
        bannerRef.current.open = true;
    }, [])

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                  <h1 key="header">Gallery</h1>
                  <IgrIcon key="icon" name="refresh" slot="end" onClick={() => bannerRef.current.show()}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                  <span key="message">You are currently offline.</span>
                </IgrBanner>
                
                <IgrCard className="gallery__item" elevated>
                    <div key="img-forest">
                        <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/media/the_red_ice_forest.jpg"/>
                    </div>
                </IgrCard>
                <IgrCard className="gallery__item" elevated>
                    <div key="img-yosemite">
                        <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/media/yosemite.jpg"/>
                    </div>
                </IgrCard>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BannerSample1/>);
