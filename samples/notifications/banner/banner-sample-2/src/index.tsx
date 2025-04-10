import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrBannerModule,
    IgrButton,
    IgrButtonModule,
    IgrCard,
    IgrCardModule,
    IgrIcon,
    IgrIconModule,
    IgrNavbar,
    IgrNavbarModule,
    IgrRipple,
    IgrRippleModule,
  } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerSample2.css';
import './index.css';
import { registerIconFromText } from 'igniteui-webcomponents';

IgrBannerModule.register();
IgrNavbarModule.register();
IgrIconModule.register();
IgrCardModule.register();
IgrButtonModule.register();
IgrRippleModule.register();

const refreshIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>';
const wifiOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></svg>';

export default function BannerSample2() {
    const bannerRef = useRef<IgrBanner>(null);

    useEffect(() => {
        registerIconFromText('refresh', refreshIcon);
        registerIconFromText('signal_wifi_off', wifiOffIcon);
        bannerRef.current.open = true;
    }, [])

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                    <h1 key="header">Gallery</h1>
                    <IgrIcon key="icon-refresh" name="refresh" slot="end" onClick={() => bannerRef.current.show()}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                    <IgrIcon key="icon-wifi-off" name="signal_wifi_off" slot="prefix"></IgrIcon>
                    <span key="message">You have lost connection to the internet. This app is offline.</span>
                    <div key="actions"slot="actions" >
                        <IgrButton key="button" variant="flat" onClick={() => bannerRef.current.toggle()}>
                            <IgrRipple key="ripple" />
                            <span key="action-text">Toggle Banner</span>
                        </IgrButton>
                    </div>
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
root.render(<BannerSample2/>);
