import ReactDOM from 'react-dom/client';
import './index.css';
import './RadioLabelStyles.css';
import { IgrRadio, IgrRadioGroup } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function RadioLabel() {
    return (
        <div className="container sample">
            <div className="container" style={{width: "430px", height:"60px", border: "1px solid gainsboro"}}>
                <IgrRadioGroup alignment="vertical">
                    <IgrRadio name="fruit" value="apple" labelPosition="before">Apple</IgrRadio>
                    <div className="wrapper">
                    <span id="radio-label">Orange</span>
                    <IgrRadio
                        name="fruit"
                        labelPosition="before"
                        aria-labelledby="radio-label"
                        value="orange">
                    </IgrRadio>
                    </div>
                </IgrRadioGroup>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<RadioLabel/>);
