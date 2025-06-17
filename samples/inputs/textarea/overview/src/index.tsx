import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrTextarea } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function TextAreaOverview() {

    return (
        <div className="sample">
            <IgrTextarea rows={3} label="Tell us your story:"><span>It was a dark and stormy night...</span></IgrTextarea>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextAreaOverview/>);
