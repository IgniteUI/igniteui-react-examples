import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples


import { IgrDatePicker, IgrDatePickerModule } from 'igniteui-react-inputs';

IgrDatePickerModule.register();

export default class DatePickerDateLimits extends React.Component<any, any> {

    public datePicker: IgrDatePicker;

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
        this.state = { minDate:  new Date().toLocaleString(), maxDate: new Date().toLocaleString() }
    }

    public onDatePickerRef(datePicker: IgrDatePicker){
        if (!datePicker) { return; }

        this.datePicker = datePicker;
        datePicker.value = new Date(Date.now());
        let year = datePicker.value.getFullYear();
        let month = datePicker.value.getMonth();
        let lastDayOfMonth = new Date(year, month + 1, 0);
        this.datePicker.minDate = new Date(year, month, 1);
        this.datePicker.maxDate = lastDayOfMonth;
        this.datePicker.allowTextInput = false;

        this.setState({ minDate: new Date(year, month, 1), maxDate: lastDayOfMonth });
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="options">
                    <label className="options-label">Minimum Date: {this.state.minDate.toLocaleString()}</label>
                    <label className="options-label">Maximum Date: {this.state.maxDate.toLocaleString()}</label>
                </div>
                <div className="container">

                    <IgrDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}

root.render(<DatePickerDateLimits/>);
