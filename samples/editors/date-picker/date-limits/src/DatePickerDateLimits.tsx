import * as React from 'react';
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();


export default class DatePickerDateLimits extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);                
    }    

    public onDatePickerRef(datePicker: IgrDatePicker){
        datePicker.value = new Date(Date.now());
        let year = datePicker.value.getFullYear();
        let month = datePicker.value.getMonth();
        let lastDayOfMonth = new Date(year, month + 1, 0);
        datePicker.minDate = new Date(year, month, 1);
        datePicker.maxDate = lastDayOfMonth;
        datePicker.allowTextInput = false;
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">    
                <div className="igComponent">               
                    <IgrDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}
