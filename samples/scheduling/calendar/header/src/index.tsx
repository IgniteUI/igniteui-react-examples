import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CalendarHeader() {
    return (
        <div className="container sample">
            <IgrCalendar selection="range" headerOrientation="vertical" style={{width: '500px'}}>
                <span slot="title">Trip dates</span>
            </IgrCalendar>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarHeader/>);
