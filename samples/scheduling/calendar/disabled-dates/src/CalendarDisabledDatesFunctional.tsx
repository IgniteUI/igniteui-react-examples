import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CalendarDisabledDates() {
    // useMemo ensures the disabled-dates array is created only once (stable reference)
    const disabledDates = useMemo<DateRangeDescriptor[]>(() => {
        const today = new Date();
        const range = [
            new Date(today.getFullYear(), today.getMonth(), 3),
            new Date(today.getFullYear(), today.getMonth(), 8),
        ];
        return [{ dateRange: range, type: DateRangeType.Specific }];
    }, []);

    return (
        <div className="container sample">
            <IgrCalendar disabledDates={disabledDates} style={{ width: '400px' }} />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarDisabledDates/>);
