import ReactDOM from 'react-dom/client';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';
import './index.css';

export default function RadioStyling() {
    return (
        <div className="container sample">
            <div className="container" style={{width: "430px", height: "120px", border: "1px solid gainsboro"}}>
                <IgrRadioGroup alignment="vertical">
                    <IgrRadio name="fruit" value="apple">Apple</IgrRadio>
                    <IgrRadio name="fruit" value="banana" checked={true}>Banana</IgrRadio>
                    <IgrRadio name="fruit" value="Mango">Mango</IgrRadio>
                    <IgrRadio name="fruit" value="orange">Orange</IgrRadio>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioStyling/>);
