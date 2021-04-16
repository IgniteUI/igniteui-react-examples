import * as React from 'react';
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule, DateFormats } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();


export default class DatePickerFormat extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);  
        this.state = { dateFormat: DateFormats.DateLong }              
    }    

    public onDatePickerRef(datePicker: IgrDatePicker){
        datePicker.value = new Date(Date.now());
        datePicker.dateFormat = this.state.dateFormat;
        datePicker.allowTextInput = false;
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">   
            <div className="igOptions">
                    <span className="igOptions-label">Date Formats: </span>
                    <select value={this.state.dateFormat}
                        onChange={this.ondateFormatChanged}>
                        <option>DateLong</option>
                        <option>DateShort</option>
                    </select>
                </div> 
                <div className="igComponent">               
                    <IgrDatePicker ref={this.onDatePickerRef} dateFormat={this.state.dateFormat} height="60px" width="220px" />
                </div>
            </div>
        );
    }

    public ondateFormatChanged = (e: any) =>{
        const dateFormatMode = e.target.value.toString();
        this.setState({dateFormat: dateFormatMode});
    }
}
