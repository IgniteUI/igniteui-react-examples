import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrSnackbar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function SnackbarDisplayTime() {
    const snackbarRef = useRef<IgrSnackbar>(null);

    const onShowButtonClicked = () => {
        snackbarRef.current?.show();
    };

    return (
        <div className="container sample">
            <IgrButton variant="contained" onClick={onShowButtonClicked}>
                <span>Show Snackbar</span>
            </IgrButton>

            <IgrSnackbar ref={snackbarRef} displayTime={6000}>
                <span>Snackbar with different display time</span>
            </IgrSnackbar>
        </div>
    );
}

// rendering above function to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SnackbarDisplayTime />);