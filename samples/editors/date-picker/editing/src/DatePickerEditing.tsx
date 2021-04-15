import * as React from 'react';
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();


export default class DatePickerEditing extends React.Component<any, any> {
    
    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);                
    }    

    public onDatePickerRef(datePicker: IgrDatePicker){
        datePicker.value = new Date(Date.now());
        datePicker.allowTextInput = true;
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
