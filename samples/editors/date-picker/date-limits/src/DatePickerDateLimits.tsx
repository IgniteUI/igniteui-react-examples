import * as React from 'react';
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule } from 'igniteui-react-inputs';

IgrInputModule.register();
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
            <div className="igContainer">    
                <div className="igOptions">
                    <label className="igOptions-label">Minimum Date: {this.state.minDate.toLocaleString()}</label>
                    <label className="igOptions-item">Maximum Date: {this.state.maxDate.toLocaleString()}</label>
                </div>
                <div className="igComponent"> 
                              
                    <IgrDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}
