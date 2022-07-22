import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrCalendar, IgrCalendarModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();

export default class CalendarOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<CalendarOverview/>, document.getElementById("root"));
