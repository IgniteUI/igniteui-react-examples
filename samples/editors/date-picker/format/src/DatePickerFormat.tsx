import * as React from 'react';
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule, DateFormats } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();


export default class DatePickerFormat extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);                
    }    

    public onDatePickerRef(datePicker: IgrDatePicker){
        datePicker.value = new Date(Date.now());
        datePicker.dateFormat = DateFormats.DateLong;
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
