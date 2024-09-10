import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrXDatePicker, IgrXDatePickerModule } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
    }

    public onDatePickerRef(datePicker: IgrXDatePicker) {
        if (!datePicker) return;

        datePicker.value = new Date(Date.now());
        datePicker.showTodayButton = true;
        datePicker.showWeekNumbers = true;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrXDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DatePickerOverview/>);
