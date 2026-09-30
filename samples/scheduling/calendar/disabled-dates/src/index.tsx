import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

// The 3rd and 8th of the current month
function createRanges(): DateRangeDescriptor[] {
    const today = new Date();
    const range = [
        new Date(today.getFullYear(), today.getMonth(), 3),
        new Date(today.getFullYear(), today.getMonth(), 8)
    ];

    return [{ dateRange: range, type: DateRangeType.Specific }];
}

export default function CalendarDisabledDates() {
    const [disabledDates] = useState(createRanges);

    return (
        <div className="container sample">
            <IgrCalendar disabledDates={disabledDates} style={{width: '400px'}}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarDisabledDates/>);
