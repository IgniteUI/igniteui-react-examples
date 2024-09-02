import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrDatePicker, IgrDatePickerModule } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDatePickerModule.register();

export default function App() {
    const datePickerRef = useRef<IgrDatePicker>(null);

    return (
        <div className="container sample">
            <div className="container">
                <IgrDatePicker ref={datePickerRef} displayFormat='shortDate' inputFormat='dd/MM/yy' />
            </div>
        </div>
    );
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
