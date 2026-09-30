import { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrIcon, IgrDateTimeInput, DatePart, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const upIconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 14l5-5 5 5z"/></svg>';
const downIconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5z"/></svg>';
const clearIconText = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>';

registerIconFromText("up", upIconText, "material");
registerIconFromText("down", downIconText, "material");
registerIconFromText("clear", clearIconText, "material");

export default function DateTimeInputOverview() {
    const inputRef = useRef<IgrDateTimeInput>(null);

    return (
        <div className="container sample">
            <IgrDateTimeInput ref={inputRef}>
                <span slot="prefix" onClick={() => inputRef.current!.clear()}>
                <IgrIcon name="clear" collection="material" />
                </span>
                <span slot="suffix" onClick={() => inputRef.current!.stepUp(DatePart.Month)}>
                <IgrIcon name="up" collection="material" />
                </span>
                <span slot='suffix' onClick={() => inputRef.current!.stepDown(DatePart.Month)}>
                <IgrIcon name="down" collection="material" />
                </span> 
            </IgrDateTimeInput>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<DateTimeInputOverview/>);
