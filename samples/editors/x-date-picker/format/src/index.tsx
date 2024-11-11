import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // styles shared between all samples

import { IgrXDatePicker, IgrXDatePickerModule, DateFormats } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerFormat extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
        this.state = { dateFormat: DateFormats.DateLong }
    }

    public onDatePickerRef(datePicker: IgrXDatePicker){
        
        if(!datePicker) return;

        datePicker.value = new Date(Date.now());
        datePicker.dateFormat = this.state.dateFormat;
        datePicker.allowTextInput = false;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
            <div className="options horizontal">
                    <span className="options-label">Date Formats: </span>
                    <select value={this.state.dateFormat}
                        onChange={this.ondateFormatChanged}>
                        <option>DateLong</option>
                        <option>DateShort</option>
                    </select>
                </div>
                <div className="container">
                    <IgrXDatePicker ref={this.onDatePickerRef} dateFormat={this.state.dateFormat} height="60px" width="300px" />
                </div>
            </div>
        );
    }

    public ondateFormatChanged = (e: any) =>{
        const dateFormatMode = e.target.value.toString();
        this.setState({dateFormat: dateFormatMode});
    }
}

root.render(<DatePickerFormat/>);
