import * as React from 'react';
import "./date-picker-range.css";
import { IgrDatePicker, IgrDatePickerModule, IgrInputModule, IgrValueChangedEventArgs } from 'igniteui-react-inputs';

IgrInputModule.register();
IgrDatePickerModule.register();


export default class DatePickerRange extends React.Component<any, any> {

    public fromDatePickerRef: IgrDatePicker;
    public toDatePickerRef: IgrDatePicker;

    constructor(props: any) {
        super(props);
        this.onFromDatePickerRef = this.onFromDatePickerRef.bind(this);
        this.onToDatePickerRef = this.onToDatePickerRef.bind(this);
        this.fromDateChanged = this.fromDateChanged.bind(this);
        this.toDateChanged = this.toDateChanged.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="igContainer">
                <div className="dateRanges">
                    <span className="caption">From:  </span>
                    <IgrDatePicker ref={this.onFromDatePickerRef} height="50px" width="220px" valueChanged={this.fromDateChanged}  />
                    <span className="caption">  To:  </span>
                    <IgrDatePicker ref={this.onToDatePickerRef} height="50px" width="220px" valueChanged={this.toDateChanged}/>
                </div>
            </div>
        );
    }

    public onFromDatePickerRef(picker: IgrDatePicker) {
        this.fromDatePickerRef = picker;
        picker.value = new Date(Date.now());
        picker.allowTextInput = false;
    }

    public onToDatePickerRef(picker: IgrDatePicker) {
        this.toDatePickerRef = picker;
        picker.value = new Date(Date.now());
        picker.allowTextInput = false;
    }

    public fromDateChanged(s: IgrDatePicker, e: IgrValueChangedEventArgs) {
        let newDate = e.newValue;
        if (newDate > this.toDatePickerRef.value) {            
            this.toDatePickerRef.value = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);            
        }
    }

    public toDateChanged(s: IgrDatePicker, e: IgrValueChangedEventArgs) {
        let newDate = e.newValue;
        if (newDate < this.fromDatePickerRef.value) {            
            this.fromDatePickerRef.value = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1);            
        }
    }
}
