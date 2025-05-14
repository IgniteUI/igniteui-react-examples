import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { IgrMaskInput, IgrIcon, IgrRadioGroup, IgrRadio, IgrMaskInputModule, IgrIconModule, IgrRadioGroupModule, IgrRadioModule, registerIconFromText } from 'igniteui-react';
import 'igniteui-webcomponents/themes/light/bootstrap.css';

IgrMaskInputModule.register();
IgrIconModule.register();
IgrRadioGroupModule.register();
IgrRadioModule.register();

export default class MaskInputValueModes extends React.Component<any, any> {

    public maskRef: IgrMaskInput;

    constructor(props: any) {
        super(props);
        this.onMaskRef = this.onMaskRef.bind(this);
        this.state = { value: "" };

        const fileIconText = '<svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="document"><polyline class="cls-1" points="25 9 25 29 7 29 7 3 16 3"/><line class="cls-1" x1="16" x2="25" y1="3" y2="9"/><line class="cls-1" x1="16" x2="16" y1="3" y2="9"/><line class="cls-1" x1="25" x2="16" y1="9" y2="9"/><line class="cls-1" x1="11" x2="16" y1="17" y2="17"/><line class="cls-1" x1="11" x2="20" y1="21" y2="21"/></g></svg>';
        registerIconFromText("file", fileIconText, "material");
    }

    public render(): JSX.Element {
        return (
            <div className="container sample center">
                <IgrMaskInput ref={this.onMaskRef} onInput={(e)=>this.onInputChange(e)}>
                    <span slot="prefix">
                        <IgrIcon name="file" collection="material"></IgrIcon>
                    </span>
                </IgrMaskInput>

                <div id="content" style={{width: "100%", height: "inherit"}}>
                    <IgrRadioGroup alignment="horizontal" style={{marginBottom: "10px"}}>
                        <IgrRadio name="position" value="raw" label-position="after" onChange={(e)=>this.onRadioChange(e)} checked><span>raw</span></IgrRadio>
                        <IgrRadio name="position" value="withFormatting" label-position="after" onChange={(e)=>this.onRadioChange(e)}><span>withFormatting</span></IgrRadio>
                    </IgrRadioGroup>
                    
                    <span id="value-span">Value: {this.state.value}</span>
                </div>
            </div>
        );
    }

    public onMaskRef(mask: IgrMaskInput){
        if (!mask) { return; }
        this.maskRef = mask;
    }

    public onInputChange(event: any) {
        console.log(event)
        if (this.maskRef) {
            this.setState({value: this.maskRef.value})
        }
    }

    public onRadioChange(event: any) {
        if (this.maskRef) {
            this.maskRef.valueMode = event.detail.value;
            this.setState({value: this.maskRef.value});
        }
    }
}

// rendering above class to the React DOM
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MaskInputValueModes />);
