import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default class CalendarSpecialDates extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

        const today = new Date();
        const range = [
            new Date(today.getFullYear(), today.getMonth(), 3),
            new Date(today.getFullYear(), today.getMonth(), 8)
        ];

        const desc: DateRangeDescriptor = {
            dateRange: range,
            type: DateRangeType.Between,
        }
        const specialDates = [desc];

        this.state = { specialDates };
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar specialDates={this.state.specialDates} style={{width: '400px'}}/>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarSpecialDates/>);
