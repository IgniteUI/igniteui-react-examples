import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrButton, IgrDatePicker } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function App() {
    const formRef = useRef<HTMLFormElement>(null);

    const initialDate = new Date(2024, 4, 15);
    const minDate = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate() - 10);
    const maxDate = new Date(initialDate.getFullYear(), initialDate.getMonth(), initialDate.getDate() + 15);

    const [datePickerValue, setDatePickerValue] = useState<Date | null>(initialDate);
    const [formStatus, setFormStatus] = useState<string>('');

    useEffect(() => {
        updateFormStatus();
    }, [datePickerValue]);

    const updateFormStatus = () => {
        if (formRef.current) {
            setFormStatus(`${formRef.current.checkValidity()}`);
        }
    };

    const handleDateChange = (e: any) => {
        const newValue = e.detail;
        setDatePickerValue(newValue);
    };

    const handleReset = (event: React.MouseEvent<IgrButton>) => {
        event.preventDefault();
        setDatePickerValue(null);
        setFormStatus('false');
    };

    return (
        <div className="container sample">
            <div className="container">
                <form ref={formRef}>
                    <div>
                        <IgrDatePicker id='datePicker' value={datePickerValue ?? undefined} min={minDate} max={maxDate}
                            onChange={handleDateChange}
                        />
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
