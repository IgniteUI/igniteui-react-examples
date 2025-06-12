import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrRipple, IgrButton } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RippleButton() {

    return (
        <div className="container-center sample">
            <IgrButton>
                <IgrRipple></IgrRipple>
                <span>Ripple Button</span>
            </IgrButton>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RippleButton/>);
