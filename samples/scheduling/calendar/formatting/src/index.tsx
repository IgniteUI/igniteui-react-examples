import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarFormatOptions, IgrRadioGroup, IgrRadio, IgrCalendarModule, IgrRadioGroupModule, IgrRadioModule } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrCalendarModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();

export default class CalendarFormatting extends React.Component<any, any> {

    constructor(props: any) {
        super(props);                
        this.onRadioChange = this.onRadioChange.bind(this);

        const formatOptions: IgrCalendarFormatOptions = new IgrCalendarFormatOptions();
        formatOptions.month = 'short';
        formatOptions.weekday = 'short';

        this.state = { calendarLocale: "en", calendarFormat: formatOptions };        
    }

    public render(): JSX.Element {
        return (
            <div className="container sample">
                <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}}>
                    <IgrRadio name="lang" value="en" checked={true} change={this.onRadioChange}>
                        <span>EN</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="de" change={this.onRadioChange}>
                        <span>DE</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="fr" change={this.onRadioChange}>
                        <span>FR</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="ar" change={this.onRadioChange}>
                        <span>AR</span>
                    </IgrRadio>
                    <IgrRadio name="lang" value="ja" change={this.onRadioChange}>
                        <span>JA</span>
                    </IgrRadio>                    
                </IgrRadioGroup>

                <IgrCalendar weekStart='monday' formatOptions={this.state.calendarFormat} 
                             locale={this.state.calendarLocale}
                             value={new Date()}
                             style={{width: '400px'}}/>                
            </div>
        );
    }

    public onRadioChange(e: any) {
        if (e.checked == true) {
            this.setState({ calendarLocale: e.value });
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CalendarFormatting/>);
