import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ToastProperties() {
    const toastRef = useRef<IgrToast>(null);

    const onToggleButtonClicked = () => {
        toastRef.current?.toggle();
    };

    const onKeepOpenButtonClicked = () => {
        if (toastRef.current) {
            toastRef.current.keepOpen = !toastRef.current.keepOpen;
        }
    };

    const onDisplayTimeButtonClicked = () => {
        if (toastRef.current) {
            toastRef.current.displayTime = 8000;
        }
    };

    return (
        <div className="container sample">
            <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '20px'}}>
                <IgrButton variant="contained" onClick={onToggleButtonClicked}>
                    <span>Toggle Toast</span>
                </IgrButton>
                <IgrButton variant="contained" onClick={onKeepOpenButtonClicked}>
                    <span>Toggle keepOpen Property</span>
                </IgrButton>
                <IgrButton variant="contained" onClick={onDisplayTimeButtonClicked}>
                    <span>Set DisplayTime to 8000</span>
                </IgrButton>
            </div>

            <IgrToast ref={toastRef}>
                <span>Toast Message</span>
            </IgrToast>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastProperties />);