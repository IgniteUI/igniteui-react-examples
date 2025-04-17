import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDatePicker, IgrDatePickerModule } from 'igniteui-react';

import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrDatePickerModule.register();

export default function App() {
    const datePickerRef = useRef<IgrDatePicker>(null);
    const formRef = useRef<HTMLFormElement>(null);

    const [datePickerValue, setDatePickerValue] = useState<Date | null>(new Date(2024, 4, 15));
    const [formStatus, setFormStatus] = useState<string>('');

    useEffect(() => {
        const date = new Date(2024, 4, 15);
        const minDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() - 10);
        const maxDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 15);

        if (datePickerRef.current) {
            datePickerRef.current.value = date;
            datePickerRef.current.min = minDate;
            datePickerRef.current.max = maxDate;
        }

        updateFormStatus();
    }, []);

    const updateFormStatus = () => {
        if (formRef.current) {
            setFormStatus(`${formRef.current.checkValidity()}`);
        }
    };

    const handleDateChange = (e: any) => {
        const newValue = e.detail;
        setDatePickerValue(newValue);
        updateFormStatus();
    };

    const handleReset = (event: React.MouseEvent<IgrButton>) => {
        event.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
            setDatePickerValue(null);
            setFormStatus('false');
        }
    };

    return (
        <div className="container sample">
            <div className="container">
                <form ref={formRef}>
                    <div>
                        <IgrDatePicker id='datePicker' ref={datePickerRef} onChange={handleDateChange}/>
                        <IgrButton id="resetButton" onClick={handleReset}><span>Reset</span></IgrButton>
                    </div>
                </form>
                <p id="datePickerValue">
                    Date picker value: {datePickerValue ? datePickerValue.toLocaleString() : 'None'}
                </p>
                <p id="formStatus">Form valid: {formStatus}</p>
            </div>
        </div>
    );
}

// Rendering the React component to the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
