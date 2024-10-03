import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./date-picker-range.css";
import { IgrXDatePicker, IgrXDatePickerModule, IgrSelectedValueChangedEventArgs } from 'igniteui-react-inputs';

IgrXDatePickerModule.register();

export default class DatePickerRange extends React.Component<any, any> {

    public fromDatePickerRef: IgrXDatePicker;
    public toDatePickerRef: IgrXDatePicker;

    constructor(props: any) {
        super(props);
        this.onFromDatePickerRef = this.onFromDatePickerRef.bind(this);
        this.onToDatePickerRef = this.onToDatePickerRef.bind(this);
        this.fromDateChanged = this.fromDateChanged.bind(this);
        this.toDateChanged = this.toDateChanged.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <div className="dateRanges">
                    <label className="caption">From:  </label>
                    <IgrXDatePicker ref={this.onFromDatePickerRef} height="50px" width="220px" selectedValueChanged={this.fromDateChanged}  />
                    <label className="caption">  To:  </label>
                    <IgrXDatePicker ref={this.onToDatePickerRef} height="50px" width="220px" selectedValueChanged={this.toDateChanged}/>
                </div>
            </div>
        );
    }

    public onFromDatePickerRef(picker: IgrXDatePicker) {
        this.fromDatePickerRef = picker;
        if (!picker) return;

        picker.value = new Date(Date.now());
        picker.allowTextInput = false;
    }

    public onToDatePickerRef(picker: IgrXDatePicker) {
        this.toDatePickerRef = picker;
        if (!picker) return;

        picker.value = new Date(Date.now());
        picker.allowTextInput = false;
    }

    public fromDateChanged(s: IgrXDatePicker, e: IgrSelectedValueChangedEventArgs) {
        let newDate = e.newValue;
        if (this.toDatePickerRef != null && newDate > this.toDatePickerRef.value) {
            this.toDatePickerRef.value = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
        }
    }

    public toDateChanged(s: IgrXDatePicker, e: IgrSelectedValueChangedEventArgs) {
        let newDate = e.newValue;
        if (this.fromDatePickerRef != null && newDate < this.fromDatePickerRef.value) {
            this.fromDatePickerRef.value = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() - 1);
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DatePickerRange/>);
