import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarModule } from "@infragistics/igniteui-react";
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();

export default class CalendarMultipleSelection extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                    
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar selection="multiple" style={{width: '400px'}}/>                
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarMultipleSelection/>);
