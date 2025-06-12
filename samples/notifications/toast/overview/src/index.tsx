import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrToast } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function ToastOverview() {
    const toastRef = useRef<IgrToast>(null);

    const onShowButtonClicked = () => {
        toastRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Toast</span>
            </IgrButton>

            <IgrToast ref={toastRef}>
                <span>Toast Message</span>
            </IgrToast>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ToastOverview />);