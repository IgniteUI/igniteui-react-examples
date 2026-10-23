import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CalendarWeekNumbers() {
    return (
        <div className="container sample">
            <IgrCalendar showWeekNumbers={true} style={{width: '400px'}}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarWeekNumbers/>);
