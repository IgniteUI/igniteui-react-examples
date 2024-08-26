import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrRadioGroup, IgrRadio, IgrCalendarModule, IgrRadioGroupModule, IgrRadioModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();

export default class CalendarSize extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
        this.onRadioChange = this.onRadioChange.bind(this);
        this.state = { calendarSize: "large"};        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{ marginBottom: '10px' }}>
                    <IgrRadio name="size" value="small" change={this.onRadioChange}>
                        <span>Small</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="medium" change={this.onRadioChange}>
                        <span>Medium</span>
                    </IgrRadio>
                    <IgrRadio name="size" value="large" checked={true} change={this.onRadioChange}>
                        <span>Large</span>
                    </IgrRadio>
                </IgrRadioGroup>

                <IgrCalendar className={'size-' + this.state.calendarSize} style={{width: '400px'}}/>                
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.checked == true) {
            this.setState({ calendarSize: e.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarSize/>);
