import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrBadge } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function BadgeStyling(): JSX.Element {
    return (
			<div className="sample">
                 <IgrBadge shape="square" />
            </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BadgeStyling/>);
