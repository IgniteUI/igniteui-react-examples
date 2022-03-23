import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // styles shared between all samples

import { IgrDatePicker, IgrDatePickerModule, DateFormats } from 'igniteui-react-inputs';

IgrDatePickerModule.register();

export default class DatePickerFormat extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
        this.state = { dateFormat: DateFormats.DateLong }
    }

    public onDatePickerRef(datePicker: IgrDatePicker){
        
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
                    <IgrDatePicker ref={this.onDatePickerRef} dateFormat={this.state.dateFormat} height="60px" width="300px" />
                </div>
            </div>
        );
    }

    public ondateFormatChanged = (e: any) =>{
        const dateFormatMode = e.target.value.toString();
        this.setState({dateFormat: dateFormatMode});
    }
}

ReactDOM.render(<DatePickerFormat />, document.getElementById('root'));
