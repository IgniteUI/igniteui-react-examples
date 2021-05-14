import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();

export default class DatePickerOverview extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.onDatePickerRef = this.onDatePickerRef.bind(this);
    }

    public onDatePickerRef(datePicker: IgrDatePicker) {
        if (datePicker != null) {
            datePicker.value = new Date(Date.now());
        }
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="container">
                    <IgrDatePicker ref={this.onDatePickerRef} height="50px" width="220px" />
                </div>
            </div>
        );
    }
}

// rendering above class to the React DOM
ReactDOM.render(<DatePickerOverview />, document.getElementById('root'));
