import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
    IgrBanner,
    IgrButton,
    IgrCard,
    IgrIcon,
    IgrNavbar,
    IgrRipple,
    IgrToast,
    registerIconFromText,
} from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './BannerAdvancedSample.css';
import './index.css';

const wifiOnIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12.01 21.49L23.64 7c-.45-.34-4.93-4-11.64-4C5.28 3 .81 6.66.36 7l11.63 14.49.01.01.01-.01z"/></svg>';
const wifiOffIcon =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M23.64 7c-.45-.34-4.93-4-11.64-4-1.5 0-2.89.19-4.15.48L18.18 13.8 23.64 7zm-6.6 8.22L3.27 1.44 2 2.72l2.05 2.06C1.91 5.76.59 6.82.36 7l11.63 14.49.01.01.01-.01 3.9-4.86 3.32 3.32 1.27-1.27-3.46-3.46z"/></svg>';

export default function BannerAdvancedSample() {
    const bannerRef = useRef<IgrBanner>(null);
    const iconRef = useRef<IgrIcon>(null);
    const toastRef = useRef<IgrToast>(null);

    const [wifiState, setWifiState] = useState(false);
    const [iconName, setIconName] = useState("signal_wifi_off");

    useEffect(() => {
        registerIconFromText('signal_wifi_off', wifiOffIcon);
        registerIconFromText('signal_wifi_4_bar', wifiOnIcon);
        bannerRef.current.open = true;
    }, []);

    const refreshBanner = () => {
        const nextWifiState = !wifiState;
        setWifiState(nextWifiState);
        setIconName(nextWifiState ? "signal_wifi_4_bar" : "signal_wifi_off");

        if (nextWifiState) {
            bannerRef.current.hide();
        } else {
            bannerRef.current.show();
        }

        showToast();
    }

    const showToast = () => {
        toastRef.current.open = false;
        toastRef.current.show();
    }

    return (
        <div className="gallery__wrapper">
            <div className="gallery__content">
                <IgrNavbar>
                    <h1>Gallery</h1>
                    <IgrIcon ref={iconRef} name={iconName} slot="end" onClick={refreshBanner}></IgrIcon>
                </IgrNavbar>

                <IgrBanner ref={bannerRef} className="offline-banner">
                    <IgrIcon name="signal_wifi_off" slot="prefix"></IgrIcon>
                    <span>You have lost connection to the internet. This app is offline.</span>
                    <div slot="actions">
                        <IgrButton variant="flat" onClick={() => bannerRef.current.hide()}>
                            <IgrRipple />
                            <span>Continue Offline</span>
                        </IgrButton>
                        <IgrButton variant="flat" onClick={refreshBanner}>
                            <IgrRipple />
                            <span>Turn On Wifi</span>
                        </IgrButton>
                    </div>
                </IgrBanner>

                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/media/the_red_ice_forest.jpg" />
                    </div>
                </IgrCard>
                <IgrCard className="gallery__item" elevated>
                    <div>
                        <img src="https://www.infragistics.com/angular-demos-lob/assets/images/card/media/yosemite.jpg" />
                    </div>
                </IgrCard>
                <IgrToast ref={toastRef} position="middle">
                    <span>{`Wifi is now ${wifiState ? 'on' : 'off'}`}</span>
                </IgrToast>
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BannerAdvancedSample />);
