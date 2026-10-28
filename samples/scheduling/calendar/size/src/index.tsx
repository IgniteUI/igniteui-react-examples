import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrCalendar, IgrRadioGroup, IgrRadio, type IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function CalendarSize() {
    const [calendarSize, setCalendarSize] = useState<string | undefined>("large");

    function onRadioChange(e: IgrRadioChangeEventArgs) {
        if (e.detail.checked) {
            setCalendarSize(e.detail.value);
        }
    }

    return (
        <div className="container sample">
            <IgrRadioGroup alignment="horizontal" style={{ marginBottom: '10px' }}>
                <IgrRadio name="size" value="small"
                    checked={calendarSize === "small"}
                    onChange={onRadioChange}>
                    <span>Small</span>
                </IgrRadio>
                <IgrRadio name="size" value="medium"
                    checked={calendarSize === "medium"}
                    onChange={onRadioChange}>
                    <span>Medium</span>
                </IgrRadio>
                <IgrRadio name="size" value="large"
                    checked={calendarSize === "large"}
                    onChange={onRadioChange}>
                    <span>Large</span>
                </IgrRadio>
            </IgrRadioGroup>
            <IgrCalendar className={'size-' + calendarSize} style={{width: '400px'}}/>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<CalendarSize/>);
