
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // styles shared between all samples

import { IgrDatePicker, IgrDatePickerModule, IgrInputModule } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();

export default class DatePickerEditing extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
    }

    public onDatePickerRef(datePicker: IgrDatePicker){
        
        if(!datePicker) return;

        datePicker.value = new Date(Date.now());
        datePicker.allowTextInput = true;
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrDatePicker ref={this.onDatePickerRef} height="60px" width="220px" />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<DatePickerEditing />, document.getElementById('root'));
