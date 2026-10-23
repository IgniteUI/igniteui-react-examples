import { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, IgrRadioGroup, IgrRadio, registerIconFromText, type IgrRadioChangeEventArgs, type MaskInputValueMode } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

const fileIconText = '<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="document"><polyline class="cls-1" points="25 9 25 29 7 29 7 3 16 3"/><line class="cls-1" x1="16" x2="25" y1="3" y2="9"/><line class="cls-1" x1="16" x2="16" y1="3" y2="9"/><line class="cls-1" x1="25" x2="16" y1="9" y2="9"/><line class="cls-1" x1="11" x2="16" y1="17" y2="17"/><line class="cls-1" x1="11" x2="20" y1="21" y2="21"/></g></svg>';
registerIconFromText("file", fileIconText, "material");

export default function MaskInputValueModes() {
    const maskRef = useRef<IgrMaskInput>(null);
    const [value, setValue] = useState("");
    const [mode, setMode] = useState<MaskInputValueMode>("raw");

    function onInputChange(event: CustomEvent<string>) {
        console.log(event)
        if (maskRef.current) {
            setValue(maskRef.current.value);
        }
    }

    function onRadioChange(event: IgrRadioChangeEventArgs) {
        const mask = maskRef.current;
        if (!mask) {
            return;
        }

        const next = event.detail.value as MaskInputValueMode;
        mask.valueMode = next;
        setMode(next);
        setValue(mask.value);
    }

    return (
        <div className="container sample center">
            <IgrMaskInput ref={maskRef} onInput={onInputChange}>
                <span slot="prefix">
                    <IgrIcon name="file" collection="material"></IgrIcon>
                </span>
            </IgrMaskInput>

            <div id="content" style={{ width: "100%", height: "inherit" }}>
                <IgrRadioGroup alignment="horizontal" style={{ marginBottom: "10px" }}>
                    <IgrRadio name="position" value="raw" label-position="after" onChange={onRadioChange} checked={mode === "raw"}><span>raw</span></IgrRadio>
                    <IgrRadio name="position" value="withFormatting" label-position="after" onChange={onRadioChange} checked={mode === "withFormatting"}><span>withFormatting</span></IgrRadio>
                </IgrRadioGroup>

                <span id="value-span">Value: {value}</span>
            </div>
        </div>
    );
}

// rendering above component to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<MaskInputValueModes />);
