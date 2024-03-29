import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrIconModule, IgrDateTimeInput, IgrDateTimeInputModule, DatePart } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrIconModule.register();
IgrDateTimeInputModule.register();

export default class DateTimeInputMinMaxValue extends React.Component<any, any> {

    private dateTimeInput: IgrDateTimeInput;
    constructor(props: any) {
        super(props);           
        this.iconRef = this.iconRef.bind(this);     
        this.dateTimeInputRef = this.dateTimeInputRef.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrDateTimeInput ref={this.dateTimeInputRef} max={new Date(2024, 6, 25)}>
                    <span slot="prefix" key="prefix" onClick={() => this.dateTimeInput.clear()}>
                    <IgrIcon ref={this.iconRef} name="clear" collection="material" />
                    </span>
                    <span slot="suffix" key="upSuffix" onClick={() => this.dateTimeInput.stepUp(DatePart.Month)}>
                    <IgrIcon ref={this.iconRef} name="up" collection="material" />
                    </span>
                    <span slot='suffix' key="downSuffix" onClick={() => this.dateTimeInput.stepDown(DatePart.Month)}>
                    <IgrIcon ref={this.iconRef} name="down" collection="material" />
                    </span> 
                </IgrDateTimeInput>
            </div>
        );
    }

    public dateTimeInputRef(input: IgrDateTimeInput) {
        if (!input) { return; }
        input.min = new Date(2021, 0, 1);
        this.dateTimeInput = input;
    }

    public iconRef(icon: IgrIcon){
        if (!icon) { return; }
        const upIconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>';
        const downIconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>';
        const clearIconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';
        icon.registerIconFromText("up", upIconText, "material");
        icon.registerIconFromText("down", downIconText, "material");
        icon.registerIconFromText("clear", clearIconText, "material");
    }

}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DateTimeInputMinMaxValue/>);
