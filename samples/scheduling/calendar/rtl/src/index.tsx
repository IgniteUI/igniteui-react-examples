import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { IgrButton, IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function CalendarRtl() {
    const [direction, setDirection] = useState<'ltr' | 'rtl'>('rtl');

    const toggleDirection = () => {
        setDirection(direction === 'rtl' ? 'ltr' : 'rtl');
    };

    return (
        <div className="sample">
            <IgrButton variant="contained" onClick={toggleDirection}>Change Directionality</IgrButton>
            <div className="calendar-container" dir={direction}>
                <IgrCalendar />
            </div>
        </div>
    );
}

// rendering above component in the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarRtl />);
