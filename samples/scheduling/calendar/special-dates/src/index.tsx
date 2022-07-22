import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCalendar, IgrCalendarModule, IgrCalendarDate, DateRangeDescriptor, DateRangeType } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();

export default class CalendarSpecialDates extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                

        const today = new Date();

        const range = [
            new Date(today.getFullYear(), today.getMonth(), 3),
            new Date(today.getFullYear(), today.getMonth(), 8)
        ];    

        const desc: DateRangeDescriptor = new DateRangeDescriptor();
        desc.dateRange = range;
        desc.rangeType = DateRangeType.Between;
        
        const dates: DateRangeDescriptor[] = [desc];

        this.state = { specialDates: dates};        
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
ReactDOM.render(<CalendarSpecialDates/>, document.getElementById("root"));
