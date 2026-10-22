import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CalendarMultipleMonths() {
    return (
        <div className="container sample">
            <IgrCalendar visibleMonths={2} hideOutsideDays={true} style={{width: '600px'}}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarMultipleMonths/>);
