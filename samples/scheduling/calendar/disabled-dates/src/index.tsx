import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarModule, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();

export default class CalendarDisabledDates extends React.Component<any, any> {

    //public disabledDates: DateRangeDescriptor[];

    constructor(props: any) {
        super(props);                

        const today = new Date();
        const range = [
            new Date(today.getFullYear(), today.getMonth(), 3),
            new Date(today.getFullYear(), today.getMonth(), 8)
        ];

        const desc: DateRangeDescriptor = new DateRangeDescriptor();
        desc.dateRange = range;
        desc.rangeType = DateRangeType.Specific;
        
        const dates: DateRangeDescriptor[] = [desc];

        this.state = { disabledDates: dates};        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar disabledDates={this.state.disabledDates} style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarDisabledDates/>);
