import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();

export default class CalendarHeader extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                     
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrCalendar selection="range" headerOrientation="vertical" style={{width: '500px'}}>
                    <span slot="title">Trip dates</span>
                </IgrCalendar>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarHeader/>);
