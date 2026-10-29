import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrCalendarFormatOptions, IgrRadioGroup, IgrRadio, type IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const formatOptions: IgrCalendarFormatOptions = {
    month: 'short',
    weekday: 'short',
};

export default function CalendarFormatting() {
    const [calendarLocale, setCalendarLocale] = useState<string | undefined>("en");

    function onRadioChange(e: IgrRadioChangeEventArgs) {
        if (e.detail.checked) {
            setCalendarLocale(e.detail.value);
        }
    }

    return (
        <div className="container sample">
            <IgrRadioGroup alignment="horizontal" style={{marginBottom: '10px'}} value={calendarLocale}>
                <IgrRadio name="lang" value="en" checked={true} onChange={onRadioChange}>
                    <span>EN</span>
                </IgrRadio>
                <IgrRadio name="lang" value="de" onChange={onRadioChange}>
                    <span>DE</span>
                </IgrRadio>
                <IgrRadio name="lang" value="fr" onChange={onRadioChange}>
                    <span>FR</span>
                </IgrRadio>
                <IgrRadio name="lang" value="ar" onChange={onRadioChange}>
                    <span>AR</span>
                </IgrRadio>
                <IgrRadio name="lang" value="ja" onChange={onRadioChange}>
                    <span>JA</span>
                </IgrRadio>
            </IgrRadioGroup>

            <IgrCalendar weekStart='monday' formatOptions={formatOptions}
                         locale={calendarLocale}
                         value={new Date()}
                         style={{width: '400px'}}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarFormatting/>);
