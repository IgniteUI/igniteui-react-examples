import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './InputSizeStyling.css';
import { IgrInput, IgrRadio, IgrRadioGroup, type IgrRadioChangeEventArgs } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

export default function InputSize() {
    const [size, setSize] = useState("medium");

    function onRadioChange(e: IgrRadioChangeEventArgs) {
        if (e.detail.checked == true) {
            setSize(e.detail.value!);
        }
    }

    return (
        <div className="container sample">
            <div id="radioGroup">
                <IgrRadioGroup alignment="horizontal">
                    <IgrRadio name="size" value="small" labelPosition="after" checked={size === "small"} onChange={onRadioChange}><span>Small</span></IgrRadio>
                    <IgrRadio name="size" value="medium" labelPosition="after" checked={size === "medium"} onChange={onRadioChange}><span>Medium</span></IgrRadio>
                    <IgrRadio name="size" value="large" labelPosition="after" checked={size === "large"} onChange={onRadioChange}><span>Large</span></IgrRadio>
                </IgrRadioGroup>
            </div>
            <IgrInput className={'size-' + size} type="text" label="Required" value="This input is required" required={true} />
            <IgrInput className={'size-' + size} type="text" label="Disabled" value="This input is disabled" disabled={true} />
            <IgrInput className={'size-' + size} type="text" label="Readonly" value="This input is readonly" readOnly={true} />
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<InputSize />);
