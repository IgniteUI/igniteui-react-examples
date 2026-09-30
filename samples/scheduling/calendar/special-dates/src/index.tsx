import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

// Between the 3rd and 8th of the current month
function createRanges(): DateRangeDescriptor[] {
    const today = new Date();
    const range = [
        new Date(today.getFullYear(), today.getMonth(), 3),
        new Date(today.getFullYear(), today.getMonth(), 8)
    ];

    return [{ dateRange: range, type: DateRangeType.Between }];
}

export default function CalendarSpecialDates() {
    const [specialDates] = useState(createRanges);

    return (
        <div className="container sample">
            <IgrCalendar specialDates={specialDates} style={{width: '400px'}}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarSpecialDates/>);
